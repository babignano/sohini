SRC = $(wildcard *.js)

test: $(SRC)
	@node_modules/.bin/jshint $^

# Uncomment if your tests are in a directory named test.
# .PHONY: test