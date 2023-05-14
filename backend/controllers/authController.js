// const User = require('../models/User')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// // @desc Login
// // @route POST /auth
// // @access Public
// const login = async (req, res) => {
//     const { username, password } = req.body

//     if (!username || !password) {
//         return res.status(400).json({ message: 'All fields are required' })
//     }

//     const foundUser = await User.findOne({ username }).exec()

//     if (!foundUser || !foundUser.active) {
//         return res.status(401).json({ message: 'Unauthorized' })
//     }

//     const match = await bcrypt.compare(password, foundUser.password)

//     if (!match) return res.status(401).json({ message: 'Unauthorized' })

//     const accessToken = jwt.sign(
//         {
//             "UserInfo": {
//                 "username": foundUser.username,
//                 "roles": foundUser.roles
//             }
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         { expiresIn: '15m' }
//     )

//     const refreshToken = jwt.sign(
//         { "username": foundUser.username },
//         process.env.REFRESH_TOKEN_SECRET,
//         { expiresIn: '7d' }
//     )

//     // Create secure cookie with refresh token 
//     res.cookie('jwt', refreshToken, {
//         httpOnly: true, //accessible only by web server 
//         secure: true, //https
//         sameSite: 'None', //cross-site cookie 
//         maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
//     })

//     // Send accessToken containing username and roles 
//     res.json({ accessToken })
// }

// // @desc Refresh
// // @route GET /auth/refresh
// // @access Public - because access token has expired
// const refresh = (req, res) => {
//     const cookies = req.cookies

//     if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

//     const refreshToken = cookies.jwt

//     jwt.verify(
//         refreshToken,
//         process.env.REFRESH_TOKEN_SECRET,
//         async (err, decoded) => {
//             if (err) return res.status(403).json({ message: 'Forbidden' })

//             const foundUser = await User.findOne({ username: decoded.username }).exec()

//             if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })

//             const accessToken = jwt.sign(
//                 {
//                     "UserInfo": {
//                         "username": foundUser.username,
//                         "roles": foundUser.roles
//                     }
//                 },
//                 process.env.ACCESS_TOKEN_SECRET,
//                 { expiresIn: '15m' }
//             )

//             res.json({ accessToken })
//         }
//     )
// }

// // @desc Logout
// // @route POST /auth/logout
// // @access Public - just to clear cookie if exists
// const logout = (req, res) => {
//     const cookies = req.cookies
//     if (!cookies?.jwt) return res.sendStatus(204) //No content
//     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
//     res.json({ message: 'Cookie cleared' })
// }

// module.exports = {
//     login,
//     refresh,
//     logout
// }

const config = require("../config/auth.config");
const db = require("../models/index");
const User = db.user;
const Role = db.role;

const jwt = require("jsonwebtoken");
const  bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      
          user.roles = [role?._id]
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
      });
    });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
