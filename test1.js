'use strict';

const options = {
	header: [	
						"id",
						"title",
						"slug",
						"created",
						"description",
						"author",
						"category"
					],
	content: "markdown"
}

const obj = {
	id: 1,
	name: "John",
	content: "Lorem ipsum dolor sit amet. Consectetur..."
}

function convertSplitRecords ({record, options = {}}){
	let formatedContent = '';
	if(!Object.entries(options)){
		return false;
	}

	if(options.header.length){

	}
	else{
		formatedContent = Object.stringify(record);
	}

	return formatedContent;
}

function convertRecordsToMarkdown(record){
	let content = '---\n';
	for(const key in record){
			if(record[key]!=='content')
			content += `${key}: ${record[key]}\n`;
	}
	content += `---\n\n${record.content}\n`;
	return content;
}

const fs = require('fs');
fs.writeFile('myFile.md', content(obj), err => {
	if(err){
			console.log(err);
			return;
		}
});
