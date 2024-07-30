<template>
    <div class="flex m-2 p-2">
        <i class="fa-solid fa-arrow-left" @click="$emit('previousPage')"></i>
        <div v-for="page in formatedPages()" :key="page">
          <span @click="$emit('selectedPage', page)">{{ page }}</span>
        </div>
        <i class="fa-solid fa-arrow-right" @click="$emit('nextPage')"></i>
    </div>
</template>
<script setup>
const props = defineProps({
  currentPage: Number,
  totPages: Number,  
})

const formatedPages = () => {
  return Array.from({ length: props.totPages }, (_, i) => i + 1);
}

</script>