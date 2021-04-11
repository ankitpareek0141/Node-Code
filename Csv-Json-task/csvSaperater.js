const csvToJson = require('csvtojson');
const fs = require('fs');
//const rmDuplicate = require('remove-duplicate-lines');
const readline = require('readline');

var file = readline.createInterface({
    input: fs.createReadStream('./IP-COUNTRY-REGION-CITY.CSV'),
    outpit: process.stdout,
    terminal: false
});
var fileName = "VirginIslands-British";
fs.writeFileSync('./csv-countries/'+fileName+'.csv', 'nFrom,nTo,sCountryCode,sCountry,sState,sCity\n', 'utf-8')

file.on('line', async (line) => {
    if(line.includes("\"VG\"")){
        line+='\n';
        await fs.appendFile('./csv-countries/'+fileName+'.csv', line, function(err){
            if(err){
                throw err;
            }
        });
    }
});