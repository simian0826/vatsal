<template>
  <div class="home-container">
    <swiper-container
      ref="swiperRef"
      :style="{
        maxWidth: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }"
      :threshold="1"
      :touchRatio="2.5"
      :scrollbar="true"
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
          <div class="content">
            <div class="header">Value engineering made hassle free</div>
            <div class="sub-header">Veda Sourcing is your one-stop solution for producing materials from all across the world</div>

            <div class="btn">Learn More</div>
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
    <el-carousel :interval="5000" arrow="never" height="600px">
      <!-- <el-carousel-item v-for="(item, index) in heroImageList" :key="index">
        <div class="carousel-item-container">
          <img class="bg-img" :src="item" />
          <div class="content">
            <div class="header">Value engineering made hassle free</div>
            <div class="sub-header">
              Veda Sourcing is your one-stop solution for producing materials
              from all across the world
            </div>

            <div class="btn">Learn More</div>
          </div>
        </div>
      </el-carousel-item> -->
    </el-carousel>

    <div class="about-us-container" ref="aboutUsRef">
      <div class="header">
        <div class="left-content" ref="aboutUsHeaderLeftRef">
          <div class="sub-title">WHAT WE DO</div>
          <div class="title">Our Process</div>
        </div>
        <div class="right-content" ref="aboutUsHeaderRightRef">We are focused on providing our clients with quality goods from hard to reach places at competitive prices</div>
      </div>
      <div class="content">
        <div class="block-container" :key="item.number" v-for="item in introductionItems" :ref="setAboutUsBlockRefs">
          <div class="block">
            <div class="number">{{ item.number }}</div>
            <div class="title">{{ item.title }}</div>
            <img :src="item.image" class="bg-image" />
          </div>
          <div class="detail-text">{{ item.detaiText }}</div>
        </div>
      </div>
    </div>

    <div class="product-list-container">
      <div class="header">
        <div class="left-content">
          <div class="sub-title">ENDLESS VARIETY</div>
          <div class="title">Our Products</div>
        </div>
        <div class="right-content"></div>
      </div>
      <div class="content">
        <!-- <div
          class="product-item-container"
          :key="item.title"
          v-for="item in products"
        >
          <img :src="item.image" class="image" />
          <div class="title">{{ item.title }}</div>
          <div class="price">{{ `Starting from $${item.price}/sqft` }}</div>
          <div class="btn">Details</div>
        </div> -->
        <el-row>
          <el-col :span="12">
            <div class="product-left-container">
              <img src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg" class="main-img" />
              <img
                v-show="isShowDetailImage"
                class="detail-img"
                src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg"
                :style="{ opacity: isShowDetailImage ? 1 : 0 }"
              />
              <div class="list-img-container">
                <img
                  class="tiny-img"
                  src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg"
                  @mouseenter="productTinyImageMouseEnterHandler"
                  @mouseleave="productTinyImageMouseLeaveHandler"
                />
                <img class="tiny-img" src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg" />
                <img class="tiny-img" src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg" />
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="product-right-container">
              <div class="header-container">
                <div class="product-header">We provide products for your unique needs</div>
                <div class="product-sub-header">Create the ideal packaging for any product, stand out from competitors and connect with customer values.</div>
              </div>

              <div class="property-container">
                <div class="property-item">Size</div>
                <div class="property-item">Material</div>
                <div class="property-item">Colors</div>
                <div class="property-item">Features</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="our-clients-container">
      <div class="header">
        <div class="left-content">
          <div class="sub-title">FULLY SATISFIED</div>
          <div class="title">Our Clients</div>
        </div>
        <div class="right-content"></div>
      </div>
      <div class="content">
        <div class="block-container" :key="item.number" v-for="item in clientItems">
          <div class="block">
            <div class="number">{{ item.number }}</div>
            <div class="title">{{ item.title }}</div>
            <img :src="item.image" class="bg-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, VNodeRef } from "vue";
gsap.registerPlugin(ScrollTrigger);

import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { SwiperSlide } from "swiper/vue";

SwiperCore.use([Scrollbar]);

const aboutUsRef = ref(null);
const aboutUsHeaderLeftRef = ref(null);
const aboutUsHeaderRightRef = ref(null);

const aboutUsBlockRefs: VNodeRef[] = [];
const setAboutUsBlockRefs = (el: any) => {
  if (el) {
    aboutUsBlockRefs.push(el);
  }
};
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

  const aboutUsLeftTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: aboutUsRef.value,
      scrub: 0,
      start: "top 80%",
      end: "bottom 120%",
    },
  });
  const aboutUsRightTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: aboutUsRef.value,
      scrub: 1,
      start: "top 70%",
      end: "bottom 110%",
    },
  });
  const aboutUsBlockTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: aboutUsRef.value,
      scrub: 1,
      start: "top 60%",
      end: "bottom 120%",
    },
  });

  aboutUsBlockRefs.forEach((item, index) => {
    aboutUsBlockTimeline.fromTo(
      item,
      {
        opacity: 0,
        translateY: index % 2 == 0 ? 40 : -40,
      },
      {
        translateY: 0,

        opacity: 1,
      },
    );
  });

  aboutUsLeftTimeline.fromTo(
    aboutUsHeaderLeftRef.value,
    {
      opacity: 0,
      translateX: -50,
    },
    {
      translateX: 0,

      opacity: 1,
    },
  );
  aboutUsRightTimeline.fromTo(
    aboutUsHeaderRightRef.value,
    {
      opacity: 0,
      translateX: 50,
    },
    {
      translateX: 0,
      opacity: 1,
    },
  );
});

