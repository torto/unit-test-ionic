(function() {
  'use strict';

  describe('DashCtrl', function() {
    var $scope, $ionicPlatform, windowMock, readyCallback;

    beforeEach(module('starter.controllers'));
    beforeEach(module('starter.services'));

    beforeEach(inject(function($injector, $rootScope, $controller, $window) {
			windowMock = $window;
			windowMock.device = {
				platform: 'test'
			};
			$scope = $rootScope.$new();
      $ionicPlatform = {
        ready: function(callback) {
          readyCallback = callback;
        }
      };

      $controller('DashCtrl', {
        $scope: $scope,
        $ionicPlatform: $ionicPlatform,
				$window: windowMock
      });
    }));


    describe('DashCtrl initialize', function() {
      it('check variable chat', function() {
				expect($scope.nome).toBeDefined();
				expect($scope.nome).toEqual("");
				readyCallback();
				expect($scope.nome).toEqual("test");
      });
    });

  });

})();
