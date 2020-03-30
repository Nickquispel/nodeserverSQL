const express = require('express');
const router = express.Router();
const request = require('request-promise');
const conf = require('../conf');
const sql = require('mssql');

// GET
router.post('/', async (req, res, next) => {

	var req_body_json = await JSON.stringify(req.body);
	var req_body = await req.body;
	
	console.log(Object.keys(req_body).length);
	


	sql.connect(conf, function (err) {
		if (err) console.log(err);

		let sqlRequest = new sql.Request();
		var keys = Object.keys(req_body);
		var values = Object.values(req_body);
		var key = '';
		var value = '';
		var table = '';

		for (i = 0; i < Object.keys(req_body).length; i++) {
			if (i > 1) {
				key += ','
				value += `,`

			}

			if (i < 1) {
				table = `${values[i]}`
			} else {
				key += `${keys[i]}`
				value += `'${values[i]}'`
			}
		}



		let sqlQuery = `INSERT INTO ${table} (${key}) VALUES (${value})`;

		// res.send(sqlQuery);

		sqlRequest.query(sqlQuery, function (err, data) {

			if (err) console.log(err)

			res.send(data);

			sql.close();


		});
	});


});

module.exports = router;
