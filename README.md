# Sohini

Unit test Javascript templates.

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

