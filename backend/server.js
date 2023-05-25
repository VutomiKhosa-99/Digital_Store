require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieSession = require("cookie-session");
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const db = require("./models/index")
const Role = db.role

PORT = process.env.PORT || 2000

connectDB()
app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(
    cookieSession({
      name: "bezkoder-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true
    })
  );
  

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

require("./routes/authRoutes")(app)
require("./routes/userRoutes")(app)

// app.use('/auth', require('./routes/authRoutes'))
// app.use('/users', require('./routes/userRoutes'))
app.use('/products', require('./routes/productRoutes'))


app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
})

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
  

app.use(errorHandler)

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})