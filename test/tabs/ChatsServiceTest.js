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
				var elem = service.get(0);
        expect(elem.id).toEqual(0);
        expect(elem.name).toEqual('Ben Sparrow');
        expect(elem.lastText).toEqual('You on your way?');
        expect(elem.face).toEqual('img/ben.png');
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
