<template>
  <div class="project-list-container">
    <div class="hero-container">
      <img class="hero-image" :src="heroImgUrl" />
    </div>

    <div class="ongoing-container" id="ongoing">
      <div class="header">ONGOING PROJECTS</div>

      <div class="list-content">
        <div
          class="block-container"
          :key="index"
          v-for="(item, index) in onGoingProjects"
          @click="router.push({ path: `/projectDetail/${item.id}` })"
        >
          <div class="block">
            <img class="bg-image" :src="item.image" />
            <div class="mask-container">
              <div class="explore-btn">explore</div>
            </div>
          </div>
          <div class="sub-title">{{ item.subtitle }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="location-container">
            <el-icon
              color="#005482"
              :style="{
                marginRight: '6px',
              }"
            >
              <Location />
            </el-icon>
            <span>{{ item.location }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="completed-container" id="completed">
      <div class="header">COMPLETED PROJECTS</div>

      <div class="list-content">
        <div
          class="block-container"
          :key="index"
          v-for="(item, index) in completedProjects"
          @click="router.push({ path: '/projectDetail' })"
        >
          <div class="block">
            <img class="bg-image" :src="item.image" />
            <div class="mask-container">
              <div class="explore-btn">explore</div>
            </div>
          </div>
          <div class="sub-title">{{ item.subtitle }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="location-container">
            <el-icon
              color="#005482"
              :style="{
                marginRight: '6px',
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import projectListData from "@/data/projectList";
import { ProjectListItem } from "@/types/projectList";

const router = useRouter();
const heroImgUrl = ref<string>(projectListData.heroImgUrl);
const onGoingProjects = ref<ProjectListItem[]>(projectListData.ongoingProjects);

const completedProjects = ref<ProjectListItem[]>(
  projectListData.completedProjects,
);

// const productList = ref([
//   {
//     mainImage:"",
//   }
// ])
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
    width: 100%;
    max-width: 1400px;
    min-height: 100%;
    padding: 80px 0;
    margin: 0 auto;

    .header {
      padding: 5px 10px;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 30px;
      letter-spacing: 4px;
      color: #333;
      margin-bottom: 40px;
    }

    .list-content {
      width: 100%;
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(3, 32%);
      .block-container {
        margin-bottom: 40px;
        .block {
          height: 480px;
          // background-color: #222;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          display: flex;
          position: relative;
          overflow: hidden;
          white-space: pre-line;
          cursor: pointer;

          &:hover {
            .mask-container {
              opacity: 1;
            }
            .bg-image {
              transform: scale(1.05);
            }
          }

          .mask-container {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
            background-color: rgba(0, 41, 63, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.4s;
            opacity: 0;
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

          .bg-image {
            transition: transform 0.3s;
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            transform-origin: 50% 50%;
            object-fit: cover;
          }
        }

        .title {
          width: 100%;
          color: #222;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .sub-title {
          width: 100%;
          color: #666;
          font-size: 14px;
          margin-bottom: 6px;
        }
        .location-container {
          color: #005482;
          font-size: 13px;
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

        .btn {
          background-color: #eb5757;
          border: 1px solid #eb5757;
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
