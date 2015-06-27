/**
 * A parameter decorator
 *
 * "A parameter decorator is not supposed to modify the behavior of a constructor, method or property.
 * A parameter decorator should only be used to generate some sort of metadata" - Wolk Software; part 3
 *
 * @param target The prototype of the class being decorated
 * @param key the name of the method that contains the parameter being decorated
 * @param index the index of the parameter being decorated
 */
function ParameterDecorator(target: Object, key: string | symbol, index: number): void {
}

/* --------------------------------
 // Example:
 -------------------------------- */

export default class C {
    example1(@ParameterDecorator test: any) {
        return test
    }

    example2(@ParameterDecorator ...rest: number[]) {

    }
}

/* --------------------------------
 // Decorators are not valid here:
 -------------------------------- */
//
//function example3(@ParameterDecorator nope: any) {
//
//}
