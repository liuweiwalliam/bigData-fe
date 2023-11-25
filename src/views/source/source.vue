<template>
  <Form inline ref="formInline" :model="formItem" :label-width="100">
    <FormItem :label="formItemLabel.name">
      <Input type="text" v-model="formInline.user"> </Input>
    </FormItem>
    <FormItem :label="formItemLabel.type">
      <Select v-model="formItem.select">
        <Option value="all">全部</Option>
        <Option value="shanghai">关系型数据库</Option>
        <Option value="kafka">kafka</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button class="mr-20" type="primary" @click="search('formInline')"
        >搜索</Button
      >
      <Button type="primary" @click="resetForm('formInline')">重置</Button>
    </FormItem>
  </Form>
  <div class="button-container">
    <Button type="primary" class="table-button" @click="showCreat">
      创建数据连接
    </Button>
  </div>
  <TableList :formItem="formItem" ref="table" />
  <Creat :isShow="isShowCreat" @closeCreat="closeCreat" />
</template>

<script setup>
import {
  ref, onMounted, getCurrentInstance, reactive
} from 'vue'
import TableList from './table.vue'
import Creat from './creat.vue'
import lib from '../../lib/lib'

const { proxy } = getCurrentInstance()

const tableList = {}
function search() {
  proxy.$refs.table.pullData()
}

function resetForm() {}

const isShowCreat = ref(false)
const formItemLabel = {
  name: '名称',
  safe: '安全级别',
  type: '数据库类型',
}
const formItem = {
  name: 'name',
  type: '1',
}
const formInline = {
  user: '',
  password: '',
}

function showCreat() {
  console.log(123)
  isShowCreat.value = true
  console.log(isShowCreat)
}
function closeCreat() {
  isShowCreat.value = false
  console.log('closeCreat')
}
</script>

<style lang="less" scoped>
@import "../../styles/index.less";
</style>
