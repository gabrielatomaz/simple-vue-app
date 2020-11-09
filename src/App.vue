<template>
  <div id="app">
    <HelloWorld msg="Mensagem de Hello World"/>
    
    <button class="btn btn-primary" @click="loadJokes()">Atualizar</button>

    <div v-for="joke in jokes" :key="joke.id">
      <h3>{{ joke.id }}</h3>
      <p>{{ joke.joke }}</p>
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import jokesService from './services/jokesService.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return { jokes: null }
  },
  mounted() {
    this.loadJokes()
  },
  methods: {
    async loadJokes() {
      this.jokes = await jokesService.getJokes()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
