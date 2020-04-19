<template>
  <v-app>
    <v-container
    height="auto"
    >
    <v-card flat v-for="result in results.drinks" :key="result.id">
        <v-card-title class="display-1 justify-center">{{result.strDrink}}</v-card-title>
        <v-col align="center" justify="center">
        </v-col>
    </v-card>
    <div class="image" v-for="result in results.drinks" :key="result.id">
         <v-row align="center">
          <v-col cols="5">
          <center><v-img
            :src="result.strDrinkThumb"
            height="auto"
            width="100%"
            class="rounded ml-2"
            position="center"
          /></center>
          </v-col>
          <v-col cols="7">
              <h3>Glass Type : {{result.strGlass}}</h3>
              <br>
              <h3>Type Beverage : {{result.strAlcoholic}}</h3>
              <h4 class="subtitle-1">
              </h4>
          </v-col>
        </v-row>
      </div>
    <v-card
    color="black"
    height="40">
        <v-row align="center" justify="center">
        <v-tooltip bottom>
        <template v-slot:activator="{ on }">
        <v-icon color="white" class="mt-2 mr-5" v-on="on">fas fa-user</v-icon>
        </template>
        <span>servings</span>
        </v-tooltip>
        <h4 class=" mt-2 white--text">6</h4>

        <v-tooltip bottom>
        <template v-slot:activator="{ on }">
        <v-icon color="white" class="mt-2 ml-12 mr-5" v-on="on">far fa-clock</v-icon>
        </template>
        <span>prep time</span>
        </v-tooltip>
        <h4 class=" mt-2 white--text">35 min</h4>

        <v-tooltip bottom>
        <template v-slot:activator="{ on }">
        <v-icon color="white" class="mt-2 ml-12 mr-5" v-on="on">fas fa-dollar-sign</v-icon>
        </template>
        <span>cost</span>
        </v-tooltip>
        <h4 class=" mt-2 white--text">$$$</h4>
        </v-row>
    </v-card>
     <v-card
      flat
      outlined
      height="auto"
      justify="center">
        <v-card-title>Ingredients :</v-card-title>
        <v-row class="text-wrap ml-4" v-for="result in results.drinks" :key="result.id">
          <v-row class="text-wrap ml-4" v-for="n in 10" :key="n">
            <v-col v-if="result['strIngredient'+ n] != null">
                           <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result['strIngredient' + n])"
          />
            </v-avatar>
                        <v-col cols="11" v-if="result['strIngredient' + n] != null">
            <p class="font-weight-medium mx-auto"><b >Name: {{result['strIngredient' + n]}}</b>- Measure: {{result['strMeasure' + n]}} </p>
            </v-col>

          </v-col>
          </v-row>

            </v-row>
            <v-card-title>Instruction :</v-card-title>
            <v-row v-for="result in results.drinks" :key="result.id">
              <v-col>
          <p class="text-wrap ml-4"><b>{{result.strInstructions}}</b></p>
              </v-col>
            </v-row>
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
    </v-container>

  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cocktail',
  data: () => ({
    results: []
  }),
  methods: {

    getId () {
      return this.$route.params.id
    },

    getNumber (results, number) {
      return results.strIngredient + number
      // eslint-disable-next-line no-unreachable
      console.log('result.strDrink' + number)
    },

    getIngredientImage (image) {
      return 'https://www.thecocktaildb.com/images/ingredients/' + image + '.png'
    },

    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  mounted () {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.getId()).then(res => {
      this.results = res.data
      console.log(this.results)
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

  .ingredients{
    position: relative;
    left: 10px;
  }

  .position{
    position: relative;
    left: 40px;
  }

</style>
