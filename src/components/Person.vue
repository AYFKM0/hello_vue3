<template>
    <div class="Person">
       <h2>姓名：{{ person.name }}</h2>
       <h2>年龄：{{ person.age }}</h2>
       <button @click="changeName">修改名字</button>
       <button @click="changeAge">修改年龄</button>
       <button @click="changePerson">修改整个人</button>
    </div>
<!-- html -->
</template>

<script lang="ts" setup name="Person">
    import {ref,watch} from 'vue'
    let person = ref({
        name:'张三',
        age:18,

    })


    function changeName () {
        person.value.name += '~'
    }
    function changeAge () {
        person.value.age += 1
    }
    function changePerson() {
        person.value = {name:'李四',age:12}
    }
    //监视 ref定义的
    const x = watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue)
        // if (newValue.name=='李四'){
        //     x()
        // }
    },{deep:true,immediate:true})
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