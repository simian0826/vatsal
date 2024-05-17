<template>
  <div class="collapsed-container">
    <div class="header">
      <div class="title">{{ props.title }}</div>
      <el-icon :size="26" @click="collapsedRef = !collapsedRef">
        <ArrowDown v-if="!collapsedRef" />
        <ArrowUp v-else />
      </el-icon>
    </div>
    <div
      class="content"
      :style="{
        height: collapsedRef ? '0' : 'auto',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
});
const collapsedRef = ref(props.collapsed);
</script>

<style scoped lang="scss">
.collapsed-container {

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 2px solid #e8e8e8;

    .title {
      font-weight: 400;
      font-size: 24px;
      color: #e8e8e8;
      line-height: 32px;
    }
  }
  .content{
    overflow: hidden;
    transition: height .6s;
  }
}
</style>
