<template>
  <div class="home-container">
    <HeroSection :module="'home'" />
    <div class="about-us-container">
      <div class="header">
        <el-row>
          <el-col :xs="24" :sm="12">
            <div class="left-content">
              <div class="title">Our Process</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div class="right-content" ref="aboutUsHeaderRightRef">We are focused on providing our clients with quality goods from hard to reach places at competitive prices</div>
          </el-col>
        </el-row>
      </div>

      <el-row class="content" :gutter="20">
        <el-col :xs="24" :sm="8" :key="index" class="block-col" v-for="(item, index) in processItems">
          <div
            class="block-container"
            :style="{
              'background-image': `url('${item.image}')`,
            }"
          >
            <div class="block">
              <div class="title">{{ item.title }}</div>
            </div>
            <div class="detail-text">{{ item.detaiText }}</div>
          </div>
        </el-col>
      </el-row>

      <div class="hidden-sm-and-up" style="padding: 60px">
        <div style="height: 1px; width: 100%; background-image: radial-gradient(#cecece88 1%, transparent 99%)"></div>
      </div>

      <div class="content process-swiper-container">
        <!--  :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }" -->
        <swiper-container v-if="breakpoint !== sizeEnum.XS" ref="productSwiperRef" :pagination="productSwiperPaginationSM" class="product-swiper" :space-between="80" :speed="500">
          <swiper-slide class="swiper-slide" v-for="(item, index) in introductionItems" :key="index">
            <el-row :gutter="30">
              <el-col :sm="10">
                <div class="process-header">{{ item.title }}</div>
                <div class="process-subheader">{{ item.subTitle }}</div>
                <div class="process-description">
                  {{ item.description }}
                </div>
                <div class="value-container">
                  <div class="left">
                    <div class="info">{{ item.infoLeft.info }}</div>
                    <div class="supplementary">{{ item.infoLeft.supplementary }}</div>
                  </div>
                  <div class="right">
                    <div class="info">{{ item.infoRight.info }}</div>
                    <div class="supplementary">{{ item.infoRight.supplementary }}</div>
                  </div>
                </div>
                <div @click="router.push({ path: `/productDetail/${item.productId}` })" class="about-me-btn">More about me</div>
              </el-col>

              <el-col :xs="24" :sm="14" style="position: relative">
                <img :src="item.image" class="process-img" />
                <div class="zoom-in" @click="showImage(item.image)">
                  <el-icon color="#fff" size="26"><FullScreen /></el-icon>
                </div>
              </el-col>

              <!-- xs -->
            </el-row>
          </swiper-slide>
        </swiper-container>

        <swiper-container v-else ref="productSwiperRef" :pagination="productSwiperPaginationXS" class="product-swiper" :space-between="20" :speed="500">
          <swiper-slide class="swiper-slide" v-for="(item, index) in introductionItems" :key="index">
            <el-row :gutter="30" style="padding: 0 30px">
              <el-col :xs="24" style="position: relative">
                <img :src="item.image" class="process-img" />
                <div class="img-header-container">
                  <div style="" class="process-header">{{ item.title }}</div>
                  <div class="process-subheader">{{ item.subTitle }}</div>
                </div>
              </el-col>
              <el-col :xs="24" :span="24">
                <div class="process-description">
                  {{ item.description }}
                </div>
                <div class="value-container">
                  <div class="left">
                    <div class="info">{{ item.infoLeft.info }}</div>
                    <div class="supplementary">{{ item.infoLeft.supplementary }}</div>
                  </div>
                  <div class="right">
                    <div class="info">{{ item.infoRight.info }}</div>
                    <div class="supplementary">{{ item.infoRight.supplementary }}</div>
                  </div>
                  <div @click="router.push({ path: `/productDetail/${item.productId}` })" class="about-me-btn">More about me</div>
                </div>
              </el-col>
            </el-row>
          </swiper-slide>
        </swiper-container>
        <!-- <div class="operation-container hidden-xs-only">
          <div class="left-arrow-container" @click="swiperPrevious">
            <el-icon color="#fff" size="60">
              <ArrowLeft />
            </el-icon>
          </div>
          <div class="right-arrow-container" @click="swiperNext">
            <el-icon color="#fff" size="60"><ArrowRight /></el-icon>
          </div>
        </div> -->
      </div>
    </div>

    <div class="product-list-container" style="padding-bottom: 0px">
      <div class="header">
        <el-row>
          <el-col :xs="24" :sm="12">
            <div class="left-content">
              <div class="title">Our Products</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24">
            <div class="right-content">We are focused on providing our clients with quality goods from hard to reach places at competitive prices</div>
          </el-col>
        </el-row>
      </div>

      <div class="product-grid-container">
        <div
          @click="router.push({ path: `/productList`, query: { category: item.category } })"
          class="product-item"
          :key="index"
          v-for="(item, index) in productCategoryItems"
          :style="{
            'background-image': `url('${item.image}')`,
          }"
        >
          <div class="product-title">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <div class="our-clients-container" style="padding: 40px 0">
      <div class="header">
        <div class="left-content">
          <div class="title">Our Clients</div>
        </div>
        <div class="right-content"></div>
      </div>
      <div class="content">
        <div class="logo-container">
          <div class="logo-block" :key="index" v-for="(item, index) in clientLogos">
            <img class="logo" :src="item" />
          </div>
        </div>
      </div>
    </div>

    <div class="leadership-container">
      <div class="content">
        <div class="header">leadership</div>
        <div class="leader-container">
          <div class="leader-block" :key="index" v-for="(item, index) in leaders">
            <div class="leader-description">{{ item.description }}</div>
            <div class="leader-name">{{ item.name }}</div>

            <img v-if="item.image" class="leader-image" :src="item.image" />
          </div>
        </div>
      </div>
    </div>
    <!-- 
    <div class="our-clients-container" style="padding: 40px 0;">
      <div class="header">
        <div class="left-content">
          <div class="title">Our Clients</div>
        </div>
        <div class="right-content"></div>
      </div>
      <div class="content">
        <div class="logo-container">
          <div class="logo-block" :key="index" v-for="(item, index) in clientItems">
            <img class="logo" :src="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="leadership-container">
      <div class="content">
        <div class="header">leadership</div>
        <div class="leader-container">
          <div class="leader-block" :key="index" v-for="(item, index) in leaders">
                <div class="leader-description">{{ item.description }}</div>
                <div class="leader-name">{{ item.name }}</div>
                
                <img v-if="item.image" class="leader-image" :src="item.image" />
              </div>
         
        </div>
      </div>
    </div> -->

    <el-dialog :show-close="false" lock-scroll v-model="detailImageVisible" width="70%">
      <img style="width: 100%" :src="detailImage" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import { getHomePageApi } from "@/api/";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, watch, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { Pagination, Controller } from "swiper/modules";

