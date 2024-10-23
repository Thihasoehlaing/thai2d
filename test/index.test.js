const getStockData = require('../index'); // Update with your actual path

test('should return valid stock data or "--" values', async () => {
	const data = await getStockData();
	
	// Check if number, set, and value are defined
	expect(data).toHaveProperty('number');
	expect(data).toHaveProperty('set');
	expect(data).toHaveProperty('value');

	// Allow valid data or "--"
	if (data.set !== '--' && data.value !== '--') {
		expect(data.number).toBeGreaterThan(0); // Check if the combined number is valid
	}
	
	// Check types for set and value
	expect(typeof data.set).toBe('string');
	expect(typeof data.value).toBe('string');
}, 20000);
