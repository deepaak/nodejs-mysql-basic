const conn = require('../config/db');
const Helper = require('../helpers/commonHelper');
module.exports = {
    login: (data, callback) => {

        conn.query(`SELECT * FROM users WHERE uid='${data.uid}' LIMIT 1`, (error, result, fields) => {
            result = result[0];
            var response = [];
            // console.log(Helper.comparePassword(data.password,result.password));
            if ( !result.id ) {
                response.status = 0;
                response.message = 'Invalid email or password';
            } else if ( result.password && Helper.comparePassword(data.password,result.password) ) {
                
                result.password = '';
                response = [result];
                response.status = 1;
                response.message = 'Login Success';
                var token = Helper.authToken(result.uid);
                // console.log(token);
                response.token = token;
                response.data = result;

            } else {
                response.status = 0;
                response.message = 'Invalid Password';
            }
            // console.log(response);
            callback(error, response);
        });
    }
}