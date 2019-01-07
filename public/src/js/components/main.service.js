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
		self.formatPrice = formatPrice;

		///////////// Private Methods

		///////////// Events

		///////////// Bootstrap

		///////////// Function Declarations
		function formatPrice(price) {
			if(price) {
				var _formatedPrice = "";
				_formatedPrice     = price.toFixed(2).replace('.', ',');

				var _tempArr          = _formatedPrice.split(',');
				var _dotsCount        = Math.ceil( _tempArr[0].length / 3 ) - 1;
				var _positionIncrease = 0;

				if(_dotsCount > 0) {
				var _reversedArr = _tempArr[0].split('').reverse();

				for(var i = 1; i <= _dotsCount; i++) {
					_reversedArr.splice(  (i * 3 + _positionIncrease)  , 0, '.');
					_positionIncrease++;
				}

				_tempArr[0] = _reversedArr.reverse().join('');
				_formatedPrice = _tempArr.join(',');
				}

				return _formatedPrice;
			} else {
				return '0,00';
			}
		}
	}

})();
