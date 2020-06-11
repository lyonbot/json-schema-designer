
<template>
  <div
    class="jsdSchemaField"
    :data-schema-field="descriptor.id"
  >
    <label
      class="jsdSchemaField_title"
      :for="compId"
    >
      {{ descriptor.title }}：
    </label>

    <div
      class="jsdSchemaField_valueText"
      v-if="!showInput"
    >
      {{ valueText }}
    </div>

    <template v-else>
      <input
        type="text"
        class="jsdSchemaField_input"
        :id="compId"
        v-if="descriptor.type === 'string'"
        v-model="value"
      >

      <input
        type="number"
        class="jsdSchemaField_input"
        :id="compId"
        v-if="descriptor.type === 'number' || descriptor.type === 'integer'"
        v-model.number="value"
      >

      <input
        type="checkbox"
        :id="compId"
        v-if="descriptor.type === 'boolean'"
        v-model="value"
      >
    </template>

    <button
      @click="doRemove"
      class="jsdSchemaField_remove"
      title="删除"
    >×</button>
  </div>
</template>

<script>
import "../style/jsdSchemaField.scss";

// 这个是放在 jsdItemOpts 里面的东西

export default {
  props: {
    descriptor: Object,
    schema: Object, // 用户的 JSON Schema 对象
    showInput: { type: Boolean, default: true }
  },
  computed: {
    compId() {
      return "c" + Date.now().toString(36) + Math.random();
    },
    value: {
      get() {
        return this.schema[this.descriptor.id];
      },
      set(value) {
        this.$emit("change", {
          ...this.schema,
          [this.descriptor.id]: value
        });
      }
    },
    valueText() {
      const { value, descriptor } = this;
      if (descriptor.type === "boolean") return value ? "Yes" : "No";

      return String(value);
    }
  },
  methods: {
    doRemove() {
      const { [this.descriptor.id]: drop, ...rest } = this.schema;
      this.$emit("change", rest);
    }
  }
};
</script>
