const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: false
       
      },
      lastName: {
        type: String,
        required: false
        
      },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
      },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ["Employee"]
    }
    
},
    { timestamps: true }
)


module.exports = mongoose.model('User', userSchema)