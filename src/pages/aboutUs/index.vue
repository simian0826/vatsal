<template>
  <div class="aobut-us-container">
    <HeroSection :module="'about us'" />

    <div class="construct-container">
      <!-- <div class="why-section">
        <div class="introductory-paragraph">Why veda sourcing?</div>
        <div class="why-header">We’re here to add value to your projects</div>
        <div class="why-description">We strive to source materials never before seen in your local market, at prices you would've never imagined.</div>
      </div> -->

      <div class="why-us-section">
        <div class="header">WHY US</div>
        <div class="subheader">We’re here to add value to your projects</div>
      </div>

      <div class="quality-section">
        <div v-for="(item, index) in aboutUsData?.qualityItems" :key="index" class="quality-item">
          <div class="icon-container">
            <img :src="item.image" />
          </div>
          <div class="quality-header">{{ item.title }}</div>
          <div class="quality-description">{{ item.desc }}</div>
        </div>
      </div>

      <!-- <div class="journey-section">
        <div class="journey-image"></div>
        <div class="journey-block">
          <div class="journey-header">Our Journey</div>
          <div class="sub-header">Vatsal and Anil first met in Miami</div>
        </div>
      </div> -->

      <div class="our-team-section">
        <div class="header">OUR TEAM</div>

        <div class="member-container">
          <div v-for="(item, index) in aboutUsData?.teamMembers" :key="index" class="member-item">
            <div class="profile-container">
              <el-row align="middle" justify="center">
                <el-col :xs="24" :sm="8" class="avatar-col">
                  <img class="avatar" :src="item.image" />
                </el-col>
                <el-col :xs="24" :sm="16" class="name-col">
                  <div class="name">{{ item.name }}</div>
                  <div class="desc">{{ item.description }}</div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="need-help-container">
      <div class="content-container">
        <div class="header">{{ aboutUsData?.needHelpHeader }}</div>
        <div class="desc">{{ aboutUsData?.needHelpDesc }}</div>

        <div class="contact-btn">
          <a href="mailto:404888541@qq.com">Contact US Info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import { ref, onBeforeMount } from "vue";
import { getAboutUsPageApi } from "@/api";
import { AboutUsPage } from "@/api/model";

const aboutUsData = ref<AboutUsPage>();

onBeforeMount(async () => {
  const res = await getAboutUsPageApi();
  aboutUsData.value = res;
});
</script>

