interface Map {
    [key: string]: any;
}

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
