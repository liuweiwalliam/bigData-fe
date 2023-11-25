<template>
  <div class="header">
    <div>
      <img src="../assets/pic/logo.png" alt="" class="pic">
    </div>
    <div class="title">数据同步大师</div>
  </div>
</template>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  height: 60px;
  width: 100vw;
  background-color: @Blue;
  z-index: 9;
  display: flex;
  .pic{
    width: 35px;
    height: auto;
    margin-top: 12px;
    margin-left: 20px;

  }
  .title{
    margin-left: 20px;
    line-height: 60px;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    color: #FFFFFF;
    text-align: left;
  }
}
</style>
