export declare const schemaTypes: readonly ["null", "boolean", "object", "array", "number", "string", "integer"];
export declare type SchemaTypeName = typeof schemaTypes[number];
export declare type SchemaFieldDescriptor = {
    id: string;
    title: string;
    hidden?: boolean;
    type: 'string' | 'number' | 'boolean' | null;
    default?: ((schema: any) => any) | any;
};
export declare const primitiveDefaults: {
    string: string;
    number: number;
    boolean: boolean;
};
export declare const commonSchemaFields: SchemaFieldDescriptor[];
/**
 * 可为 JSON Schema 添加 type 特定的 schemaField
 *
 * 场景示例：例如 string 类型支持自定义的配置 foobar
 * `{ "type": "string", "foobar": "我的自定义配置" }`
 */
export declare const typeSchemaFields: {
    [type in SchemaTypeName]?: SchemaFieldDescriptor[];
};
export declare type FormatDescriptor = {
    value: string;
    label: string;
    condition?: (schema: any) => boolean;
};
/**
 * 可以为各种 type 配置 format 允许接受的值
 *
 * 注意：第一个 必须是 `{ value: "", label: "默认" }`
 */
export declare const typeFormats: {
    [type in SchemaTypeName]?: FormatDescriptor[];
};
