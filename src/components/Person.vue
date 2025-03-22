<template>
    <div class="Person">
       <h2>姓名：{{ person.name }}</h2>
       <h2>年龄：{{ person.age }}</h2>
       <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
       <button @click="changeName">修改名字</button>
       <button @click="changeAge">修改年龄</button>
       <button @click="changeC1">修改第一台车</button>
       <button @click="changeC2">修改第二台车</button>
       <button @click="changeCar">修改两辆车</button>
    </div>
<!-- html -->
</template>

<script lang="ts" setup name="Person">
    import {ref,reactive,watch} from 'vue'
    let person = reactive({
        name:'张三',
        age:18,
        car:{
            c1:'benz',
            c2:'bmw'
        }
    })

    function changeC1 () {
        person.car.c1 = 'abc'
    }
    function changeC2 () {
        person.car.c2 = 'abc'
    }
    function changeCar () {
        person.car = {c1:'honda',c2:'Nissan'}
    }    
    function changeName () {
        person.name += '~'
    }
    function changeAge () {
        person.age += 1
    }
    function changePerson() {
        Object.assign(person,{name:'李四',age:12})
        //person = {name:'李四',age:12}
    }
    //监视 ref定义的
    // const x = watch(()=>{return person.car},(newValue,oldValue)=>{
    //     console.log('person变化了',newValue,oldValue)
    // },{deep:true})

    //监视多个数据
    watch([()=>person.age,person.car],(newValue,oldValue)=>{
        console.log(newValue,oldValue)
    },{deep:true})
</script>

<style scoped>
/*样式*/
    .Person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
</style>