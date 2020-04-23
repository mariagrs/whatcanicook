<template>
  <v-app-bar app
  color="#e3e3e3"
  >
  <router-link to="/">
  <v-img
      contain
      class="shrink mt-1"
      :src="require('../assets/logocuisine.png')"
      height="65"
      width="70"
      position="left"
  />
  </router-link>
  <v-toolbar-title
      class="headline"
  >
  What can I cook
  </v-toolbar-title>

  <v-spacer></v-spacer>

  <div class="search-bar">
  <v-row>
  <v-col cols="12">
      <v-text-field
          v-model="searchText"
          solo
          label="Ingredient, dish, keyword.."
          append-icon='fa-search'
          @click:append="Search"
          @change="Search"
      >
      </v-text-field>

      </v-col>
  </v-row>
  </div>
  </v-app-bar>
</template>

<script>

export default {
  data: () => ({
    searchText: ''
  }),
  methods: {
    Search () {
      this.$router.push({ path: '/search', query: { q: this.searchText } })
      this.searchText = ''
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
