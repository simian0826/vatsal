<template>
  <el-container class="container">
    <div
      class="nav-header"
      :style="{
        boxShadow: isTop ? 'none' : '0px 0px 16px #33333333',
        // background: isTop
        //   ? 'transparent'
        //   : 'linear-gradient(#99999933 10%, #66666633 70% , #00000033 100%)',
        background: '#00000022',
      }"
    >
      <div class="header-content">
        <img class="logo" src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54f4b1fdac99df37742ee_Untitled.png" />
      </div>
      <div class="nav-container">
        <el-menu :default-active="activeRoute" router mode="horizontal" class="menu-container">
          <el-menu-item :key="index" :index="item.path" v-for="(item, index) in menu" :class="activeRoute === item.path ? 'is-active' : ''" @click="menuItemClick(item)">
            <!-- <div class="menu-item-title">
              {{ item.name }}
            </div> -->
            <div class="menu-item-title" v-if="item.name !== 'Products'">
              {{ item.name }}
            </div>
            <el-popover v-else placement="bottom" :width="990" trigger="hover">
              <template #reference>
                <div class="menu-item-title">
                  {{ item.name }}
                </div>
              </template>
              <div class="sub-menu-container">
                <router-link :to="`/productList?productType=${item.value}`" :key="index" v-for="(item, index) in productsMenu" class="sub-menu-item-container">
                  <img class="sub-img" :src="item.image" />
                  <div class="sub-menu-item-name">{{ item.name }}</div>
                </router-link>
              </div>
            </el-popover>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <!-- <el-drawer
      class="drawer"
      v-model="showDrawer"
      direction="rtl"
      size="50%"
      :with-header="false"
      @opened="drawerOpened = true"
      @closed="drawerOpened = false"
    >
      <div
        class="nav-container"
        :style="{
          opacity: drawerOpened ? 1 : 0,
          backgroundColor: drawerOpened ? '#000' : 'transparent',
        }"
      >
        <el-menu
          :default-active="activeRoute"
          mode="horizontal"
          class="menu-container"
        >
          <el-menu-item
            :key="index"
            :index="item.path"
            v-for="(item, index) in menu"
            :class="activeRoute === item.path ? 'is-active' : ''"
            @click="menuItemClick(item)"
          >
            <div class="menu-item-title">
              {{ item.name }}
            </div>
          </el-menu-item>
        </el-menu>
      </div>
      <div
        class="drawer-content"
        :style="{
          backgroundColor: drawerOpened ? '#000' : 'transparent',
        }"
      ></div>
    </el-drawer> -->
    <div class="child-view">
      <router-view v-slot="{ Component, route }">
        <transition name="animation" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <div class="footer">
      <div class="footer-content">
        <el-row>
          <el-col :span="4">
            <img src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54f4b1fdac99df37742ee_Untitled.png" class="footer-logo" />
          </el-col>
          <el-col :span="20">
            <el-row>
              <el-col :key="index" v-for="(item, index) in footerNav" :span="6">
                <div class="title">
                  <router-link :to="item.link">
                    {{ item.sectionName }}
                  </router-link>
                </div>
                <ul v-if="item.children">
                  <li :key="subIndex" v-for="(subItem, subIndex) in item.children">
                    <router-link
                      :to="item.link"
                      v-scroll-to="{
                        el: subItem.link,
                        offset: -100,
                      }"
                    >
                      {{ subItem.sectionName }}
                    </router-link>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { FooterNavItem, MenuItem } from "@/types/layout";
import layoutData from "@/data/layout";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const vueRouter = useRouter();
const isTop = ref<boolean>(false);
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    isTop.value = false;
  } else {
    isTop.value = true;
  }
});

const showDrawer = ref<boolean>(false);
// const drawerOpened = ref<boolean>(false);

const menu = ref<MenuItem[]>([
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/aboutUs" },
  {
    name: "Products",
    path: "/productList",
    // children: [...layoutData.productsMenu],
  },
  { name: "Projects", path: "/projectList" },
  { name: "Contact Us", path: "" },
]);

const productsMenu = ref(layoutData.productsMenu);

const menuItemClick = (item: MenuItem) => {
  console.log(item);
  if (item.children) {
    showDrawer.value = true;
  }
};
const activeRoute = computed(() => {
  return vueRouter.currentRoute.value.path;
});
const footerNav = ref<FooterNavItem[]>([
  {
    sectionName: "About Us",
    link: "/aboutUs",
    children: [
      {
        sectionName: "Our Team",
        link: "",
      },
      {
        sectionName: "Why Us",
        link: "",
      },
    ],
  },
  {
    sectionName: "Our Products",
    link: "/productList",
    children: [
      {
        sectionName: "Tiles",
        link: "",
      },
      {
        sectionName: "Natural Stones",
        link: "",
      },
      {
        sectionName: "Lighting",
        link: "",
      },
      {
        sectionName: "Furniture",
        link: "",
      },
      {
        sectionName: "Special Order",
        link: "",
      },
    ],
  },
  {
    sectionName: "Projects",
    link: "/projectList",

    children: [
      {
        sectionName: "Ongoing Projects",
        link: "#ongoing",
      },
      {
        sectionName: "Completed Projects",
        link: "#completed",
      },
    ],
  },
  {
    sectionName: "Contact Us",
    link: "/contactUs",
  },
]);
</script>
<style scoped lang="scss">
.animation-enter-from,
.animation-leave-to {
  transform: translateY(0px) scale(0.998);
  opacity: 0.7;
}
.animation-enter-to,
.animation-leave-from {
  opacity: 1;
}
.animation-enter-active {
  transition: all 0.3s ease;
}
.animation-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.6, 0.6, 1);
}

