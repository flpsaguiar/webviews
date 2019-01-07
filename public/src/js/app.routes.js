/* eslint-disable */
(function() {

	'use strict';

	angular
		.module('stocksApp')
		.config(routes);

	routes.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
	];

	function routes($stateProvider, $urlRouterProvider) {

		///////////// Redirects and Otherwise
		$urlRouterProvider
			.otherwise('/');

		///////////// State Configurations
		$stateProvider

		/* ==========================================================================
		= Index
		============================================================================= */
			.state('stock', {
				url: '/:id',
				templateUrl: 'templates/stock.html',
				controller: 'StockController as vm'
			})

			.state('search', {
				url: '/',
				templateUrl: 'templates/search.html',
				controller: 'SearchController as vm'
			});
	}
})();
