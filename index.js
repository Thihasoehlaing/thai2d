const puppeteer = require('puppeteer');

async function getStockData() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.set.or.th/en/market/product/stock/overview', {
		waitUntil: 'networkidle2',
	});

	// Wait for the table to load
	await page.waitForSelector('table.table-custom-field--cnc');

	// Extract data
	const data = await page.evaluate(() => {
		const rows = document.querySelectorAll('table.table-custom-field--cnc tbody tr');
		const firstRow = rows[0];

		const set = firstRow.querySelectorAll('td')[1].innerText.trim();
		const value = firstRow.querySelectorAll('td')[7].innerText.trim();

		const lastDigitSecondCol = set.slice(-1);
		const numberBeforeDecimalEighthCol = value.split('.')[0].slice(-1);
		const number = parseInt(`${lastDigitSecondCol}${numberBeforeDecimalEighthCol}`, 10);

		return {
			number,
			set,
			value
		};
	});

	await browser.close();
	return data;
}

module.exports = getStockData;