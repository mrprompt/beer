const program = require('commander');
const pkg = require(__dirname + '/package.json');
const beer = require(__dirname + '/src/beer');
const _ = require('underscore');

program.version(pkg.version);

program.command('list')
    .description('list available beers')
    .action((command) => {
        const beers = beer.getBeers();
        
        _.each(beers, (beer) => {
            console.info(`- ${beer.name}`);

            if (beer.categories) {
                _.each(beer.categories, (category) => {
                    console.log(`\t - ${category.name}`);
                });
            }
        });
    });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}