<template>
  <li :class="classItem">
    <router-link :to="path">{{ text }}</router-link>
  </li>
</template>

<script>

export default {
  props: {
    classItem: {
      type: String,
    },
    path: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>
