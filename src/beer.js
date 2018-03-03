const fs = require('fs');
const isObject = require('util').isObject;
const parseString = require('xml2js').parseString;
const _ = require('underscore');

const xml = fs.readFileSync(__dirname + '/../styleguide/styleguide2008_pt.xml', 'utf8');

module.exports.getBeers = () => {
    const beers = [];
    
    parseString(xml, function (err, result) {
        const classes = result.styleguide.class.shift();
        const categories = classes.category;

        _.each(categories, (category, index) => {
            let name = (category.name.shift());
            let beer = {
                name: isObject(name) ? name['$'].translated : name
            }
            
            if (category.subcategory) {
                beer.categories = [];

                _.each(category.subcategory, (category) => {
                    let name = (category.name.shift());
                    name = isObject(name) ? name['$'].translated : name;

                    beer.categories.push(name);
                });
            }

            beers.push(beer);
        });
    });

    return beers;
};
