(function() {
  'use strict';

  describe('IndexService', function() {
    jasmine.getJSONFixtures().fixturesPath = '/base/';
    var json = 'test/tabs/data-chats.json';
    var data = getJSONFixture(json);
    var service;

    beforeEach(module('starter.services'));
    beforeEach(inject(function($injector) {
      service = $injector.get('Chats');
    }));

    describe('check all methods', function() {
      it(' - ALL METHOD', function() {
        expect(service.all()).toEqual(data);
      });

      it(' - GET METHOD', function() {
        expect(service.get(0).id).toEqual(0);
        expect(service.get(0).name).toEqual('Ben Sparrow');
        expect(service.get(0).lastText).toEqual('You on your way?');
        expect(service.get(0).face).toEqual('img/ben.png');
      });

      it(' - GET METHOD without exist values', function() {
        expect(service.get(100)).toBeNull();
      });

      it(' - REMOVE METHOD', function() {
        service.remove(service.get(0));
        expect(service.all()).not.toEqual(data);
      });

    });
  });


})();
