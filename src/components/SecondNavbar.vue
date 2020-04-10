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
          class="backgroundColor"
          v-for="item in links"
          :key="item.title"
          :to="item.route"
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
          v-for="item in links"
          :key="item.title"
          :to="item.route"
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
          Theme
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.route"
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
          Product
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.route"
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
          Children
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.route"
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
          v-for="item in links"
          :key="item.title"
          :to="item.route"
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
      links: [
        { title: 'Breakfast', route: '/' },
        { title: 'Main Dish', route: '/' },
        { title: 'Dessert', route: '/' }
      ]
    }
  }

}
</script>

<style>
.backgroundColor{
  background-color: white;
}
</style>
