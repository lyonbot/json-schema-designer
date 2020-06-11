<template>
  <span class="jsdExtraIcon">
    {{ char }}
  </span>
</template>

<script>
import "./style/jsdExtraIcon.scss";

const chars = {
  object: "{}",
  array: "[]"
};

export default {
  name: "jsd-extra-icon",
  props: {
    type: { type: String, default: "object" },
    isTail: { type: Boolean, default: false }
  },
  computed: {
    char() {
      return chars[this.type][this.isTail ? 1 : 0];
    }
  }
};
</script>
