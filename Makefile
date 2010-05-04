
NODE = node

all: test

test:
	@$(NODE) spec/node.js

.PHONY: test