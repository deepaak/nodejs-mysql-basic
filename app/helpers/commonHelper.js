const uuid = require('uuid');
const moment = require('moment');
const bcrypt = require('bcrypt');

module.exports = {
    generateUid: function (uid) {
        uid = uuid.v4();
        return uid;
    },
    currentDatetime(datetime) {
        return moment().format("YYYY-MM-DD HH:mm:ss");
    },
    encryptPassword(password) {
        const salt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(password,salt);
        return pass;
    },
    comparePassword(password,hash) {
        if( bcrypt.compareSync(password, hash) ) {
            return true;
        } else {
            return false;
        }
    },
    authToken(uid) {
        var jwt = require('jsonwebtoken');
        var token = jwt.sign({ uid: uid }, process.env.JWT_TOKEN);
        // console.log("token:",token);
        return token;
    }
}