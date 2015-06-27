# Examples of TypeScript Decorator Usage

This repo provides example usage of TypeScript Decorators. Hopefully this will provide a base for people to experiment
and learn!

These examples were produced based on information presented by Wolk Software Limited: 
http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
Thanks!

## Notes
As of version 4.2.0.beta1 `grunt-ts` doesn't yet have support for the experimentalDecorators flag
 @see https://github.com/TypeStrong/grunt-ts/issues/259
If you want to avoid receiving this warning you will want to compile using `tsc`
 
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
