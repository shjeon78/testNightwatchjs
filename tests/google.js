
module.exports = {
	'Demo test Google' : function (browser) {
		browser
			.url('http://www.google.com')
			.waitForElementVisible('body', 1000)
			.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
			.waitForElementVisible('button[name=btnG]', 3000)
			.click('button[name=btnG]')
			.pause(1000)
			.assert.containsText('#main', 'Night Watch')
			.end();
	}
};
