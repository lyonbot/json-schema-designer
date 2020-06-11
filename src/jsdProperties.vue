对于 type = object 的 JSONSchema，需要操作 properties 和 required

<template>
  <div
    class="jsdProperties"
    :class="{ jsdProperties__empty : isEmpty}"
  >
    <jsd-item
      class="jsdProperties_item"
      v-for="(prop, id) in value.properties"
      :key="id"
      :data-prop="id"
      :value="value.properties[id]"
      :path="path+'.'+id"
      @update:value="handleObjectPropUpdate(id, $event)"
    >
      <div
        slot="leading"
        class="jsdProperties_leading"
      >
        <input
          type="text"
          class="jsdProperties_propName"
          :value="id"
          @change="handleObjectPropRename(id, $event.target.value)"
        >
        <div class="jsdProperties_actions">
          <button
            class="jsdAction jsdAction__danger"
            @click="handleObjectPropDelete(id)"
            title="删除"
          >
            ×
          </button>
          <button
            class="jsdAction"
            :class="{jsdAction__primary: requiredPropList.includes(id)}"
            @click="handleObjectPropToggleRequired(id)"
            title="设置必填"
          >
            必填
          </button>
        </div>
      </div>
    </jsd-item>

    <div class="jsdProperties_item jsdProperties_item__ghost">
      <input
        type="text"
        class="jsdProperties_propName"
        placeholder="添加属性"
        @change="handleObjectPropCreate($event.target.value);$event.target.value=''"
      >
    </div>
  </div>
</template>

<script>
import "./style/jsdAction.scss";
import "./style/jsdProperties.scss";

export default {
  name: "jsd-properties",
  props: {
    path: String,
    value: Object
  },
  computed: {
    isEmpty() {
      return Object.keys(this.value.properties).length === 0;
    },
    // readonly! 不要修改
    requiredPropList() {
      return this.value.required || [];
    }
  },
  components: {
    jsdItem: () => import("./jsdItem.vue")
  },
  methods: {
    commit(value) {
      this.$emit("change", value);
    },
    handleObjectPropRename(oldId, newId) {
      const oldProperties = this.value.properties;
      const properties = {};
      Object.keys(oldProperties).forEach(id => {
        properties[id === oldId ? newId : id] = oldProperties[id];
      });
      const ans = {
        ...this.value,
        properties
      };

      if (Array.isArray(ans.required) && ans.required.includes(oldId)) {
        const newArr = [...ans.required];
        newArr[newArr.indexOf(oldId)] = newId;
        ans.required = newArr;
      }

      this.commit(ans);
    },
    handleObjectPropUpdate(id, newVal) {
      this.commit({
        ...this.value,
        properties: {
          ...this.value.properties,
          [id]: newVal
        }
      });
    },
    handleObjectPropCreate(id) {
      id = id.trim();
      if (!id) return;

      let isRequired = /[!！]$/.test(id);
      if (isRequired) id = id.slice(0, -1);

      if (id in this.value.properties) return;

      const newVal = {
        ...this.value,
        properties: {
          ...this.value.properties,
          [id]: { type: "string" }
        }
      };
      if (isRequired) newVal.required = [...(newVal.required || []), id];
      this.commit(newVal);

      // this.$nextTick(() => {
      //   this.$el
      //     .querySelector('.jsdProperties_item[data-prop="' + id + '"] select')
      //     .focus();
      // });
    },
    handleObjectPropDelete(id) {
      const { [id]: discard, ...properties } = this.value.properties;
      const newSchema = {
        ...this.value,
        properties
      };

      const reqIdx = this.requiredPropList.indexOf(id);
      if (reqIdx >= 0) {
        newSchema.required = [...newSchema.required];
        newSchema.required.splice(reqIdx, 1);
        if (newSchema.required.length === 0) delete newSchema.required;
      }

      this.commit(newSchema);
    },
    handleObjectPropToggleRequired(id) {
      const required = [...this.requiredPropList];
      const idx = required.indexOf(id);
      if (idx >= 0) required.splice(idx, 1);
      else required.push(id);

      const newVal = {
        ...this.value,
        required
      };

      if (!required.length) delete newVal.required;
      this.commit(newVal);
    }
  }
};
</script>
