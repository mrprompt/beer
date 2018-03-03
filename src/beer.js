const fs = require('fs');
const isObject = require('util').isObject;
const parseString = require('xml2js').parseString;
const _ = require('underscore');

const xml = fs.readFileSync(__dirname + '/../styleguide/styleguide2008_pt.xml', 'utf8');

function readFile(callback) {
    parseString(xml, function (err, result) {
        const classes = result.styleguide.class.shift();
        const categories = classes.category;

        callback(categories);
    });
}

module.exports.getBeers = () => {
    const beers = [];
    
    readFile((categories) => {
        _.each(categories, (category) => {
            let name = (category.name.shift());
            let beer = {
                name: isObject(name) ? name['$'].translated : name,
                id: category['$'].id
            }
            
            if (category.subcategory) {
                beer.categories = [];

                _.each(category.subcategory, (category) => {
                    let name = (category.name.shift());
                    name = isObject(name) ? name['$'].translated : name;

                    beer.categories.push({ name, id: category['$'].id });
                });
            }

            beers.push(beer);
        });
    });

    return beers;
};

module.exports.openBeer = (beerId) => {
    const beers = this.getBeers();

    return _.find(beers, {id: beerId });
};