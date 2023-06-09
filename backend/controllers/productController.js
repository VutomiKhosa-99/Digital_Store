const { id } = require('date-fns/locale')
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


// @desc Get all products
// @route GET /products
// @access Private
const DeleteProduct = async (req, res) => {
  
  // Get all users from MongoDB
  try {
    const{id}  = req.params.id
    const productObj = await Product.deleteOne(id).exec
    console.log(productObj)
    if (productObj.deletedCount === 1) {
        console.log("Successfully deleted one document.");
        res.status(200).json(productObj);
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
   
} catch (err){
     res.status(404).json({ message: err.message})
    // res.status(404).json({ message: "No product found"})

}


res.json(this.productObj)

}


//delete single product
const deleteOneProduct = async (req,res)=>{
    const _id = req.params.id;
    Product.findByIdAndRemove(_id)
    .then(data =>{
        if(!data){
            res.status(404).send({
                message: `Cannot delete product with id ${_id}`
            })
        }else{
            res.send({
                message: `Product Deleted`
            })
        }
        
    }).catch(err=>{
        res.status(500).send({
            message: `Cannot find product with id ${_id}`
        })
    })
}

//Update a Product by the id in the request
const updateProd = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    const _id = req.params.id;

    Product.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Survey with id=${_id}. Maybe Survey was not found!`
          });
        } else res.send({ message: "Survey was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Survey with id=" + _id
        });
      });
  };

// @desc Get PRODUCT BY id
// @route GET /productId
// @access Private
const getProductById = (req, res) => {
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
    createNewProduct,
    getProductById,
    DeleteProduct,
    deleteOneProduct,
    updateProd
}