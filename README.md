# json-schema-designer

Online Demo: http://lyonbot.github.io/json-schema-designer/

A JSON Schema Designer Written in Vue.

## Usage

`npm install @lyonbot/json-schema-designer`

```js
import JsonSchemaDesigner from "@lyonbot/json-schema-designer";

// in your Vue component
export default {
  components: {
    JsonSchemaDesigner
  },
  data() {
    return {
      schema: {
        type: "object",
        properties: {
          name: { type: "string", title: "名字" },
          age: { type: "integer", title: "年龄", minimum: 0 },
          tags: { type: "array", items: { type: "string" } }
        },
        required: ["name", "age", "tags"]
      }
    }
  }
}
```

```xml
<json-schema-designer :value.sync="schema" />
```

Note: a customized example can be found in `src/example/index.ts` and `src/example/App.vue`

https://github.com/lyonbot/json-schema-designer

