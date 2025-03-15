<template>
    <div class="Car">
       <h2>车辆信息：一辆{{ car.brand }},价值{{ car.price }}万</h2>
       <button @click="changeBrand">修改汽车品牌</button>
       <button @click="changePrice">修改汽车价格</button>
       <button @click="changeCar">修改汽车</button>
       <br>
       <h2>游戏列表：</h2>
       <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
       </ul>
       <button @click="changeFirstGame">修改第一个游戏名字</button>
       <hr>
       <h2>当前求和为:{{ sum }}</h2>
       <button @click="changeSum">sum + 1</button>
    </div>
    
<!-- html -->
</template>

<script lang="ts" setup name="Car">
    import { reactive, ref } from 'vue';
    //数据
    let car = ref({brand:'benz',price:100})
    let games = ref([
        {id:'Cs2',name:'反恐精英2'},
        {id:'Overwatch',name:'守望先锋'},
        {id:'Apex',name:'Apex'},
    ])
    
    let sum = ref(0)
    
    

    //方法
    function changeBrand() {
        car.value.brand = 'BMW'
    }

    function changePrice() {
        car.value.price += 10
    }

    function changeCar() {
        //car = reactive({brand:'volks wagen',price:50})
        //Object.assign(car,{brand:'volks wagen',price:50})//js中的写法
        car.value = {brand:'volks wagen',price:50}
        console.log(car)
    }

    function changeFirstGame() {
        games.value[0].name = '反恐精英起源'
    }

    function changeSum() {
        sum.value += 1
    }

    
   
</script>

<style scoped>
/*样式*/
    .Car {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
    li {
        font-size: 20px;
    }

</style>