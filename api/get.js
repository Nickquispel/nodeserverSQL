const express = require('express');
const router = express.Router();
const request = require('request-promise');
const conf = require ('../conf');
const sql = require ('mssql');


// GET
router.get('/', async(req,res, next) =>{
  
    sql.connect(conf, function(err) {
        if (err) console.log(err);


        let sqlRequest = new sql.Request();

        let sqlQuery='Select ordernr From orders';

        sqlRequest.query(sqlQuery, function (err, data) {

            if (err) console.log(err)

            res.send(data);

            sql.close();
        })
    })


	// // get request body
	// var req_body_json = await JSON.stringify(req.body);
	// var req_body  = await req.body;
	// //var parsedParams = JSON.parse(req_body_json);
	// var statusMsg = '';

	// console.log("REQ BODY : " + req_body_json);
	
	// var urlext = req.get('urlext');

	// // get request to whatsapp
	// request.get({
	//   headers: {'content-type' : 'application/json'
	// 		   ,'X-Api-Key' : 'Xfu2wRswNCcII1yJ'},
	//   url:     invoiceURL + urlext,
	//   body:    req_body_json // req_body
	// }, async function(error, response, body){
	// 	var res_body  = await response.body;
	// 	console.log('response_BODY : ' + res_body);
	// 	console.log('status code : ' + response.statusCode);
	// 	console.log('status message : ' + response.statusMessage);
		
		
	// 	res.status(response.statusCode).json({
	// 	   message:response.statusMessage,
	// 	   data:res_body
	// 	});	
	// });
  

});

module.exports = router;