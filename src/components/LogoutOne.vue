<template>
  <div class="logout">
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
      <button @click="logout()">Submit</button>
    </p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
const axios=require('axios').default
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "LogoutOne",
  data(){
    return {
      msg: "",
    }
  },
  methods:{
    logout(){
      let form=new FormData()
      form.set('id',this.uid)
      form.set('token',this.token)
      axios.put('/api/logout',form).then(()=>{
        this.msg="Successfully logged out!"
      }).catch((error)=>{
        this.msg='error'
        console.log(error);
      })
   }
  }
}
</script>

<style scoped>

</style>