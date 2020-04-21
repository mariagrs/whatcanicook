<template>
  <v-app>
    <v-container>
      <v-tabs centered>
        <v-tabs-slider/>
        <v-tab>Recipes</v-tab>
        <v-tab>Cocktails</v-tab>
        <v-tab-item>
          <v-row
            dense
            class="ml-12 mr-12"
            justify="center"
            align="center">
            <v-col cols="7">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                      Filters
                      <template v-slot:actions>
                        <v-icon>mdi-filter</v-icon>
                      </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                      <v-select
                        v-model="recipeTypeValue"
                        :items="recipeTypeItems"
                        attach
                        chips
                        deletable-chips
                        label="Type of recipe"
                        @change="selectTypeChange"
                      ></v-select>
                      <v-select
                        v-model="recipeDietValue"
                        :items="recipeDietItems"
                        attach
                        chips
                        deletable-chips
                        label="Diet"
                        @change="selectTypeChange"
                      ></v-select>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <v-row
            dense
            class="ml-12 mr-12"
            justify="center"
            align="center">
            <v-col
              v-for="result in recipes"
              :key="result.id"
              cols="7"
              >
              <RecipeCard :src="imageSrc(result.id)" :title="result.title" :route ="`/recipe/${result.id}`"/>
            </v-col>
            <v-col
              v-if="recipes.length === 0"
              cols="7"
              >
              <p>No recipes were found</p>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row
            dense
            class="ml-12 mr-12"
            justify="center"
            align="center">
            <v-col
              cols="7"
              >
              <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header disable-icon-rotate>
                    Filters
                    <template v-slot:actions>
                      <v-icon>mdi-filter</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-select
                      v-model="cocktailTypeValue"
                      :items="cocktailTypeItems"
                      attach
                      chips
                      deletable-chips
                      label="Alcoholic"
                      @change="selectCocktailTypeChange"
                    ></v-select>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          </v-row>
          <v-row
            dense
            class="ml-12 mr-12"
            justify="center"
            align="center">
            <v-col
              v-for="result in cocktails.drinks"
              :key="result.id"
              cols="7"
              >
              <RecipeCard :src="result.strDrinkThumb" :title="result.strDrink" :route ="`/cocktail/${result.idDrink}`"/>
            </v-col>
            <v-col
              v-if="cocktails.drinks === null || cocktails.length === 0"
              cols="7"
              >
              <p>No cocktails were found</p>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'
import axios from 'axios'

export default {
  components: {
    RecipeCard
  },
  data: () => ({
    recipes: [],
    recipeTypeItems: ['Appetizer', 'Main course', 'Dessert', 'Salad'],
    recipeDietItems: ['Vegetarian', 'Vegan', 'Gluten Free'],
    recipeTypeValue: null,
    recipeDietValue: null,
    cocktails: [],
    cocktailTypeItems: ['Alcoholic', 'Non Alcoholic'],
    cocktailTypeValue: null
  }),
  methods: {
    getSearchQuery () {
      return this.$route.query.q
    },
    imageSrc (id) {
      return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    },
    searchRecipes () {
      var q = this.getSearchQuery()

      if (q === '') {
        this.recipes = []
        return
      }

      var params = {
        query: q,
        apiKey: '7f611fc7f9e34b598ca07d543eab276e'
      }

      axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
        this.recipes = res.data.results
      })
    },
    selectTypeChange () {
      var isComplexSearch = this.recipeTypeValue !== null || this.recipeDietValue !== null

      if (isComplexSearch) {
        var params = {
          query: this.getSearchQuery(),
          apiKey: '7f611fc7f9e34b598ca07d543eab276e',
          type: this.recipeTypeValue,
          diet: this.recipeDietValue
        }

        axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
          this.recipes = res.data.results
        })
      } else {
        this.searchRecipes()
      }
    },
    async selectCocktailTypeChange () {
      await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.getSearchQuery()).then(res => {
        this.cocktails = res.data
      })

      if (this.cocktails.drinks !== null && this.cocktailTypeValue !== null) {
        if (this.cocktailTypeValue === 'Alcoholic') {
          this.cocktails.drinks = this.cocktails.drinks.filter(function (drink) {
            return drink.strAlcoholic === 'Alcoholic'
          })
        } else {
          this.cocktails.drinks = this.cocktails.drinks.filter(function (drink) {
            return drink.strAlcoholic === 'Non alcoholic'
          })
        }
      }
    },
    async searchCocktailsByName () {
      var q = this.getSearchQuery()

      if (q === '') {
        this.cocktails = []
        return
      }
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + q).then(res => {
        this.cocktails = res.data
      })
    }
  },
  mounted () {
    this.searchRecipes()
    this.searchCocktailsByName()
  },
  watch: {
    '$route' (to, from) {
      if (to.path.startsWith('/search')) {
        this.searchRecipes()
        this.searchCocktailsByName()
      }
    }
  }
}
</script>
