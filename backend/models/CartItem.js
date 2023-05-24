const mongoose = require('mongoose')



const cartItemSchema = new mongoose.Schema({
    

  id: {
    type: mongoose.Schema.Types.ObjectId
  },
 
      cartId: {
        type: mongoose.Schema.Types.ObjectId
      },
      itemId: {
        type: mongoose.Schema.Types.ObjectId
      },
      quantity: {
        type: Number,
      },
      totalQuantityPrice: {
        type: Number,
      },
    
},
    { timestamps: true }
)

 


module.exports = mongoose.model('CartItem', cartItemSchema)