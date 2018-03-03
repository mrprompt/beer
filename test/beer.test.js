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
            this.timeout(500);
            
            const beers = this.beer.getBeers();

            expect(beers).to.be.an.Array;

            done();
        });
    });
});