.container {
  --headerH: 140px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  // padding-top: var(--headerH);
  :deep(.el-overlay) {
    .drawer {
      background: transparent !important;
    }
  }
  .nav-header {
    width: 100%;
    position: fixed;
    width: 100%;

    height: var(--headerH);
    background-color: transparent;
    box-sizing: border-box;
    padding: 20px 0px;

    top: 0;
    z-index: 999;
    transition: background-color 0.3s, boxShadow 0.5s;

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      .logo {
        width: 100px;
        height: 100px;
      }
    }

    .nav-container {
      position: absolute;
      top: 0;
      right: 100px;
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      .menu-container {
        height: 100%;
        width: 100%;
        background-color: transparent;
        border-bottom: none;
        justify-content: flex-end;

        .is-active {
          .menu-item-title {
            font-size: 18px;
            color: #fef623;
            position: relative;
            background: radial-gradient(ellipse at center, #ffffff66 20%, transparent 75%, transparent 100%);
            &::before,
            &::after {
              content: "";
              width: 4px;
              height: 4px;
              border-radius: 50%;

              background-color: #fff;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
            &::before {
              left: -10px;
            }
            &::after {
              content: "";

              right: -10px;
            }
          }
        }
        .menu-item-title {
          width: 90px;
          text-align: center;

          font-size: 18px;
          color: #fff;
        }
      }
    }
  }

  .child-view {
    flex: 1 1 auto;
  }
  .footer {
    width: 100%;
    padding: 40px 0;
    background-color: #f1f0ea;

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;

      .footer-logo {
        width: 80px;
        height: 80px;
      }

      .title {
        font-size: 24px;
        font-weight: 600;
        color: #000;
        margin-bottom: 30px;
        cursor: pointer;
      }

      ul {
        li {
          --liColor: #333;

          font-size: 18px;
          font-weight: 300;
          color: var(--liColor);
          margin-bottom: 10px;
          cursor: pointer;
          &:before {
            content: "";
            width: 6px;
            height: 6px;
            display: inline-block;
            border-radius: 50%;
            background: var(--liColor);
            vertical-align: middle;
            margin-right: 14px;
          }
        }
      }
    }
  }
}

.sub-menu-container {
  width: 100%;
  padding: 20px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 32%);

  .sub-menu-item-container {
    padding: 20px;
    .sub-img {
      width: 100%;
      aspect-ratio: 1920/1080;
      object-fit: cover;
    }
    .sub-menu-item-name {
      margin-top: 10px;
      font-size: 16px;
      color: #111;
    }
  }
}

:deep(.el-drawer__body) {
  padding: 0;

  .nav-container {
    position: absolute;
    top: 0;
    // right: 100px;
    width: 100%;
    padding-right: 100px;
    // width: 70%;
    height: var(--headerH);
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s;

    .menu-container {
      height: 100%;
      width: 100%;
      background-color: transparent;
      border-bottom: none;
      justify-content: flex-end;

      .is-active {
        .menu-item-title {
          font-size: 18px;
          color: #fef623;
          position: relative;
          background: radial-gradient(ellipse at center, #ffffff66 20%, transparent 75%, transparent 100%);
          &::before,
          &::after {
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 50%;

            background-color: #fff;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          &::before {
            left: -10px;
          }
          &::after {
            content: "";

            right: -10px;
          }
        }
      }
      .menu-item-title {
        width: 90px;
        text-align: center;

        font-size: 18px;
        color: #fff;
      }
    }
  }

  .drawer-content {
    margin-top: var(--headerH);
    height: calc(100% - var(--headerH));
    background-color: #000;
    transition: background-color 0.3s;
  }
}

:deep(.el-menu--horizontal > .el-menu-item.is-active),
:deep(.el-menu--horizontal > .el-menu-item) {
  border-bottom: none;
}
// .el-menu--horizontal > .el-menu-item.is-active,
// .el-menu--horizontal > .el-menu-item {
//   border-bottom: none;
// }
// .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
// .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
//   outline: 0;
//   color: var(--el-menu-hover-text-color);
//   background-color: transparent;
// }
:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):focus),
:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):hover) {
  outline: 0;
  color: var(--el-menu-hover-text-color);
  background-color: transparent;
}
</style>
