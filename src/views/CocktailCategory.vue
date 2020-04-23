<template>
    <v-app>
    <v-row justify="center" class="mt-5 mb-5">
        <h2 class="text-uppercase" v-if="alcoholicDrinks.length !== 0">{{this.getName()}}</h2>
        <v-col
        v-if="alcoholicDrinks.length === 0"
        cols="7"
        >
        <v-alert
        dense
        outlined
        type="error"
        class="mt-5"
        >
        No cocktails were found
        </v-alert>
      </v-col>
    </v-row>
    <v-row
    dense
    class="ml-12 mr-12"
    justify="center"
    align="center"
    v-for="result in alcoholicDrinks"
    :key="result.idDrink">
      <v-col
      cols="7"
      >
        <RecipeCard :src="result.strDrinkThumb + '/preview'" :title="result.strDrink" :route ="`/cocktail/${result.idDrink}`"/>
      </v-col>
    </v-row>
    </v-app>
</template>

<script>
import axios from 'axios'
import RecipeCard from '@/components/RecipeCard.vue'

export default {
  components: {
    RecipeCard
  },
  data: () => ({
    alcoholicDrinks: []
  }),
  methods: {

    getName () {
      return this.$route.params.name
    },
    loadCocktails () {
      var params = {}
      if (this.getName() === 'alcoholic') {
        params.a = 'Alcoholic'
      } else if (this.getName() === 'non alcoholic') {
        params.a = 'Non_Alcoholic'
      }
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?', { params }).then(response => {
        this.alcoholicDrinks = response.data.drinks
      })
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path.startsWith('/cocktails')) {
        this.loadCocktails()
      }
    }
  },
  mounted () {
    this.loadCocktails()
  }
}
</script>
