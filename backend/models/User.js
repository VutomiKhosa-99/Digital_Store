const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
    password: {
        type: String,
        required: true
    },
},
    { timestamps: true }
)

    

module.exports = mongoose.model('User', userSchema)