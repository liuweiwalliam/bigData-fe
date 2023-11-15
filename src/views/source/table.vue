<template>
  <Table border :columns="columns" :data="data">
    <template #name="{ row }">
      <strong>{{ row.name }}</strong>
    </template>
    <template #action="{ row, index }">
      <Button
        type="primary"
        size="small"
        style="margin-right: 5px"
        @click="show(index)"
      >
        View
      </Button>
      <Button type="error" size="small" @click="remove(index)">Delete</Button>
    </template>
  </Table>
</template>
<script setup>
const columns = [
  {
    title: "序号",
    key: "age",
  },
  {
    title: "名称",
    key: "address",
  },
  {
    title: "链接信息",
    key: "address",
  },
  {
    title: "创建者",
    key: "address",
  },
  {
    title: "创建时间",
    key: "address",
  },
  {
    title: "安全级别",
    key: "address",
  },
  {
    title: "配置状态",
    slot: "action",
    width: 150,
    align: "center",
  },
  {
    title: "操作",
    slot: "action",
    width: 150,
    align: "center",
  },
];
const data = [
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
  },
];

function show(index) {
  this.$Modal.info({
    title: "User Info",
    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`,
  });
}
function remove(index) {
  this.data.splice(index, 1);
}
</script>
