const express = require('express');
const {auth} = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router.post('/create',
  // auth('manageUsers'), validate(userValidation.createUser),
   productController.createProduct);
  
router.get('/getProducts',
// [
  // auth('manageUsers'),
  //  validate(productValidation.getProductsVS)   ],
   productController.getProducts)

// router.route('/:userId').delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.getUser);
router.get('/details', 
// validate(userValidation.getUser),
   productController.getProduct);

router.put('/update',
//  [auth('manageUsers'), validate(userValidation.updateUser)],
   productController.updateProduct);

   router.delete('/delete',
//  [auth('manageUsers'), validate(userValidation.updateUser)],
   productController.deleteProduct);
   
   
module.exports = router;
