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
          <v-col v-if="result.strIngredient1 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient1)"
          />
            </v-avatar>

          </v-col>
            <v-col cols="11" v-if="result.strIngredient1 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient1}}</b>  {{result.strMeasure1}} </p>
            </v-col>
                      <v-col v-if="result.strIngredient2 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient2)"
          />
            </v-avatar>

          </v-col>
            <v-col cols="11" v-if="result.strIngredient2 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient2}}</b>  {{result.strMeasure2}} </p>
            </v-col>

                      <v-col v-if="result.strIngredient3 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient3)"
          />
            </v-avatar>

          </v-col>
            <v-col cols="11" v-if="result.strIngredient3 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient3}}</b>  {{result.strMeasure3}} </p>
            </v-col>
                      <v-col v-if="result.strIngredient4 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient4)"
          />
            </v-avatar>

          </v-col>
            <v-col cols="11" v-if="result.strIngredient4 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient4}}</b>  {{result.strMeasure4}} </p>
            </v-col>
                      <v-col v-if="result.strIngredient5 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient5)"
          />
            </v-avatar>

          </v-col>
            <v-col cols="11" v-if="result.strIngredient5 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient5}}</b>  {{result.strMeasure5}} </p>
            </v-col>
                      <v-col v-if="result.strIngredient6 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient6)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient6 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient6}}</b>  {{result.strMeasure6}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient7 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient7)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient7 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient7}}</b>  {{result.strMeasure7}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient8 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient8)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient8}}</b>  {{result.strMeasure8}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient9 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient9)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient9 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient9}}</b>  {{result.strMeasure9}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient10 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient10)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient10 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient10}}</b>  {{result.strMeasure10}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient11 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient11)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient11 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient11}}</b>  {{result.strMeasure11}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient12 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient12)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient12 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient12}}</b>  {{result.strMeasure12}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient13 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient13)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient13 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient13}}</b>  {{result.strMeasure13}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient14 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient14)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient14 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient14}}</b>  {{result.strMeasure14}} </p>
            </v-col>
                            <v-col v-if="result.strIngredient15 != null">
              <v-avatar
            class="rounded ml-6"
            size="80"
            tile
            >
              <v-img
            :src="getIngredientImage(result.strIngredient15)"
          />
            </v-avatar>
          </v-col>
            <v-col cols="11" v-if="result.strIngredient15 != null">
            <p class="font-weight-medium mx-auto"><b >{{result.strIngredient15}}</b>  {{result.strMeasure15}} </p>
            </v-col>
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
