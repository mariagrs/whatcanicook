<template>
  <v-app>
  <v-content>
    <router-view></router-view>
  </v-content>
  </v-app>
</template>

<script>
// import Home from './views/Home.vue'

export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
    Search () {
      alert('hello')
    }
  }
}
</script>

<style>
  .search-bar{
    margin-top: 30px;
    margin-left: 380px;
    width: 600px;
  }
</style>
