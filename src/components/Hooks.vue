<template>
    <div class="Hooks">
        <h2>当前求和为：{{ bigSum }}</h2>
        <button @click="add">+1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index" alt="柯基图片">
        <br>
        <button @click="getDog">再来一只小狗</button>
    </div>
</template>

<script lang="ts" setup name="Hooks">
    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';

    const {sum,add,bigSum} = useSum()
    const {dogList,getDog} = useDog()



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