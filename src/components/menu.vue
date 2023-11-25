<template>
  <div class="menu">
    <Row>
      <Col span="8">
        <Menu open-names="['1']">
          <!-- <Submenu name="1"> -->
            <!-- <template #title>
              <Icon type="ios-paper" />
              内容管理
            </template> -->
            <router-link to="/source">
              <MenuItem name="1-1">
                <img src="../assets/pic/logo-source.png" alt="" class="logo">
                数据源管理</MenuItem>
            </router-link>
            <router-link to="/task">
              <MenuItem name="1-2">
                <img src="../assets/pic/logo-task.png" alt="" class="logo">
                任务管理
            </MenuItem>
            </router-link>

            <router-link to="/check">
              <MenuItem name="1-3">
                <img src="../assets/pic/logo-check.png" alt="" class="logo">
              数据校对
              </MenuItem>
            </router-link>
            <router-link to="/monitor">
              <MenuItem name="1-4">
                <img src="../assets/pic/logo-monitor.png" alt="" class="logo">
            任务监控</MenuItem>
            </router-link>
          <!-- </Submenu> -->
        </Menu>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  setup() {},
}
</script>

<style lang="less" scoped>
.menu {
  background-color: rgba(0, 70, 128, 1);
  position: fixed;
  left: 0;
  height: 100vh;
  padding-top: 90px;
  .logo{
    width: 25px;
    height: 25px;
    position: relative;
    top: 6px;
    margin-right: 10px;
  }
}
/deep/.ivu-menu-light {
  color: white;
  background: transparent;
  .ivu-menu-item{
    font-size: 18px;
    color: white;
  }
}
</style>
