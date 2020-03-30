const express = require('express');
const router = express.Router();
const request = require('request-promise');
const conf = require ('../conf');
const sql = require ('mssql');

// GET
router.post('/', async(req,res, next) =>{
  
	// get request body
	var req_body_json = await JSON.stringify(req.body);
	var req_body  = await req.body;
	//var parsedParams = JSON.parse(req_body_json);
	// post request to whatsapp
	
	// res.send(req_body_json);
	// res.send(req_body.ordernumber + ' ' + req_body.referentie);
	

	sql.connect(conf, function(err) {
        if (err) console.log(err);

        let sqlRequest = new sql.Request();

        let sqlQuery="INSERT INTO orders (ordernr, referentie) VALUES ('"+ req_body.ordernumber +"', '"+req_body.referentie+"')";

        sqlRequest.query(sqlQuery, function (err, data) {

            if (err) console.log(err)

            res.send(data);

            sql.close();
	
	
		});	
	});
  

});

module.exports = router;
