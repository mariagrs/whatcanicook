<template>
  <v-card
  :to="route">
    <v-img
      :src="src"
      class="white--text align-end text-no-wrap"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <p class ="text-wrap font-weight-medium" v-text="title"></p>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: [
    'title',
    'src',
    'route'
  ],
  data: () => ({
  })
}
</script>
