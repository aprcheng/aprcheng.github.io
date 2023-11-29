<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <el-menu mode="vertical" @default-active="active" @select="select" :router="true">
          <el-menu-item v-for="(route, number) in routes" :index="route.name" :key="number">
            {{ route.name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div id="timestampTool">
          <timestamp-tool/>
        </div>
        <div id="urlTool">
          <url-tool/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style>

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.common-layout, .el-container {
  width: 100%;
  height: 100%;
}

.el-aside {
  width: 10%;
  height: 100%;
  padding-top: 100px;
}

</style>

<script setup>
import {onBeforeMount, ref} from 'vue';
import routes from "@/router/routes";
import TimestampTool from "@/views/TimestampTool.vue";
import UrlTool from "@/views/UrlTool.vue";

const active = ref(routes.at(0).name);

onBeforeMount(() => {

})

function select(index) {
  console.log(index)
  const elementById = document.getElementById(index);
  console.log(elementById)
  elementById.scrollIntoView({behavior: 'smooth', block: 'start'})
}

</script>