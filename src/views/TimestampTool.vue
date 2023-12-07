<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {ElMessage} from 'element-plus'
import {format, parse} from "date-fns";

const defaultFormat = 'yyyy-MM-dd hh:mm:ss';

const date = new Date();
const data = ref({
  nowStr: format(date, defaultFormat),
  nowTimestamp: (date.getTime() / 1000).toFixed(0),
  inputDateStr: format(date, defaultFormat),
  currentDateFormat: defaultFormat,
  inputTimestamp: date.getTime(),
  inputDateFormat: defaultFormat,
});
const time = ref()
const dateFormats = ref([
  'yyyy-MM-dd hh:mm:ss',
  'yyyy/MM/dd hh:mm:ss',
  'yyyy年MM月dd日 hh时mm分:秒'
])

onMounted(() => {
  time.value = setInterval(() => {
    const now = new Date();
    data.value.nowStr = format(now, data.value.currentDateFormat);
    data.value.nowTimestamp = (now.getTime() / 1000).toFixed(0);
  }, 1000);
})

onUnmounted(() => {
  clearInterval(time.value)
})

function copyValue(data) {
  navigator.clipboard.writeText(data).then(() => {
    ElMessage.success('复制成功');
  });
}

function inputDateStrChange() {
  const parseDate = parse(data.value.inputDateStr, data.value.inputDateFormat, new Date());
  const parseTime = parseDate.getTime();
  data.value.inputTimestamp = parseTime || 0

}

function inputTimestampChange() {
  try {
    const inputTimestamp = data.value.inputTimestamp + '';
    const number = parseInt(inputTimestamp);
    if (inputTimestamp && inputTimestamp.length === 10) {
      data.value.inputDateStr = format(number * 1000, data.value.inputDateFormat)
    } else if (inputTimestamp && inputTimestamp.length === 13) {
      data.value.inputDateStr = format(number, data.value.inputDateFormat)
    } else {
      data.value.inputDateStr = ''
    }
  } catch (e) {
    data.value.inputDateStr = ''
  }
}

function currentDateFormatSelectChange() {
  data.value.nowStr = format(data.value.inputTimestamp, data.value.currentDateFormat)
}


</script>

<template>
  <el-row>
    <el-col :span="8">
      <el-select v-model="data.currentDateFormat" placeholder="时间格式" @change="currentDateFormatSelectChange">
        <el-option v-for="dateformat in dateFormats" :key="dateformat" :label="dateformat" :value="dateformat"/>
      </el-select>
    </el-col>
    <el-col :span="8">
      <el-tooltip
          class="box-item"
          effect="dark"
          content="双击复制"
          placement="right">
        <span @dblclick="copyValue(data.nowStr)">{{ data.nowStr }}</span>
      </el-tooltip>
    </el-col>
    <el-col :span="8">
      <el-tooltip
          class="box-item"
          effect="dark"
          content="双击复制"
          placement="right">
        <span @dblclick="copyValue(data.nowTimestamp)">{{ data.nowTimestamp }}</span>
      </el-tooltip>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="8">
      <el-select v-model="data.inputDateFormat" placeholder="时间格式">
        <el-option v-for="dateformat in dateFormats" :key="dateformat" :label="dateformat" :value="dateformat"/>
      </el-select>
    </el-col>
    <el-col :span="8">
      <el-input
          v-model="data.inputDateStr"
          type="text"
          placeholder="请输入时间"
          clearable
          class="input-with-select"
          @input="inputDateStrChange"
      />
    </el-col>
    <el-col :span="8">
      <el-input
          v-model="data.inputTimestamp"
          type="text"
          placeholder="请输入时间戳"
          clearable
          class="input-with-select"
          @input="inputTimestampChange"
          oninput="value = Number(value) || 0"
      />
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin: 40px;
  text-align: left;
  align-content: center;
}

</style>