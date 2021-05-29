'use strict'

const options = {
	headers: [
		"id",
		"title",
		"some",
	],
	content: "text",
	fileName: "title"
}

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
	const file = require('fs')
	file.writeFile(`${record[options.fileName].split(' ').join('')}.md`, content, function(err){
		if(err){
			console.log(err)
		}
	})
	return content
}

RECORDS.forEach(record => {
	console.log(saveRecords({record, options}))
})

console.log('Hey hey hey!')