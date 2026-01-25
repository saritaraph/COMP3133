const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (data) => {

    if (data.country.toLowerCase() === 'canada') {
      fs.appendFileSync(
        'canada.txt',
        `${data.country},${data.year},${data.population}\n`
      );
    }

    if (data.country.toLowerCase() === 'united states') {
      fs.appendFileSync(
        'usa.txt',
        `${data.country},${data.year},${data.population}\n`
      );
    }

  })
  .on('end', () => {
    console.log('Canada and USA files created');
  });
