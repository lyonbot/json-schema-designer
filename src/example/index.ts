import Vue from 'vue'
import App from './App.vue'
import { consts } from '..'

// 可以为各种 type 添加 formats

consts.typeFormats.array = [
  { label: "默认", value: "" },  // 必须保留一个空白的
  { label: "表格", value: "table" },
  { label: "树状展示", value: "tree" },
  { label: "RTX选择框(字符串数组)", value: "rtx", condition: (schema) => schema.items.type === 'string' },
]

consts.typeFormats.string.splice(
  1, 0, // insert after 1st item
  { value: "file", label: "文件" },
  { value: "image", label: "图片" },
  { value: "color", label: "颜色" },
)

// 可为 JSON Schema 添加 type 特定的 schemaField
// 例如 { "type": "string", "foobar": "我的自定义配置" }

consts.typeSchemaFields.string.push(
  { id: "foobar", title: "自定义配置foobar", type: "string", default: 'oh my god' }
)

// 也可为所有的 type 添加 schemaField

// 最后出效果

new Vue({
  el: '#app',
  render(h) { return h(App) }
})