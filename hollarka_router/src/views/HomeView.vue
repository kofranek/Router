<script setup>
import { ref } from 'vue'
import examples from '../data.json'
</script>

<template>
<main>


  <h1>Ukázky výukových simulátorů metabolismu železa</h1>
    <div class="card">
      <div v-for="example in examples" :key="example.id">
        <div>
        <a :href="example.html" target="_blank" >
          {{ example.title }}
        </a> 
        </div>
      </div>
    </div>
  
</main>
</template>
