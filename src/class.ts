/**
 * A class decorator
 * @param target the class being decorated
 * @return {TFunction} A new constructor producing an identical structure
 */
function ClassDecorator<TFunction extends Function>(target: TFunction): TFunction {
    return target;
}

function ClassDecoratorWithArguments(args: Object): ClassDecorator {
    return ClassDecorator;
}

/* --------------------------------
 // Example:
 -------------------------------- */

@ClassDecorator
export class C {

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
