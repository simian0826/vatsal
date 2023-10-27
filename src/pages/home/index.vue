<template>
  <div class="home-container">
    <swiper-container
      ref="swiperRef"
      :style="{
        maxWidth: '100vw',
        overflow: 'hidden',
        // 'aspect-ratio': '1920/1080',
        height: '800px',
      }"
      :threshold="1"
      :touchRatio="2.5"
      :creativeEffect="creativeEffect"
      :effect="'creative'"
      slideNextClass="swiper-slide-next"
    >
      <swiper-slide
        class="swiper-slide-item"
        v-for="(item, index) in heroImageList"
        :key="index"
        :style="{
          '--url': `url('${item}')`,
        }"
      >
        <div class="carousel-item-container">
          <div class="content-container">
            <div class="content-block">
              <div class="header">Value engineering made hassle free</div>
              <div class="sub-header">Veda Sourcing is your one-stop solution for producing materials from all across the world</div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    <!-- <swiper-container
      ref="swiperRef"
      :style="{
        maxWidth: '100vw',
        height: '100vh',
      }"
      :speed="500"
      :scrollbar="true"
    ></swiper-container> -->

    <div class="about-us-container">
      <div class="header">
        <div class="left-content">
          <div class="sub-title">WHAT WE DO</div>
          <div class="title">Our Process</div>
        </div>
        <div class="right-content" ref="aboutUsHeaderRightRef">We are focused on providing our clients with quality goods from hard to reach places at competitive prices</div>
      </div>
      <div class="content">
        <div
          class="block-container"
          :key="index"
          v-for="(item, index) in introductionItems"
          :style="{
            'background-image': `url('${item.image}')`,
          }"
        >
          <div class="block">
            <div class="title">{{ item.title }}</div>
            <div class="double-quote">“</div>
          </div>
          <div class="detail-text">{{ item.detaiText }}</div>
        </div>
      </div>

      <div class="content process-swiper-container">
        <div class="left-arrow-container" @click="swiperPrevious">
          <el-icon color="#666" size="60">
            <ArrowLeft />
          </el-icon>
        </div>
        <swiper-container
          ref="productSwiperRef"
          :style="{
            flex: 1,
            'max-width': '100%',
            height: 'auto',
          }"
          :space-between="20"
          :speed="500"
        >
          <swiper-slide v-for="(item, index) in processItems" :key="index">
            <el-row :gutter="40">
              <el-col :span="12">
                <div class="process-header">{{ item.title }}</div>
                <div class="process-subheader">{{ item.subTitle }}</div>
                <div class="process-description">
                  {{ item.description }}
                </div>
                <div class="value-container">
                  <div class="left">{{ item.percentage }}%</div>
                  <div class="right">{{ item.amount }}+</div>
                </div>
                <div class="about-me-btn">More about me</div>
              </el-col>
              <el-col :span="12" style="position: relative">
                <img :src="item.image" class="process-img" />
                <div class="zoom-in" @click="showImage(item.image)">
                  <el-icon color="#fff" size="26"><ZoomIn /></el-icon>
                </div>
              </el-col>
            </el-row>
          </swiper-slide>
        </swiper-container>
        <div class="right-arrow-container" @click="swiperNext">
          <el-icon color="#666" size="60"><ArrowRight /></el-icon>
        </div>
      </div>
    </div>

    <div class="product-list-container" style="padding-bottom: 0px">
      <div class="header">
        <div class="left-content">
          <div class="sub-title">ENDLESS VARIETY</div>
          <div class="title">Our Products</div>
        </div>
        <div class="right-content"></div>
        <div class="header-description">We are focused on providing our clients with quality goods from hard to reachplaces at competitive prices</div>
      </div>

      <div class="product-grid-container">
        <div
          class="product-item"
          :key="index"
          v-for="(item, index) in productItems"
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
          <div class="sub-title">FULLY SATISFIED</div>
          <div class="title">Our Clients</div>
        </div>
        <div class="right-content"></div>
      </div>
      <div class="content">
        <div class="logo-container">
          <img :key="index" v-for="(item, index) in clientItems" :src="item" />
        </div>
      </div>
    </div>
    <div class="leadership-container">
      <div class="content">
        <div class="header">leadership</div>
        <div class="leader-container">
          <div class="leader-block" :key="index" v-for="(item, index) in leaders">
            <div class="leader-name" :style="{ textAlign: index === 1 ? 'right' : 'left' }">{{ item.name }}</div>
            <div class="leader-description">{{ item.description }}</div>
            <img v-if="item.image" class="leader-image" :src="item.image" />
          </div>
        </div>
      </div>
    </div>

    <el-dialog :show-close="false" lock-scroll v-model="detailImageVisible" width="70%">
      <img style="width: 100%" :src="detailImage" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import homeData from "@/data/home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { SwiperSlide } from "swiper/vue";

