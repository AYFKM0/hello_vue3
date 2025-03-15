<template>
    <div class="Sum">
       <h2>当前求和为：{{ sum }}</h2>
       <button @click="changeSum">sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Sum">
    import {ref,watch} from 'vue'

    let sum = ref(0)

    function changeSum(){
        sum.value += 1
    }

    watch(sum,(newValue,oldValue)=>{
        if(newValue==10){
            console.log('sum已经到10了')
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