<template>
  <div>
  <v-toolbar
    color="#e3e3e3"
    text
    flat
    dense
  >
    <div class="mx-12"></div>
    <div class="mx-9"></div>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          Recipes
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in recipes"
          :key="item.title"
          @click="$router.push(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-divider
      class="mx-12"
      inset
      vertical
    ></v-divider>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          Healthy Recipes
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in healthy"
          :key="item.title"
          @click="$router.push(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-divider
      class="mx-12"
      inset
      vertical
    ></v-divider>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          Diet
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in diet"
          :key="item.title"
          @click="$router.push(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-divider
      class="mx-12"
      inset
      vertical
    ></v-divider>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          By continent
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in continent"
          :key="item.title"
          @click="$router.push(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-divider
      class="mx-12"
      inset
      vertical
    ></v-divider>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          Quick Recipes
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in quickRecipes"
          :key="item.title"
          @click="$router.push(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-divider
      class="mx-12"
      inset
      vertical
    ></v-divider>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          Cocktails
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in cocktails"
          :key="item.title"
          @click="$router.push(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-toolbar>
  </div>
</template>

<script>

export default {
  data () {
    return {
      results: [],
      drawer: false,
      recipes: [
        { title: 'Appetizer', route: '/recipes/category/type/appetizer' },
        { title: 'Breakfast', route: '/recipes/category/type/breakfast' },
        { title: 'Main Course', route: '/recipes/category/type/main%20course' },
        { title: 'Dessert', route: '/recipes/category/type/dessert' }
      ],
      healthy: [
        { title: 'Salad', route: '/recipes/category/type/salad' },
        { title: 'Soup', route: '/recipes/category/type/soup' }
      ],
      diet: [
        { title: 'Vegetarian', route: '/recipes/category/diet/vegetarian' },
        { title: 'Vegan', route: '/recipes/category/diet/vegan' },
        { title: 'Gluten-free', route: '/recipes/category/diet/gluten%20free' },
        { title: 'Ketogenic', route: '/recipes/category/diet/ketogenic' }
      ],
      continent: [
        { title: 'American', route: '/recipes/category/cuisine/american' },
        { title: 'Latin American', route: '/recipes/category/cuisine/latin%20american' },
        { title: 'Italian', route: '/recipes/category/cuisine/italian' },
        { title: 'Chinese', route: '/recipes/category/cuisine/chinese' }
      ],
      quickRecipes: [
        { title: 'Snack', route: '/recipes/category/type/snack' },
        { title: 'Fingerfood', route: '/recipes/category/type/fingerfood' },
        { title: 'Marinade', route: '/recipes/category/type/marinade' },
        { title: 'Beverage', route: '/recipes/category/type/beverage' }
      ],
      cocktails: [
        { title: 'Alcoholic', route: '/cocktails/category/alcoholic' },
        { title: 'Non Alcoholic', route: '/cocktails/category/non%20alcoholic' }
      ]
    }
  }
}

</script>
