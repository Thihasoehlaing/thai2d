# thai2d-crawler
thai2d-crawler is an npm package that uses Puppeteer to scrape stock data from the Thai Stock Exchange website. It extracts the SET index and total value from the site and provides useful numerical insights by combining the last digit of the index and the number before the decimal in the total value.

## Installation
```bash
npm install thai2d-crawler
```

## Usage
```javascript
const getStockData = require('thai2d-crawler');

getStockData().then(data => {
  console.log(data);  // { number: 24, set: '1,470.32', value: '57,044.51' }
}).catch(error => console.error(error));
```# thai2d
# thai2d
