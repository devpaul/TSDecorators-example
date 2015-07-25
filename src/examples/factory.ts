/**
 * When a decorator is passed an argument they become decorator factories.
 *
 * @param name a single parameter passed to the factory
 * @return a decorator
 */
export default function factory(name: string): () => void {
    let message = 'Hello, ' + name + '. ';

    return function () {
        switch(arguments.length) {
            case 1:
                console.log(message + 'This is a class decorator');
                break;
            case 2:
                console.log(message + 'This is a property decorator');
                break;
            case 3:
                if (typeof arguments[2] === 'number')
                    console.log(message + 'This is a parameter decorator');
                else
                    console.log(message + 'This is a method decorator');
        }
    }
}

@factory('paul')
class C {
    @factory('george')
    method(@factory('ringo') param: any) {

    }

    @factory('john')
    param: string;
}
