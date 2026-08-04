<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <router-link :to="links[0].link">
          <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon" />
        </router-link>
      </li>
            <link-component classItem="header__item" :path="links[1].link" :text="links[1].text" />
            <link-component classItem="header__item" :path="links[2].link" :text="links[2].text" />
            <link-component classItem="header__item" :path="links[3].link" :text="links[3].text" />
    </ul>
  </header>
</template>

<script>
import LinkComponent from './LinkComponent.vue';

export default {
  components: {LinkComponent},
  data() {
    return {
      links: [
        {
          id: 0,
          link: '/',
          icon: 'Logo.svg'
        },
        {
          id: 1,
          text: 'Our coffee',
          link: '/our-coffee',
        },
        {
          id: 2,
          text: 'For your pleasure',
          link: 'for-pleasure',
        },
        {
          id: 3,
          text: 'Contact us',
          link: 'contact-us',
        }
      ]
    }
  }
}

</script>
