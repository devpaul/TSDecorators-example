/**
 * A method decorator
 * @param target the method being decorated
 * @param key the name of the method being decorated
 * @param descriptor a property descriptor @see Object.getOwnPropertyDescriptor()
 */
function MethodDecorator<T>(target: Function, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
    return descriptor;
}

/* --------------------------------
// Example:
-------------------------------- */

export default class C {
    @MethodDecorator
    method() {
        console.log('hello world');
    }
}


/* --------------------------------
// Decorators are not valid here:
 -------------------------------- */
//
//@MethodDecorator
//function decorating_a_function() {
//}
//
//@MethodDecorator
//var test = function() {
//};
