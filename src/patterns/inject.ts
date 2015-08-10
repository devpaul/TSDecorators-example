/*
 * Very basic dependency injection using descriptors and metadata reflection.
 *
 *
 */

/** Create pseudo-GUID to minimize collisions with the injector framework */
const guid = String(Date.now());
/** An upcounting id */
var count = 0;
/** A map of injection sources */
var injectionMap: {
    [identifier: string]: Function
} = {};

function getIdentifier(): string {
    return String(count++);
}

/**
 * Create a new instance of a function using its metadata to lookup dependencies
 * @param ctor the constructor to call
 * @return the fully constructed object
 */
export default function inject<T>(ctor: any): T {
    let paramtypes = Reflect.getMetadata('design:paramtypes', ctor);
    let params = paramtypes.map((type: Function) => {
        let id = (<any> type)[guid];
        return new (<any> injectionMap[id])(); // TODO use inject here as well
    });

    // The constructor dance
    function C() {
        ctor.apply(this, params);
    }
    C.prototype = ctor.prototype;

    return new (<any> C)();
}

/**
 * Decorator mapping a class in the injection context
 * @param type the class type we are mapping
 */
export function map(type: Function) {
    if (arguments.length > 1) {
        throw new Error('only classes can be mapped')
    }

    let id = getIdentifier();
    (<any> type)[guid] = id;
    injectionMap[id] = type;
}

/**
 * This doesn't really do anything other than trigger metadata to be generated
 */
export function injectable() { }
