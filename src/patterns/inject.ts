const guid = String(Date.now());
var count = 0;
var injectionMap: {
    [identifier: string]: Function
} = {};

function getIdentifier(): string {
    return String(count++);
}

export default function inject<T>(ctor: any): T {
    let paramtypes = Reflect.getMetadata('design:paramtypes', ctor);
    let params = paramtypes.map((type: Function) => {
        let id = (<any> type)[guid];
        return new (<any> injectionMap[id])(); // TODO use inject here as well
    });

    function C() {
        ctor.apply(this, params);
    }
    C.prototype = ctor.prototype;

    return new (<any> C)();
}

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
