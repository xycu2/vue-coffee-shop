<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
    
      <link-component :path="links.header.link" classItem="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </link-component>

      <link-component
        v-for="link in links.other"
        :key="link.id"
        classItem="header__item"
        :path="link.link"
        :text="link.text">
      </link-component>

    </ul>
  </header>
</template>

<script>
import LinkComponent from "./LinkComponent.vue";

export default {
  components: { LinkComponent },
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "for-pleasure",
          },
          {
            id: 3,
            text: "Contact us",
            link: "contact-us",
          },
        ],
      },
    };
  },
};
</script>
