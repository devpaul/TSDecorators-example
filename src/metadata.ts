import 'reflect-metadata';

/**
 * TypeScript doesn't like applying metadata using typings provided by reflect-metadata so we'll retype
 * while I get this worked out.
 */
export interface Metadata {
    (metadataKey:any, metadataValue:any): ClassDecorator;
    (metadataKey:any, metadataValue:any): MethodDecorator;
    (metadataKey:any, metadataValue:any): PropertyDecorator;
    (metadataKey:any, metadataValue:any): ClassDecorator | MethodDecorator | PropertyDecorator;
}

var metadata: Metadata = <any> Reflect.metadata;

export default metadata;
