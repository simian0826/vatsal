<template>
  <div class="project-container">
    <div class="hero-container">
      <img class="hero-image" src="https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-1.jpg" />
    </div>

    <div class="main-info-container">
      <div class="main-block">
        <el-row :gutter="80">
          <el-col :span="12">
            <img class="main-img" src="https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-1.jpg" />
          </el-col>
          <el-col :span="12">
            <div class="category-block">category</div>
            <div class="sub-title">product overview</div>
            <div class="header">Brightness, texture and Matte Silk</div>

            <div class="description-container">
              <p>
                <span class="highlight">Lithic</span>
                revisits the innate beauty of the natural stone according to Nexion designerstyle which opens the boundaries to new technical features with the revolutionary
                <span class="highlight">Matte Silk</span>
                finishing.
              </p>
              <p>This collection emulates the vivid and realistic shades of natural stone andharmonize the graphics of nature by representing it in sintered stone</p>
              <p>
                Lithic comes in four colours:
                <span class="highlight">Roccia Portoghese</span>
                . inspired by the beige limestone.
                <span class="highlight">Vicenza Beige</span>
                , the classic pale sedimentary stone, Basalto Grigio, the dark volcanicock. and
                <span class="highlight">Gabbro Sfumato</span>
                , gray with muted tones
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="section-container">
      <div class="section">
        <div class="header-container">surface</div>
        <el-row>
          <el-col :span="7" class="left-container">
            <div class="header">surface</div>
            <div class="slogan">We offer the broadest range of surfaces</div>
            <div class="main-text">Vicenza Beige is available in:</div>
            <div class="sub-text">Matte Silk</div>
          </el-col>
          <el-col :span="17" class="right-container surface-container">
            <div class="surface-item disabled">
              <div class="title">natural</div>
              <el-icon><Close /></el-icon>
            </div>
            <div class="surface-item disabled">
              <div class="title">lappato in cresta</div>
              <el-icon><Close /></el-icon>
            </div>
            <div class="surface-item">
              <div class="title">matte silk</div>
              <el-icon><Check /></el-icon>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section-container">
      <div class="section">
        <div class="header-container">color</div>
        <el-row>
          <el-col :span="7" class="left-container">
            <div class="header">color</div>
            <div class="slogan">We offer the broadest range of surfaces</div>
            <div class="main-text">Vicenza Beige is available in:</div>
            <div class="sub-text">Matte Silk</div>
          </el-col>
          <el-col :span="17" class="right-container color-container">
            <div class="color-item-container" :key="index" v-for="(item, index) in colors">
              <el-popover placement="top" :width="400" trigger="hover">
                <template #reference>
                  <div v-if="item.type === 'color'" class="color-block" :style="{ background: item.value }"></div>
                  <img v-else class="color-image" :src="item.value" />
                </template>
                <div v-if="item.type === 'color'" class="pop-color-block" :style="{ background: item.value }"></div>
                <img v-else class="pop-color-image" :src="item.value" />
              </el-popover>
              <div class="color-name">{{ item.name }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section-container">
      <div class="section">
        <div class="header-container">thickness</div>
        <el-row>
          <el-col :span="7" class="left-container">
            <div class="header">thickness</div>
            <div class="slogan">We offer the broadest range of surfaces</div>
            <div class="main-text">Vicenza Beige is available in:</div>
            <div class="sub-text">Matte Silk</div>
          </el-col>
          <el-col :span="17" class="right-container thickness-container">
            <div class="thickness-item-container" :key="index" v-for="(item, index) in thicknesses">
              {{ item.name }}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section-container">
      <div class="section">
        <div class="header-container">site</div>
        <el-row>
          <el-col :span="7" class="left-container">
            <div class="header">site</div>
            <div class="slogan">We offer the broadest range of surfaces</div>
            <div class="main-text">Vicenza Beige is available in:</div>
            <div class="sub-text">Matte Silk</div>
          </el-col>
          <el-col :span="17" class="right-container site-container">
            <div class="site-item-container" :key="index" v-for="(item, index) in sites">
              {{ item.name }}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section-container">
      <div class="section">
        <div class="header-container">certificate</div>
        <el-row>
          <el-col :span="7" class="left-container">
            <div class="header">certificate</div>
            <div class="slogan">We offer the broadest range of surfaces</div>
            <div class="main-text">Vicenza Beige is available in:</div>
            <div class="sub-text">Matte Silk</div>
          </el-col>
          <el-col :span="17" class="right-container certificate-container">
            <swiper-container
              ref="swiperRef"
              :style="{
                maxWidth: '100%',
                height: '400px',
              }"
              :space-between="20"
              :slides-per-view="3"
              :speed="500"
              :scrollbar="true"
            >
              <swiper-slide v-for="(item, index) in materials" :key="index">
                <div class="certificate-item-container">
                  <img :src="item.image" class="certificate-image" />
                </div>
              </swiper-slide>
            </swiper-container>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { SwiperSlide } from "swiper/vue";

