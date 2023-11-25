<template>
  <Modal v-model="isShow"
    title="新建作业"
    @on-ok="handleSubmit('formInline')"
    @on-cancel="closeCreat">
    <Steps :current="step">
      <Step title="基本信息配置" content=""></Step>
      <Step title="任务配置" content=""></Step>
    </Steps>
    <div v-show="step === 0">
      <Form
        ref="formInline"
        :model="formItem"
        :label-width="150"
      >
        <div class="title">作业配置:</div>
        <FormItem prop="user" :label="formItemLabel.taksName" >
          <Input type="text" v-model="formItem.taksName"> </Input>
        </FormItem>
        <div class="title">源端作业配置:</div>
        <FormItem :label="formItemLabel.sourceName">
          <Select v-model="formItem.sourceName">
            <Option value="beijing">全部</Option>
            <Option value="shanghai">关系型数据库</Option>
            <Option value="shenzhen">kafka</Option>
          </Select>
        </FormItem>
        <FormItem :label="formItemLabel.sourceMode">
          <Select v-model="formItem.sourceMode">
            <Option value="junior">junior</Option>
            <Option value="middle">middle</Option>
            <Option value="shanghai">senior</Option>
            <Option value="shenzhen">super</Option>
          </Select>
        </FormItem>
        <FormItem :label="formItemLabel.tableName">
          <Input type="text" v-model="formItem.tableName"> </Input>
        </FormItem>
        <FormItem :label="formItemLabel.isSyncPk">
          <Select v-model="formItem.isSyncPk">
            <Option value="y">是</Option>
            <Option value="n">否</Option>
          </Select>
        </FormItem>
        <div class="title">目的端作业配置:</div>
        <FormItem :label="formItemLabel.destName">
          <Input type="text" v-model="formItem.destName"> </Input>
        </FormItem>
        <FormItem :label="formItemLabel.destDb">
          <Input type="text" v-model="formItem.destDb"> </Input>
        </FormItem>
        <FormItem :label="formItemLabel.destTable">
          <Input type="text" v-model="formItem.destTable"> </Input>
        </FormItem>
        <FormItem :label="formItemLabel.isAutoCreateTab">
          <Select v-model="formItem.isAutoCreateTab">
            <Option value="y">是</Option>
            <Option value="n">否</Option>
          </Select>
        </FormItem>
        <FormItem :label="formItemLabel.isCleanTab">
          <Select v-model="formItem.isCleanTab">
            <Option value="y">是</Option>
            <Option value="n">否</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="jumpStep(1)">下一步</Button>
        </FormItem>
      </Form>
    </div>
    <div v-show="step === 1">
      <Form
        ref="formInline"
        :model="formItem"
        :label-width="150"
      >
        <div class="title">任务配置:</div>
        <FormItem prop="user" :label="step2formItemLabel.groupName">
          <Select v-model="step2FormItem.groupName">
            <Option value="y">是</Option>
            <Option value="n">否</Option>
          </Select>
        </FormItem>
        <FormItem :label="step2formItemLabel.isDelete">
          <Select v-model="step2FormItem.isDelete">
            <Option value="y">是</Option>
            <Option value="n">否</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="jumpStep(0)">上一步</Button>
        </FormItem>
      </Form>
    </div>
  </Modal>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue'
import lib from '../../lib/lib'

const { proxy } = getCurrentInstance()

const { isShow } = defineProps(['isShow'])
const emit = defineEmits({
  closeCreat: () => {},
})

const step = ref(0)

function closeCreat() {
  emit('closeCreat')
}
async function postCreat() {
  const postBody = [{
    name: formItem.taksName,
    type: formItem.type,
    info: formItem,
  }]
  const respons = await lib.fetchData(lib.taskAdd, postBody, 'post')
  console.log('respons', respons)
}

function handleSubmit(name) {
  proxy.$refs[name].validate((valid) => {
    console.log('handleSubmit')
    postCreat()
    if (valid) {
      this.$Message.success('Success!')
    } else {
      this.$Message.error('Fail!')
    }
  })
}

const formItemLabel = {
  taksName: '作业名称',

  sourceName: '源链接名称',
  sourceMode: '模式或者表空间',
  tableName: '表名',
  isSyncPk: '同步主键',

  destName: '目的链接名称',
  destDb: '数据库名称',
  destTable: '表名',
  isAutoCreateTab: '是否自动创表',
  isCleanTab: '导入前清空数据',
}
const step2formItemLabel = {
  isSubmitToGroup: '是否提交到集群',
  groupName: '集群链接名',
  retry: '作业失败重试',
  // interval: "是否定时执行",
  dirtyData: '脏数据容错设置',
  maxError: '单个分片的最大错误记录数',
  isDelete: '运行完是否删除作业',
}
const formItem = {
  taksName: '',
  sourceName: '',
  sourceMode: '',
  tableName: '',
  isSyncPk: 'n',
  destName: '1',
  destDb: '1',
  destTable: 'name',
  isAutoCreateTab: 'n',
  isCleanTab: '1',
}
const step2FormItem = {
  isSubmitToGroup: 'name',
  groupName: '1',
  retry: '1',
  dirtyData: 'name',
  maxError: '1',
  isDelete: '1',
}
function jumpStep(number) {
  step.value = number
}
</script>
<style scoped>

.title{
padding-top: 20px;
padding-bottom: 5px;
}
</style>
