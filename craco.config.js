const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@redux': path.resolve(__dirname, 'src/redux/'),
			'@context': path.resolve(__dirname, 'src/context/'),
		},
	},
};
