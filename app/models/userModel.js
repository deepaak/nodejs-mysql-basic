const conn = require('../config/db');
const Helper = require('../helpers/commonHelper');
module.exports = {
    list: (callback) => {
        conn.query(`SELECT * FROM users`, (error, result, fields) => {
            callback(error, result);
        });
    },
    add: (data, callback) => {
        var uid = Helper.generateUid(uid);
        var date = Helper.currentDatetime(date);
        var encryptPass = Helper.encryptPassword(data.password);

        conn.query(`INSERT INTO users (uid,fname,lname,password,logdate) VALUES ('${uid}','${data.fname}','${data.lname}','${encryptPass}','${date}')`, (error, result, fields) => {
            result.uid = uid;
            callback(error, result);
            // insertId
        });
    },
    getUserByEmail: (data, callback) => {
        conn.query(`SELECT * FROM users WHERE email='${data.email}'`, (error, result, fields) => {
            callback(error, result);
            // insertId
        });
    }
}