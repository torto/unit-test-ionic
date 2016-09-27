(function() {
  'use strict';

  describe('DashCtrl', function() {
    var $scope, $ionicPlatform, windowMock, readyCallback;

    beforeEach(function() {
      module('starter.controllers');
      module('starter.services');
      inject(function($injector, $rootScope, $controller, $window) {
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
				
      });
    });


    describe('DashCtrl initialize', function() {
      it('check variables init', function() {
        expect($scope.nome).toBeDefined();
        expect($scope.nome).toEqual("");
      });

      it('check variable nome with plguin cordova native', function() {
        expect($scope.nome).toBeDefined();
        expect($scope.nome).toEqual("");
        readyCallback();
        expect($scope.nome).toEqual("test");
      });

      it('check variable platform with Ionic method', function() {
        expect(windowMock.ionic.Platform.device().platform).toEqual("test");
      });
    });

  });

})();
