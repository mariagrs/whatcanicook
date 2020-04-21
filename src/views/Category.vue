<template>
    <v-app>
    <v-row justify="center" class="mt-5 mb-5">
        <h2 class="text-uppercase" v-if="results.length != 0">{{this.getName()}}</h2>
        <v-col
        v-if="results.length === 0"
        cols="7"
        >
        <v-alert
        dense
        outlined
        type="error"
        class="mt-5"
        >
        No recipes were found
        </v-alert>
      </v-col>
    </v-row>
    <v-row
    dense
    class="ml-12 mr-12"
    justify="center"
    align="center"
    v-for="result in results"
    :key="result.id">
      <v-col
      cols="7">
        <RecipeCard :src="imageSrc(result.id)" :title="result.title" :route ="`/recipe/${result.id}`"/>
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
    results: []
  }),
  methods: {

    getType () {
      return this.$route.params.type
    },
    getName () {
      return this.$route.params.name
    },
    imageSrc (id) {
      return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    },
    loadRecipes () {
      var params = {
        apiKey: 'a580fafc28554f4a9ac047dcd8325266',
        number: 50
      }
      if (this.getType() === 'diet') {
        params.diet = this.getName()
      } else if (this.getType() === 'type') {
        params.type = this.getName()
      } else if (this.getType() === 'cuisine') {
        params.cuisine = this.getName()
      }

      axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
        this.results = res.data.results
      })
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path.startsWith('/recipes')) {
        this.loadRecipes()
      }
    }
  },
  mounted () {
    this.loadRecipes()
  }
}
</script>
