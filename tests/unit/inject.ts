import { describe, it, beforeEach } from 'intern!bdd';
import expect = require('intern/chai!expect');
import inject, { map, injectable } from 'src/patterns/inject';

@map
class C { }

@injectable
class D {
    public thing: C;

    constructor(param: C) {
        this.thing = param;
    }
}

describe('inject', function () {
    it('injects', function () {
        var instance: D = inject<D>(D);
        expect(instance).to.have.property('thing');
        expect(instance.thing).to.be.an.instanceOf(C);
        expect(instance).to.be.an.instanceOf(D);
    });
});
