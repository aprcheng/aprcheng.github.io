<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-tabs tab-position="top"
                 type="border-card"
                 class="tools-tabs"
                 v-model="currentSelect"
                 @tab-change="tabSelect">
          <el-tab-pane label="timestamp" name="timestamp">
            <timestamp-tool/>
          </el-tab-pane>
          <el-tab-pane label="URLEncode/URLDecode" name="url">
            <url-tool/>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout, .el-container, .tools-tabs {
  height: 100%;
}

.tools-tabs {
  width: 80%;
  margin: 0 auto;
}

:deep(.el-tabs--border-card) {
  box-sizing: border-box;
}

</style>

<script setup>
import {onBeforeMount, ref} from 'vue';
import {useRouter} from "vue-router";
import TimestampTool from "@/views/TimestampTool.vue";
import '@/css/main.css'
import UrlTool from "@/views/UrlTool.vue";

const currentSelect = ref("timestamp")
const router = useRouter();

onBeforeMount(() => {
  let hash = window.location.hash;
  if (hash && hash.length > 2) {
    currentSelect.value = hash.substring(1);
  } else {
    currentSelect.value = "timestamp";
    router.push({path: "/", hash: `#${currentSelect.value}`});
  }
})

function tabSelect() {
  router.push({path: "/", hash: `#${currentSelect.value}`});
}

</script>