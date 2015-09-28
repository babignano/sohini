# Sohini

Unit test Javascript templates.

![NPM Dependencies Status](https://david-dm.org/babignano/sohini.svg "NPM Dependencies Status")
![Travis CI Build Status](https://api.travis-ci.org/babignano/sohini.svg "Travis CI Build Status")
[![Coverage Status](https://coveralls.io/repos/babignano/sohini/badge.svg?branch=master&service=github)](https://coveralls.io/github/babignano/sohini?branch=master)

## Purpose

- Have a play at creating something to help other template developers.
- Learn a about v8 profiling.

## How To Use

### Basic Example

	// Load new instance of Sohini
	var sohini = require('sohini').create();

	// Read template partial
	var template = fs.readFileSync(process.cwd() + "/template.jade", "utf-8");

	// Load template into instance with context
	sohini.load(template, {
		foo: "bar"
	});

	// Perform a selector test
	// returns true
	var actual = instance.assertExists('h1.main-heading'); 



