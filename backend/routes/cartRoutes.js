const express = require('express')
const router = express.Router()
const cartController = require('../controllers/CartController')


router.route('/')
    .get(cartController.getAllUserCarts)
    .post(cartController.createNewCart)

router.route('/cart/:id')
    .get(cartController.getCartById)

    
router.route('/cart/:id')

    .delete(cartController.DeleteItemFromCart)

    

module.exports = router