<template>
  <div class="time">
    <img src="../../assets/pic/time.png" alt="" class="calendar">
    校对截止时间 2023年10月31号   22:15:23
  </div>
  <DescriptionList layout="vertical">
    <Description term="数据源端:mysql">
      <List   border>
        <ListItem>数据量：50000条</ListItem>
        <ListItem>字段1： 有效 4998,空 2</ListItem>
        <ListItem>字段2： 有效 8，空 4992</ListItem>
        <ListItem>字段3： 有效 102，空 4898</ListItem>
      </List>
    </Description>
    <Description term="数据接收端:hudi">
      <List   border>
        <ListItem>数据量：4995条</ListItem>
        <ListItem>字段1：  有效 4995,空 0</ListItem>
        <ListItem>字段2： 有效 4990，空 5</ListItem>
        <ListItem>字段3： 有效 92，空 4903</ListItem>
      </List>
    </Description>
    <Description term="差异">
      <List   border>
        <ListItem>数据量：5条</ListItem>
        <ListItem>字段1：  9</ListItem>
        <ListItem>字段2： 6</ListItem>
        <ListItem>字段3： 13</ListItem>
      </List>
      </Description>
  </DescriptionList>
</template>

<script setup></script>

<style lang="less" scoped>
.time{
  color: #FB1919;
  margin-bottom: 20px;
  .calendar{
    width: 23px;
    height: 23px;
    position: relative;
    top:7px
  }
}
</style>
