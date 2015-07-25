import { describe, it, beforeEach } from 'intern!bdd';
import expect = require('intern/chai!expect');
import sinon = require('sinon');

const stubMap: {
    [ key: string ]: Sinon.SinonSpy
} = { };

// Create a decorator on the fly that will change the method descriptor with a Sinon stub
// and hold it in stubMap for easy access
const decorator = sinon.spy(function (target: Function, key: string, descriptor: any): any {
    descriptor.value = stubMap[key] = sinon.stub();
    return descriptor
});

// Classes are top-level items so we are constructing the TestClass outside of our tests;
// They are also not hoisted
class TestClass {
    @decorator
    method() {
        throw new Error('this method should be replaced with a stub');
    }

    @decorator
    anotherMethod() {
        throw new Error('this method should be replaced with a stub');
    }
}

describe('method decorators', function () {
    describe('decorator', function () {
        it('runs once for each method', function () {
            expect(decorator.callCount).to.equal(2);
        });

        it('updates the descriptor', function () {
            let descriptor = Object.getOwnPropertyDescriptor(TestClass.prototype, 'method');
            expect(descriptor.value).to.equal(stubMap['method']);
        });

        it('provides the prototype as the first argument', function () {
            let firstArgument = decorator.firstCall.args[0];
            expect(firstArgument).to.equal(TestClass.prototype);
        });

        it('provides the name of the method as the second argument', function () {
            let secondArgument = decorator.firstCall.args[1];
            expect(secondArgument).to.equal('method');
        });

        it('provides the descriptor as the third argument', function () {
            let thirdArgument = decorator.firstCall.args[2];
            let expected = Object.getOwnPropertyDescriptor(TestClass.prototype, 'method');
            // This comparison works because we returned the passed descriptor in the decorator
            // had we returned a new descriptor it would not have been deeply equal
            expect(thirdArgument).to.deep.equal(expected);
        });
    });

    describe('descriptor replacement', function () {
        beforeEach(function () {
            for (let key in stubMap) {
                stubMap[key].reset();
            }
        });

        it('uses the replacement stub', function () {
            expect(stubMap['method'].callCount).to.equal(0);
            var target = new TestClass();
            target.method();
            expect(stubMap['method'].callCount).to.equal(1);
        });
    });
});
