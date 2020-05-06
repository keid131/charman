<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        nuxt
        to="/test"
        class="mx-auto"
      >
        <img src="~/static/white_shirt.png" width="100%" />

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn text>NEW ITEM</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),
  }
</script>