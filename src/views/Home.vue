<template>
  <v-app>
    <v-container
    height="500"
    width="100%"
    >
    <v-card
    outlined
    >
      <v-row
        v-for="result2 in results2"
        :key="result2.id"
        :to ="`/Recipe/${result2.id}`">
        <v-col cols="6"
        sm="6">
          <br><br><br>
          <h2 class=" mt-12 display-3 text-center">Try this recipe !</h2>
          <p class=" mt-8 headline text-center">{{ result2.title }}</p>
        </v-col>
        <v-col cols="6"
        sm="6">
        <v-img
          @click="$router.push(`/Recipe/${result2.id}`)"
          :src="imageSrc(result2.id)"
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

    <v-card class="d-inline-block mx-auto" flat>
      <v-container>
      <v-row>
        <v-col
        v-for="result in results"
        :key="result.id"
        cols="3"
        >
        <FoodCard :src="imageSrc(result.id)" :title="result.title"/>
        </v-col>
      </v-row>
      </v-container>
    </v-card>

    <div class="text-right">
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
  </v-app>
</template>

<script>
import FoodCard from '@/components/FoodCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    FoodCard
  },
  data: () => ({
    results: [],
    results2: []
  }),
  methods: {
    toTop () {
      this.$vuetify.goTo(0)
    },
    imageSrc (id) {
      return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    }
  },
  mounted () {
    var params = {
      apiKey: 'a580fafc28554f4a9ac047dcd8325266',
      number: 12
    }
    var params2 = {
      number: 1
    }
    axios.get('https://api.spoonacular.com/recipes/random', { params }).then(res => {
      this.results = res.data.recipes
      console.log(res.data)
    })
    axios.get('https://api.spoonacular.com/recipes/random?apiKey=a580fafc28554f4a9ac047dcd8325266', { params2 }).then(res1 => {
      this.results2 = res1.data.recipes
      console.log(res1.data.recipes)
    })
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
