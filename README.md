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

### /src

This folder has example usage and some explanation surrounding the various descriptors and metdata
 
### /tests/unit

This folder has some unit tests illustrating how the different descriptors behave

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
* `grunt test-local` - runs intern's runner with local configuration
* `grunt test-proxy` - starts intern's testing proxy
* `grunt test-runner` - runs intern's runner
* `grunt ci` - runs tests in a continuous integration environment
* `grunt clean` - cleans development work
* `grunt` - compiles files
