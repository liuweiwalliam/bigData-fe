<template>
  <Table border :columns="columns" :data="list.value">
    <template #index="{ row,index }">
      <strong>{{ index }}</strong>
    </template>
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
        编辑
      </Button>
      <Button type="error" size="small" @click="remove(index)">删除</Button>
    </template>
  </Table>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import lib from '../../lib/lib'

const { formItem } = defineProps(['formItem'])
const list = reactive([])

async function pullData() {
  console.log('pullData', formItem)
  const response = await lib.fetchData(
    lib.resourceList,
    {
      filters: [],
      limit: 50,
    },
    'post'
  )
  list.value = response.data.dataSourceInfos
  console.log('response', response, list.value)
}

onMounted(async () => {
  console.log(124)
  pullData()
})
const columns = [
  {
    type: 'index',
    title: '序号',
  },
  {
    title: '名称',
    key: 'name',
  },
  {
    title: '链接信息',
    key: 'address',
  },
  {
    title: '创建者',
    key: 'creator',
  },
  {
    title: '创建时间',
    key: 'gmtCreate',
  },

  {
    title: '配置状态',
    slot: 'action',
    width: 150,
    align: 'center',
  },
  {
    title: '操作',
    slot: 'action',
    width: 150,
    align: 'center',
  },
]

function show(index) {
  this.$Modal.info({
    title: 'User Info',
    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`,
  })
}
function remove(index) {
  this.data.splice(index, 1)
}
defineExpose({
  pullData,
})
</script>
