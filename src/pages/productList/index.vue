<template>
  <div class="project-list-container">
    <div class="hero-container">
      <img class="hero-image" src="https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg" />
    </div>
    <div class="content-container">
      <el-row>
        <el-col :span="8" class="category-container">
          <div
            :key="index"
            v-for="(item, index) in categoryList"
            class="category-item-container"
            :class="{
              selected: selectedCategory == item.value,
            }"
            @click="changeCategoryHandler(item.value)"
          >
            <div class="category-name">{{ item.name }}</div>
            <el-icon size="18"><Plus /></el-icon>
          </div>
        </el-col>
        <el-col :span="16" class="list-container">
          <div @click="router.push({ path: `/productDetail/${item.id}` })" v-for="(item, index) in presentItemList" :key="index" class="commodity-item-container">
            <img class="commodity-image" :src="item.img" />
            <div class="text-area">
              <div class="commodity-type">{{ item.type }}</div>
              <div class="commodity-name">{{ item.name }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import productListData from "@/data/productList";
import { CategoryTypeValue } from "@/types/productList";
import { useRouter } from "vue-router";

const router = useRouter();

const selectedCategory = ref<CategoryTypeValue>("tile");

const categoryList = ref(productListData.categoryList);

const categoryItemGroup = ref(productListData.categoryItemGroup);

const presentItemList = ref(categoryItemGroup.value[selectedCategory.value]);

const changeCategoryHandler = (category: CategoryTypeValue) => {
  selectedCategory.value = category;
  presentItemList.value = categoryItemGroup.value[category];
};

const routeProductType = computed(() => router.currentRoute.value.query.productType);
watch(routeProductType, () => {
  selectedCategory.value = router.currentRoute.value.query.productType as CategoryTypeValue;
  presentItemList.value = categoryItemGroup.value[selectedCategory.value];
});

const urlProductTypeChangeHandler = () => {
  if (router.currentRoute.value.query.type) {
    selectedCategory.value = router.currentRoute.value.query.type as CategoryTypeValue;
  } else {
    const keys = Object.keys(categoryItemGroup.value) as CategoryTypeValue[];
    selectedCategory.value = keys[0];
  }
  presentItemList.value = categoryItemGroup.value[selectedCategory.value];
};
watch(router.currentRoute, () => {
  urlProductTypeChangeHandler();
});
onMounted(() => {
  urlProductTypeChangeHandler();
});
</script>

<style scoped lang="scss">
.project-list-container {
  width: 100%;
  position: relative;

  .hero-container {
    width: 100%;
    height: 100vh;
    .hero-image {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  .content-container {
    width: 100%;
    max-width: 1400px;
    min-height: 800px;
    padding: 80px 0;
    margin: 0 auto;

    .category-container {
      height: 400px;
      overflow-y: scroll;
      padding-right: 40px;

      .category-item-container {
        width: 100%;
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: flex-start;
        cursor: pointer;
        padding: 20px 10px;

        &.selected {
          background-color: #111;
          color: #fff;

          .category-name {
            font-size: 18px;
            color: #fff;

            text-transform: uppercase;
          }
        }

        .category-name {
          font-size: 18px;
          color: #111;
          text-transform: uppercase;
        }
      }
    }

    .list-container {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(2, 50%);
      grid-gap: 20px 20px;

      .commodity-item-container {
        position: relative;
        aspect-ratio: 2.4/1;

        .commodity-image {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .text-area {
          width: 100%;
          padding: 20px;
          position: absolute;
          bottom: 0;
          left: 0;

          .commodity-type {
            font-size: 18px;
            color: #fff;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          .commodity-name {
            font-size: 28px;
            color: #fff;
            text-transform: capitalize;
          }
        }
      }
    }
  }
}
</style>