SwiperCore.use([Scrollbar]);

const swiperRef = ref();
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
type ColorObj = {
  name: string;
  value: string;
  type: "image" | "color";
};
const colors = ref<ColorObj[]>([
  {
    name: "white",
    value: "#fff",
    type: "color",
  },

  {
    name: "black",
    value: "#000",
    type: "color",
  },
  {
    name: "jet black metallic",
    value: "#333",
    type: "color",
  },
  {
    name: "GT Sliver Metallic",
    value: "./assets/11.jpg",
    type: "image",
  },
  {
    name: "Guards Red",
    value: "rgb(208,4, 49)",
    type: "color",
  },
  {
    name: "Racing Yellow",
    value: "rgb(255,197, 46)",
    type: "color",
  },
  {
    name: "gendten blue metallic",
    value: "rgb(0, 24, 64)",
    type: "color",
  },
  {
    name: "agate grey metallic",
    value: "./assets/1.jpg",
    type: "image",
  },
]);

const thicknesses = ref([
  {
    name: "20mm",
    value: "20",
  },
  {
    name: "30mm",
    value: "30",
  },
  {
    name: "40mm",
    value: "40",
  },
]);

const sites = ref([
  {
    name: "120x240cm",
    value: "120x240",
  },
  {
    name: "80x160cm",
    value: "80x160cm",
  },
  {
    name: "120x120cm",
    value: "120x120cm",
  },
  {
    name: "120x60cm",
    value: "120x60cm",
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
  color: #424242;

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

  .main-info-container {
    width: 100%;
    padding: 100px 100px;
    background-color: #f2f2f2;
    .main-block {
      max-width: 1100px;
      width: 100%;
      display: flex;
      margin: 0 auto;
      .main-img {
        width: 100%;
        aspect-ratio: 665 / 700;
      }

      .category-block {
        font-size: 16px;
        color: #fff;
        background-color: #333;
        width: 140px;
        height: 30px;
        text-transform: uppercase;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .sub-title {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 40px;
      }
      .header {
        font-size: 40px;
        line-height: 48px;
        position: relative;
        padding-bottom: 10px;
        margin-bottom: 40px;

        &::after {
          content: "";
          width: 60px;
          height: 4px;
          background-color: #333;
          bottom: 0;
          left: 0;
          position: absolute;
        }
      }
      .description-container {
        font-size: 16px;
        line-height: 26px;
        color: #9a9a9a;
        p {
          margin-bottom: 20px;

          .highlight {
            color: #424242;
          }
        }
      }
    }
  }

  .section-container {
    width: 100%;
    background-color: #f2f2f2;

    .section {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;

      .header-container {
        color: #fff;
        background-color: #333;
        height: 50px;
        width: 100%;
        padding: 0 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 38px;
        text-transform: capitalize;
      }

      .left-container {
        padding: 100px 40px;
        background-color: #fff;

        .header {
          font-size: 32px;
          line-height: 40px;
          position: relative;
          padding-bottom: 16px;
          text-transform: capitalize;
          margin-bottom: 30px;
          &::after {
            content: "";
            width: 40px;
            height: 4px;
            background-color: #333;
            bottom: 0;
            left: 0;
            position: absolute;
          }
        }

        .slogan {
          font-size: 16px;
          margin-bottom: 30px;
          color: #999;
        }
        .main-text {
          color: #424242;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .sub-text {
          color: #999;
          font-size: 16px;
        }
      }
      .right-container {
        padding: 100px 40px;

        &.surface-container {
          padding: 100px 100px;

          display: flex;
          align-items: center;
          .surface-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 160px;
            height: 160px;
            border-radius: 80px;
            border: 1px solid #333;
            text-transform: uppercase;
            flex-wrap: wrap;
            align-content: center;
            margin-right: 10px;

            &.disabled {
              border: 1px solid #ccc;
              color: #ccc;
            }

            .title {
              text-align: center;
              margin-bottom: 10px;
              width: 100%;
            }
          }
        }

        &.color-container {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .color-item-container {
            margin-right: 16px;
            margin-bottom: 16px;
            width: 180px;
            cursor: pointer;

            .color-block {
              border-radius: 4px;
              width: 100%;
              height: 40px;
            }

            .color-image {
              border-radius: 4px;
              width: 100%;
              height: 40px;
              object-fit: cover;
            }
            .color-name {
              text-transform: capitalize;
              font-size: 14px;
              margin-top: 6px;
            }
          }
        }
        &.thickness-container,
        &.site-container {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .thickness-item-container,
          .site-item-container {
            background-color: #fff;
            height: 40px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 140px;
            margin-right: 40px;
          }
        }

        &.certificate-container {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .certificate-item-container {
            width: 100%;
            height: 100%;
            position: relative;
            aspect-ratio: 320 / 320;

            .certificate-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
.pop-color-block {
  border-radius: 4px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.pop-color-image {
  border-radius: 4px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
