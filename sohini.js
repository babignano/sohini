var engineSelections = {
		jade: require("jade")
	},
	cheerio = require("cheerio"),
	assert  = require("assert");

var Sohini = Object.create(null);

Sohini = {

	/** 
	 * Internal storage for the raw html
	 * markup rendered each time load() is called
	 */
	_renderCache: null,


	/**
	 * Stores a reference to the cheerio object
	 * with the current markup loaded
	 */
	_domCache: null,
	

	/**
	 * default options
	 */
	options: {
		engine: 'jade',
		silent: false
	},


	// Load and render and template with a context
	load: function load (template, context) {

		var engine = engineSelections[this.options.engine],
			markup,
			start,
			end;


		// mark start time of template render
		start = new Date().getTime();

		markup = engine.render(template, context);


		// mark end time
		end = new Date().getTime();

		if ( ! this.options.silent) {
			console.log("Template rendered in " + (end - start) + "ms");
		}

		this._renderCache = markup;

		this._domCache = cheerio.load(markup);

		return this._renderCache;
		
	},

	setEngine: function setEngine (engine) {

		if ( ! engine) {
			throw new Error('No engine selection passed.');
		}
	
	},

	/**
	 * Basic assert using node's built in
	 *
	 */
	assert: function assert (actual, expected, message) {
		return assert(actual, expected, message);
	},

	assertExists: function assertExists (selector, message) {

		if ( ! selector) {
			return null;
		}

		var selection = this._domCache(selector);

		return !! selection.length;
	
	},

	assertSelectorHasText: function assertSelectorHasText (selector, text) {

		if ( ! selector || ! text) {
			return null;
		}

		var selection = this._domCache(selector);

		return text === selection.text();

	}

};


module.exports = {

	create: function () {
	
		return Object.create(Sohini);
	
	}

};