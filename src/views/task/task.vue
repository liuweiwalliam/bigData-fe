t
<template>
  <Form
    inline
    ref="formInline"
    :model="formItem"
    :rules="ruleInline"
    :label-width="100"
  >
    <FormItem prop="user" :label="formItemLabel.name">
      <Input type="text" v-model="formInline.user" >
      </Input>
    </FormItem>
    <FormItem prop="password" :label="formItemLabel.status">
      <Select v-model="formItem.select">
        <Option value="0">未启动</Option>
        <Option value="1">运行中</Option>
        <Option value="2">运行成功</Option>
        <Option value="3">运行失败</Option>
        <Option value="4">等待中</Option>
      </Select>
    </FormItem>

    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')" class="mr-20">搜索</Button>
      <Button type="primary" @click="handleSubmit('formInline')">重置</Button>
    </FormItem>
  </Form>

  <div class="button-container">
    <Button type="primary" @click="showCreat" class="table-button">
      新建作业
    </Button>
  </div>
  <TableList :formItem="formItem" ref="table" />
  <Creat :isShow="isShowCreat" @closeCreat="closeCreat" />
</template>

<script setup>
import { ref } from 'vue'
import lib from '../../lib/lib'

import TableList from './table.vue'
import Creat from './creat.vue'

const isShowCreat = ref(false)

const formItemLabel = {
  time: '是否定时',
  status: '状态',
  name: '作业名称或连接信息',
}
const formItem = {
  name: 'name',
  safe: '1',
  type: '1',
}
const formInline = {
  user: '',
  password: '',
}
const ruleInline = {
  user: [
    {
      required: true,
      message: 'Please fill in the user name',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: 'Please fill in the password.',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 6,
      message: 'The password length cannot be less than 6 bits',
      trigger: 'blur',
    },
  ],
}
function handleSubmit(name) {
  this.$refs[name].validate((valid) => {
    if (valid) {
      this.$Message.success('Success!')
    } else {
      this.$Message.error('Fail!')
    }
  })
}
function showCreat() {
  isShowCreat.value = true
}
function closeCreat() {
  isShowCreat.value = false
}
</script>

<style lang="less" scoped>
@import "../../styles/index.less";
</style>
