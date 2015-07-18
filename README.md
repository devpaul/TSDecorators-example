# Examples of TypeScript Decorator Usage

This repo provides example usage of TypeScript Decorators. Hopefully this will provide a base for people to experiment
and learn!

These examples were produced based on information presented by Wolk Software Limited: 
http://blog.wolksoftware.com/decorators-reflection-javascript-typescript and 
the metadata PR https://github.com/Microsoft/TypeScript/pull/2589
Thanks!

## Notes
As of version 4.2.0.beta1 `grunt-ts` doesn't yet have support for the experimentalDecorators flag
 @see https://github.com/TypeStrong/grunt-ts/issues/259
 
Metadata support is added using the reflect-metadata package: https://github.com/rbuckton/ReflectDecorators
More information about how TypeScript leverages it is here:

* https://github.com/Microsoft/TypeScript/pull/2589
* https://github.com/Microsoft/TypeScript/issues/2577

Currently a WIP trying to add the Reflect polyfill. Seeing missing definitions for WeakMap, etc.
This may be relevant: http://stackoverflow.com/questions/30693416/import-external-module-ts1-5
 
## Quick Start

* `npm install`
* `grunt`

## Grunt Commands

* `grunt lint` - validates style rules
* `grunt test` - runs intern's node client
* `grunt test-local` - runs intern's runner with local configuration
* `grunt test-proxy` - starts intern's testing proxy
* `grunt test-runner` - runs intern's runner
* `grunt ci` - runs tests in a continuous integration environment
* `grunt clean` - cleans development work
* `grunt` - compiles files
