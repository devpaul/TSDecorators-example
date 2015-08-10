/*
 * A basic pattern for mixing objects into classes
 */
interface Map {
    [key: string]: any;
}

/**
 * Mixin the parent object into the target prototype
 * @param parent the data to be mixed in
 * @return a decorator to mixin the parent
 */
export default function mixin(parent: Object) {
    function mixinObject(target: Map, parent: Map) {
        Object.getOwnPropertyNames(parent).forEach(name => {
            target[name] = parent[name];
        });
    }

    return function (target: Object): any {
        mixinObject((<any> target).prototype || target, (<any> parent).prototype || parent);
        return target;
    }
}
