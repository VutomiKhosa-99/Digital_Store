const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    

  id: {
    type: mongoose.Schema.Types.ObjectId
  },
 
    title: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      description: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      size: {
        type: Number,
        required: true,
        min: 2,
       
      },
      color: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      price: {
        type: Number,
        required: true,
    
      },
      category: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      brand: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      image: {
        type: String,
        required: true,
      },
        availableStock: {
        type: Number,
        required: true
    },
},
    { timestamps: true }
)

 


module.exports = mongoose.model('Product', productSchema)