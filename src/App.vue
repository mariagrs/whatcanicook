<template>
  <v-app>
    <MainNavbar/>
  <v-content>
     <SecondNavbar/>
    <router-view></router-view>
  </v-content>
  <Footer/>
  </v-app>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    SecondNavbar,
    Footer
  },
  data: () => ({
  })
}
</script>
