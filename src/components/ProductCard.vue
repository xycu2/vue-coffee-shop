<template>
  <div :class="classItem">
      <img :src="require(`@/assets/img/${icon}`)" :alt="icon" />
      <div class="best__item-title">{{ text }}</div>
      <div class="best__item-price">{{ price }}$</div>
    </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    classItem: {
      type: String,
      required: false
    }

  }
}
</script>