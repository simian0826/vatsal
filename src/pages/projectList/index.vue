<template>
  <div class="project-list-container">
    <HeroSection :module="'project'" />

    <div class="ongoing-container" id="ongoing">
      <div class="header">ONGOING PROJECTS</div>
      <div class="list-content">
        <div class="block-item" :key="index" v-for="(item, index) in onGoingProjects" @click="router.push({ path: `/projectDetail/${item.id}` })">
          <div class="image-container">
            <img class="item-image" v-if="item.projectImages" :src="item.projectImages[0]" />
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

      <div class="load-more-container">
        <div
          v-loading="onGoingLoading"
          :element-loading-spinner="LoadingSvg"
          element-loading-svg-view-box="-10, -10, 50, 50"
          element-loading-background="rgba(122, 122, 122, 0.8)"
          class="load-more-btn"
          v-if="onGoingLoadMore"
          @click="
            () => {
              handleOnGoingProjectList();
            }
          "
        >
          Load More
        </div>

        <div class="no-more" v-else>No More</div>
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
            <img class="item-image" v-if="item.projectImages" :src="item.projectImages[0]" />
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

      <div class="load-more-container">
        <div
          v-loading="completedLoading"
          :element-loading-spinner="LoadingSvg"
          element-loading-svg-view-box="-10, -10, 50, 50"
          element-loading-background="rgba(122, 122, 122, 0.8)"
          class="load-more-btn"
          v-if="completedLoadMore"
          @click="
            () => {
              handleCompeletedProjectList();
            }
          "
        >
          Load More
        </div>

        <div class="no-more" v-else>No More</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import HeroSection from "@/components/HeroSection.vue";

import { useRouter } from "vue-router";
import type { Project, Pagenigation } from "@/api/model";

import { getProjectListApi } from "@/api";
import { LoadingSvg } from "@/assets/loading";

const router = useRouter();

const onGoingLoading = ref(false);
const onGoingLoadMore = ref(true);

const completedLoading = ref(false);
const completedLoadMore = ref(true);

const onGoingProjects = ref<Project[]>();
const onGoingPagenigation = ref<Pagenigation>({ page: 1, pageSize: 6 });

const completedProjects = ref<Project[]>();

const completedPagenigation = ref<Pagenigation>({ page: 1, pageSize: 6 });

const handleOnGoingProjectList = async () => {
  onGoingLoading.value = true;

  try {
    const res = await getProjectListApi({
      type: "onGoing",
      ...onGoingPagenigation.value,
    });
    onGoingProjects.value = res.list;
    if (res.list.length > 0) {
      onGoingProjects.value.push(...res.list);
    }
    if (res.list.length != onGoingPagenigation.value.pageSize) {
      onGoingLoadMore.value = false;
    }
  } catch (e) {
    onGoingLoadMore.value = false;
  } finally {
    onGoingLoading.value = false;
  }
  onGoingPagenigation.value.page++;
};
const handleCompeletedProjectList = async () => {
  onGoingLoading.value = true;

  try {
    const res = await getProjectListApi({
      type: "completed",
      ...completedPagenigation.value,
    });
    completedProjects.value = res.list;
    if (res.list.length > 0) {
      completedProjects.value.push(...res.list);
    }
    if (res.list.length != completedPagenigation.value.pageSize) {
      completedLoadMore.value = false;
    }
  } catch (e) {
    completedLoadMore.value = false;
  } finally {
    completedLoading.value = false;
  }
  completedPagenigation.value.page++;
};

onBeforeMount(async () => {
  handleOnGoingProjectList();
  handleCompeletedProjectList();
});
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

    .load-more-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 40px;
      .load-more-btn {
        padding: 6px 12px;
        border: 1px solid #fff;
        border-radius: 4px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #fff;
          color: #111;
        }
      }

      .no-more {
        --noMoreColor: #999;
        font-size: 20px;
        color: var(--noMoreColor);
        position: relative;

        &::before {
          content: "";
          width: 12px;
          height: 1px;
          position: absolute;
          top: 50%;
          left: -24px;
          background-color: var(--noMoreColor);
        }
        &::after {
          content: "";
          width: 12px;
          height: 1px;
          position: absolute;
          top: 50%;
          right: -24px;
          background-color: var(--noMoreColor);
        }
      }
    }
  }
}
</style>
@/type/projectList
