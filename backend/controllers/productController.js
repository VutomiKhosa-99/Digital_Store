const Product = require('../models/Product')


// @desc Get all products
// @route GET /products
// @access Private
const getAllProducts = async (req, res) => {
    // Get all users from MongoDB
    const productObj = await Product.find()

    // If no users 
    if (!productObj?.length) {
        return res.status(400).json({ message: 'No products found' })
    }

    res.json(productObj)
}

// @desc Create new product
// @route POST /products
// @access Private
const createNewProduct = async (req, res) => {
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
    createNewProduct
}