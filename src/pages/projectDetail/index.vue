<template>
  <div class="project-container">
    <div class="hero-container">
      <img class="hero-image" src="https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-1.jpg" />
    </div>

    <div class="introduction-container">
      <div class="sub-title">MIXED-USE</div>
      <div class="title">MIAMI BEACH COLIVING</div>
      <div class="description">
        This project features coliving, coworking, and an extended-stay hotel component alongside welln, nextTickess amenities and a robust food and beverage program, open to the neighborhood and
        community. The project will offer 10,319 SF of leasable workspace and combined 125 living spaces across hotel rooms and co-living residences. The ground floor will house F&B options including
        grab and go snacks/meals and a bar offering entertainment to guests and residents.
      </div>
    </div>

    <div class="bg-section">
      <div class="material-container">
        <div class="left-arrow-container" @click="swiperPrevious">
          <el-icon color="#666" size="40">
            <ArrowLeftBold />
          </el-icon>
        </div>

        <div class="material-content">
          <el-divider
            :style="{
              'margin-bottom': '80px',
            }"
            content-position="center"
          >
            <div class="header">Material Supplied</div>
          </el-divider>
          <swiper-container
            ref="swiperRef"
            :style="{
              'max-width': '1100px',
              height: '400px',
            }"
            :space-between="20"
            :slides-per-view="3"
            :speed="500"
            :scrollbar="true"
          >
            <swiper-slide v-for="(item, index) in materials" :key="index">
              <div class="material-item-container">
                <img :src="item.image" class="material-img" />
                <div class="content-container">
                  <div class="title">{{ item.title }}</div>
                  <div class="title">{{ item.title }}</div>
                  <div class="price">{{ item.price }}</div>
                  <div class="vat">{{ item.vat }}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>

        <div class="right-arrow-container" @click="swiperNext">
          <el-icon color="#666" size="40"><ArrowRightBold /></el-icon>
        </div>
      </div>
    </div>
    <div class="gallery-container">
      <el-divider
        :style="{
          'margin-bottom': '80px',
        }"
        content-position="center"
      >
        <div class="header">Project Images</div>
      </el-divider>
      <img class="image" src="https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-2.jpg" />
      <!-- <el-row :gutter="20" style="height: 100%;">
        <el-col :span="12"><img src="https://miclglobal.com/wp-content/uploads/2022/08/collage.jpg"/></el-col>
        <el-col :span="12">
          <el-row :gutter="20" style="height: 50%;">
            <el-col :span="12"></el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row :gutter="20" style="height: 50%;"></el-row>
        </el-col>
      </el-row> -->
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

const swiperRef = ref();
const aboutUsRef = ref(null);
const aboutUsHeaderLeftRef = ref(null);
const aboutUsHeaderRightRef = ref(null);

const aboutUsBlockRefs: VNodeRef[] = [];

const swiperNext = () => {
  swiperRef.value.swiper.slideNext();
};
const swiperPrevious = () => {
  swiperRef.value.swiper.slidePrev();
};
onMounted(() => {
  // console.log(aboutUsBlockRefs);
  console.log("swiperRef", swiperRef);

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

const materials = ref([
  {
    price: "subtitle",
    title: "PRODUCT SELECTION",
    image: "./assets/6.jpg",
    vat: "Including VAT",
  },
  {
    price: "subtitle",
    title: "QUALITY CONTROL",
    image: "./assets/1.jpg",
    vat: "Including VAT",
  },
  {
    price: "subtitle",
    title: "TRANSPORT & DELIVERY",
    image: "./assets/2.jpg",

    vat: "Including VAT",
  },
  {
    price: "subtitle",
    title: "TRANSPORT & DELIVERY",
    image: "./assets/3.jpg",
    vat: "Including VAT",
  },
  {
    price: "subtitle",
    title: "TRANSPORT & DELIVERY",
    image: "./assets/4.jpg",
    vat: "Including VAT",
  },
  {
    price: "subtitle",
    title: "TRANSPORT & DELIVERY",
    image: "./assets/5.jpg",
    description: "From the manufacturer's warehouse to your project site, we work with freight providers to ensure that your goods will arrive right on schedule.",
  },
]);

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

  .hero-container {
    width: 100%;
    height: 100vh;
    .hero-image {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      background: #000;
    }
  }
  .introduction-container {
    width: 100%;
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 0px;
    justify-content: center;
    flex-wrap: wrap;

    .sub-title {
      width: 100%;
      color: #005482;
      font-weight: 300;
      letter-spacing: 5px;
      font-size: 15px;
      text-align: center;
    }
    .title {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      color: #2d2d2d;
      font-size: 52px;
      margin-bottom: 15px;
      margin: 20px;
    }
    .description {
      font-size: 17px;
      letter-spacing: 0;
      line-height: 1.8;
      text-align: center;
    }
  }
  .bg-section {
    --bgcolor: #f1f0ea;
    background-color: var(--bgcolor);
    width: 100%;

    :deep(.el-divider__text) {
      background-color: var(--bgcolor);
    }

    .material-container {
      max-width: 1100px;
      width: 100%;
      margin: 0 auto;

      display: flex;
      .left-arrow-container {
        width: 40px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .right-arrow-container {
        width: 40px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .material-content {
        flex: 1 1 auto;

        // height: 100vh;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        padding: 40px 0;

        .header {
          width: 100%;
          // text-align: center;
          // text-transform: uppercase;
          color: #2d2d2d;
          font-size: 36px;
          // margin-bottom: 80px;
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
            aspect-ratio: 16/9;
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
              color: #111;
              font-size: 16px;
            }
            .title {
              color: #111;
              font-size: 18px;
              margin-bottom: 6px;
            }
            .price {
              color: #111;
              font-weight: 600;
              margin-bottom: 6px;
              font-size: 20px;
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
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding-top: 40px;
    .header {
      width: 100%;
      text-align: center;
      // text-transform: uppercase;
      color: #2d2d2d;
      font-size: 52px;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
