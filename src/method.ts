/**
 * A method decorator allows you to override the method descriptor by either returning a new method descriptor
 * to be used on the prototype, or amending the provided descriptor and returning that value.
 *
 * The typing for the example below is exceedingly strict. Looser typings for descriptor and return types may be used.
 *
 * @param target the method being decorated (this will be the prototype of the class)
 * @param key the name of the method being decorated
 * @param descriptor a property descriptor @see Object.getOwnPropertyDescriptor()
 * @return a descriptor to be used for property assignment
 */
export default function MethodDecorator<T extends Function>(target: Function, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
    // replace the supplied property descriptor with a hello world logger!
    return <any> {
        value: function (...args: any[]) {
            console.log('hello world');
            return descriptor.value.apply(this, args);
        }
    };
}

/* --------------------------------
// Example:
-------------------------------- */

class C {
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
