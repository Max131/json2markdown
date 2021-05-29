'use strict';

const file = require('fs');
file.readFile('object.json', 'utf8', (err, data) => {
	if(err){
		console.log(err);
		return;
	}
	const data2 = JSON.parse(data)
	data2.forEach(record => {
		let data3 = '';
		for(const key in record){
			data3 += `${record[key]}\n`;
		}
		console.log(data3);
	})
})