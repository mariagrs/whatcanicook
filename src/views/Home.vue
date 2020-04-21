<template>
  <v-app>
    <v-container
    height="500"
    width="100%"
    >
    <v-card
    outlined
    v-for="result_2 in results_2"
    :key="result_2.id"
    @click="$router.push(`/recipe/${result_2.id}`)"
    >
      <v-row>
        <v-col cols="6"
        sm="6">
          <br><br><br>
          <h2 class=" mt-12 display-3 text-center">Try this recipe !</h2>
          <p class=" mt-8 headline text-center">{{ result_2.title }}</p>
        </v-col>
        <v-col cols="6"
        sm="6">
        <v-img
          :src="imageSrc(result_2.id)"
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
        <FoodCard :src="imageSrc(result.id)" :title="result.title" :route="`/recipe/${result.id}`"/>
        </v-col>
      </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import FoodCard from '@/components/FoodCard.vue'
import axios from 'axios'

export default {
  components: {
    FoodCard
  },
  data: () => ({
    results: [],
    results_2: []
  }),
  methods: {
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
    })
    axios.get('https://api.spoonacular.com/recipes/random?apiKey=a580fafc28554f4a9ac047dcd8325266', { params2 }).then(response => {
      this.results_2 = response.data.recipes
    })
  }
}
</script>

<style>
  .rounded{
    border-radius: 5%;
  }
</style>
