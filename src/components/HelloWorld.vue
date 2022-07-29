<script setup lang="ts">
import { ref } from 'vue'
import { fs } from '../electron';

defineProps<{ msg: string }>()

function createFile() {
  console.log(process.env.HOME)
  
  fs.writeFile(process.env.HOME+"/Library/tt.txt", "hello world", err => {
    if (err) {
      console.log(err)
    }
  })
}

function delFile() {
  fs.unlink(process.env.HOME+"/Library/tt.txt", err => {
    if (err) {
      console.log(err)
    }
  })
}

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="createFile">创建文件</button>
    <button type="button" @click="delFile">删除文件</button>

    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
