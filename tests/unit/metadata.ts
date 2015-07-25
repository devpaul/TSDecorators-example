import { describe, it } from 'intern!bdd';
import expect = require('intern/chai!expect');
import sinon = require('sinon');
import metadata from 'src/metadata';
import 'reflect-metadata';

@metadata('custom', 'class')
class TestClass {
    constructor(type: string) { }

    @metadata('custom', 'method')
    method(param: any) { }

    @metadata('custom', 'property')
    property: string
}

class AnotherClass {
    method() {}

    property: string
}

describe('metadata', function () {
    describe('compiler generated', function () {
        describe('class metadata', function() {
            it('collects parameter type data on the constructor (design:paramtypes)', function () {
                var paramtypes = Reflect.getMetadata('design:paramtypes', TestClass);
                expect(paramtypes).to.have.length(1);
                expect(paramtypes[0]).to.equal(String);
            });
        });

        describe('method metadata', function() {
            it('collects type information on functions', function () {
                var type = Reflect.getMetadata('design:type', TestClass.prototype, 'method');
                expect(type).to.equal(Function);
            });

            it('collects parameter information on functions', function () {
                var paramtypes = Reflect.getMetadata('design:paramtypes', TestClass.prototype, 'method');
                expect(paramtypes).to.have.length(1);
                expect(paramtypes[0]).to.equal(Object);
            });

            it('collects return type information on functions', function () {
                var returntype = Reflect.getMetadata('design:returntype', TestClass.prototype, 'method');
                expect(returntype).to.have.length(1);
                expect(returntype[0]).to.be.undefined;
            });
        });

        describe('property metadata', function () {
            it('collects type information on functions', function () {
                var type = Reflect.getMetadata('design:type', TestClass.prototype, 'property');
                expect(type).to.equal(String);
            });
        });
    });

    describe('custom metadata', function () {
        it('appends custom metadata to a class', function () {
            var metadata = Reflect.getMetadata('custom', TestClass);
            expect(metadata).to.equal('class');
        });

        it('appends custom metadata to a method', function () {
            var metadata = Reflect.getMetadata('custom', TestClass.prototype, 'method');
            expect(metadata).to.equal('method');
        });

        it('appends custom metadata to a property', function () {
            var metadata = Reflect.getMetadata('custom', TestClass.prototype, 'property');
            expect(metadata).to.equal('property');
        });
    });

    describe('class without decorators', function () {
        it('does not append metadata to classes', function () {
            var keys = Reflect.getMetadataKeys(AnotherClass);
            expect(keys).to.have.length(0);
        });

        it('does not append metadata to methods', function () {
            var keys = Reflect.getMetadataKeys(AnotherClass.prototype, 'method');
            expect(keys).to.have.length(0);
        });

        it('does not append metadata to properties', function () {
            var keys = Reflect.getMetadataKeys(AnotherClass.prototype, 'property');
            expect(keys).to.have.length(0);
        });
    });
});
