<template>
  <Header/>
  <Menu />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import Menu from '@/components/menu'
import Header from '@/components/header'

</script>
<style scoped>
.container {
  margin-left: 280px;
  padding-top: 130px;
  padding-right: 30px;
}
</style>
