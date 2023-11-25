<template>
  <Table border :columns="columns" :data="list.value">

    <template #status="{ row }">
      {{ lib.taskStatusMap[row.status] }}
    </template>
    <template #linkInfo="{ row }">
      <p>数据库链接类型{{ row.name }}</p>
      <p>端口{{ row.name }}</p>
      <p>服务器IP{{ row.name }}</p>
      <p>数据库名称{{ row.sourceName }}</p>
      <p>用户名{{ row.name }}</p>
    </template>
    <template #action="{ row, index }">
      <Button
        type="primary"
        size="small"
        style="margin-right: 5px"
        class="mr-5"
        @click="show(index)"
      >
        编辑
      </Button>
      <Button type="error" size="small" class="mr-5" @click="remove(index)"
        >删除</Button
      >
      <Button size="small" @click="remove(index)" class="mr-5">启动</Button>
      <Button size="small" @click="remove(index)" class="mr-5">停止</Button>
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
    lib.taskList,
    {
      filters: [],
      limit: 50,
    },
    'post'
  )
  list.value = response.data.tasks
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
    key: 'taskName',
  },
  {
    title: '链接信息',
    key: 'linkInfo',
    slot: 'linkInfo',
    width: 200,
  },
  {
    title: '创建者',
    key: 'creator',
  },
  {
    title: '最后更新时间',
    key: 'gmtModified',
  },
  {
    title: '任务启动时间',
    key: 'address',
  },
  {
    title: '写入统计',
    align: 'center',
  },
  {
    title: '状态',
    key: 'status',
    slot: 'status',
  },
  {
    title: '操作',
    slot: 'action',
    width: 300,
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
</script>
