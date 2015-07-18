/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" />
import '../node_modules/reflect-metadata/Reflect';

function MetadataAwareMethodDecorator<T>(target: Function, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
    var hasReflect = window.hasOwnProperty('Reflect');
    console.log('has reflect: ' + hasReflect);
    return descriptor;
}

export default class C {
    @MetadataAwareMethodDecorator
    method() {
        console.log('method functionality');
    }
}

console.log('hello')
