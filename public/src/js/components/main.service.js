/* eslint-disable */
(function(){

	angular
		.module('stocksApp')
		.service('MainService', MainService);

	MainService.$inject = [
		'$http',
		'CONFIG'
	];

	function MainService($http, CONFIG) {
		var self = this;

		console.log('init MainService >>>>');

		///////////// Public Properties

		///////////// Private Properties

		///////////// Public Methods

		///////////// Private Methods

		///////////// Events

		///////////// Bootstrap

		///////////// Function Declarations

	}

})();
