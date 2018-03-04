const program = require('commander');
const pkg = require(__dirname + '/package.json');
const beer = require(__dirname + '/src/beer');
const _ = require('underscore');

program.version(pkg.version);

program.command('list')
    .description('list available beers')
    .action((command) => {
        const beers = beer.getBeers();

        _.each(beers, (beer, index) => {
            console.info(`#${beer.id} - ${beer.name}`);
            
            if (beer.categories) {
                _.each(beer.categories, (category) => {
                    console.log(`\t#${category.id} - ${category.name}`);
                });
            }
        });
    });

program.command('view')
    .description('view a beer')
    .action((id, command) => {
        const find = beer.openBeer(id);

        if (!find) return console.error('Beer not found :(');

        console.info(`#${find.id} - ${find.name}`);

        if (find.categories) {
            _.each(find.categories, (category) => {
                console.log(`\t#${category.id} - ${category.name}`);
            });
        }

        if (find.aroma) console.info(`\tAroma: ${find.aroma}`);

        if (find.appearance) console.info(`\tAparência: ${find.appearance}`);

        if (find.flavor) console.info(`\tSabor: ${find.flavor}`);

        if (find.mouthfeel) console.info(`\tSensação: ${find.mouthfeel}`);

        if (find.impression) console.info(`\tImpressão: ${find.impression}`);

        if (find.comments) console.info(`\tComentários: ${find.comments}`);

        if (find.ingredients) console.info(`\tIngredientes: ${find.ingredients}`);

        if (find.examples) console.info(`\tExemplos: ${find.examples}`);
    });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}