import { sizeEnum } from "@/enums/breakPoint";
import { createBreakpointListen } from "@/hooks/useBreakpoint";
// console.log("isXSScreen", isXSScreen);

const { screenRef: breakpoint } = createBreakpointListen();

SwiperCore.use([Scrollbar, Controller]);
// const swiperRef = ref();
// const creativeEffect = ref({
//   prev: {
//     // will set `translateZ(-400px)` on previous slides
//     translate: ["0%", 0, 0],
//     origin: "right center",
//   },
//   next: {
//     // will set `translateX(100%)` on next slides
//     translate: ["100%", 0, 0],
//     origin: "right center",
//   },
// });

// const swipeAttributeTranslate = (postionsStar: number, postionEnd: number, valueStart: any, valueEnd: any) => {
//   return function (postionNow: number) {
//     if (postionNow <= postionsStar) {
//       return valueStart;
//     }
//     if (postionNow >= postionEnd) {
//       return valueEnd;
//     }
//     return valueStart + ((valueEnd - valueStart) * (postionNow - postionsStar)) / (postionEnd - postionsStar);
//   };
// };

const productSwiperRef = ref(null);

// let swiperNext = () => {
//   // console.dir(productSwiperRef.value.swiper);

//   if(productSwiperRef.value){
//     (productSwiperRef.value as any).swiper.slideNext();
//   }
// };
// let swiperPrevious = () => {
//   if(productSwiperRef.value){
//     (productSwiperRef.value as any).swiper.slidePrev();
//   }
// };
// onMounted(() => {});
watch(breakpoint, () => {
  // productSwiperRef.value.swiper = new SwiperCore(productSwiperRef.value, {
  //   pagination: productSwiperPagination
  // });
});

