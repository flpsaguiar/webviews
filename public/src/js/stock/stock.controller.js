/* eslint-disable */
(function(){

	angular
		.module('stocksApp.stock')
		.controller('StockController', StockController);

	StockController.$inject = [
		'StockService',
		'$state'
	];

	function StockController(StockService, $state) {
		var vm = this;

		console.log('init StockController >>>>');

		///////////// Public Properties
		vm.stockData = null;

		///////////// Private Properties

		///////////// Public Methods

		///////////// Private Methods

		///////////// Events

		///////////// Bootstrap
		_init();

		///////////// Function Declarations
		function _init() {
			_getStockData();
		}

		function _getStockData() {
			console.log('getStockData', $state.params.id);
			StockService
				.getStockData($state.params.id)
				.then(function() {
					console.log('THEN');
					if(StockService.stockData) {
						vm.stockData = StockService.stockData;

						console.log(vm.stockData);
					}
				});
		}


	}

})();
