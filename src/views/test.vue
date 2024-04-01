<template>
<section id="update" class="update js-section">
      <div class="update__inner js-obs">
        <div class="update__contents">
          <div class="update__box update__news">
            <div class="update__subtitle js-obs ani-fadeup">
              <div class="update__subtitle--link">
                <a><span class="u-font-futura" @click="prevPage">PREV</span><span class="icon-arrow"></span></a>
                <a><span class="u-font-futura" @click="nextPage">NEXT</span><span class="icon-arrow"></span></a>
              </div>
            </div>
            <div class="left_right">
              <ul class="update__news--list">
              <li class="update__news--item js-obs ani-faderight ani-delay"
                v-for="(item, id) in showList"  
                :key="id"  
              > 
                <div>
                  <a href="" class="update__news--link">
                    <!-- 文章标题 -->
                    <p class="update__news--title">{{ item.articleTitle }}</p> 
                    <!-- 内容介绍 -->
                    <p class="update__news--title">{{ item.articleAbstract }}</p> 
                    <!-- 创建时间 -->
                    <p class="update__news--date"> 
                      {{ item.createTime }}       <span class="update__news--arrow icon-arrow"></span>
                    </p>
                  </a>
                </div>
                <div class="updata__news--pic">
                  <img class="lazyLoad" id="post-th-4603" src="https://2heng.xin/wp-content/uploads//2023/10/IMG_20231006_114356-1024x769.jpg" onerror="imgError(this,3)" data-src="https://2heng.xin/wp-content/uploads//2023/10/IMG_20231006_114356-1024x769.jpg">
                </div>
              </li>
              </ul>
            </div>
            <!--./update__news--list-->
          </div>          
          </div>
        </div>
    </section>
    <!--./update-->


  <!--./footer-->

  <!-- 背景x1 -->
</template>
<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue'
import MyIcon from '@/assest/img/common/icon/icon-arrow-large.svg'; 

// 刷新如何清空状态重新刷新？  
const pageid = ref('top');  
const checkAndAddClass = () => {
  setTimeout(()=>{
    const elements = document.querySelectorAll('.js-obs') as NodeListOf<HTMLElement>;  
    if (pageid.value === 'top') {
      document.body.classList.add('-loaded');
      elements.forEach((element) => {  
      if (!element.classList.contains('-inview')) {  
        element.classList.add('-inview');  
      }   
    })
  }  
  },700)  
};  
// 在组件挂载后执行该函数  
onMounted(checkAndAddClass);

// Article list
const showList = ref<any[]>([]);  
// Page 还需要数据库总长度进行判断or查询为null判断
import { sendPageNum } from '../api/api'
let pageNum = ref(1)
const sendPageInfo = () => {
  sendPageNum(pageNum.value).then(res=> {
    // 不为null    
    if(res.data.data==null) {
      pageNum.value = pageNum.value - 1
      console.log(pageNum.value)
    } else {
      showList.value = res.data.data
      console.log(showList.value)
    }
  })
}
// 初始化列表：first page
sendPageInfo()

// NEXT
const nextPage = () => {
  pageNum.value = pageNum.value+1
  // reset showList
  sendPageInfo()
}
// PREV
const prevPage = () => {
  pageNum.value = pageNum.value-1 //0=>-1
  if(pageNum.value < 1) {
    pageNum.value = 1
    sendPageInfo()
  } else {
    console.log(pageNum.value)
    // reset showList
    sendPageInfo()
  }
}

</script>
<style scoped>
  @import '../assest/css/common.css';
 @import '../assest/css/articleList.css'
</style>