SwiperCore.use([Scrollbar]);

const swiperRef = ref();
const creativeEffect = ref({
  prev: {
    // will set `translateZ(-400px)` on previous slides
    translate: ["0%", 0, 0],
    origin: "right center",
  },
  next: {
    // will set `translateX(100%)` on next slides
    translate: ["100%", 0, 0],
    origin: "right center",
  },
});

const swipeAttributeTranslate = (postionsStar: number, postionEnd: number, valueStart: any, valueEnd: any) => {
  return function (postionNow: number) {
    if (postionNow <= postionsStar) {
      return valueStart;
    }
    if (postionNow >= postionEnd) {
      return valueEnd;
    }
    return valueStart + ((valueEnd - valueStart) * (postionNow - postionsStar)) / (postionEnd - postionsStar);
  };
};

const productSwiperRef = ref();

const swiperNext = () => {
  productSwiperRef.value.swiper.slideNext();
};
const swiperPrevious = () => {
  productSwiperRef.value.swiper.slidePrev();
};

onMounted(() => {
  const scaleScope = [100, 150];
  const scaleImage = swipeAttributeTranslate(0, swiperRef.value.swiper.width, scaleScope[0], scaleScope[1]);

  const reverseScaleImage = swipeAttributeTranslate(0, swiperRef.value.swiper.width, scaleScope[1], scaleScope[0]);

  swiperRef.value.swiper.on("setTranslate", (swiper: any, translateX: any) => {
    const activeIndex = swiper.activeIndex;

    if (swiper.swipeDirection == "prev") {
      if (activeIndex > 0) {
        swiper.slides[activeIndex - 1].style.setProperty("--backgroundSize", `${scaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
      }
      swiper.slides[activeIndex].style.setProperty("--backgroundSize", `${reverseScaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
    } else {
      if (activeIndex < swiper.slides.length - 1) {
        swiper.slides[activeIndex + 1].style.setProperty("--backgroundSize", `${scaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
      }
      swiper.slides[activeIndex].style.setProperty("--backgroundSize", `${reverseScaleImage(Math.abs(Math.abs(swiper.activeIndex * swiper.width) - Math.abs(translateX)))}%`);
    }
  });

  // swiperRef.value.swiper.on("slideChange", (swiper: any) => {
  //   const activeIndex = swiper.activeIndex;
  //   console.log("slideChange");

  //   if (activeIndex == 0) {
  //     // swiper.allowSlidePrev = false;
  //     // swiper.allowSlideNext = true;
  //   } else if (activeIndex == swiper.slides.length - 1) {
  //     // swiper.allowSlidePrev = true;
  //     // swiper.allowSlideNext = false;
  //   } else {
  //     swiper.allowSlidePrev = true;
  //     swiper.allowSlideNext = true;
  //   }
  // });

  // swiperRef.value.swiper.on("afterInit", (swiper: any) => {
  //   swiper.allowSlidePrev = false;
  //   swiper.allowSlideNext = true;
  //   console.log("reachBeginning");
  // });

  // swiperRef.value.swiper.on("reachBeginning", (swiper: any) => {
  //   swiper.allowSlidePrev = false;
  //   swiper.allowSlideNext = true;
  //   console.log("reachBeginning");
  // });

  // swiperRef.value.swiper.on("reachEnd", (swiper: any) => {
  //   swiper.allowSlidePrev = true;
  //   swiper.allowSlideNext = false;
  //   console.log("reachEnd");
  // });
});

const heroImageList = ref<string[]>([
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecf_nathan-dumlao-pLoMDKtl-JY-unsplash.jpg",
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
]);
const introductionItems = ref(homeData.introductionItems);
const processItems = ref(homeData.processItems);
//详情图
const detailImageVisible = ref(false);
const detailImage = ref("");

const showImage = (src: string) => {
  detailImageVisible.value = true;
  detailImage.value = src;
};

const productItems = ref(homeData.productItems);

const clientItems = ref(homeData.clientLogos);

const leaders = ref(homeData.leaders);
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  .swiper-slide-active {
    z-index: 9 !important;
  }
  .swiper-slide-next {
    z-index: 10 !important;
  }

  .swiper-slide-item {
    --url: url("https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecf_nathan-dumlao-pLoMDKtl-JY-unsplash.jpg");
    --backgroundSize: 100%;
    background-attachment: fixed;
    background-image: var(--url);
    background-clip: content-box;
    background-size: var(--backgroundSize);
    background-repeat: no-repeat;
    background-position: center center;

    .carousel-item-container {
      width: 100%;
      height: 100%;

      // linear-gradient(360deg, #222, rgba(34, 34, 34, 0))

      .content-container {
        max-width: 1100px;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;

        .content-block {
          width: 700px;
          position: absolute;
          bottom: 100px;
          left: 40px;
          background-color: #00000066;
          padding: 60px;
          .header {
            width: 100%;
            color: #f9f9f9;
            font-size: 26px;
            line-height: 1.2;
            font-weight: 300;
          }
          .sub-header {
            width: 80%;
            color: #f9f9f9;
            margin-bottom: 24px;
            font-size: 15px;
            margin-top: 30px;
            line-height: 1.5;
          }
        }
      }
    }
  }

  .about-us-container,
  .our-clients-container,
  .product-list-container {
    width: 100%;
    max-width: 1100px;
    min-height: 100%;
    padding: 80px 0;
    margin: 0 auto;

    .header {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
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
          font-size: 26px;
          line-height: 1.2;
          color: #282828;
        }
      }

      .right-content {
        flex: 1;
        align-self: flex-end;

        font-size: 15px;
        color: #9a9a9b;
        line-height: 1.5;
      }
      .header-description {
        width: 100%;
        margin-top: 10px;
        font-size: 15px;
        color: #9a9a9b;
        line-height: 1.5;
      }
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .block-container {
        width: 30%;
        background-image: url("");
        background-position: 50% 50%;
        background-size: cover;
        // background-color: #222;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        &:hover {
          .detail-text {
            background-color: #22222266;
            color: #fff;
          }
        }

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
          background-color: #fff;
          padding: 25px 10px 20px 10px;
          font-size: 15px;
          color: #9a9a9b;
          line-height: 1.6;
          transition: all 0.6s;
        }
      }

      &.process-swiper-container {
        margin-top: 100px;
        align-items: center;
        position: relative;
        .left-arrow-container {
          position: absolute;
          text-align: center;
          left: -100px;
          width: 100px;
          top: 50%;

          transform: translateY(-50%);
        }
        .right-arrow-container {
          text-align: right;
          right: -100px;
          width: 100px;
          top: 50%;

          transform: translateY(-50%);
          position: absolute;
        }
        .process-header {
          font-size: 38px;
          line-height: 62px;
          font-weight: 300;
          color: #282828;
        }
        .process-subheader {
          font-size: 20px;
          color: #1e1e1e;
          margin-top: 60px;
          margin-bottom: 10px;
          font-family: "Courier New", Courier, monospace;
        }
        .process-description {
          font-size: 15px;
          line-height: 1.8;

          color: #9a9a9b;
        }
        .value-container {
          display: flex;
          justify-content: space-between;
          font-size: 38px;
          font-weight: bold;
          margin: 60px 0;

          .left,
          .right {
            flex: 1;
          }
        }
        .about-me-btn {
          background-color: #222;
          color: #fff;
          text-align: center;
          display: inline-block;
          padding: 16px 40px;
          border-radius: 30px;
          font-size: 14px;
        }

        .process-img {
          aspect-ratio: 1/1;
          width: 100%;
        }
        .zoom-in {
          width: 50px;
          height: 50px;
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          bottom: 30px;
          right: 40px;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
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

      .product-item {
        aspect-ratio: 1/1;
        position: relative;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        .product-title {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #00000099;
          color: #fff;
          font-size: 38px;
          transition: all 0.3s;
          opacity: 0;
          text-align: center;

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .logo-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 100px;
      height: 120px;

      .logo {
        height: 100%;
        object-fit: contain;
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

      .header {
        width: 100%;
        font-size: 38px;
        color: #fff;
        text-transform: uppercase;
        height: 60px;
        margin-bottom: 40px;
      }
      .leader-container {
        width: 100%;
        height: calc(100% - 100px);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .leader-block {
          width: 48%;
          padding-top: 160px;
          // background-color: #240146;
          color: #fff;
          position: relative;
          .leader-name {
            font-size: 26px;
            font-weight: 300;
            margin-bottom: 100px;
            padding: 20px;
            position: relative;
            z-index: 1;
            width: 100%;
          }
          .leader-description {
            position: relative;
            z-index: 1;

            font-size: 15px;
            line-height: 28px;
            padding: 20px;
            background: rgba(30, 30, 30, 0.7);
          }

          .leader-image {
            position: absolute;
            height: 100%;
            bottom: 0;
            left: 0;
            z-index: 0;
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
