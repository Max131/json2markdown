'use strict'

let fileContent
const file2Read = 'jsonFile.json'
// const options = {
// 	headers: [
// 		"id",
// 		"title",
// 		"some",
// 	],
// 	content: "text",
// 	fileName: "title"
// }
const options = {
	headers: ["id", "name"],
	content: "mail",
	fileName: "id"
}

const file = require('fs')

file.readFile(file2Read, 'utf8', function(err, data){
	if(err){
		console.log(err)
		exit
	}
	// console.log(data)
	fileContent = JSON.parse(data)
	// console.log(data)	

	fileContent.forEach(record => {
		const response = saveRecords({record, options})
		console.log( response?
			`OK: The file ${options.fileName.split(' ').join('')} has been saved`:
			`Error: On the file ${options.fileName.split(' ').join('')}`
			)	
	})

})

const RECORDS = [
	{
		"id": 1,
		"title": "One",
		"some": "Lorem",
		"text": "# Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do **eiusmod**"
	},
	{
		"id": 2,
		"title": "Two",
		"some": "Ipsum",
		"text": "##Ut enim ad minim veniam,\n>quis nostrud exercitation ullamco laboris"
	},
	{
		"id": 3,
		"title": "Three",
		"some": "Dolor",
		"text": "# Duis aute irure dolor\n\nin reprehenderit *in voluptate* velit __esse cillum dolore__ eu fugiat nulla pariatur."
	}
]

function saveRecords({record, options={}}){
	let content = '---\n'
	if(options.headers.length){
		for(const value of options.headers){
			content += `${value}: ${record[value]}\n`;
		}
		content += '---\n'
	}
	else{
		content += '---\n'
	}
	content += `\n${record[options.content]}\n`;
	const file2Write = require('fs')
	file2Write.writeFile(`${record[options.fileName]}.md`, content, function(err){
		if(err){
			console.log(err)
			return err
		}
	})
	return true
}

console.log('Hey hey hey!')