<template>
  <v-app>
    <v-app-bar
      app
      color="#e3e3e3"
    >
        <v-img
          contain
          class="shrink mt-1"
          :src="require('./assets/logocuisine.png')"
          height="65"
          width="70"
          position="left"
         />
      <v-toolbar-title
        class="display-1"
      >
      Blabla
      </v-toolbar-title>

      <div class="search-bar">
      <v-row>
      <v-col cols="12">
          <v-text-field
            solo
            label="Search"
            append-icon='fa-search'
            @click:append="Search"
          >
          </v-text-field>

        </v-col>
      </v-row>
      </div>
    <v-spacer></v-spacer>

    <v-btn class="ma-2" text icon>
        <v-icon>fa-user</v-icon>
    </v-btn>

    </v-app-bar>

     <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
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
