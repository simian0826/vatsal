<template>
  <div class="project-list-container">
    <HeroSection />
    <div class="content-container">
      <el-row>
        <el-col :span="24" class="category-container">
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
          </div>
        </el-col>

        <el-col :span="24" class="list-container">
          <div @click="router.push({ path: `/productDetail/${item.id}` })" v-for="(item, index) in presentItemList" :key="index" class="commodity-item-container">
            <div class="mask-container">
              <img class="icon" src="/assets/icons/link.png" />
            </div>
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
import HeroSection from "@/components/HeroSection.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const selectedCategory = ref<CategoryTypeValue>("tiles");

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
  background-color: #222;

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
    margin: 0 auto;
    @include responseTo("xs") {
      width: 100%;

      padding: 30px 20px;
    }

    @include responseTo("sm") {
      width: 1100px;
      padding: 30px 0;
    }

    .category-container {
      // height: 400px;
      padding-bottom: 30px;
      display: grid;
      justify-content: space-between;
      @include responseTo("xs") {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
      }

      @include responseTo("sm") {
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
      }

      .category-item-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e2e0e0;
        border-radius: 6px;

        @include responseTo("xs") {
          grid-template-columns: repeat(3, 1fr);
          padding: 6px 6px;
        }

        @include responseTo("sm") {
          grid-template-columns: repeat(6, 1fr);
          cursor: pointer;
          padding: 8px 12px;
        }

        &.selected {
          // background-color: #111;
          background-color: #545454;
          // .category-name {
          //   text-transform: uppercase;
          // }
        }

        .category-name {
          transition: font-size 0.3s;

          color: #fff;
          text-transform: uppercase;

          @include responseTo("xs") {
            font-size: 12px;
          }

          @include responseTo("sm") {
            font-size: 18px;
          }
        }
      }
    }

    .list-container {
      display: grid;
      justify-content: space-between;
      grid-gap: 20px 20px;

      @include responseTo("xs") {
        grid-template-columns: repeat(2, 1fr);
      }

      @include responseTo("sm") {
        grid-template-columns: repeat(3, 1fr);
      }

      .commodity-item-container {
        position: relative;
        aspect-ratio: 1/1;

        .commodity-image {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .text-area {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;

          @include responseTo("xs") {
            font-size: 16px;
            padding: 10px 10px;
          }

          @include responseTo("sm") {
            font-size: 20px;
            padding: 10px 20px;
          }

          .commodity-type {
            color: #fff;
            text-transform: uppercase;
            @include responseTo("xs") {
              font-size: 18px;
              margin-bottom: 4px;
            }
            @include responseTo("sm") {
              margin-bottom: 10px;
            }
          }
          .commodity-name {
            color: #fff;
            text-transform: capitalize;
          }
        }

        .mask-container {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s;
          cursor: pointer;

          &:hover {
            opacity: 1;
          }

          .icon {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
}
</style>