// swiperNext = () => {
//   productSwiperRef.value.swiper.slideNext();
// };
//  swiperPrevious = () => {
//   productSwiperRef.value.swiper.slidePrev();
// };

let productSwiperPaginationXS = {
  clickable: true,
  // bulletActiveClass: "bullet-active",
  // bulletClass: "bullet",
  renderBullet: (_: any, className: any) => {
    const style = { width: "16px", borderRadius: "0px", margin: "auto", height: "3px" };
    return `<span class="${className}" style="width: ${style.width}; border-radius: ${style.borderRadius}; background-color: #f5f5f5; height: ${style.height}"></span>`;
  },
  modules: [Pagination],
};
let productSwiperPaginationSM = {
  clickable: true,

  renderBullet: (_: any, className: any) => {
    const style = {
      width: "24px",
      borderRadius: "2px",
      margin: "0 10px",
      height: "4px",
    };
    return `<span class="${className}" style="width: ${style.width}; border-radius: ${style.borderRadius}; background-color: #f5f5f5; margin:${style.margin}; height: ${style.height}"></span>`;
  },
  modules: [Pagination],
};

// onMounted(() => {
//   const scaleScope = [100, 150];
//   const scaleImage = swipeAttributeTranslate(0, swiperRef.value.swiper.width, scaleScope[0], scaleScope[1]);

//   const reverseScaleImage = swipeAttributeTranslate(0, swiperRef.value.swiper.width, scaleScope[1], scaleScope[0]);

//   swiperRef.value.swiper.on("setTranslate", (swiper: any, translateX: any) => {
//     const activeIndex = swiper.activeIndex;

//     if (swiper.swipeDirection == "prev") {
//       if (activeIndex > 0) {
//         swiper.slides[activeIndex - 1].style.setProperty("--backgroundSize", `${scaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
//       }
//       swiper.slides[activeIndex].style.setProperty("--backgroundSize", `${reverseScaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
//     } else {
//       if (activeIndex < swiper.slides.length - 1) {
//         swiper.slides[activeIndex + 1].style.setProperty("--backgroundSize", `${scaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
//       }
//       swiper.slides[activeIndex].style.setProperty("--backgroundSize", `${reverseScaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
//     }
//   });

// });

const introductionItems = ref();
const processItems = ref();
//详情图
const detailImageVisible = ref(false);
const detailImage = ref("");

const showImage = (src: string) => {
  detailImageVisible.value = true;
  detailImage.value = src;
};

const productCategoryItems = ref();

const clientLogos = ref();

const leaders = ref();

