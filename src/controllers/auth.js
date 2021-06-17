const User = require('../model/users');
const jwt = require('jsonwebtoken');

class AuthController {

    signup(req, res){
        const { firstname, lastname, email, phonenumber } = req.body;

        const newUser = new User({ firstname, lastname, email, phonenumber });

        newUser.save((error, user)=>{
            if(error){
                return res.status(400).json({
                    message: 'Error ao tentar o cadastro!'
                });
            }
            const token = jwt.sign({
                _id: user._id
            }, process.env.JWT_SECRET, {'expiresIn': '1d'});
            res.json({
                user,
                token
            });
        })
        
    }

    signin(req, res){
        const { phonenumber } = req.body;
        console.log('PHONE', phonenumber);
        User.findOne({phonenumber} )
        .exec((err, user)=>{
            console.log('USER',user);
            if(!user){
                return res.status(400).json({
                    user: null,
                    message: 'Usuario nao existe'
                });
            }
            const token = jwt.sign({
                _id: user._id
            }, process.env.JWT_SECRET, {'expiresIn': '1d'});

            return res.json({
                token,
                user
            });
        });
    }
}
module.exports = new AuthController();