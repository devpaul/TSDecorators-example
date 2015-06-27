/**
 * A property decorator
 * @param target the target object with the property
 * @param key the name of the property being decorated
 */
function PropertyDecorator(target: Object, key: string | symbol): void {
}

/* --------------------------------
 // Example:
 -------------------------------- */
export default class C {
    @PropertyDecorator
    public publicProperty: string;

    @PropertyDecorator
    private name: string;
}

/* --------------------------------
 // This doesn't work
 -------------------------------- */
//
//var test = {
//    @PropertyDecorator
//    hello: 'world'
//}
