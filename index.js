const program = require('commander');
const pkg = require(__dirname + '/package.json');
const beer = require(__dirname + '/src/beer');
const inspect = require('util').inspect;

program.version(pkg.version);

program.command('list')
    .description('list available beers')
    .action((command) => {
        const beers = beer.getBeers();
        
        console.log(inspect(beers, { colors: true, depth: Infinity }));
    });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}