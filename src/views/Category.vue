<template>
    <v-app>
    <v-row justify="center" class="mt-5 mb-5">
        <h2 class="text-uppercase">{{this.getName()}}</h2>
    </v-row>
    <v-row
    dense
    class="ml-12 mr-12"
    justify="center"
    align="center">
        <v-col
        v-for="result in results"
        :key="result.id"
        cols="7"
        >
        <RecipeCard :src="imageSrc(result.id)" :title="result.title" :route ="`/recipe/${result.id}`"/>
        </v-col>
    </v-row>
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
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  mounted () {
    var params = {
      apiKey: 'a580fafc28554f4a9ac047dcd8325266'
    }
    if (this.getType() === 'diet') {
      params.diet = this.getName()
    } else if (this.getType() === 'type') {
      params.type = this.getName()
    } else if (this.getType() === 'cuisine') {
      params.cuisine = this.getName()
    }

    axios.get('https://api.spoonacular.com/recipes/complexSearch', { params }).then(res => {
      this.results = res.data.results
      console.log(this.results)
    })
  }
}
</script>
