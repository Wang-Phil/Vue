<template>
  <div class="verify">
    <p>
      <label for="uid">User id: </label>
      <input id="uid"
             v-model="uid"
      />
    </p>
    <p>
      <label for="token">User token: </label>
      <input id="token"
             v-model="token"
      />
    </p>
    <p>
      <button @click="verify()">Submit</button>
    </p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
const axios=require('axios').default
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "VerifyOne",
  data(){
    return {
      msg: "",
    }
  },
  methods:{
    verify(){
      axios.get('/api/verify', {params: {id: this.uid, token: this.token}}).then(() => {
        this.msg = 'User credentials are correct.'
      }).catch((error) => {
        this.msg = 'error'
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>