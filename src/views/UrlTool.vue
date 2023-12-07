<script setup>
import {ref} from 'vue'
import {ElMessage} from "element-plus";

const inputText = ref('')
const outText = ref('')

function urlEncode() {
  if (!inputText.value) {
    return
  }
  outText.value = encodeURI(inputText.value)
}

function urlDecode() {
  if (!inputText.value) {
    return
  }
  outText.value = decodeURI(inputText.value)
}

function dbCopy() {
  navigator.clipboard.writeText(outText.value).then(() => {
    ElMessage.success('复制成功');
  });
}
</script>

<template>
  <el-row class="mb-4">
    <el-input
        v-model="inputText"
        :rows="20"
        type="textarea"
        maxlength="10000"
        show-word-limit
        placeholder="Please input"
    />
  </el-row>
  <el-row class="mb-4">
    <el-input
        @dblclick="dbCopy"
        v-model="outText"
        :rows="20"
        type="textarea"
        disabled
    />
  </el-row>
  <el-row class="mb-4">
    <el-col :offset="20" :span="2">
      <el-button type="primary" @click="urlEncode">加密</el-button>
    </el-col>
    <el-col :span="2">
      <el-button type="primary" @click="urlDecode">解密</el-button>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  border-radius: 4px;
  margin: 10px 0;
}
</style>