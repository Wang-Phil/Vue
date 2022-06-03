<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <nav>
    <router-link to="/register">Register</router-link>
  </nav>
  <nav>
    <router-link to="/login">Login</router-link>
  </nav>
  <nav>
    <router-link to="/verify">Verify</router-link>
  </nav>
  <nav>
    <router-link to="/logout">Logout</router-link>
  </nav>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
