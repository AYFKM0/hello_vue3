<template> 
    <!-- <Test :list="personList"/> -->
    <Hooks/>
</template>

<script lang="ts" setup name ="App">
//js or ts
    import Hooks from './components/Hooks.vue';
    import Lifecycle from './components/Lifecycle.vue';
    import Test from './components/Test.vue';
    import Person from './components/Person.vue';
    import Car from './components/Car.vue'
    import Name from './components/Name.vue';
    import Sum from './components/Sum.vue';

    
</script>

<style scoped>
/*样式*/
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>