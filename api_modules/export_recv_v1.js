// Google Music Export Receiver
// v1
//
// api/v1/export/

const api = {
	version: 1,
	url: 'export',
	method: null
}

api.method = (request, response) => {
	response.send("hello world")
}

module.exports = api;