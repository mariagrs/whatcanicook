<template>
  <v-app>
    <MainNavbar/>
    <SecondNavbar/>
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
                  v-model="typeValue"
                  :items="typeItems"
                  attach
                  chips
                  label="Type of recipe"
                  @change="selectTypeChange"
                ></v-select>
                <v-select
                  v-model="dietValue"
                  :items="dietItems"
                  attach
                  chips
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
        v-for="result in results"
        :key="result.id"
        cols="7"
        >
        <RecipeCard :src="imageSrc(result.id)" :title="result.title" :route ="`/recipe/${result.id}`"/>
      </v-col>
    </v-row>
    <Footer/>
  </v-app>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import Footer from '@/components/Footer.vue'
import RecipeCard from '@/components/RecipeCard.vue'
// import SearchBar from '@/components/SearchBar.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    SecondNavbar,
    Footer,
    RecipeCard// ,
    // SearchBar
  },
  data: () => ({
    results: [],
    typeItems: ['Appetizer', 'Main course', 'Dessert', 'Salad'],
    dietItems: ['Vegetarian', 'Vegan', 'Gluten Free'],
    typeValue: null,
    dietValue: null
  }),
  methods: {
    toTop () {
      this.$vuetify.goTo(0)
    },
    getSearchQuery () {
      return this.$route.query.q
    },
    imageSrc (id) {
      return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    },
    selectTypeChange () {
      var params = {
        query: this.getSearchQuery(),
        apiKey: '7f611fc7f9e34b598ca07d543eab276e',
        type: this.typeValue,
        diet: this.dietValue
      }

      axios.get('https://api.spoonacular.com/recipes/complexSearch', { params }).then(res => {
        this.results = res.data.results
        console.log(this.results)
      })
    }
  },
  mounted () {
    this.myvar = this.getSearchQuery()
    console.log(this.$route.params)
    var params = {
      query: this.getSearchQuery(),
      apiKey: '7f611fc7f9e34b598ca07d543eab276e'
    }

    axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
      this.results = res.data.results
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
  .positionnement{
    bottom: 0;
    margin-bottom: 150px;
  }
</style>
