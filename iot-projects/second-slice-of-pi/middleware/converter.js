const json2html = require('node-json2html');

module.exports = function() {
	return function (req, res, next) {
		// TODO 2: Create the converter function
		if (req.result) {
<<<<<<< HEAD
		if (req.accepts('html')){
			let transform = {'<>': 'div', 'html': [
				{'<>': 'p', 'html': [
					{'<>': 'b', 'html': 'name: '},
					{'<>': 'p', 'html': '${name}'}
				]},
				{'<>': 'p', 'html': [
					{'<>': 'b', 'html': 'description: '},
					{'<>': 'p', 'html': '${description}'}
				]},
				{'<>': 'p', 'html': [
					{'<>': 'b', 'html': 'value '},
					{'<>': 'p', 'html': '${value}'}
				]}
			]};
			var html = json2html.transform(req.result,transform);
			res.send(html);
		}
		else{	
			res.send(req.result);
		}

	}
	else{
		next();
	}
=======
			if (req.accepts('html')){
				let transform = {'<>': 'div', 'html': [
					{'<>': 'p', 'html': [
						{'<>': 'b', 'html': 'name: '},
						{'<>': 'p', 'html': '${name}'}
					]},
					{'<>': 'p', 'html': [
						{'<>': 'b', 'html': 'description: '},
						{'<>': 'p', 'html': '${description}'}
					]},
					{'<>': 'p', 'html': [
						{'<>': 'b', 'html': 'value '},
						{'<>': 'p', 'html': '${value}'}
					]}
				]};
				var html = json2html.transform(req.result,transform);
				res.send(html);
			}
			else{	
				res.send(req.result);
			}

		}
		else{
			next();
			}
	};
>>>>>>> b1b1d0176054b1a18d046e5a4f967b32a61a0a8f
};
