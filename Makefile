install:
	npm ci
	mise exec -- hk install --mise

develop:
	npm run start:dev

build:
	npm run build

start:
	npm run start

test:
	npm run test

test-coverage:
	npm run test-coverage

lint:
	npm run lint
	rumdl check .
	typos
	jactionlint

lint-fix:
	npm run lint-fix

typecheck:
	npm run typecheck
