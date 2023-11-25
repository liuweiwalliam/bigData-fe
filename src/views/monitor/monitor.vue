<template>
  <div class="card-list">
    <Grid :col="6" :border="false">
    <GridItem>
      <div class="card">
        <div class="top">
          <img src="../../assets/pic/monitor-status.svg" alt="" class="data">
          5000
        </div>
        <div>实例总数</div>
      </div>
    </GridItem>
    <GridItem>
      <div class="card">
        <div class="top">
          <img src="../../assets/pic/monitor-status.svg" alt="" class="data">
          4500
        </div>
        <div>运行成功</div>
      </div>
    </GridItem>
    <GridItem>
      <div class="card">
        <div class="top">
          <img src="../../assets/pic/monitor-status.svg" alt="" class="data">
          200
        </div>
        <div>运行失败</div>
      </div>
    </GridItem>
    <GridItem>
      <div class="card">
        <div class="top">
          <img src="../../assets/pic/monitor-status.svg" alt="" class="data">
          4000
        </div>
        <div>运行中</div>
      </div>
    </GridItem>
    <GridItem>
      <div class="card">
        <div class="top">
          <img src="../../assets/pic/monitor-status.svg" alt="" class="data">
          1000
        </div>
        <div>等待中</div>
      </div>
    </GridItem>
    <GridItem>
      <div class="card">
        <div class="top">
          <img src="../../assets/pic/monitor-status.svg" alt="" class="data">
          1000
        </div>
        <div>未运行</div>
      </div>
    </GridItem>
  </Grid>
  </div>

  <Grid :col="2" class="mt-50">
        <GridItem>
          <div class="title">
        </div>
        <div class="pic" id="status">
        </div>
      </GridItem>
      <GridItem>
        <div class="title">
        </div>
        <div class="pic" id="7finish">

        </div>
      </GridItem>
      <GridItem>
        <div class="title">
        </div>
        <div class="pic" id="30finnish">
        </div>
      </GridItem>
      <GridItem>
        <div class="title">
        </div>
        <div class="pic" id="7failed">
        </div>
      </GridItem>
  </Grid>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, reactive } from 'vue'
import lib from '../../lib/lib'

const monitorData = reactive({})
const day = 1000 * 3600 * 24
function getDate(time = new Date()) {
  return `${time.getMonth() + 1}.${time.getDate()}`
}

function getDateList(dateNumber) {
  const dateList = []

  for (let i = dateNumber - 1; i >= 0; i--) {
    dateList.push(getDate(new Date(Date.now() - day * i)))
  }
  return dateList
}

function getLineBaseOption(title, data, dateNumber) {
  return {
    title: {
      text: title || '实例状态分布'
    },
    xAxis: {
      type: 'category',
      data: getDateList(dateNumber)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data,
        type: 'line'
      }
    ]
  }
}

const statusOption = {
  title: {
    text: '实例状态分布'
  },
  tooltip: {},
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '等待中'
        },
        {
          value: 234,
          name: '运行失败'
        },
        {
          value: 1548,
          name: '运行成功'
        }
      ]
    }
  ]
}

function renderChart(id, option) {
  const container = document.getElementById(id)
  const myChart = echarts.init(container)
  myChart.setOption(option)
}
function initChart() {
  renderChart('status', statusOption)
  renderChart('7finish', getLineBaseOption('近7日完成情况', [120, 476, 67, 787, 89, 90, 45], 7))
  renderChart('30finnish', getLineBaseOption('近30天累计完成情况', [120, 200, 150, 23, 67, 90, 89, 54, 45, 56, 44, 56, 56, 56, 3, 4, 34, 34, 22], 30))
  renderChart('7failed', getLineBaseOption('近7日失败情况', [898, 200, 150, 899, 889, 900, 456], 7))
}
async function pullData() {
  console.log('pullData')
  const response = await lib.fetchData(
    lib.monitorApi,
    { },
    'post'
  )
  monitorData.value = response.data
  initChart()
  console.log('response', response, monitorData.value)
}

onMounted(() => {
  pullData()
  console.log('renderChart')
  // renderChart('status', statusOption)
  // renderChart('7finish', getLineBaseOption('近7日完成情况', [120, 476, 67, 787, 89, 90, 45], 7))
  // renderChart('30finnish', getLineBaseOption('近30天累计完成情况', [120, 200, 150, 23, 67, 90, 89, 54, 45, 56, 44, 56, 56, 56, 3, 4, 34, 34, 22], 30))
  // renderChart('7failed', getLineBaseOption('近7日失败情况', [898, 200, 150, 899, 889, 900, 456], 7))
})
</script>

<style lang="less" scoped>
.card-list{
  height: 150px;
}
.card {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 178px;
  height: 100px;
  background: inherit;
  background-color: rgba(243, 249, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(27, 147, 254, 1);
  border-radius: 8px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #1b93fe;
  text-align: center;
  .top{
    padding-top: 15px;
    font-size: 28px;
    .data{
      width: 21px;
      height: 28px;
    }
  }
  .bottom{
    margin-top: 5px;
    font-size: 16px;
  }

}
.pic{
  width: 500px;
  height: 400px;
}
</style>
