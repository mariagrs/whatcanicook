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
    <v-card
    outlined
    >
      <v-row>
        <v-col cols="6"
        sm="6">
          <br><br><br>
          <h2 class=" mt-12 display-3 text-center">Try this new recipe !</h2>
          <p class=" mt-8 headline text-center">Chinese Noodles with mushrooms</p>
        </v-col>
        <v-col cols="6"
        sm="6">
        <v-img
          :src="require('../assets/chinese-food.jpg')"
          height="100%"
          width="95%"
          class="rounded"
        />
        </v-col>
      </v-row>
    </v-card>
    </v-container>
    <br><br>
    <v-card class="d-inline-block mx-auto" flat>
    <h2 class="black--text">Lack of inspiration ?</h2>
    </v-card>

    <FoodCard/>
    <br><br>

    <div class="text-right positionnement">
    <v-btn
        fab
        dark
        color="black"
        @click="toTop"
        class="mx-12 white--text"
      >
      <v-icon dark>mdi-arrow-up</v-icon>
    </v-btn>
    </div>

    <Footer/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SecondNavbar from '@/components/SecondNavbar.vue'
import FoodCard from '@/components/FoodCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    SecondNavbar,
    FoodCard,
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
</style>
