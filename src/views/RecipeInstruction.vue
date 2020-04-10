<template>
  <v-app>
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
    <SecondNavbar/>
    <v-container
    height="500"
    width="100%"
    >
    <v-card>
        <v-card-title class="display-1 justify-center">NAME OF THE RECIPE</v-card-title>
        <v-col align="center" justify="center">
        <v-img
          :src="require('../assets/chococake.jpg')"
          height="30%"
          width="30%"
          class="rounded mx-12"
        />
        </v-col>
    </v-card>
    <v-card
    color="black"
    height="40">
        <v-row align="center" justify="center">
        <v-icon color="white" class="mt-2 mx-5">fas fa-user</v-icon><h3 class=" mt-2 white--text">6</h3>
        <v-icon color="white" class="mt-2 ml-12 mr-5">far fa-clock</v-icon><h3 class=" mt-2 white--text">10 min</h3>
        <v-icon color="white" class="mt-2 ml-12 mr-5">mdi-stove</v-icon><h3 class=" mt-2 white--text">30 min</h3>
        <v-icon color="white" class="mt-2 ml-12 mr-5">fas fa-dollar-sign</v-icon><h3 class=" mt-2 white--text">14$</h3>
        <v-icon color="white" class="mt-2 ml-12 mr-5">mdi-note-text</v-icon><h3 class=" mt-2 white--text">30 kcal</h3>
        </v-row>
    </v-card>
     <v-card
    height="auto"
    align="center" justify="center">
        <p>blbla</p>
    </v-card>
    </v-container>

    <Footer/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SecondNavbar from '@/components/SecondNavbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'RecipeInstruction',
  components: {
    SecondNavbar,
    Footer
  },
  data: () => ({
  }),
  methods: {
    Search () {
      alert('hello')
    },
    toTop () {
      this.$vuetify.goTo(0)
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
  .rounded{
    border-radius: 5%;
  }
  .positionnement{
    bottom: 0;
    margin-bottom: 150px;
  }
  .pose{
    justify-content: center;
  }
</style>
