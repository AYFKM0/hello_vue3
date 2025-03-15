<template>   
    <Person/>
<!-- html -->
</template>

<script lang="ts">
//js or ts
    import Person from './components/Person.vue';
    import Car from './components/Car.vue'
    import Name from './components/Name.vue';
    import Sum from './components/Sum.vue';
    export default {
        name:'App',//组件名
        components:{Person,Car,Name,Sum}//注册组件
    }
</script>

<style>
/*样式*/
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>