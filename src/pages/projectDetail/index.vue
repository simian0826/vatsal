<template>
  <div class="project-container">
    <HeroSection :module="'project'" />

    <div class="introduction-container">
      <div class="sub-title">{{ projectDetail?.subtitle }}</div>
      <div class="title">{{ projectDetail?.title }}</div>
      <div class="description">
        {{ projectDetail?.description }}
      </div>
    </div>

    <div class="bg-section">
      <div class="material-container">
        <div class="material-content">
          <div class="header">Material Supplied</div>

          <div class="navigation-container hidden-xs-only">
            <div class="left-arrow-container" @click="swiperPrevious">
              <el-icon>
                <ArrowLeftBold />
              </el-icon>
            </div>
            <div class="right-arrow-container" @click="swiperNext">
              <el-icon><ArrowRightBold /></el-icon>
            </div>
          </div>

          <swiper
            ref="swiperRef"
            :style="{
              height: '360px',
              width: breakpoint === sizeEnum.XS ? '100%' : '100%',
            }"
            :pagination="swiperPagination"
            :space-between="20"
            :slides-per-view="breakpoint === sizeEnum.XS ? 2 : 6"
            :speed="500"
          >
            <swiper-slide v-for="(item, index) in projectDetail?.materials" :key="index">
              <div class="material-item-container">
                <img :src="item.image" class="material-img" />
                <div class="content-container">
                  <div class="title">{{ item.title }}</div>
                  <div class="price">{{ item.subtitle }}</div>
                  <div class="vat">{{ item.taxType }}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="gallery-container">
      <div class="header">Project Images</div>
      <div class="carousel-container">
        <el-carousel v-if="breakpoint !== sizeEnum.XS" indicator-position="none" :interval="4000" type="card">
          <el-carousel-item v-for="(img, index) in projectDetail?.projectImages" :key="index">
            <img class="image" :src="img" />
          </el-carousel-item>
        </el-carousel>

        <swiper style="width: 100vw" v-else :pagination="swiperPagination" ref="projectImageSwiperRef" :space-between="20">
          <swiper-slide v-for="(item, index) in projectDetail?.projectImages" :key="index">
            <img class="image" :src="item" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";

import { ref, onMounted } from "vue";

import { Navigation, Pagination, Controller } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import type { Project } from "@/api/model";
import { getProjectDetail } from "@/api";
import { ElNotification } from "element-plus";
import { useRoute, useRouter } from "vue-router";

import { sizeEnum } from "@/enums/breakPoint";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
const route = useRoute();
const router = useRouter();
const projectId = route.params.id;
SwiperCore.use([Navigation, Pagination, Controller]);
const { screenRef: breakpoint } = createBreakpointListen();
const swiperRef = ref();
const projectImageSwiperRef = ref();

let swiperPagination = {
  clickable: true,
  // modifierClass: "my-pagination",
  // bulletActiveClass: "bullet-active",
  // bulletClass: "bullet",
  renderBullet: (_: any, className: any) => {
    const style = { width: "16px", borderRadius: "0px", margin: "auto", height: "3px" };
    return `<span class="${className}" style="width: ${style.width}; border-radius: ${style.borderRadius}; background-color: #f5f5f5; height: ${style.height}"></span>`;
  },
  modules: [Pagination],
};

let swiperNext = () => {
  console.log(swiperRef.value);
  if (swiperRef.value) {
    swiperRef.value.$el.swiper.slideNext();
  }
};
let swiperPrevious = () => {
  if (swiperRef.value) {
    swiperRef.value.$el.swiper.slidePrev();
  }
};
const projectDetail = ref<Project>();

onMounted(async () => {
  try {
    const res = await getProjectDetail(Number(projectId));
    projectDetail.value = res;
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Could not find product",
      type: "error",
    });
    router.go(-1);
  }
});

// const productList = ref([
//   {
//     mainImage:"",
//   }
// ])
</script>

