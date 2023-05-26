const { id } = require('date-fns/locale')
const Product = require('../models/Product')


// @desc Get all products
// @route GET /products
// @access Private
const getAllOrders = async (req, res) => {
    // Get all users from MongoDB
    const productObj = await Product.find()

    // If no users 
    if (!productObj?.length) {
        return res.status(400).json({ message: 'No products found' })
    }

    res.json(productObj)
}



// @desc Get PRODUCT BY id
// @route GET /productId
// @access Private
const getOrderById = (req, res) => {
    // Get all users from MongoDB
    try {
        const _id = req.params.id
         Product.findById(_id)
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
const createNewOrder = async (req, res) => {
    const { title, description, size, color, price, category, brand, image, availableStock } = req.body

    // Confirm form
    if (!title || !description || !size || !color || !price || !category || !brand || !image || !availableStock ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const productObject = { title, description, size, color, price, category, brand, image, availableStock }

    // Create and store new user 
    const product = await Product.create(productObject)

    if (product) { //created 
        res.status(201).json({ message: `New product ${title} created` })
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