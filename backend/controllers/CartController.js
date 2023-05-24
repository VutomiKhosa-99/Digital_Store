
// @desc Get all products
// @route GET /products

const CartItem = require("../models/CartItem")

// @access Private
const getAllCartItems = async (req, res) => {
    // Get all cart items from MongoDB
    const cartItemObj = await CartItem.find()

    // If no items 
    if (!cartItemObj?.length) {
        return res.status(400).json({ message: 'No items found' })
    }

    res.json(cartItemObj)
}


// @desc Get all products
// @route GET /products
// @access Private
const DeleteFromCart = async (req, res) => {
  
  // Get all users from MongoDB
  try {
    const{id}  = req.body
    const cartItemObj = await CartItem.deleteOne(id).exec
    console.log(cartItemObj)
    if (cartItemObj.deletedCount === 1) {
        console.log("Successfully deleted one document.");
        res.status(200).json(cartItemObj);
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
   
} catch (err){
     res.status(404).json({ message: err.message})
    // res.status(404).json({ message: "No product found"})

}


res.json(this.cartItemObj)

}


// @desc Get PRODUCT BY id
// @route GET /productId
// @access Private
const getItemById = (req, res) => {
    // Get all users from MongoDB
    try {
        const _id = req.params.id
         CartItem.findById(_id)
         .then(data => {
            if(!data) res.status(404).send({ message: 'No product with id '+ _id })
            else res.status(200).send(data)
         })
    } catch (err){
     
        res.status(500).send({ message: "No product found with id: " + _id})

    }
}


// @desc Create new product
// @route POST /products
// @access Private
const createNewCart = async (req, res) => {
    const { id, userId, userEmail } = req.body

    // Confirm form
    if (id || userId || userEmail) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const cartObject = { id, userId, userEmail }

    // Create and store new cart
    const cart = await Cart.create(cartObject)

    if (cart) { //created 
        res.status(201).json({ message: 'New cart created' })
    } else {
        res.status(400).json({ message: 'Invalid product data received' })
    }
}


module.exports = {
    getAllProducts,
    createNewProduct,
    getProductById,
    DeleteProduct
}