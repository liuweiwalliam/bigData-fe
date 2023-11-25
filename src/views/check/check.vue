t
<template>
  <Form
    inline
    ref="formInline"
    :model="formItem"
    :label-width="100"
  >
    <FormItem :label="formItemLabel.table">
      <Select v-model="formItem.name" width="150">
        <Option value="junior">数据1</Option>
        <Option value="middle">数据2</Option>
        <Option value="shanghai">数据3</Option>
        <Option value="shenzhen">数据4</Option>
      </Select>
    </FormItem>
    <FormItem :label="formItemLabel.fields">
      <Select multiple v-model="formItem.fileds">
        <Option value="beijing">字段1</Option>
        <Option value="shanghai">字段2</Option>
        <Option value="shenzhen">字段3</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')" class="mr-20">查询</Button>
      <Button type="primary" @click="reset">重置</Button>
    </FormItem>
  </Form>
  <div>
    <Info />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Info from './info.vue'

// const isShowCreat = ref(true)
const formItemLabel = {
  table: '数据表名称',
  fields: '选择比对字段',
}
const formItem = reactive({
  name: '',
  fileds: [],
})
function handleSubmit(name) {
  console.log('formItem', formItem)
}
function reset() {
  formItem.name = ''
  formItem.fileds = []
  console.log('reset', formItem)
}
</script>

<style lang="less" scoped></style>
