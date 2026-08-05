<template>
  <li :class="classItem">
    <router-link :to="path">
      <template v-if="text">{{ text }}</template>
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>
