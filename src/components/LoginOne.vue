<template>
  <!-- 选择登录注册 -->
    
    <div id="login">
        <h2>这里是登录页面</h2>
        <input type="text" v-model="name" placeholder="请输入你的账号名">
        <input type="text" v-model="password" placeholder="请输入你的密码">
        <button @click="login()">登录</button><br>
        <div> {{ message }} </div>
    </div>
</template>

<script>
       const axios=require('axios').default
       export default {
         name:"LoginOne",
            data(){
                return {
                    name:"",
                    password:"",
                    uid:"",
                    message:"",
                }
            },
            methods:{
                // 判断数据库是否有这个账号密码
                login(){
                    axios.get('/api/login/',{params: {name: this.name, password: this.password}}).then(()=>{
                        this.message = "登录成功；";
                        }).catch((err) => {
                            console.log(err);
                        })
                }
            }
        }
</script>
<style scoped>

</style>