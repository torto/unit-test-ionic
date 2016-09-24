(function() {
  'use strict';

  describe('ChatDetailCtrl', function() {
    jasmine.getJSONFixtures().fixturesPath = '/base/';
    var json = 'test/tabs/data-chats.json';
    var data = getJSONFixture(json);

    var $scope, $stateParams;

    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($injector, $rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('AccountCtrl', {
        $scope: $scope
      });
    }));

    describe('initialize', function() {
      it('check variable settings', function() {
        expect($scope.settings).toBeDefined();
        expect($scope.settings.enableFriends).toBeTruthy();
      });
    });

  });

})();
