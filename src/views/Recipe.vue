<template>
  <v-app>
    <v-container
    height="auto"
    >
      <v-card
      color="black"
      height="auto">
      <v-card-title class="justify-center title white--text">{{results.title}}</v-card-title>
      </v-card>
      <v-card outlined>
        <v-row align="center">
          <v-col cols="5">
          <v-img
            :src="imageSrc(results.id)"
            height="auto"
            width="100%"
            class="rounded ml-2"
          />
          </v-col>
          <v-col cols="7">
              <h3>Realized by <i class="body-1">{{ results.sourceName}} </i></h3>
              <h4 class="subtitle-1"  v-html="results.summary">
              </h4>
          </v-col>
        </v-row>
      </v-card>
      <v-card
      color="black"
      height="40">
          <v-row align="center" justify="center">
          <v-tooltip bottom>
          <template v-slot:activator="{ on }">
          <v-icon color="white" class="mt-2 mr-2" v-on="on">fas fa-user</v-icon>
          </template>
          <span>servings</span>
          </v-tooltip>
          <h4 class=" mt-2 white--text">{{results.servings}} person </h4>

          <v-tooltip bottom>
          <template v-slot:activator="{ on }">
          <v-icon color="white" class="mt-2 ml-12 mr-2" v-on="on">far fa-clock</v-icon>
          </template>
          <span>time</span>
          </v-tooltip>
          <h4 class=" mt-2 white--text">{{results.readyInMinutes}} minutes </h4>

          <v-tooltip bottom>
          <template v-slot:activator="{ on }">
          <v-icon color="white" class="mt-2 ml-12 mr-2" v-on="on">fas fa-seedling</v-icon>
          </template>
          <span>vegan</span>
          </v-tooltip>
          <h4 class=" mt-2 white--text">{{results.vegan}}</h4>

          <v-tooltip bottom>
          <template v-slot:activator="{ on }">
          <v-icon color="white" class="mt-2 ml-12 mr-2" v-on="on">mdi-barley</v-icon>
          </template>
          <span>gluten-free</span>
          </v-tooltip>
          <h4 class=" mt-2 white--text">{{results.glutenFree}}</h4>
          </v-row>
      </v-card>
      <v-card
        outlined
        height="auto">
       <h3 class="ml-4 mt-5">
          Ingredients :
        </h3>
        <v-row v-for="result in results.extendedIngredients"
          :key="result.id">
          <v-col>
            <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
            <v-img :src="imageIngredient(result.image)"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <p class="font-weight-medium mx-auto">{{result.originalString}}</p>
          </v-col>
        </v-row>
        <h3 class="ml-4 mt-5">Directions :</h3>
        <p class="mx-5" v-html="results.instructions"></p>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    results: []
  }),
  methods: {
    getId () {
      return this.$route.params.id
    },
    imageSrc (id) {
      return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    },
    imageIngredient (image) {
      return ' https://spoonacular.com/cdn/ingredients_100x100/' + image
    }
  },
  mounted () {
    var params = {
      apiKey: 'a580fafc28554f4a9ac047dcd8325266'
    }
    axios.get('https://api.spoonacular.com/recipes/' + this.getId() + '/information/', { params }).then(res => {
      this.results = res.data
      console.log(this.results)
    })
  }
}
</script>

<style>
  .rounded{
    border-radius: 50%;
  }
</style>
