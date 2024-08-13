<template>
  <div class="project-list-container">
    <HeroSection :module="'product'" />
    <div class="content-container">
      <el-row>
        <el-col :span="24" class="category-container">
          <div
            :key="index"
            v-for="(item, index) in categoryList"
            class="category-item-container"
            :class="{
              selected: selectedCategory == item,
            }"
            @click="changeCategoryHandler(item)"
          >
            <div class="category-name">{{ item }}</div>
          </div>
        </el-col>

        <el-col :span="24" class="list-container">
          <div @click="router.push({ path: `/productDetail/${item.id}` })" v-for="(item, index) in productList" :key="index" class="product-item-container">
            <div class="mask-container">
              <img class="icon" src="/assets/icons/link.png" />
            </div>
            <img class="product-image" :src="item.imgs[0]" />
            <div class="text-area">
              <div class="product-name">{{ item.name }}</div>
            </div>
          </div>
        </el-col>

        <div class="load-more-container">
          <div
            v-loading="loading"
            :element-loading-spinner="LoadingSvg"
            element-loading-svg-view-box="-10, -10, 50, 50"
            element-loading-background="rgba(122, 122, 122, 0.8)"
            class="load-more-btn"
            v-if="loadMore"
            @click="
              () => {
                productListHandler();
              }
            "
          >
            Load More
          </div>

          <div class="no-more" v-else>No More</div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount, watch, unref } from "vue";
import { CategoryTypeValue } from "@/type/productList";
import HeroSection from "@/components/HeroSection.vue";
import { useRouter } from "vue-router";
import { useProductStore } from "@/store/modules/product";
import { getProductListApi } from "@/api";
import type { Pagenigation, Product } from "@/api/model";
import { LoadingSvg } from "@/assets/loading";

const router = useRouter();

const loading = ref(false);
const loadMore = ref(true);

const productStore = useProductStore();
const pagenigation = ref<Pagenigation>({ page: 1, pageSize: 6 });
const categoryList = computed(() => productStore.getProductCategories.map((item) => item.value as CategoryTypeValue));
const selectedCategory = ref<CategoryTypeValue>(categoryList.value[0]);

const productList = ref<Product[]>([]);
const productListHandler = async (isInit = false) => {
  if (isInit) {
    pagenigation.value.page = 1;
    productList.value = [];
  }
  loading.value = true;
  const res = await getProductListApi({ category: unref(selectedCategory), ...pagenigation.value });
  loading.value = false;

  if (res.list.length > 0) {
    productList.value.push(...res.list);
  }
  if (res.list.length != pagenigation.value.pageSize) {
    loadMore.value = false;
  }
  pagenigation.value.page++;
};

const changeCategoryHandler = (category: CategoryTypeValue) => {
  selectedCategory.value = category;
  productListHandler(true);
};

const urlProductTypeChangeHandler = () => {
  if (router.currentRoute.value.query.category) {
    selectedCategory.value = decodeURIComponent(router.currentRoute.value.query.category?.toString()) as CategoryTypeValue;
  } else {
    selectedCategory.value = categoryList.value.length > 0 ? categoryList.value[0] : "Tiles";
  }
  productListHandler(true);
};
watch(router.currentRoute, () => {
  urlProductTypeChangeHandler();
});
onBeforeMount(() => {
  urlProductTypeChangeHandler();
});
</script>

<style scoped lang="scss">
:deep(.el-loading-spinner .path) {
  stroke: #fff;
}
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
          padding: 6px 4px;
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
            font-size: 11px;
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

      .product-item-container {
        position: relative;
        aspect-ratio: 1/1;

        .product-image {
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
            text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
          }

          @include responseTo("sm") {
            font-size: 26px;
            padding: 20px 20px;
            text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
          }

          .product-type {
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
          .product-name {
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

    .load-more-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 40px;
      .load-more-btn {
        padding: 6px 12px;
        border: 1px solid #fff;
        border-radius: 4px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #fff;
          color: #111;
        }
      }

      .no-more {
        --noMoreColor: #999;
        font-size: 20px;
        color: var(--noMoreColor);
        position: relative;

        &::before {
          content: "";
          width: 12px;
          height: 1px;
          position: absolute;
          top: 50%;
          left: -24px;
          background-color: var(--noMoreColor);
        }
        &::after {
          content: "";
          width: 12px;
          height: 1px;
          position: absolute;
          top: 50%;
          right: -24px;
          background-color: var(--noMoreColor);
        }
      }
    }
  }
}
</style>
@/assets/loading
