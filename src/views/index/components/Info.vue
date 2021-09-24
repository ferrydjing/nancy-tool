<template>
  <div style="width: 100%">
    <p>当前有新的的内容，请刷新浏览器</p>
    <div style="text-align: right">
      <el-button type="primary" @click="handleReload">刷新</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleReload() {
      window.location.reload()
    }
  }
}
</script>
