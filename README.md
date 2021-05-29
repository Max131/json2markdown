# json2markdown

Convert a JSON formated file into a Markdown file.

The `json` file must be an **Objects array** like this (well formated or not):

```json
[
	{
		"id": 1,
		"name": "John",
		"mail": "john@mail.com"
	},
	{
		"id": 2,
		"name": "Karl",
		"mail": "kar@marx.com"
	},
	{
		"id": 1,
		"name": "Jane",
		"mail": "jane@model.com"
	}
]
```
And you mustdefine an `options` object with the headers for the markdown front matter, the text porpertie you can save as an general content and a `fileName` value as the file name archive (must be a valid json propertie).

```javascript
const options = {
	headers: [
		"id",
		"title",
		"some",
	],
	content: "text",
	fileName: "title"
}
```