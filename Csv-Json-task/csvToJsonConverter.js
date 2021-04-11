const csvToJson = require('csvtojson');
const fs = require('fs');
//creating CSV to JSON 

var fileName = "VirginIslands-British";
csvToJson().fromFile('./csv-countries/'+fileName+'.csv')
.then(users => {
    // if successfully converted then this will run
    fs.writeFileSync('./json-countries/'+fileName+'.json', JSON.stringify(users), 'utf-8')
})
.catch(err => {
    // if any err occures
    console.log(err);
});