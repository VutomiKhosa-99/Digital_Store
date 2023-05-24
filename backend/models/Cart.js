const mongoose = require('mongoose')
// const CartItem = require('./CartItem')

const cartSchema = new mongoose.Schema({
    

  // id: {
  //   type: String,
  //   require:false
  // },
 
      userId: {
        type: String,
        require:false

      },
      userEmail: {
        type: String,
        require:false

      },  
      itemsArray: [{
         itemId: String ,
         quantity: Number,
         _id:false
        }]
    },

    { timestamps: true }
)

 


module.exports = mongoose.model('Cart', cartSchema)