<style scoped lang="scss">
.project-container {
  width: 100%;
  position: relative;

  .introduction-container {
    width: 100%;
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;
    padding: 80px 0px;

    @include responseTo("xs") {
      padding: 40px 20px;
    }

    .sub-title {
      width: 100%;
      color: #d2cece;
      font-weight: 300;
      letter-spacing: 5px;
      font-size: 15px;
      text-align: center;
      @include responseTo("xs") {
        font-size: 15px;
      }
      @include responseTo("sm") {
        font-size: 15px;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      color: #e2e0e0;
      margin: 20px 0;
      @include responseTo("xs") {
        font-size: 32px;
        border-top: 2px solid #e2e0e0;
        border-bottom: 2px solid #e2e0e0;
        padding-block: 8px;
      }
      @include responseTo("sm") {
        font-size: 52px;
      }
    }
    .description {
      color: #e2e0e0;
      font-size: 17px;
      letter-spacing: 0;
      line-height: 1.8;
      text-align: center;
      word-break: break-all;
      @include responseTo("xs") {
        font-size: 15px;
      }
    }
  }
  .bg-section {
    --bgcolor: #2a2a2a;
    background-color: var(--bgcolor);
    width: 100%;

    .material-container {
      // max-width: 1100px;
      width: 1100px;
      margin: 0 auto;
      display: flex;
      position: relative;

      @include responseTo("xs") {
        width: 100vw;
        padding: 0 20px;
        --position-value: 20px;
      }
      @include responseTo("sm") {
        width: 1100px;
        --position-value: 20px;
      }

      @mixin arrow-container($position, $position-value) {
        padding: 10px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: rgba(1, 1, 1, 0.5);
        color: #fff;
        border-radius: 12px;
        position: absolute;
        z-index: 2;

        @include responseTo("xs") {
          font-size: 22px;
          top: 40%;
        }
        @include responseTo("sm") {
          font-size: 32px;
          top: 50%;
        }
        @if $position == "left" {
          left: $position-value;
        } @else {
          right: $position-value;
        }
      }
      .left-arrow-container {
        @include arrow-container("left", var(--position-value));
      }
      .right-arrow-container {
        @include arrow-container("right", var(--position-value));
      }

      .material-content {
        flex: 1 1 auto;

        // height: 100vh;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        padding: 40px 0;
        width: 100%;

        .header {
          width: 100%;
          font-weight: 400;
          color: #e2e0e0;
          text-align: center;
          @include responseTo("xs") {
            font-size: 28px;
            margin-bottom: 40px;
          }
          @include responseTo("sm") {
            font-size: 32px;
            margin-bottom: 60px;
          }
        }

        :deep(.swiper-button-prev),
        :deep(.swiper-button-next) {
          color: #999;
        }
        // :deep(.swiper-button-prev) {
        //   left: -50px !important;
        // }
        // :deep(.swiper-button-next) {
        //   right: -50px !important;
        // }

        .material-item-container {
          width: 100%;
          height: 100%;
          position: relative;

          .material-img {
            width: 100%;
            aspect-ratio: 186/231;
            object-fit: cover;
            border-radius: 2px;
          }
          .content-container {
            padding: 10px 0;
            .vat {
              margin: 0 auto;
              width: 100%;
              box-sizing: border-box;
              display: flex;
              color: #d5d2d2;
              font-size: 14px;
            }
            .title {
              color: #d5d2d2;
              font-size: 16px;
              margin-bottom: 6px;
            }
            .price {
              color: #d5d2d2;
              font-weight: 600;
              margin-bottom: 6px;
              font-size: 14px;
              margin-top: 12px;
            }
          }

          .btn {
            border: 1px solid #eb5757;
            border-radius: 5px;
            padding: 10px 25px;
            font-weight: 700;
            transition: border-color 0.3s, background-color 0.3s, color 0.3s;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            background-color: transparent;
            color: #fff;
            text-align: center;
            border: 1px solid #fff;

            &:hover {
              background-color: #fff;
              color: #111;
            }
          }
        }
      }
    }
  }

  .gallery-container {
    margin: 0 auto;
    padding-top: 40px;

    @include responseTo("xs") {
      width: 100%;
    }
    @include responseTo("sm") {
      width: 1100px;
    }
    .header {
      width: 100%;
      font-weight: 400;
      color: #e2e0e0;
      text-align: center;
      @include responseTo("xs") {
        font-size: 28px;
        margin-bottom: 40px;
      }
      @include responseTo("sm") {
        font-size: 32px;
        margin-bottom: 60px;
      }
    }

    .carousel-container {
      padding-bottom: 40px;
      .image {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 653/392;
      }
    }
  }
}
</style>
