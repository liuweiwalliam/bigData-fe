import axios from 'axios'

const fetchData = (url, params, method = 'get') => new Promise((resolve) => {
  axios[method](url, params).then((response) => {
    resolve(response.data)
  }).catch((error) => {
    console.log(1)
    resolve(error)
  }).catch((error) => {
    console.log(2)
    Promise.resolve(error?.response?.data || error)
  })
})

const taskStatusMap = {
  0: '未运行',
  1: '运行中',
  2: '运行成功',
  3: '运行失败',
  4: '等待中',
}
// const host = 'http://116.205.189.139:8088'
const host = 'http://120.196.99.195:8088'

export default {
  fetchData,
  taskStatusMap,
  resourceList: `${host}/BigData/DescribeAllDataSourceInfos`,
  resourceAdd: `${host}/BigData/CreateDataSourceInfos`,
  resourceDelete: `${host}/BigData/DeleteDataSourceInfo`,
  taskList: `${host}/BigData/DescribeAllTasks`,
  taskAdd: `${host}/BigData/CreateTasks`,
  taskDelete: `${host}/BigData/DeleteTask`,
  monitorApi: `${host}/BigData/MonitorTask`,
}
