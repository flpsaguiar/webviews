/* eslint-disable */
(function(){

	angular
		.module('stocksApp.stock')
		.service('StockService', StockService);

	StockService.$inject = [
		'$http',
		'CONFIG',
		'MainService'
	];

	function StockService($http, CONFIG, MainService) {
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
					self.stockData = {
						name: payload.data.name,
						ticket: payload.data.ticket,
						abertura: {
							presentation: MainService.formatPrice(payload.data.abertura),
							value: payload.data.abertura
						},
						ano: {
							presentation: MainService.formatPrice(payload.data.ano),
							value: payload.data.ano
						},
						dia: {
							presentation: MainService.formatPrice(payload.data.dia),
							value: payload.data.dia
						},
						fechamento: {
							presentation: MainService.formatPrice(payload.data.fechamento),
							value: payload.data.fechamento
						},
						max: {
							presentation: MainService.formatPrice(payload.data.max),
							value: payload.data.max
						},
						mes: {
							presentation: MainService.formatPrice(payload.data.mes),
							value: payload.data.mes
						},
						min: {
							presentation: MainService.formatPrice(payload.data.min),
							value: payload.data.min
						},
						preco: {
							presentation: MainService.formatPrice(payload.data.preco),
							value: payload.data.preco
						},
						semana: {
							presentation: MainService.formatPrice(payload.data.semana),
							value: payload.data.semana
						},
					};
				});
		}

	}

})();
