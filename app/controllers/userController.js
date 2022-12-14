const conn = require('../config/db');
const User = require('../models/userModel');
module.exports = {
    userList: (req, res) => {
        User.list((error,result) => {
            if(error){
                res.send({
                    status:0,
                    message:error.sqlMessage
                });
            }
            
            res.send({
                status:1,
                result:result,
                message:''
            });
        });
    },
    userAdd: (req, res) => {
        User.add(req.body,(error,result) => {
            if(error){
                res.send({
                    status:0,
                    message:error.sqlMessage
                });
            }
            
            res.send({
                status:1,
                uid:result.uid,
                message:''
            });
        });
    }
}