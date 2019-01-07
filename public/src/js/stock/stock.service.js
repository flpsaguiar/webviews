/* eslint-disable */
(function(){

	angular
		.module('stocksApp.stock')
		.service('StockService', StockService);

	StockService.$inject = [
		'$http',
		'CONFIG'
	];

	function StockService($http, CONFIG) {
		var self = this;

		console.log('init StockService >>>>');

		///////////// Public Properties

		///////////// Private Properties

		///////////// Public Methods
		self.getStockData = _getStockData;

		///////////// Private Methods

		///////////// Events

		///////////// Bootstrap

		///////////// Function Declarations
		function _getStockData(stockCode) {
			return $http
				.get(CONFIG.API + '/acoes/' + stockCode)
				.then(function(payload) {
					console.log('DONE >>>', payload);
					self.stockData = payload.data;
				});
		}

	}

})();
