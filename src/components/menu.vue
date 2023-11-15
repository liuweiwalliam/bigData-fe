<template>
  <div class="menu">
    <Row>
        <Col span="8">
            <Menu>
                <Submenu name="1">
                    <template #title>
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">数据源管理</MenuItem>
                    <MenuItem name="1-2">任务管理</MenuItem>
                    <MenuItem name="1-3">数据校对</MenuItem>
                    <MenuItem name="1-3">任务监控</MenuItem>
                </Submenu>
            </Menu>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  setup() {
  },
  methods: {
    handleClick() {
      this.$Message.info('Welcome to View UI Plus Demo!')
    }
  }
}
</script>

<style lang="less" scoped>
  .menu{
    position: fixed;
    left: 0;
    height: 100vh;

  }
</style>
