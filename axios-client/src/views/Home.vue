<template>
  <div class="home">
    <v-row
      class="text-center"
      justify="center"
    >
      <v-col
        cols="12"
        class="red"
      >
        <v-btn
          @click="onClick"
        >
          Click Me!
        </v-btn>
      </v-col>
    </v-row>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    onClick () {
      console.log('onClick() axios=', axios)
    }
  }
}
</script>
