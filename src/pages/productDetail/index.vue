<template>
  <div class="project-container">
    <HeroSection :module="'product'" />

    <div class="main-info-container">
      <div class="main-block">
        <el-row :gutter="breakpoint !== sizeEnum.XS ? 80 : 0">
          <el-col :xs="24" :sm="12">
            <img class="main-img" :src="productDetail?.imgs[mainImgIndex]" />
            <el-row :style="{ marginTop: breakpoint !== sizeEnum.XS ? 20 : 20 }" :gutter="breakpoint !== sizeEnum.XS ? 0 : 10">
              <el-col :key="index" v-for="(img, index) in productDetail?.imgs" :span="8">
                <img @click="mainImgIndex = index" class="list-img" :class="{ active: mainImgIndex == index }" :src="img" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div class="category-block">{{ productDetail?.category }}</div>

            <div class="header">{{ productDetail?.name }}</div>

            <div class="description-container">
              <p>
                {{ productDetail?.description }}
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="section-container">
      <div class="section" v-if="productDetail">
        <el-row>
          <el-col :xs="24" :sm="24" class="left-container">
            <Collapse style="margin-bottom: 20px" v-for="(property, index) in productDetail.properties" :key="index" :title="property.name">
              <div class="item-container">
                <div class="property-item" v-for="(propertyItem, index) in property.items" :key="index">
                  {{ propertyItem.label }}
                </div>
              </div>
            </Collapse>
            <Collapse title="Certificate">
              <div class="iso-container">
                <img v-for="item in productDetail.certificate" :key="item" :src="item" />
              </div>
            </Collapse>
          </el-col>
          <!-- <el-col class="hidden-xs-only" :xs="12" :sm="8">
            <img class="product-info-img" :src="productDetail.productInfoImg" />
          </el-col> -->
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";

import Collapse from "./components/Collapse.vue";
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
import { sizeEnum } from "@/enums/breakPoint";
import type { Product } from "@/api/model";
import { getProductDetail } from "@/api";
const { screenRef: breakpoint } = createBreakpointListen();

const route = useRoute();
const router = useRouter();
const productId = route.params.id;
const mainImgIndex = ref(0);
const productDetail = ref<Product>();
onBeforeMount(async () => {
  try {
    const res = await getProductDetail(Number(productId));
    productDetail.value = res;
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Could not find product",
      type: "error",
    });
    router.go(-1);
  }
});

// if (!productDetailData) {
//   ElNotification({
//     title: "Error",
//     message: "Could not find product",
//     type: "error",
//   });
//   router.go(-1);
// }
</script>

<style scoped lang="scss">
.project-container {
  width: 100%;
  position: relative;
  color: #fff;
  background-color: #181818;

  .main-info-container {
    width: 100%;

    background-color: #333;

    @include responseTo("xs") {
      width: 100%;
      padding-inline: 20px;
    }
    @include responseTo("sm") {
      padding: 100px 100px;
      margin-bottom: 100px;
    }
    .main-block {
      display: flex;
      margin: 0 auto;
      @include responseTo("xs") {
        width: 100%;
      }
      @include responseTo("sm") {
        width: 1100px;
      }
      .main-img {
        width: 100%;
        aspect-ratio: 665 / 700;

        @include responseTo("xs") {
          margin-bottom: 10px;
          margin-top: 20px;
        }
        @include responseTo("sm") {
          margin-bottom: 20px;
        }
      }

      .list-img {
        width: 100%;
        aspect-ratio: 665 / 700;
        @include responseTo("xs") {
          border: 2px solid transparent;
        }
        @include responseTo("sm") {
          border: 4px solid transparent;
        }

        &.active {
          @include responseTo("xs") {
            border: 2px solid #fff;
          }
          @include responseTo("sm") {
            border: 4px solid #fff;
          }
        }
      }

      .category-block {
        color: #fff;
        background-color: #444;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        @include responseTo("xs") {
          padding: 10px;
          font-size: 20px;
          // width: 50%;
          margin: 20px auto;
        }
        @include responseTo("sm") {
          width: 140px;
          height: 30px;
          font-size: 16px;
          margin-bottom: 40px;
        }
      }
      .sub-title {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 40px;
      }
      .header {
        position: relative;
        padding-bottom: 10px;
        word-break: break-all;
        @include responseTo("xs") {
          font-size: 32px;
          line-height: 40px;
          margin-bottom: 20px;
        }
        @include responseTo("sm") {
          font-size: 40px;
          line-height: 48px;
          margin-bottom: 40px;
        }
        &::after {
          content: "";
          width: 60px;
          height: 4px;
          background-color: #fff;
          bottom: 0;
          left: 0;
          position: absolute;
        }
      }
      .description-container {
        font-size: 16px;
        line-height: 26px;
        color: #fff;
        word-break: break-all;

        @include responseTo("xs") {
          font-size: 16px;
          line-height: 20px;
          background-color: #444;
          border-radius: 4px;
          padding: 10px 20px;
          margin-bottom: 20px;
        }
        @include responseTo("sm") {
          font-size: 16px;
          line-height: 26px;
        }
      }
    }
  }

  .section-container {
    width: 100%;
    background-color: #181818;

    .section {
      margin: 0 auto;
      @include responseTo("xs") {
        width: 100%;
      }
      @include responseTo("sm") {
        max-width: 1100px;
      }
      .product-name {
        @include responseTo("xs") {
          font-weight: 400;
          font-size: 32px;
          color: #e8e8e8;
          line-height: 32px;
          margin-bottom: 30px;
        }
        @include responseTo("sm") {
          font-weight: 400;
          font-size: 40px;
          color: #e8e8e8;
          line-height: 32px;
          margin-bottom: 60px;
        }
      }

      .left-container {
        background-color: #212121;

        @include responseTo("xs") {
          padding: 20px;
        }
        @include responseTo("sm") {
          padding: 40px;
        }
        .item-container {
          display: grid;
          justify-content: space-between;
          // grid-gap: 20px 20px;
          @include responseTo("xs") {
            padding: 20px 0;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px 20px;
          }
          @include responseTo("sm") {
            padding: 40px 0;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 20px 20px;
          }

          .property-item {
            font-weight: 400;
            font-size: 16px;
            color: #e8e8e8;
            line-height: 32px;
            border-radius: 6px;
            text-align: center;
            border: 1px solid #e8e8e8;
            padding-block: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @include responseTo("xs") {
              padding: 2px 6px;
            }
            @include responseTo("sm") {
              padding-block: 6px 10px;
            }
          }
        }
        .iso-container {
          padding: 40px 0;
          display: flex;
          align-items: center;
          justify-content: space-around;

          img {
            @include responseTo("xs") {
              &:nth-child(1) {
                width: calc(172px * 0.5);
              }
              &:nth-child(2) {
                width: calc(111px * 0.5);
              }
              &:nth-child(3) {
                width: calc(82px * 0.5);
              }
            }
            @include responseTo("sm") {
              &:nth-child(1) {
                width: 172px;
              }
              &:nth-child(2) {
                width: 111px;
              }
              &:nth-child(3) {
                width: 82px;
              }
            }
          }
          .img-container {
            text-align: center;
          }
        }
      }

      .product-info-img {
        width: 100%;
        aspect-ratio: 443/742;
      }
    }
  }
}
</style>
