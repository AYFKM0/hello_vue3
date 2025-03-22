<template>
    <div class="Hooks">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">+1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index" alt="柯基图片">
        <br>
        <button @click="getDog">再来一只小狗</button>
    </div>
</template>

<script lang="ts" setup name="Hooks">
    import  {ref,reactive} from 'vue'
    import axios from 'axios'

    //https://dog.ceo/api/breed/pembroke/images/random
    //数据
    let sum = ref(0)
    let dogList = reactive([
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_6655.jpg',
    ])
    //方法
    function add(){
        sum.value ++
    }
    async function getDog(){
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data)
            let url = result.data.message
            dogList.push(url)
        } catch (error){
            alert(error)
        }
    }
</script>

<style scoped>
/*样式*/
    .Hooks {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
    img {
        height: 100px;
        margin-right: 10px;
    }
</style>