onBeforeMount(async () => {
  const res = await getHomePageApi();
  processItems.value = res.processItems;
  introductionItems.value = res.introductionItems;
  productCategoryItems.value = res.productCategoryItems;
  clientLogos.value = res.clientLogos;
  leaders.value = res.leaders;
});
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  background-color: #191919;
  .swiper-slide-active {
    z-index: 9 !important;
  }
  .swiper-slide-next {
    z-index: 10 !important;
  }
  // :deep(.bullet) {
  //   width: 10px !important;
  //   height: 2px !important;
  // }

  .about-us-container,
  .our-clients-container,
  .product-list-container {
    width: 100%;
    max-width: 1100px;
    min-height: 100%;
    padding: 80px 0;
    margin: 0 auto;

    @include responseTo("xs") {
      padding: 20px 0;
    }

    .header {
      position: relative;
      // display: flex;
      // justify-content: space-between;
      // flex-wrap: wrap;
      @include responseTo("xs") {
        padding: 10px 30px;

        // ::after {
        //   content: "";
        //   position: absolute;
        //   top: 10px;
        //   left: -8px;
        //   width: 4px;
        //   height: 40px;
        //   background-color: #ccc;
        // }
      }
      color: #333;
      margin-bottom: 40px;

      .left-content {
        align-self: flex-end;
        flex: 1;
        .sub-title {
          font-size: 18px;
          line-height: 1.5;
          color: #ff5b13;
        }
        .title {
          color: #fff;

          @include responseTo("xs") {
            line-height: 1.5;
            font-size: 30px;
            // margin-bottom: 10px;
          }

          @include responseTo("sm") {
            line-height: 1.2;
            font-size: 40px;
            margin-bottom: 20px;
          }
        }
      }

      .right-content {
        flex: 1;
        align-self: flex-end;
        color: #e2e0e0;

        @include responseTo("xs") {
          line-height: 1.2;
          font-size: 16px;
        }
        @include responseTo("sm") {
          line-height: 1.8;
          font-size: 20px;
        }
      }
      .header-description {
        width: 100%;
        margin-top: 10px;
        font-size: 15px;
        color: #9a9a9b;

        @include responseTo("xs") {
          line-height: 1.8;
        }

        @include responseTo("sm") {
          line-height: 1.5;
        }
      }
    }

    .content {
      @include responseTo("xs") {
        margin: unset !important;
        // padding: 0 20px;
      }
      .block-col {
        @include responseTo("xs") {
          padding: 0 30px !important;
          margin-bottom: 40px;
          &:last-child {
            margin-bottom: 0px;
          }
        }
        .block-container {
          box-sizing: border-box;
          overflow: hidden;
          background-image: url("");
          background-position: 50% 50%;
          background-size: cover;
          // background-color: #222;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
          @include responseTo("sm") {
            height: 100%;
          }
          @include responseTo("xs") {
            border-radius: 4px;
            border: 1px solid #444;
          }
          .block-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
          }
          // &:hover {
          //   .detail-text {
          //     background-color: #22222266;
          //     color: #fff;
          //   }
          // }

          .block {
            min-height: 280px;
            border-radius: 5px;
            justify-content: center;
            align-items: center;
            display: flex;
            position: relative;
            white-space: pre-line;
            padding: 40px;

            .title {
              color: #fff;

              text-align: center;
              text-transform: uppercase;
              font-size: 26px;
              // font-weight: 700;
              line-height: 1.2;
            }

            .double-quote {
              position: absolute;
              font-size: 80px;
              bottom: -55px;
              font-weight: 900;
              left: 40px;
              color: #000;
              text-shadow: 0 0 10px #fff;
              font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
            }
          }

          .detail-text {
            flex: 1;
            font-size: 15px;
            color: #e2e0e0;
            line-height: 1.6;

            @include responseTo("xs") {
              background-color: rgba(0, 0, 0, 0.9);
              padding: 20px 16px 20px 16px;
            }
            @include responseTo("sm") {
              transition: all 0.6s;
              padding: 25px 10px 20px 10px;

              background-color: rgba(0, 0, 0, 0.7);
            }
          }
        }
      }

      &.process-swiper-container {
        margin-top: 100px;
        align-items: center;
        position: relative;

        .xs-swiper-image-container {
          @include responseTo("sm") {
            display: nonel;
          }
        }

        .operation-container {
          width: 100%;
          display: flex;
          @include responseTo("xs") {
            margin-top: 40px;
          }
          @include responseTo("sm") {
            margin-top: 40px;
          }
          @include responseTo("lg") {
          }

          .left-arrow-container {
            // position: absolute;
            // left: -100px;
            // width: 100px;
            // top: 50%;
            cursor: pointer;

            @include responseTo("xs") {
              flex: 1;
              text-align: center;
            }
            @include responseTo("sm") {
              flex: 1;
              text-align: center;
            }
            @include responseTo("lg") {
              position: absolute;
              left: -100px;
              width: 100px;
              top: 50%;
            }
          }
          .right-arrow-container {
            // right: -100px;
            // width: 100px;
            // top: 50%;
            // position: absolute;

            // transform: translateY(-50%);
            cursor: pointer;
            @include responseTo("xs") {
              flex: 1;
              text-align: center;
            }
            @include responseTo("sm") {
              flex: 1;
              text-align: center;
            }
            @include responseTo("lg") {
              right: -100px;
              width: 100px;
              top: 50%;
              position: absolute;

              transform: translateY(-50%);
            }
          }
        }

        .product-swiper {
          @include responseTo("xs") {
            max-width: 100vw;
          }
          @include responseTo("sm") {
            flex: 1;
            width: 100%;
          }

          .swiper-slide {
            @include responseTo("xs") {
              padding-bottom: 40px;
            }
            @include responseTo("sm") {
              padding-bottom: 80px;
            }
          }

          .img-header-container {
            width: calc(100% - 30px);
            position: absolute;
            bottom: 0px;
            background: rgba(0, 0, 0, 0.7);
            padding: 10px 16px;
            border-left: 1px solid #444;
            border-right: 1px solid #444;
          }

          .process-header {
            font-weight: 300;
            color: #fff;

            @include responseTo("xs") {
              font-size: 24px;
              color: #f1f1f1;
              width: 100%;
              margin-bottom: 10px;
            }
            @include responseTo("sm") {
              font-size: 48px;
              line-height: 62px;
              font-weight: 300;
            }
          }
          .process-subheader {
            color: #e2e0e0;

            @include responseTo("xs") {
              font-size: 16px;
            }
            @include responseTo("sm") {
              font-size: 26px;
              margin-top: 60px;
              margin-bottom: 18px;
            }
          }
          .process-description {
            color: #e2e0e0;

            @include responseTo("xs") {
              width: 100%;
              font-size: 14px;
              line-height: 18px;
              font-weight: 400;
              padding: 10px 16px;
              word-wrap: break-word;
              // background: radial-gradient(transparent 70%, #292929 100%);
              background: #292929;
              border-bottom: 1px solid #444;
              border-left: 1px solid #444;
              border-right: 1px solid #444;
            }
            @include responseTo("sm") {
              font-size: 19px;
              line-height: 24px;
              font-weight: 400;
              word-wrap: break-word;
            }
          }
          .value-container {
            display: flex;
            justify-content: space-between;

            font-family: "Microsoft YaHei";
            color: #fff;
            @include responseTo("xs") {
              width: 100%;
              font-weight: 400;
              font-size: 30px;
              margin: 20px 0;
              // text-align: center;
              align-items: center;
              flex-wrap: wrap;
            }
            @include responseTo("sm") {
              font-weight: 400;
              font-size: 52px;
              margin: 60px 0;
            }

            .left,
            .right {
              padding: 0 16px;
              @include responseTo("xs") {
                width: 50%;
              }
              @include responseTo("sm") {
                flex: 1;
              }

              .info {
                margin-bottom: 10px;
                @include responseTo("xs") {
                  text-align: center;
                }
              }
              .supplementary {
                color: #e2e0e0;
                @include responseTo("xs") {
                  font-size: 14px;
                }
                @include responseTo("sm") {
                  font-size: 12px;
                }
              }
            }
          }
          .about-me-btn {
            background-color: #545454;
            color: #fff;
            text-align: center;
            display: inline-block;
            cursor: pointer;
            @include responseTo("xs") {
              font-size: 12px;
              padding: 10px 6px;
              font-weight: 400;
              border-radius: 20px;
              width: 100%;
              margin-top: 20px;
            }
            @include responseTo("sm") {
              padding: 16px 40px;
              border-radius: 30px;
              font-size: 18px;
              font-weight: 400;
              flex: 1;
            }
          }

          .process-img {
            aspect-ratio: 1/1;
            width: 100%;
            height: 100%;
            @include responseTo("xs") {
              border-top: 1px solid #666;
              border-left: 1px solid #666;
              border-right: 1px solid #666;
            }
          }
          .zoom-in {
            width: 50px;
            height: 50px;
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            bottom: 30px;
            right: 60px;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .product-item-container {
        width: 31%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .image {
          width: 100%;
          min-height: 500px;
          border-radius: 5px;
          object-fit: cover;
          margin-bottom: 24px;
        }
        .title {
          width: 100%;
          color: #222;
          text-align: center;
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .price {
          width: 100%;

          color: #222;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .btn {
          background-color: #008794;
          border-radius: 5px;
          padding: 5px 25px;
          font-weight: 700;
          transition: background-color 0.3s;
          color: #fff;
          display: inline-block;
          &:hover {
            background-color: #111;
          }
        }
      }
    }

    .product-grid-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 32%);
      justify-content: space-between;
      grid-gap: 20px 20px;

      @include responseTo("xs") {
        padding: 0 30px;
        grid-template-columns: repeat(2, 50%);
        grid-gap: 10px 10px;
      }
      @include responseTo("sm") {
        grid-template-columns: repeat(3, 32%);
        grid-gap: 20px 20px;
      }

      .product-item {
        cursor: pointer;

        aspect-ratio: 1/1;
        position: relative;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @include responseTo("xs") {
          display: flex;
          flex-direction: column-reverse;
        }
        @include responseTo("sm") {
        }

        .product-title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #00000099;
          color: #fff;
          transition: all 0.3s;
          text-align: center;

          @include responseTo("xs") {
            height: 20%;
            font-size: 26px;
          }
          @include responseTo("sm") {
            height: 100%;
            opacity: 0;
            font-size: 38px;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }

    .logo-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 50%);

      @include responseTo("xs") {
        grid-gap: 20px 20px;
        padding: 0 30px;
      }
      @include responseTo("sm") {
        padding: 0 100px;
        row-gap: 80px;
      }

      .logo-block {
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
          object-fit: contain;

          @include responseTo("xs") {
            width: 70%;
          }
          @include responseTo("sm") {
            width: 50%;
          }
        }
      }
    }
  }
  .leadership-container {
    width: 100%;
    // height: 720px;
    margin: 0 auto;
    background-color: #111;
    margin-bottom: 1px;

    .content {
      width: 100%;
      max-width: 1100px;
      height: 100%;
      margin: 0 auto;
      padding-top: 60px;
      @include responseTo("xs") {
        padding: 60px 30px 0px 30px;
      }

      .header {
        color: #e8e8e8;
        text-transform: uppercase;
        width: 100%;

        height: 60px;
        font-weight: 400;
        font-size: 40px;
        margin-bottom: 40px;
        @include responseTo("xs") {
          height: 60px;
          font-weight: 400;
          font-size: 30px;
          margin-bottom: 40px;
        }
        @include responseTo("sm") {
          height: 60px;
          font-weight: 400;
          font-size: 40px;
          margin-bottom: 40px;
        }
      }
      .leader-container {
        width: 100%;
        @include responseTo("xs") {
          height: 100%;
        }
        @include responseTo("sm") {
          display: flex;
          height: calc(100% - 100px);
        }

        .leader-block {
          margin-right: 20px;
          padding-top: 160px;
          // background-color: #240146;
          color: #fff;
          position: relative;
          display: flex;
          flex-direction: column-reverse;

          &:last-child {
            margin-right: 0px;
          }

          @include responseTo("xs") {
            width: 100%;
            margin-bottom: 30px;
            &:last-child {
              margin-bottom: 0px;
            }
          }
          @include responseTo("sm") {
            flex: 1;
          }

          .leader-name {
            font-size: 26px;
            font-weight: 300;
            // margin-bottom: 100px;
            padding: 20px;
            position: relative;
            z-index: 1;
            width: 100%;
            text-align: right;
            text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
          }
          .leader-description {
            position: relative;
            z-index: 1;
            min-height: 164px;

            line-height: 24px;
            padding: 20px;
            background: rgba(30, 30, 30, 0.7);
            margin-bottom: 40px;
            @include responseTo("xs") {
              line-height: 20px;

              font-size: 14px;
            }
            @include responseTo("sm") {
              line-height: 24px;
              font-size: 15px;
            }
          }

          .leader-image {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 0;
            @include responseTo("xs") {
              width: 100%;
            }
            @include responseTo("sm") {
              height: 100%;
            }
            // object-fit: cover;
          }
        }
      }
    }
  }
  :deep(.el-dialog) {
    background-color: transparent;
  }
  :deep(.el-dialog__header) {
    padding: 0;
  }
  :deep(.el-dialog__body) {
    padding: 0;
  }
}
</style>
