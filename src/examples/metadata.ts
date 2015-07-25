import metadata from '../metadata';

function MetadataAwareMethodDecorator<T>(target: Function, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
    var global = (function() { return this; })();
    var hasReflect = global.hasOwnProperty('Reflect');
    console.log('has reflect: ' + hasReflect);

    // TODO this doesn't work here:
    // Reflect.defineMetadata('key2', 'value2', C.prototype, 'method');
    //
    // this does not work because C.prototype isn't available
    // So... the ES6 spec says that class definitions (unlike functions) are not hoisted
    // What's happening here is C is created inside an iife and decoration is performed by calling through
    // decorators ultimately using Object.defineProperty:
    //
    // Object.defineProperty(C.prototype, "method",
    //    __decorate([
    //        Reflect.metadata('key', 'value'),
    //        MetadataAwareMethodDecorator,
    //        __metadata('design:type', Function),
    //        __metadata('design:paramtypes', []),
    //        __metadata('design:returntype', Object)
    //    ], C.prototype, "method", Object.getOwnPropertyDescriptor(C.prototype, "method")))
    //
    // I'm not sure how I feel about this. From one point of view this could make sense as reflection wouldn't be
    // available until a class has been fully defined. I'm going to have to try using the lifecycle before
    // I really know if there is a reasonable complaint here.

    return descriptor;
}

@metadata('key:class', 'class')
class C {
    @metadata('key:method', 'method')
    method() {
        console.log('method functionality');
    }

    @metadata('key:property', 'property')
    property: string = ''
}

export default C;
