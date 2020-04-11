<template>
  <v-app-bar app
  color="#e3e3e3"
  >
  <v-img
      contain
      class="shrink mt-1"
      :src="require('../assets/logocuisine.png')"
      height="65"
      width="70"
      position="left"
  />
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
          solo
          label="Ingredient, dish, keyword.."
          append-icon='fa-search'
          @click:append="Search"
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
