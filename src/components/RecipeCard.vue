<template>
  <v-card
  :to="route"
  outlined>
      <v-row>
        <v-col cols="5">
          <v-avatar
          class="ma-3"
          size="200"
          width="100%"
          tile
          >
          <v-img :src="src"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="7">
            <b
            class="title"
            v-text="title"
            ></b>
        </v-col>
      </v-row>
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
