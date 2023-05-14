// const loginLimiter = require('../middleware/loginLimiter')

// router.route('/')
//     .post(loginLimiter, authController.login)

// router.route('/refresh')
//     .get(authController.refresh)

// router.route('/logout')
//     .post(authController.logout)

// module.exports = router

const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const controller = require('../controllers/authController')
const verify = require('../middleware/verifyJWT')

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, Content-Type, Accept"
//     );
//     next();
//   });
//     router.route('/signup')
//         .post(
//             [
//             verify.checkDuplicateUsernameOrEmail,
//             verify.checkRolesExisted
//             ],
//             authController.signup
//         );
//     router.route('/signin')
//         .post(authController.signin)
    
//     router.route('/signout')
//         .post(authController.signout)

// module.exports = router

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/auth/signup",
      [
          verify.checkDuplicateUsernameOrEmail,
          verify.checkRolesExisted
      ],
      controller.signup
    );
  
    app.post("/api/auth/signin", controller.signin);
  
    app.post("/api/auth/signout", controller.signout);
  };

