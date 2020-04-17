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

  name: 'SecondNavbar',
  data () {
    return {
      results: [],
      drawer: false,
      recipes: [
        { title: 'Appetizer', route: '/Category/type/appetizer' },
        { title: 'Breakfast', route: '/Category/type/breakfast' },
        { title: 'Main Course', route: '/Category/type/main%20course' },
        { title: 'Dessert', route: '/Category/type/dessert' }
      ],
      healthy: [
        { title: 'Salad', route: '/Category/type/salad' },
        { title: 'Soup', route: '/Category/type/soup' }
      ],
      diet: [
        { title: 'Vegetarian', route: '/Category/diet/vegetarian' },
        { title: 'Vegan', route: '/Category/diet/vegan' },
        { title: 'Gluten-free', route: '/Category/diet/gluten%20free' },
        { title: 'Ketogenic', route: '/Category/diet/ketogenic' }
      ],
      continent: [
        { title: 'American', route: '/Category/cuisine/american' },
        { title: 'Latin American', route: '/Category/cuisine/latin%20american' },
        { title: 'Italian', route: '/Category/cuisine/italian' },
        { title: 'Chinese', route: '/Category/cuisine/chinese' }
      ],
      quickRecipes: [
        { title: 'Snack', route: '/Category/type/snack' },
        { title: 'Marinade', route: '/Category/type/marinade' },
        { title: 'Beverage', route: '/Category/type/beverage' }
      ],
      cocktails: [
        { title: 'Whith Alcohol', route: '/Category' },
        { title: 'Without Alcohol', route: '/Category' }
      ]
    }
  }
}

</script>

<style>
</style>
