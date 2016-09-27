(function() {
    'use strict';

    describe('ChatDetailCtrl', function() {
        jasmine.getJSONFixtures().fixturesPath = '/base/';
        var json = 'test/tabs/data-chats.json';
        var data = getJSONFixture(json);

        var $scope, $stateParams;

        beforeEach(module('starter.controllers'));
        beforeEach(module('starter.services'));

        beforeEach(inject(function($injector, $rootScope, $controller) {
            $scope = $rootScope.$new();
						$stateParams = {
							chatId: 1
						};
            $controller('ChatDetailCtrl', {
                $scope: $scope,
								$stateParams: $stateParams
            });
        }));


        describe('Chats initialize', function() {
            it('check variable chat', function() {
                expect($scope.chat).toEqual(data[1]);
            });
        });

    });

})();
