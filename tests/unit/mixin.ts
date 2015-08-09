import { describe, it, beforeEach } from 'intern!bdd';
import expect = require('intern/chai!expect');
import mixin from 'src/patterns/mixin'

class C {
    name: string  = 'unassgined';

    constructor() {
        this.name = 'bob';
    }
}

@mixin(C)
@mixin({
    test: 'potato'
})
class D implements C {
    name: string;
    test: string;
    public id: number = null;
}

describe('mixin', function() {
    it('creates a class that is an instance of the original', function () {
        var instance = new D();
        expect(instance).is.an.instanceOf(D);
    });

    it('has a name property', function () {
        var instance = new D();
        expect(instance.name).to.equal(C.prototype.name)
    });

    it('has a test property', function () {
        var instance = new D();
        expect(instance.test).to.equal('potato')
    });

    it('has an id property', function () {
        var instance = new D();
        expect(instance.id).to.be.null;
    });
});
