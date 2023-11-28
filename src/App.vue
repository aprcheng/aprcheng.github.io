<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <el-menu :router="true" mode="horizontal">
          <el-menu-item v-for="(route, number) in routes" :index="route.path" :key="number">{{ route.name }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style>


</style>

<script setup>
import routes from "@/router/routes";
</script>