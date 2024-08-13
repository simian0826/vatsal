<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useAppStore } from "@/store/modules/app";
import { useProductStore } from "@/store/modules/product";
const appStore = useAppStore();
const productStore = useProductStore();
onBeforeMount(async () => {
  await appStore.fetchHeroSectionsAction();
  await appStore.fetchBasicInfoAction();
  await productStore.fetchProductCategoriesAction();
});
</script>

<style scoped></style>
