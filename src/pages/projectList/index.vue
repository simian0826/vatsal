<template>
  <div class="project-list-container">
    <HeroSection />

    <div class="ongoing-container" id="ongoing">
      <div class="header">ONGOING PROJECTS</div>
      <div class="list-content">
        <div class="block-item" :key="index" v-for="(item, index) in onGoingProjects" @click="router.push({ path: `/projectDetail/${item.id}` })">
          <div class="image-container">
            <img class="item-image" :src="item.image" />
            <div class="mask-container">
              <div class="explore-btn">explore</div>
            </div>
          </div>
          <div class="info-container">
            <div class="extra-title">{{ item.subtitle }}</div>
            <div class="main-info">
              <div class="project-title">{{ item.title }}</div>
              <div class="location-container">
                <el-icon
                  :style="{
                    marginRight: '4px',
                  }"
                >
                  <Location />
                </el-icon>
                <span>{{ item.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden-sm-and-up" style="padding: 40px">
      <div style="height: 1px; width: 100%; background-image: radial-gradient(#cecece88 1%, transparent 99%)"></div>
    </div>
    <div class="completed-container" id="completed">
      <div class="header">COMPLETED PROJECTS</div>

      <div class="list-content">
        <div class="block-item" :key="index" v-for="(item, index) in completedProjects" @click="router.push({ path: `/projectDetail/${item.id}` })">
          <div class="image-container">
            <img class="item-image" :src="item.image" />
            <div class="mask-container">
              <div class="explore-btn">explore</div>
            </div>
          </div>
          <div class="info-container">
            <div class="extra-title">{{ item.subtitle }}</div>
            <div class="main-info">
              <div class="project-title">{{ item.title }}</div>
              <div class="location-container">
                <el-icon
                  :style="{
                    marginRight: '4px',
                  }"
                >
                  <Location />
                </el-icon>
                <span>{{ item.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeroSection from "@/components/HeroSection.vue";

import { useRouter } from "vue-router";
import projectListData from "@/data/projectList";
import { ProjectListItem } from "@/types/projectList";

const router = useRouter();
const onGoingProjects = ref<ProjectListItem[]>(projectListData.ongoingProjects);

const completedProjects = ref<ProjectListItem[]>(projectListData.completedProjects);
</script>

<style scoped lang="scss">
.project-list-container {
  width: 100%;
  position: relative;

  .hero-container {
    width: 100%;
    height: 100vh;
    .hero-image {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  .ongoing-container,
  .completed-container {
    min-height: 100%;
    margin: 0 auto;

    @include responseTo("xs") {
      width: 100%;
      padding: 40px 0;
    }
    @include responseTo("sm") {
      width: 1100px;
      padding: 80px 0;
    }
    .header {
      // padding: 5px 10px;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 30px;
      letter-spacing: 4px;
      color: #fff;
      margin-bottom: 40px;
      @include responseTo("xs") {
        width: 100%;
        padding: 0 20px;
        font-size: 28px;
      }
    }

    .list-content {
      width: 100%;
      @include responseTo("xs") {
        width: 100%;
        padding: 0 20px;
      }
      @include responseTo("sm") {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
      }

      .block-item {
        aspect-ratio: 386/ 540;
        background-color: #292929;
        @include responseTo("xs") {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0px;
          }
        }

        .image-container {
          width: 100%;
          aspect-ratio: 386/ 442;
          overflow: hidden;
          position: relative;

          &:hover {
            .mask-container {
              opacity: 1;
            }
            .item-image {
              transform: scale(1.05);
            }
          }

          .item-image {
            width: 100.1%;
            height: 100.1%;
            object-fit: cover;
            transition: transform 0.3s;
          }
          .mask-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 41, 63, 0.5);
            transition: opacity 0.4s;
            opacity: 0;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            .explore-btn {
              padding: 14px 24px;
              text-align: center;
              color: #111;
              text-transform: uppercase;
              font-weight: 600;
              background-color: #fff;
              font-size: 12px;
              letter-spacing: 2px;
              border-radius: 2px;

              &:hover {
                background-color: #eee;
              }
            }
          }
        }

        .info-container {
          padding: 20px 10px;
          .extra-title {
            font-weight: 400;
            font-size: 18px;
            color: #a4a1a1;
            line-height: 22px;
          }
          .main-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 6px;
            .project-title {
              color: #e8e8e8;
              font-size: 18px;
              font-weight: 600;
            }
            .location-container {
              display: flex;
              align-items: center;
              justify-self: center;
              color: #000;
              font-size: 12px;
              border-radius: 2px;
              background: #959595;
              padding: 4px 6px;
            }
          }
        }
      }
    }
  }
}
</style>
