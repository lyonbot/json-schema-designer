<template>
  <div class="demo">
    <div class="demoPanel">
      <json-schema-designer :value.sync="schema" />
    </div>
    <div class="demoPanel sourcePanel">
      <nav>
        <button @click="doStringify">重置(stringify)</button>
        <button @click="doApply">载入(parse)</button>

        <label>
          <input
            type="radio"
            value="json"
            v-model="mode"
          >
          JSON 模式
        </label>

        <label>
          <input
            type="radio"
            value="yaml"
            v-model="mode"
          >
          YAML 模式
        </label>
      </nav>
      <textarea v-model="source" />
      </div>
  </div>
</template>

<script>
import JsonSchemaDesigner from "..";
import yaml from "js-yaml";

export default {
  components: {
    JsonSchemaDesigner
  },
  data() {
    return {
      mode: "json",
      source: "",
      schema: {
        type: "object",
        properties: {
          name: { type: "string", title: "名字" },
          age: { type: "integer", title: "年龄", minimum: 0 },
          tags: { type: "array", items: { type: "string" } }
        },
        required: ["name", "age", "tags"]
      }
    };
  },
  created() {
    this.$watch(
      () => [this.mode, this.schema],
      () => this.doStringify(),
      { deep: true, immediate: true }
    );
  },
  methods: {
    doApply() {
      try {
        const { mode, source } = this;
        if (mode === "json") this.schema = JSON.parse(source);
        if (mode === "yaml") this.schema = yaml.load(source);
      } catch (e) {
        alert("Error: " + e);
        console.error(e);
      }
    },
    doStringify() {
      const { mode, schema } = this;
      if (mode === "json") this.source = JSON.stringify(schema, null, 2);
      if (mode === "yaml") this.source = yaml.dump(schema);
    }
  }
};
</script>

<style lang="scss">
.demo {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.demoPanel {
  flex: 1 0 400px;
  margin: 10px;
  overflow: auto;
  position: relative;
}

.sourcePanel {
  display: flex;
  flex-direction: column;
}

.sourcePanel textarea {
  margin-top: 10px;
  flex-grow: 1;
  border: 2px solid #ccc;
  font-size: 14px;
}
</style>