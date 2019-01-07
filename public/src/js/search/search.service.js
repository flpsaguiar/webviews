/* eslint-disable */
(function(){

	angular
		.module('stocksApp.search')
		.service('SearchService', SearchService);

	SearchService.$inject = [
		'$http',
		'CONFIG'
	];

	function SearchService($http, CONFIG) {
		var self = this;

		console.log('init SearchService >>>>');

		///////////// Public Properties

		///////////// Private Properties

		///////////// Public Methods

		///////////// Private Methods

		///////////// Events

		///////////// Bootstrap

		///////////// Function Declarations

	}

})();
