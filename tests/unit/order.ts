import { describe, it } from 'intern!bdd';
import expect = require('intern/chai!expect');
import sinon = require('sinon');
import metadata from 'src/metadata';
import 'reflect-metadata';

const decorator = sinon.stub();

@decorator
class TestClass {
    @decorator
    firstProperty: string;

    @decorator
    method(@decorator param: any) { }

    @decorator
    secondProperty: string;

    @decorator
    method2(@decorator param: any) { }
}

describe('decorator ordering', function () {
    it('calls parameter decorators before it\'s respective method decorator', function () {
        expectParameterDecoratorArguments(decorator.args[1], 'method');
        expectParameterDecoratorArguments(decorator.args[4], 'method2');
    });

    it('calls class members decorators first', function () {
        expectPropertyDecoratorArguments(decorator.args[0], 'firstProperty');
        expectMethodDecoratorArguments(decorator.args[2], 'method');
        expectPropertyDecoratorArguments(decorator.args[3], 'secondProperty');
        expectMethodDecoratorArguments(decorator.args[5], 'method2');
    });

    it('calls class decorator last', function () {
        expectClassDecoratorArguments(decorator.args[6]);
    })
});

function expectMethodDecoratorArguments(args: any[], name: string) {
    expect(args).to.have.length(3);
    expect(args[2]).to.not.be.a('number');
    expect(args[1], name);
}

function expectParameterDecoratorArguments(args: any[], methodName: string) {
    expect(args).to.have.length(3);
    expect(args[2]).to.be.a('number');
    expect(args[1], methodName);
}

function expectClassDecoratorArguments(args: any[]) {
    expect(args).to.have.length(1);
}

function expectPropertyDecoratorArguments(args: any[], name: string) {
    expect(args).to.have.length(2);
    expect(args[1], name);
}
