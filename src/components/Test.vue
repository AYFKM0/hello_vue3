<template>
    <div class="Test">
       <ul>
            <li v-for="person in list" :key="person.id">
                {{ person.id }} -- {{ person.name }} -- {{ person.age }}
            </li>
       </ul>
    </div>
</template>

<script lang="ts" setup name="Test">
    import { defineProps,withDefaults } from 'vue'
    import {type Persons} from '@/types'
    //只接收list
    // let x = defineProps(['list'])

    //接收list + 限制类型
    // defineProps<{list:Persons}>()

    //接收list + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(defineProps<{list?:Persons}>(),{
        list:()=>[{id:'abc01',name:'康师傅',age:10}]
    })

</script>

<style scoped>
/*样式*/
    .Test {
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