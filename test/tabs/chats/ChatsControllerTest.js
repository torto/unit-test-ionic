(function() {
    'use strict';

    describe('ChatsController', function() {
        jasmine.getJSONFixtures().fixturesPath = '/base/';
        var json = 'test/tabs/data-chats.json';
        var data = getJSONFixture(json);

        var $scope;

        beforeEach(module('starter.controllers'));
        beforeEach(module('starter.services'));

        beforeEach(inject(function($injector, $rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('ChatsCtrl', {
                $scope: $scope
            });
        }));


        describe('Chats initialize', function() {
            it('check variable chat', function() {
                expect($scope.chats).toEqual(data);
            });

						it('check variable remove', function() {
								$scope.remove(data[0]);
								expect($scope.chats).not.toEqual(data);
						});

        });

    });

})();
