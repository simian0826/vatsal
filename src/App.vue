<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useAppStore } from "@/store/modules/app";
const appStore = useAppStore();
onBeforeMount(async () => {
  await appStore.fetchHeroSectionsAction();
  await appStore.fetchBasicInfoAction();
});
</script>

<style scoped></style>
