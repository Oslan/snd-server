const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
    },
    phonenumber: {
        type: String,
        unique: true 
    },
    hashed: {
        type: String, 
    },
    salt: {
        type: String,
    }
}, {
    timestamps: true
});

userSchema.virtual('password')
    .set( function (password){
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed = this.encryptPassword(password);
    })
    .get(function(){
        return this._passowrd;
    });

userSchema.methods = {
    authenicate: function(plaintext){
        return this.encryptPassword(plaintext) === this.hashed;
    },
    encryptPassword: function(password){
        if(!passwod) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                         .update(password)
                         .digest('hex');
        } catch (error) {
            return '';
        }
    },
    makeSalt: function(){
        return Math.round(new Date().valueOf() * Math.random()) + '';
    }
}

module.exports = mongoose.model('User', userSchema);