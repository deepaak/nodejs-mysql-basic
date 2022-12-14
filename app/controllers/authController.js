const conn = require('../config/db');
const Auth = require('../models/authModel');
module.exports = {
    login: (req, res) => {
        Auth.login(req.body,(error,result) => {
            if(error){
                res.send({
                    status:0,
                    message:error.sqlMessage
                });
            }
            
            res.send({
                status:result.status,
                result:result,
                message:result.message,
                token:result.token
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