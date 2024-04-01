<template>
  <MdPreview :modelValue="state.text" :editorId="state.id" :theme="state.theme" />
  <MdCatalog :editorId="state.id" :scrollElement="scrollElement" :theme="state.theme" />
</template>

<script setup>
import { reactive } from 'vue';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const state = reactive({
  theme: '',
  text: '标题',
  id: 'my-editor'
});
import { selArticleById } from '@/api/api'
const showArticle = () => {
    selArticleById(25).then(res=>{
      state.text = res.data.data.articleContent
      console.log(res.data.data.articleContent)
      console.log(state.text)
    })
  }
showArticle() 
const scrollElement = document.documentElement;
</script>