const expect = require('expect.js');

describe('Beer', function () {
    beforeEach(function () {
        this.beer = require(__dirname + '/../src/beer');
    });

    afterEach(function () {
        this.beer = null;
    });

    describe('getBeers()', function (done) {
        it('getBeers() should return a function', function (done) {
            expect(this.beer.getBeers).to.be.a.Function;

            done();
        });

        it('getBeers() called with name must be return array', function (done) {
            const beers = this.beer.getBeers();

            expect(beers).to.be.an.Array;

            done();
        });
    });

    describe('openBeer()', function (done) {
        it('openBeer() should return a function', function (done) {
            expect(this.beer.openBeer).to.be.a.Function;

            done();
        });

        it('openBeer() called with id must be return object', function (done) {
            const beers = this.beer.openBeer('21');

            expect(beers).to.be.an.Object;

            done();
        });

        it('openBeer() called with null id must be return undefined', function (done) {
            const beers = this.beer.openBeer(null);

            expect(beers).to.be.an.Undefined;

            done();
        });
    });
});
