let http = require('http');
let users = [{
	id: 1,
	name: 'joy haha123'
}, {
	id: 2,
	name: 'polier'
}, ]
let server = http.createServer(function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
	if (req.url === '/api/users') {
		res.end(JSON.stringify(users));
	} else {
		res.end('Not found');
	}
})

console.log('gogo');

server.listen(3000, () => {
	console.log('back_end is staring...')
})