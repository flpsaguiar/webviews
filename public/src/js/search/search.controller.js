/* eslint-disable */
(function(){

	angular
		.module('stocksApp.search')
		.controller('SearchController', SearchController);

	SearchController.$inject = [
		'$state'
	];

	function SearchController($state) {
		var vm = this;

		console.log('init SearchController >>>>');

		///////////// Public Properties

		///////////// Private Properties

		///////////// Public Methods
		vm.search = _search;

		///////////// Private Methods

		///////////// Events

		///////////// Bootstrap
		_init();

		///////////// Function Declarations
		function _init() {

		}

		function _search(e) {
			$state.go('stock', { id: vm.stockCode || 'PETR4' })
		}
	}

})();
