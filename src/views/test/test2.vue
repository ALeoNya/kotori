<template>
  <MdPreview :editorId="id" :modelValue="text" />
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { MdPreview, MdCatalog } from 'md-editor-v3';
  // preview.css相比style.css少了编辑器那部分样式
  import 'md-editor-v3/lib/preview.css';
  import { useRoute } from 'vue-router';
  const route = useRoute()
  const getId = () => {
    const route = useRoute();  
    console.log('Article ID:', route.params.id);
  }
  getId()

  // const id = 'preview-only';
  const text = ref('# Hello Editor');
  // const scrollElement = document.documentElement;

  import { selArticleById } from '@/api/api'
  const showArticle = () => {
    selArticleById(route.params.id).then(res=>{
      text.value = res.data.data.articleContent
      console.log(text.value)
    })
  }
  showArticle()
  </script>