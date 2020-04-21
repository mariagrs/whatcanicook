<template>
   <div class="text-right mb-5">
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
</template>

<script>

export default {
  methods: {
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