<style scoped lang="scss">
.aobut-us-container {
  width: 100%;
  position: relative;
  color: #fff;
  font-family: "Fontanella";
  background-color: rgb(26, 26, 26);

  .construct-container {
    padding-top: 50px;
    padding-bottom: 80px;
    margin: 0 auto;

    @include responseTo("sm") {
      width: 1100px;
      min-height: 100%;
    }
    @include responseTo("xs") {
      width: 100%;
    }

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
    .why-us-section,
    .our-team-section {
      font-family: "Fontanella";
      font-weight: 200;
      color: #e2e0e0;
      @include responseTo("sm") {
      }
      @include responseTo("xs") {
        padding: 0 20px;
      }
      .header {
        @include responseTo("sm") {
          font-size: 48px;
        }
        @include responseTo("xs") {
          font-size: 30px;
        }
      }
      .subheader {
        @include responseTo("sm") {
          font-size: 28px;
          margin-top: 32px;
        }
        @include responseTo("xs") {
          font-size: 18px;
          margin-top: 16px;
        }
      }

      .member-container {
        margin-top: 50px;
        display: grid;
        justify-content: space-between;

        @include responseTo("sm") {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 40px 40px;
        }
        @include responseTo("xs") {
          grid-template-columns: repeat(1, 1fr);
          grid-row-gap: 40px;
        }

        .member-item {
          // min-height: 484px;
          padding: 30px;
          background-color: #212121;

          .profile-container {
            display: flex;
            height: 100%;
            // padding-top: 80px;
            .avatar-col {
              padding-right: 20px;
              .avatar {
                aspect-ratio: 170/214;
                width: 100%;
                // width: 170px;
                // height: 214px;
              }
            }

            .name-col {
              @include responseTo("sm") {
                height: 100%;
              }
              .name {
                font-weight: 200;
                color: #e2e0e0;
                @include responseTo("sm") {
                  padding-bottom: 40px;
                  font-size: 46px;
                }
                @include responseTo("xs") {
                  padding: 20px;
                  font-size: 36px;
                  text-align: center;
                }
              }
              .desc {
                font-size: 16px;

                font-weight: 400;
                color: #e2e0e0;
                line-height: 24px;
                word-break: break-all;
              }
            }
          }
        }
      }
    }

    .quality-section {
      width: 100%;
      display: grid;
      justify-content: space-between;
      // grid-gap: 40px;
      @include responseTo("sm") {
        grid-template-columns: repeat(4, 1fr);
        padding: 65px 0;

        grid-gap: 40px;
      }
      @include responseTo("xs") {
        padding: 40px 20px;

        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      }

      .quality-item {
        width: 100%;
        background-color: #212121;
        // box-shadow: 0px 0px 12px 0px rgba(216, 216, 216, 0.65);
        text-align: center;

        @include responseTo("sm") {
          padding: 40px 20px;
          aspect-ratio: 270/288;
        }
        @include responseTo("xs") {
          padding: 20px 10px;
        }
        // margin-right: 40px;
        // &:last-child {
        //   margin-right: 0px;
        // }

        .icon-container {
          width: 100%;
          margin-bottom: 20px;

          img {
            @include responseTo("sm") {
              width: 48px;
            }
            @include responseTo("xs") {
              width: 38px;
            }
          }
        }
        .quality-header {
          font-weight: 200;
          @include responseTo("sm") {
            margin-top: 30px;
            font-size: 20px;
            line-height: 22px;
            margin-bottom: 16px;
          }
          @include responseTo("xs") {
            margin-top: 20px;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 10px;
          }
        }

        .quality-description {
          color: #9a9a9b;
          font-family: SansSerif;

          font-weight: 200;
          text-align: left;
          word-break: break-all;
          @include responseTo("sm") {
            font-size: 16px;
            line-height: 22px;
          }
          @include responseTo("xs") {
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
  }

  .need-help-container {
    width: 100%;
    min-height: 550px;

    background-image: url("/assets/needHelpBg.png");
    display: flex;
    align-items: center;
    @include responseTo("sm") {
      background-position: 50%, 50%;
      background-size: cover;
    }
    @include responseTo("xs") {
      background-position: 50%, 50%;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 10px 20px;
    }
    .content-container {
      height: 100%;
      margin: 0 auto;

      @include responseTo("sm") {
        width: 1100px;
      }
      @include responseTo("xs") {
        width: 100%;
      }

      .header {
        font-weight: 400;
        color: #ffffff;
        @include responseTo("sm") {
          width: 500px;
          font-size: 42px;
        }
        @include responseTo("xs") {
          font-size: 36px;
        }
      }
      .desc {
        font-weight: 400;
        color: #ffffff;
        padding: 26px 0;
        word-break: break-all;

        @include responseTo("sm") {
          width: 500px;
          font-size: 20px;
          line-height: 1.5;
          padding: 26px 0;
        }
        @include responseTo("xs") {
          font-size: 16px;
          line-height: 1.2;
          padding: 20px 0;
        }
      }

      .contact-btn {
        border-radius: 10px;
        font-weight: 400;
        text-align: center;
        @include responseTo("sm") {
          cursor: pointer;
          width: 194px;
          padding: 16px;
          font-size: 20px;
          color: #000000;

          background: #f3f3f3;
        }
        @include responseTo("xs") {
          margin-top: 80px;
          padding: 16px;
          font-size: 20px;
          background: rgba(255, 255, 255, 0.15);
          color: #f3f3f3;
          border: 2px solid #f3f3f3;
          backdrop-filter: blur(10px);
        }
      }
    }
  }
}
</style>
