<template>
  <!-- 选择登录注册 -->
    <!-- 实现注册功能 -->
    
    <div id="register">
        <h2>这里是注册页面</h2>
        <input type="text" placeholder="请输入你的账号名">
        <input type="text" placeholder="请输入你的密码">
        <button>注册</button>
    </div>
</template>


<script>
       const axios=require('axios').default
       export default {
         name:"RegisterOne",
            data(){
                return {
                    name:"",
                    password:"",
                    uid:"",
                }
            },
            methods:{
                login(){
                    axios.get('/api/register/',{params: {name: this.name, password: this.password}}).then((response)=>{
                            console.log(response);
                        }).catch((err) => {
                            console.log(err);
                        })
                }
            }
        }
</script>
<style scoped>

</style>