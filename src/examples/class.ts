/**
 * The class decorator can be used to override the constructor function of a class.
 *
 * @param target the class being decorated
 * @return A new constructor producing an identical structure
 */
function MyClassDecorator<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor = function () {
        target.apply(this);
        this.hello = 'World';
    };

    newConstructor.prototype = target.prototype;

    return <any> newConstructor;
}

/**
 * Parameterized decorators are treated like decorator factories and are expected to return a decorator to be
 * applied.
 * @param args an argument for the decorator factory
 * @return the decorator to be applied
 */
function ClassDecoratorWithArguments(args: Object): ClassDecorator {
    return MyClassDecorator;
}

/* --------------------------------
 // Example:
 -------------------------------- */

@MyClassDecorator
export class C {
    constructor() {
        console.log('I am the original constructor!')
    }
}

@ClassDecoratorWithArguments({ hello: 'world'})
export class D {

}

/* --------------------------------
 // Decorators are not valid here:
 -------------------------------- */

//@ClassDecorator
//var Nope = function() {
//
//}
