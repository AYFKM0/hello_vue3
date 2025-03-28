<template>
    <div class="Sum">
       <h2>当前求和为：{{ sum }}</h2>
       <button @click="changeSum">sum+1</button>
       <button @click="changeMin">minus-1</button>
    </div>
</template>

<script lang="ts" setup name="Sum">
    import {ref,watch,watchEffect} from 'vue'

    let sum = ref(0)
    let minus = ref(10)

    function changeSum(){
        sum.value ++
    }
    function changeMin(){
        minus.value --
    }

    // watch([sum,minus],(value)=>{
    //     //解构赋值
    //     let [newsum,newminus] = value
    //     console.log(newsum,newminus)

    // })

    watchEffect(()=>{
        if(sum.value >= 10){
            console.log('abc')
        }
    })
</script>

<style scoped>
/*样式*/
    .Sum {
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