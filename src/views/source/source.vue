<template>
  <Form
    ref="formInline"
    :model="formItem"
    :rules="ruleInline"
    inline
    :label-width="100"
  >
    <FormItem prop="user" :label="formItemLabel.name">
      <Input type="text" v-model="formInline.user" placeholder="Username">
      </Input>
    </FormItem>
    <FormItem prop="password" :label="formItemLabel.safe">
      <Select v-model="formItem.select">
        <Option value="junior">junior</Option>
        <Option value="middle">middle</Option>
        <Option value="shanghai">senior</Option>
        <Option value="shenzhen">super</Option>
      </Select>
    </FormItem>
    <FormItem prop="password" :label="formItemLabel.type">
      <Select v-model="formItem.select">
        <Option value="beijing">全部</Option>
        <Option value="shanghai">关系型数据库</Option>
        <Option value="shenzhen">kafka</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">搜索</Button>
      <Button type="primary" @click="handleSubmit('formInline')">重置</Button>
    </FormItem>
  </Form>
  <div>
    <Button type="primary" @click="handleSubmit('formInline')">
      创建数据连接
    </Button>
  </div>
  <TableList />
</template>

<script setup>
import TableList from "./table.vue";
const formItemLabel = {
  name: "名称",
  safe: "安全级别",
  type: "数据库类型",
};
const formItem = {
  name: "name",
  safe: "1",
  type: "1",
};
const formInline = {
  user: "",
  password: "",
};
const ruleInline = {
  user: [
    {
      required: true,
      message: "Please fill in the user name",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please fill in the password.",
      trigger: "blur",
    },
    {
      type: "string",
      min: 6,
      message: "The password length cannot be less than 6 bits",
      trigger: "blur",
    },
  ],
};
function handleSubmit(name) {
  this.$refs[name].validate((valid) => {
    if (valid) {
      this.$Message.success("Success!");
    } else {
      this.$Message.error("Fail!");
    }
  });
}
</script>

<style lang="less" scoped></style>
