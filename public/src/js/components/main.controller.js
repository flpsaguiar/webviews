/* eslint-disable */
(function(){

	angular
		.module('stocksApp')
		.controller('MainController', MainController);

	MainController.$inject = [
		'MainService',
		'$rootScope',
		'$window',
		'$state',
		'$timeout'
	];

	function MainController(MainService, $rootScope, $window, $state, $timeout) {
		var vm = this;

		console.log('init MainController >>>>');

		///////////// Public Properties
		$rootScope.$state = $state;

		///////////// Private Properties

		///////////// Public Methods

		///////////// Private Methods

		///////////// Events

		///////////// Bootstrap
		_init();

		///////////// Function Declarations
		function _init() {

		}

	}

})();