const heroImageList = ref<string[]>([
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecf_nathan-dumlao-pLoMDKtl-JY-unsplash.jpg",
  "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
]);
const introductionItems = ref([
  {
    number: "01",
    title: "PRODUCT SELECTION",
    image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeebc_Circle.svg",
    detaiText: "Our team is constantly scouring the globe to find new materials and inspiration. We work directly with manufacturers to secure the best rates for our customers.",
  },
  {
    number: "02",
    title: "QUALITY CONTROL",
    image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeebf_Triangle.svg",
    detaiText:
      "Oversight at very level of the manufacturing and packaging process helps us maintain the highest standards of quality. All of our products are vigorously tested and certified by the appropriate authorities.",
  },
  {
    number: "03",
    title: "TRANSPORT & DELIVERY",
    image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeec0_Rectangle.svg",
    detaiText: "From the manufacturer's warehouse to your project site, we work with freight providers to ensure that your goods will arrive right on schedule.",
  },
]);

const productTinyImageMouseEnterHandler = () => {
  isShowDetailImage.value = true;
};
const productTinyImageMouseLeaveHandler = () => {
  isShowDetailImage.value = false;
};
const isShowDetailImage = ref(false);

const clientItems = ref([
  {
    number: "01",
    title: "MICL",
    image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeebc_Circle.svg",
  },
  {
    number: "02",
    title: "FORTH \n DEVELOPMENT",
    image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeebf_Triangle.svg",
  },
  {
    number: "03",
    title: "BOMBAY \n DARBAR",
    image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeec0_Rectangle.svg",
  },
]);

// const productList = ref([
//   {
//     mainImage:"",
//   }
// ])
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

      .content {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      .header {
        width: 50%;
        color: #f9f9f9;
        font-size: 62px;
        line-height: 1.2;
        font-weight: 600;
      }
      .sub-header {
        width: 35%;
        color: #f9f9f9;
        margin-bottom: 25px;
        font-size: 18px;
        margin-top: 20px;
        line-height: 1.5;
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

  .about-us-container,
  .our-clients-container,
  .product-list-container {
    width: 100%;
    max-width: 1200px;
    min-height: 100%;
    padding: 80px 0;
    margin: 0 auto;

    .header {
      display: flex;
      justify-content: space-between;
      align-self: center;
      color: #333;
      margin-bottom: 40px;

      .left-content {
        flex: 1;
        .sub-title {
          font-size: 16px;
          line-height: 1.5;
        }
        .title {
          font-size: 40px;
          line-height: 1.2;
          font-weight: 600;
        }
      }

      .right-content {
        flex: 1;

        font-size: 16px;
        line-height: 1.5;
      }
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .block-container {
        width: 30%;
        .block {
          min-height: 350px;
          background-color: #222;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          margin-bottom: 45px;
          display: flex;
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
          white-space: pre-line;
          .number {
            color: #f9f9f9;
            font-size: 40px;
            font-weight: 700;
            position: absolute;
            top: 10%;
            bottom: auto;
            left: 10%;
            right: auto;
          }
          .title {
            color: #f9f9f9;
            text-align: center;
            text-transform: uppercase;
            font-size: 40px;
            font-weight: 700;
            line-height: 1.2;
          }
          .bg-image {
            position: absolute;
            position: absolute;
            bottom: -10%;
            right: -8%;
            width: 120px;
            height: 120px;
          }
        }

        .detail-text {
          font-size: 16px;
          line-height: 1.5;
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
      .product-left-container,
      .product-right-container {
        position: relative;
        height: 600px;
      }
      .product-left-container {
        margin: 0 40px;
        .main-img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          object-fit: cover;
        }
        .detail-img {
          position: absolute;
          top: 20px;
          left: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 10px rgba(30, 30, 30, 0.5);
          transition: opacity 0.3s;
          opacity: 0;
        }
        .list-img-container {
          position: absolute;
          right: -80px;
          bottom: 10%;
          display: flex;
          width: 160px;
          height: 300px;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          .tiny-img {
            width: 80px;
            height: 80px;
            border-radius: 6px;
            box-shadow: 0 0 10px rgba(30, 30, 30, 0.5);
          }
        }
      }
      .product-right-container {
        margin: 0 40px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        .header-container {
          margin-bottom: 40px;
          .product-header {
            width: 100%;
            color: #111;
            font-size: 38px;
            line-height: 1.25;
            letter-spacing: -0.025em;
            font-weight: 600;
          }
          .product-sub-header {
            width: 100%;
            color: #111;
            margin-bottom: 16px;
            margin-top: 16px;
            line-height: 28.8px;
          }
        }

        .property-container {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          .property-item {
            border-radius: 6px;
            width: 300px;
            padding: 16px;
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;

            &.active,
            &:hover {
              background-color: #eee;
            }
          }
        }
      }
    }
  }

  .product-section {
    width: 100%;
    max-width: 1200px;
    min-height: 100%;
    padding: 80px 0;
    margin: 0 auto;

    display: flex;

    .left-content {
      flex: 1;
    }
    .right-content {
      flex: 1;
    }
  }
}
</style>
