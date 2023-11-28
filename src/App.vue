<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-menu-item index="2">Test</el-menu-item>
          <el-menu-item index="3">Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import RouterView from 'vue-router'
import {onMounted, ref} from 'vue'

const activeIndex = ref('1')

onMounted(() => {
})

const handleSelect = (e) => {
  console.log(e)
}

</script>