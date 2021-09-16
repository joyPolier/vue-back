let http = require('http');
let users = [{
	id: 1,
	name: 'joy'
}, {
	id: 2,
	name: 'polier'
}, ]
let server = http.createServer(function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (req.url === '/api/users') {
		res.end(JSON.stringify(users));
	} else {
		res.end('Not found');
	}
})


server.listen(3000, () => {
	console.log('back_end is staring...')
})