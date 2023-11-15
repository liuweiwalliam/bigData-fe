<template>
    head
  <Menu/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script setup>
import Menu from '@/components/menu'

</script>
<style scoped>
.container{
  margin-left: 280px;
  margin-top: 200px;
}
</style>
