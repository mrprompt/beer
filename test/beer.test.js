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
            const beers = this.beer.openBeer('23');

            expect(beers).to.be.an.Object;

            done();
        });

        it('openBeer() called with sub id must be return object', function (done) {
            const beers = this.beer.openBeer('23A');

            expect(beers).to.be.an.Object;
            expect(beers.id).not.to.be.an.Undefined;

            done();
        });

        it('openBeer() called with null id must be return false', function (done) {
            const beers = this.beer.openBeer(null);

            expect(beers).not.to.be.ok;
            expect(beers).to.be.false;

            done();
        });
    });
});
