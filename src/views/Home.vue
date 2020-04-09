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
    <h3 class="grey--text">En manque d'inspiration ?(anglais)</h3>
    </v-card>
    <FoodCard/>
    <br>
    <FoodCard/>
    <br>
    <FoodCard/>
    <!--<p>hello</p>-->
  </v-app>
</template>

<script>
// @ is an alias to /src
import SecondNavbar from '@/components/SecondNavbar.vue'
import FoodCard from '@/components/FoodCard.vue'

export default {
  name: 'Home',
  components: {
    SecondNavbar,
    FoodCard
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
  .rounded{
    border-radius: 5%;
  }
</style>
