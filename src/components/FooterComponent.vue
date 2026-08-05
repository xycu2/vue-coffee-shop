<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">

            <link-component
              :path="links.header.link"
              classItem="footer__item"
            >
              <img 
                  :src="require(`@/assets/logo/${links.header.icon}`)" 
                  :alt="links.header.icon" 
              />
            </link-component>

            <link-component
              v-for="link in links.other"
              :key="link.id"
              classItem="footer__item" 
              :path="link.link" 
              :text="link.text">
            </link-component>
              
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import LinkComponent from './LinkComponent.vue';

export default {
  components: {LinkComponent},
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: '/',
          icon: 'Logo_black.svg'
        },
        other: [
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
}
</script>
