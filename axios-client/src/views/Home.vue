<template>
  <div class="home">
    <v-row
      class="text-center"
      justify="center"
    >
      <v-col
        cols="12"
        class="grey"
      >
        <v-badge
          class="ma-4"
          overlap
          :color="statusColor"
          :content="statusCode"
        >
          <v-btn
            @click="onClick"
          >
            Click Me!
          </v-btn>
        </v-badge>
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
  data: () => ({
    statusCode: null
  }),
  computed: {
    statusColor () {
      if (this.statusCode === 200) {
        return 'green'
      } else {
        return 'red'
      }
    }
  },
  methods: {
    async onClick () {
      try {
        const API_URL = '/users'
        const res = await axios.get(API_URL)
        console.log('@dbg axios-res=', res)
        if (res.status !== 200) {
          throw new Error(`API POST ${API_URL} error: ${res.status}`)
        }
        this.statusCode = res.status
      } catch (err) {
        this.statusCode = err
        console.log('@dbg axios-err=', err)
      }
    }
  }
}
</script>
