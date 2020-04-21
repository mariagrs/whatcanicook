<template>
  <v-app>
    <MainNavbar/>
  <v-content>
     <SecondNavbar/>
    <router-view></router-view>
    <GoToTop/>
  </v-content>
  <Footer/>
  </v-app>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import Footer from '@/components/Footer.vue'
import GoToTop from '@/components/GoToTop.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    SecondNavbar,
    GoToTop,
    Footer
  },
  data: () => ({
  })
}
</script>
