<template>
  <v-app>
    <v-container
    height="auto"
    >
      <v-card
      color="black"
      height="auto"
      v-for="result in alcoholicDrinks"
      :key="result.idDrink">
      <v-card-title class="justify-center title white--text">{{result.strDrink}}</v-card-title>
      </v-card>
      <v-card outlined>
        <v-row align="center"
        v-for="result in alcoholicDrinks"
        :key="result.idDrink">
          <v-col cols="6">
          <v-img
            :src="result.strDrinkThumb + '/preview'"
            height="500"
            width="100%"
            class="rounded ml-2"
          />
          </v-col>
          <v-col cols="6">
              <h3 class="text-center">Glass type : <i class="body-1">{{ result.strGlass}} </i></h3>
          </v-col>
        </v-row>
      </v-card>
      <v-card
      color="black"
      height="40">
      </v-card>
      <v-card
        outlined
        height="auto"
        v-for="result in alcoholicDrinks"
        :key="result.idDrink">
       <h3 class="ml-4 mt-5">
          Ingredients :
        </h3>
        <v-row
        v-for="index in 15"
        :key="index">
          <v-col v-if="result['strIngredient' + index] != null">
            <v-avatar
            class="rounded ml-6 mb-5"
            size="80"
            tile>
            <v-img :src="imageIngredient(result['strIngredient' + index])"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="10" v-if="result['strIngredient' + index] != null">
            <p class="font-weight-medium mx-auto"> {{result['strMeasure' + index]}} {{result['strIngredient' + index]}}</p>
          </v-col>
        </v-row>
        <h3 class="ml-4 mt-5">Directions :</h3>
        <p class="mx-5" v-text="result.strInstructions"></p>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    alcoholicDrinks: []
  }),
  methods: {
    getId () {
      return this.$route.params.id
    },
    imageIngredient (name) {
      return ' https://www.thecocktaildb.com/images/ingredients/' + name + '-Small.png'
    }
  },
  mounted () {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.getId()).then(res => {
      this.alcoholicDrinks = res.data.drinks
    })
  }
}
</script>

<style>
  .rounded{
    border-radius: 5%;
  }
</style>
