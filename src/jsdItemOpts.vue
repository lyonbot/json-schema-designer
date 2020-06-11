<template>
  <div class="jsdItemOpts">
    <!-- format -->
    <select
      :value="value.format||''"
      data-schema-field="format"
      class="jsdItemOpts_formatSelect"
      v-if="formats.length>0"
      @change="setFormat($event.target.value)"
    >
      <option
        v-for="it in formats"
        :key="it.value"
        :value="it.value"
        :disabled="it.condition && !it.condition(value)"
      >{{ it.label }}</option>
    </select>

    <!-- add more -->
    <select
      class="jsdItemOpts_add"
      @change="handleAddField($event.target.value);$event.target.value=''"
    >
      <option
        value=""
        style="display: none"
      >扩展...</option>
      <option
        v-for="field in allFields"
        :key="field.id"
        :value="field.id"
        :disabled="field.id in value"
      >{{ field.title }}</option>
    </select>

    <!-- rest -->
    <div class="jsdItemOpts_schemaFieldList">
      <jsd-schema-field
        v-for="field in allFields.filter(f => f.id in value)"
        :ref="'scheamField:'+field.id"
        :key="field.id"
        :descriptor="field"
        :schema="value"
        @change="commit"
      />
    </div>
  </div>
</template>

<script>
import {
  typeSchemaFields,
  typeFormats,
  commonSchemaFields,
  primitiveDefaults
} from "./consts";
import jsdSchemaField from "./jsdSchemaField/index.vue";
import "./style/jsdItemOpts.scss"

export default {
  props: {
    path: String,
    value: Object
  },
  components: {
    jsdSchemaField
  },
  computed: {
    formats() {
      const type = this.value.type;
      return typeFormats[type] || [];
    },
    allFields() {
      return [
        ...commonSchemaFields,
        ...(typeSchemaFields[this.value.type] || [])
      ].filter(x => !x.hidden);
    }
  },
  methods: {
    commit(value) {
      this.$emit("change", value);
    },
    commitProp(key, value) {
      const newVal = { ...this.value };
      if (typeof value === "undefined") delete newVal[key];
      else newVal[key] = value;
      this.commit(newVal);
    },
    setFormat(formatValue) {
      // const format = this.formats.find(x => x.value === formatValue);
      this.commitProp("format", formatValue || undefined);
    },
    handleAddField(fieldId) {
      const field = this.allFields.find(x => x.id === fieldId);
      if (!field) return;

      let defaultValue = field.default;
      if (typeof defaultValue === "function")
        defaultValue = defaultValue(this.value);
      if (typeof defaultValue === "undefined")
        defaultValue = primitiveDefaults[field.type];

      this.commitProp(fieldId, defaultValue);
      this.$nextTick(() => {
        const ref = this.$refs["scheamField:" + fieldId][0];
        if (ref && ref.$el) {
          const el = ref.$el.querySelector(`input, select, textarea`);
          if (el) {
            if (el.select) el.select();
            if (el.focus) el.focus();
          }
        }
      });
    }
  }
};
</script>
