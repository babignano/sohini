/**
 * Basic Tests For Sanity Check
 *
 */

var Sohini = require("../sohini.js");
var assert = require("assert");
var fs = require("fs");

/**
 * Helper function to read template, json and other files
 * from the local file system
 *
 * @param  filename {String} the filename relative to the test directory
 * @return contents {String}
 */
var getFile = function (filename) {

	var contents = fs.readFileSync(process.cwd() + "/test/" + filename, "utf-8");

	// if html file
	if (filename.lastIndexOf(".html") > -1) {
		
		// strip whitespace between html tags
		return contents.replace(/>\s+</g,'><');
	}

	// if json file
	if (filename.lastIndexOf(".json") > -1 ) {
		
		return JSON.parse(contents);
	
	}

	// else just return raw contents
	return contents;

};

describe("Sohini", function () {

	var instance = Sohini.create();

	it("create should create a diffent instance", function () {

		var isDifferent = Sohini.create() === Sohini.create();

		assert( ! isDifferent);

	});

	describe("render with default jade option", function () {

		it("Should render a basic jade template", function () {

			var fixture, template, result, expected;

			template = getFile("/fixtures/templates/basic.jade");
			expected = getFile("/fixtures/expected/basic.html");
			fixture  = getFile("/fixtures/contexts/basic.json");

			result = instance.load(template, fixture);	


			assert.equal(result, expected); 

		});

	});

	describe("Sohini.test.assertExists", function () {

		it("should return null on no arguments", function () {

			var actual = instance.assertExists();

			assert.equal(actual, null);

		});

		it("should return true if selector exists", function () {

			var actual = instance.assertExists("h1");

			assert.equal(actual, true);

		});

		it("should return false if selector does not exist", function () {

			var actual = instance.assertExists(".does-not-exist");

			assert.equal(actual, false);

		});

	});

	describe("Sohini.test.assertSelectorHasText", function () {

		it("should return null on no arguments", function () {

			var actual = instance.assertSelectorHasText();

			assert.equal(actual, null);

		});

		it("should return true if selector has text content", function () {

			var actual = instance.assertSelectorHasText(
				"h1",
				"The core software is built by hundreds of community volunteers"
			);

			assert.equal(actual, true);

		});

		it("should return false if selector does not have text content", function () {

			var actual = instance.assertSelectorHasText(
				"h1",
				"Headline should not be in the page"
			);

			assert.equal(actual, false);

		});

	});
});


