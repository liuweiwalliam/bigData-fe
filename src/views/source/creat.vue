<template>
  <Modal
    v-model="isShow"
    :loading="btnLoading"
    title="创建数据库链接"
    @on-ok="handleSubmit('formInline')"
    @on-cancel="closeCreat"
  >
    <Form
      ref="formInline"
      :model="formItem"
      :rules="ruleInline"
      :label-width="100"
    >
      <FormItem prop="password" :label="formItemLabel.type">
        <Select v-model="formItem.type">
          <Option value="1">关系型数据库</Option>
          <Option value="2">kafka</Option>
        </Select>
      </FormItem>
      <FormItem prop="user" :label="formItemLabel.dbLinkname">
        <Input
          type="text"
          v-model="formItem.dbLinkname"
        >
        </Input>
      </FormItem>

      <div v-if="formItem.type === '1'">
        <FormItem prop="password" :label="formItemLabel.dbType">
          <Select v-model="formItem.dbType">
            <Option value="oracle">oracle</Option>
            <Option value="mysql">mysql</Option>
          </Select>
        </FormItem>
        <FormItem prop="password" :label="formItemLabel.server">
          <Input type="text" v-model="formInline.server" >
          </Input>
        </FormItem>
        <FormItem prop="password" :label="formItemLabel.port">
          <Input type="text" v-model="formInline.port" >
          </Input>
        </FormItem>
        <FormItem prop="password" :label="formItemLabel.dbName">
          <Input type="text" v-model="formInline.dbName" >
          </Input>
        </FormItem>
        <FormItem prop="password" :label="formItemLabel.userName">
          <Input type="text" v-model="formInline.userName" >
          </Input>
        </FormItem>
        <FormItem prop="password" :label="formItemLabel.password">
          <Input type="text" v-model="formInline.password" >
          </Input>
        </FormItem>
      </div>
      <div v-if="formItem.type === '2'">
        <FormItem prop="password" :label="formItemLabel.broker">
          <Input type="text" v-model="formInline.kafka_broker" >
          </Input>
        </FormItem>
        <FormItem prop="password" :label="formItemLabel.authType">
          <Select v-model="formItem.auth_type">
            <Option value="no_auth">不认证</Option>
            <Option value="password">密码认证</Option>
          </Select>
        </FormItem>`
      </div>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">测试</Button>
      </FormItem>
    </Form>
  </Modal>
</template>
<script setup>
import { ref, getCurrentInstance, reactive } from 'vue'
import lib from '../../lib/lib'

const { proxy } = getCurrentInstance()
const btnLoading = ref(false)
const { isShow } = defineProps(['isShow'])
const emit = defineEmits({
  closeCreat: () => {},
})
function closeCreat() {
  emit('closeCreat')
}
const formItemLabel = {
  type: '数据链接类型',
  dbLinkname: '数据链接名称',
  dbType: '数据库类型',
  server: '数据库服务器',
  port: '端口',
  dbName: '数据库名称',
  userName: '用户名',
  password: '密码',
  broker: 'Kafka  broker',
  authType: '认证类型'
}
const formItem = reactive({
  type: '',
  dbLinkname: '',
  dbType: '',
  server: '',
  port: '',
  dbName: '',
  userName: '',
  password: '',
  kafka_broker: '',
  auth_type: 'no_auth'

})
const formInline = {
  user: '',
  password: '',
}
const ruleInline = {
  user: [
    // {
    //   required: true,
    //   message: "Please fill in the user name",
    //   trigger: "blur",
    // },
  ],
  password: [
    // {
    //   required: true,
    //   message: "Please fill in the password.",
    //   trigger: "blur",
    // },
    // {
    //   type: "string",
    //   min: 6,
    //   message: "The password length cannot be less than 6 bits",
    //   trigger: "blur",
    // },
  ],
}
async function postCreat() {
  const postBody = [{
    name: formItem.dbLinkname,
    type: Number(formItem.type),
    info: JSON.stringify(formItem),
  }]
  const respons = await lib.fetchData(lib.resourceAdd, postBody, 'post')
  btnLoading.value = false
  emit('closeCreat')
  console.log('respons', respons)
}

function handleSubmit(name) {
  proxy.$refs[name].validate((valid) => {
    console.log('handleSubmit', formItem)
    postCreat()
    if (valid) {
      this.$Message.success('Success!')
    } else {
      this.$Message.error('Fail!')
    }
  })
}
</script>
