<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink> -->

        <!-- 第二种写法 -->
         <RouterLink 
          :to="{
            name:'详情',
            query:{
              id:news.id,
              title:news.title,
              content:news.content,
            }
            }">
         {{ news.title }}
         </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
     <div class="news-content">
      <RouterView></RouterView><!--渲染当前路由对应的组件 -->
     </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue';
  import { RouterView,RouterLink,useRouter } from 'vue-router';
  const newsList = reactive([
    {id:'gfdjhgdf01',title:'ABC',content:'西兰花'},
    {id:'gfdjhgdf02',title:'DEF',content:'IT已死'},
    {id:'gfdjhgdf03',title:'GHI',content:'周末快乐'},
    {id:'gfdjhgdf04',title:'JKL',content:'马上清明'},
    {id:'gfdjhgdf05',title:'MNO',content:'跳楼坠亡'},
  ])
  const router = useRouter()

  interface NewsInter {
    id:string,
    title:string,
    content:string
  }

  function showNewsDetail(news:NewsInter){
    router.replace({
      name:'详情',
      query:{
        id:news.id,
        title:news.title,
        content:news.content,
      }
    })
  }
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color:#64967E
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>