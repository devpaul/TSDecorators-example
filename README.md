# Examples of TypeScript Decorator Usage

This repo provides example usage of TypeScript Decorators and Metadata. 
Hopefully this will provide a base for people to experiment and learn!

These examples were produced based on information presented by Wolk Software Limited's three part series on
[Decorators & metadata reflection in Typescript: From Novice to Expert](http://blog.wolksoftware.com/decorators-reflection-javascript-typescript),
the metadata [PR #2589](https://github.com/Microsoft/TypeScript/pull/2589) and rbuckton's [ES7 Reflection Prototype](https://github.com/rbuckton/ReflectDecorators).
Thanks!

## Quickstart

* `npm install`
* `grunt test-proxy`
* open [http://localhost:9000/node_modules/intern/client.html?config=_build/tests/intern-local](http://localhost:9000/node_modules/intern/client.html?config=_build/tests/intern-local)

## A Quick Tour

### /src/examples

This directory has example usage and comments about decorators and metadata. Examples show how to use the four different
decorators (class, method, parameter, and property), decorator factories used when parameters are passed in a
decorator, and custom metadata usage.

### /src/patterns

Includes examples of using decorators to facilitate mixins and dependency injection

### /tests/unit

This directory has some unit tests illustrating how the different descriptors behave

## Notes
As of version 4.2.0.beta1 `grunt-ts` doesn't yet have support for the experimentalDecorators flag
[issue #259](https://github.com/TypeStrong/grunt-ts/issues/259). We work around this by declaring
`--experimentalDecorators` in `additionalFlags`.
 
Metadata support is polyfilled using [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
More information about how TypeScript leverages it is here:

* [TypeScript PR#2589](https://github.com/Microsoft/TypeScript/pull/2589)
* [Typescript issue #2577](https://github.com/Microsoft/TypeScript/issues/2577)
 
## Grunt Commands

* `grunt lint` - validates style rules
* `grunt test` - runs intern's node client
* `grunt test-local` - runs intern's runner with local configuration (Selenium required)
* `grunt test-proxy` - starts intern's testing proxy
* `grunt test-runner` - runs intern's runner (BrowserStack/SauceLabs required)
* `grunt ci` - runs tests in a continuous integration environment
* `grunt clean` - cleans development work
* `grunt` - compiles files
