const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    it('should call the spy', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });
});
