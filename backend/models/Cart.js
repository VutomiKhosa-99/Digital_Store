const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    

  id: {
    type: mongoose.Schema.Types.ObjectId
  },
 
      userId: {
        type: mongoose.Schema.Types.ObjectId
      },
      userEmail: {
        type: String
      },    
},
    { timestamps: true }
)

 


module.exports = mongoose.model('Cart', cartSchema)