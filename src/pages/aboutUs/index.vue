<template>
  <div class="aobut-us-container">
    <div class="hero-container">
      <img class="hero-image" :src="heroImgUrl" />
    </div>
    <div class="content-container">
      <div class="why-section">
        <div class="introductory-paragraph">Why veda sourcing?</div>
        <div class="why-header">We’re here to add value to your projects</div>
        <div class="why-description">We strive to source materials never before seen in your local market, at prices you would've never imagined.</div>
      </div>

      <div class="quality-section">
        <div v-for="(item, index) in qualityItems" :key="index" class="quality-item">
          <div class="icon-container">
            <img :src="item.url" />
          </div>
          <div class="quality-header">{{ item.header }}</div>
          <div class="quality-description">{{ item.desc }}</div>
        </div>
      </div>

      <div class="journey-section">
        <div class="journey-image"></div>
        <div class="journey-block">
          <div class="journey-header">Our Journey</div>
          <div class="sub-header">Vatsal and Anil first met in Miami</div>
        </div>
      </div>

      <div class="member-section">
        <div v-for="(item, index) in members" :key="index" class="member-item-container">
          <img :src="item.url" />
          <div class="member-name">{{ item.name }}</div>
          <div class="member-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <div class="bottom-hero-container">
      <div class="header"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import projectListData from "@/data/projectList";

const heroImgUrl = ref<string>(projectListData.heroImgUrl);
const qualityItems = ref([
  {
    url: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeed8_verified.svg",
    header: "Our Warranty",
    desc: "All our products — whether we make them or not — are backed by our warranty.",
  },
  {
    url: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeed9_cart.svg",
    header: "Shopping Experience",
    desc: "Can't find what you're looking for? We'll go on a hunt to find exactly what you need.",
  },
  {
    url: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeeda_transport.svg",
    header: "On-time Delivery",
    desc: "We ensure that your project gets the right materials at the right time.",
  },
  {
    url: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeedb_chat-alt.svg",
    header: "Quality Service",
    desc: "Whether you need technical support or just a chat, we're here for you.",
  },
]);

const members = ref([
  {
    url: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeedd_John%20Doe.png",
    name: "Vatsal Shah",
    desc: "Vatsal comes from a family with six decades of experience running a construction and real estate development powerhouse in India. He spearheads their firm's US division with a goal to match the Indian division's scale in just five short years. Through his involvement in this sector, he has intricate knowledge of the design, quality and value of materials used in construction.",
  },
  {
    url: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeede_Jane%20Doe.png",
    name: "Anil Agrawal",
    desc: "Anil has a multi-faceted background in industries such as garment manufacturing and restaurants. Having run businesses across multiple countries, he has the expertise in finding the right manufacturers, ensuring quality control and managing logistical issues.",
  },
]);
</script>

<style scoped lang="scss">
.aobut-us-container {
  width: 100%;
  position: relative;
  color: #333;
  font-family: Sen, sans-serif;

  .hero-container {
    width: 100%;
    height: 550px;
    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content-container {
    width: 100%;
    max-width: 1400px;
    min-height: 100%;
    padding: 80px 0;
    margin: 0 auto;

    .why-section {
      text-align: center;
      width: 45%;
      margin: 0 auto;

      .introductory-paragraph {
        text-transform: uppercase;
        font-size: 14px;
      }
      .why-header {
        font-size: 28px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 36px;
      }
      .why-description {
        color: #333;
        font-family: Sen, sans-serif;
        font-size: 16px;
        line-height: 1.5;
      }
    }

    .quality-section {
      width: 100%;
      padding: 65px 0;
      display: flex;

      justify-content: space-between;

      .quality-item {
        width: 22%;
        .icon-container {
          width: 100%;
          margin-bottom: 20px;
          img {
            width: 48px;
            height: 48px;
          }
        }
        .quality-header {
          margin-top: 20px;
          font-size: 24px;
          line-height: 30px;

          margin-bottom: 10px;
          font-weight: bold;
        }

        .quality-description {
          color: #333;
          font-family: Sen, sans-serif;
          font-size: 16px;
          line-height: 1.5;
        }
      }
    }

    .journey-section {
      width: 100%;
      padding: 65px 0;
      position: relative;
      height: 300px;

      .journey-image {
        width: 45%;
        height: 90%;
        background-image: url("https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeedc_sept-commercial-Cqu3DdNwtKQ-unsplash%20(1)%20(1).jpg");
        background-position: 50% 100%;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
      }
      .journey-block {
        width: 70%;
        height: 100%;
        background: #222;
        border-radius: 5px;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        z-index: 0;

        color: #fff;

        .journey-header {
          width: 100%;
          text-align: center;
          margin-bottom: 60px;
          font-size: 32px;
          font-weight: bold;
          line-height: 36px;
        }
      }
    }

    .member-section {
      width: 100%;
      padding: 65px 0;
      position: relative;

      display: flex;
      justify-content: space-between;

      .member-item-container {
        width: 45%;
        text-align: center;

        .member-avatar {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin-bottom: 20px;
        }

        .member-name {
          margin-top: 20px;
          font-size: 24px;
          line-height: 30px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .member-desc {
          font-size: 16px;
          line-height: 1.5;
        }
      }
    }
  }

  .bottom-hero-container {
    width: 100%;
    min-height: 550px;
    background-position: 0 0, 50%;
    background-size: auto, cover;
    background-image: linear-gradient(360deg, #222, rgba(34, 34, 34, 0)),
      url("https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeee0_adam-solomon-WHUDOzd5IYU-unsplash%20(1)%20(1).jpg");

    .content-container {
    }
  }
}
</style>
