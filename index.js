'use strict';

const obj = {
		name: "John Doe",
		email: "john@doe.com",
		age: 45,
		id: 1
};

function message(obj){
		let msg = '';
		const x = [...Object.keys(obj)]
		return msg = x;
};

let fs = require('fs');
fs.writeFile('myJsFile.txt', message(obj), function(err){
		if (err){
				return console.log(err);
		}
		console.log('Done!');
})

console.log('Hello world');

