<template>
  <div
    class="jsdItem"
    :data-path="path"
    :data-type="type"
  >
    <div class="jsdItem_basic">
      <slot name="leading"></slot>

      <select
        v-model="type"
        class="jsdItem_typeSelect"
      >
        <option value="null">null</option>
        <option value="boolean">boolean</option>
        <option value="object">object</option>
        <option value="array">array</option>
        <option value="number">number</option>
        <option value="string">string</option>
        <option value="integer">integer</option>
      </select>

      <jsd-item-opts
        :path="path"
        :value="value"
        @change="commit"
      />
    </div>

    <div
      class="jsdItem_extra jsdItem_extra__collapsed"
      v-if="hasExtraOpts && collapsed"
      tabindex="0"
      @click="toggleCollapsed"
    >
      <jsd-extra-icon :type="type" />
      <div class="jsdItem_extra__collapsed_text">
        {{ collapsedText }}
      </div>
      <jsd-extra-icon
        :type="type"
        is-tail
      />
    </div>

    <div
      class="jsdItem_extra"
      v-if="hasExtraOpts && !collapsed"
    >
      <jsd-extra-icon
        :type="type"
        @click.native="toggleCollapsed"
      />

      <jsd-properties
        v-if="type==='object'"
        :path="path"
        :value="value"
        @change="commit"
      ></jsd-properties>

      <div
        class="jsdArrayItems"
        v-if="type==='array'"
      >
        <jsd-item
          class="jsdArrayItems_item"
          :value="value.items"
          :path="path+'.[number]'"
          @update:value="commitProp('items', $event)"
        >
        </jsd-item>
      </div>

      <jsd-extra-icon
        :type="type"
        is-tail
      />
    </div>
  </div>
</template>

<script>
import { typeSchemaFields } from "./consts";
import jsdProperties from "./jsdProperties.vue";
import jsdItemOpts from "./jsdItemOpts.vue";
import jsdExtraIcon from "./jsdExtraIcon.vue";
import "./style/jsdItem.scss";

const allTypeSchemaFieldIds = [].concat(
  ...Object.values(typeSchemaFields).map(x => x.map(y => y.id))
);

export default {
  name: "jsd-item",
  components: {
    jsdProperties,
    jsdItemOpts,
    jsdExtraIcon
  },
  props: {
    path: { type: String, default: "root" },
    value: Object
  },
  data() {
    return {
      collapsed: true
    };
  },
  computed: {
    type: {
      get() {
        return this.value.type;
      },
      set(type) {
        this.setType(type);
      }
    },
    /** 例如 object 和 array 需要在下方展开 */
    hasExtraOpts() {
      const { type } = this;
      if (type === "object" || type === "array") return true;

      return false;
    },
    collapsedText() {
      const { type, value } = this;

      if (type === "object") {
        const keys = Object.keys(value.properties);
        if (keys.length === 0) return "空对象";
        return keys.join(", ");
      }

      if (type === "array") {
        return (value.items && value.items.type) || "...";
      }

      return "...";
    }
  },
  created() {
    this.collapsed = this.path !== "root"; //&& this.value.type === "object";
  },
  methods: {
    commit(value) {
      this.$emit("update:value", value);
    },
    commitProp(key, value) {
      const newVal = { ...this.value };
      if (typeof value === "undefined") delete newVal[key];
      else newVal[key] = value;
      this.commit(newVal);
    },
    setType(type) {
      const newVal = { ...this.value, type };
      const typeSpec = typeSchemaFields[type] || {};
      allTypeSchemaFieldIds.forEach(key => {
        if (key in typeSpec) return;
        delete newVal[key];
      });

      switch (type) {
        case "object":
          newVal.properties = {};
          break;

        case "array":
          newVal.items = { type: "string" };
          break;
      }

      this.commit(newVal);
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
