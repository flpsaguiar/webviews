const config = {
	production: {
		API: 'https://webviews-test.herokuapp.com',
	},
	development: {
		API: 'https://webviews-test.herokuapp.com',
	},
};

module.exports = env => ({ CONFIG: config[env] });
