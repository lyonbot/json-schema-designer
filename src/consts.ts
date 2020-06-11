export const schemaTypes = [
  "null",
  "boolean",
  "object",
  "array",
  "number",
  "string",
  "integer",
] as const

export type SchemaTypeName = typeof schemaTypes[number]

export type SchemaFieldDescriptor = {
  id: string
  title: string
  hidden?: boolean
  type: 'string' | 'number' | 'boolean' | null
  default?: ((schema: any) => any) | any
}

export const primitiveDefaults = {
  string: '',
  number: 1,
  boolean: true,
}

const numberTypeSchemaFields: SchemaFieldDescriptor[] = [
  { id: "multipleOf", type: "number", title: "是X的倍数" },
  { id: "maximum", type: "number", title: "不超过" },
  { id: "exclusiveMaximum", type: "number", title: "小于" },
  { id: "minimum", type: "number", title: "不低于" },
  { id: "exclusiveMinimum", type: "number", title: "大于" },
]

export const commonSchemaFields: SchemaFieldDescriptor[] = [
  { id: "title", type: "string", title: "名称" },
  { id: "description", type: "string", title: "描述" },
]

/**
 * 可为 JSON Schema 添加 type 特定的 schemaField
 * 
 * 场景示例：例如 string 类型支持自定义的配置 foobar
 * `{ "type": "string", "foobar": "我的自定义配置" }`
 */
export const typeSchemaFields: { [type in SchemaTypeName]?: SchemaFieldDescriptor[] } = {
  string: [
    { id: "maxLength", type: "number", title: "长度上限" },
    { id: "minLength", type: "number", title: "最短长度" },
    { id: "pattern", type: "string", title: "正则校验" },
  ],
  array: [
    { id: "maxItems", type: "number", title: "个数上限" },
    { id: "minItems", type: "number", title: "个数下限" },
    { id: "uniqueItems", type: "boolean", title: "元素不重复" },
    { id: "items", type: null, title: "元素类型", hidden: true },
  ],
  object: [
    { id: "maxProperties", type: "number", title: "maxProperties" },
    { id: "minProperties", type: "number", title: "minProperties" },
    { id: "additionalProperties", type: "boolean", title: "允许增加未定义的成员" },
    { id: "required", type: null, hidden: true, title: "required" },
    { id: "properties", type: null, hidden: true, title: "properties" },
    { id: "dependentRequired", type: null, hidden: true, title: "dependentRequired" },
  ],
  number: numberTypeSchemaFields,
  integer: numberTypeSchemaFields
};

export type FormatDescriptor = {
  value: string
  label: string
  condition?: (schema: any) => boolean
}

/**
 * 可以为各种 type 配置 format 允许接受的值
 * 
 * 注意：第一个 必须是 `{ value: "", label: "默认" }`
 */
export const typeFormats: { [type in SchemaTypeName]?: FormatDescriptor[] } = {
  string: [
    { value: "", label: "常规文本" },
    { value: "date-time", label: "日期" },
    { value: "email", label: "邮箱地址" },
  ],
}
