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
        zIndex: drawerOpened ? 99 : 99999,
      }"
    >
      <div class="header-content">
        <!-- <img class="logo" src="https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54f4b1fdac99df37742ee_Untitled.png" /> -->
        <div class="company-name">VEDA SOURCING</div>
      </div>
      <div class="nav-container">
        <div class="menu-item" :key="index" :index="item.path" v-for="(item, index) in menu" @click="menuItemClick(item)">
          <div class="menu-item-title" :class="activeRoute === item.path ? 'is-active' : ''">{{ item.name }}</div>
        </div>

        <!-- <el-menu :default-active="activeRoute" :ellipsis="false" mode="horizontal" class="menu-container">
          <el-menu-item :key="index" :index="item.path" v-for="(item, index) in menu" :class="activeRoute === item.path ? 'is-active' : ''" @click="menuItemClick(item)">
            <div class="menu-item-title">
              {{ item.name }}
            </div>
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
        </el-menu> -->
      </div>
    </div>
    <el-drawer class="drawer" v-model="showDrawer" direction="rtl" size="45%" :with-header="false" @opened="drawerOpened = true" @closed="drawerOpened = false">
      <div
        class="nav-container"
        :style="{
          opacity: drawerOpened ? 1 : 0,
          backgroundColor: drawerOpened ? '#000' : 'transparent',
        }"
      >
        <!-- <el-menu :default-active="activeRoute" mode="horizontal" class="menu-container" :ellipsis="false">
          <el-menu-item :key="index" :index="item.path" v-for="(item, index) in menu" :class="activeRoute === item.path ? 'is-active' : ''" @click="menuItemClick(item)">
            <div class="menu-item-title">{{ item.name }}</div>
          </el-menu-item>
        </el-menu> -->
        <div class="menu-item" :key="index" :index="item.path" v-for="(item, index) in menu" @click="drawerMenuItemClick(item)">
          <div class="menu-item-title" :class="path === item.path ? 'is-active' : ''">{{ item.name }}</div>
        </div>
      </div>
      <div
        class="drawer-content"
        :style="{
          backgroundColor: drawerOpened ? '#000' : 'transparent',
          opacity: drawerOpened ? 1 : 0,
        }"
      >
        <div class="sub-menu-item" :key="index" v-for="(subItem, index) in submenu" @click="drawerSubMenuItemClick(subItem)">{{ subItem.name }}</div>
      </div>
    </el-drawer>
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
                    <template v-if="item.sectionName === 'Contact Us'">
                      <a href="mailto:404888541@qq.com">404888541@qq.com</a>
                    </template>
                    <template v-else>
                      <router-link
                        :to="item.link"
                        v-scroll-to="{
                          el: subItem.link,
                          offset: -100,
                        }"
                      >
                        {{ subItem.sectionName }}
                      </router-link>
                    </template>
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
const drawerOpened = ref<boolean>(false);
const path = ref("");
const menu = ref<MenuItem[]>([
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/aboutUs" },
  {
    name: "Products",
    path: "/productList",
    children: [...layoutData.productsMenu],
  },
  { name: "Projects", path: "/projectList" },
  { name: "Contact Us", path: "" },
]);
const submenu = ref<MenuItem[]>([]);
const activeRoute = computed(() => {
  return vueRouter.currentRoute.value.path;
});
const menuItemClick = (item: MenuItem) => {
  path.value = item.path;
  if (item.children) {
    showDrawer.value = true;
    submenu.value = item.children;
  } else {
    vueRouter.push({ path: path.value });
  }
};
const drawerMenuItemClick = (item: MenuItem) => {
  if (item.children) {
    submenu.value = item.children;
  } else {
    submenu.value = [];
  }
  path.value = item.path;
};
const drawerSubMenuItemClick = (item: MenuItem) => {
  vueRouter.push({
    path: path.value,
    query: {
      type: item.path,
    },
  });
  showDrawer.value = false;
};

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
        sectionName: "Artificial Stones",
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
        sectionName: "Woodend Door",
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
    link: "mailto:404888541@qq.com",
    children: [
      {
        sectionName: "404888541@qq.com",
        link: "",
      },
    ],
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
    z-index: 9;
    transition: background-color 0.3s, boxShadow 0.5s;

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      height: 100%;
      .logo {
        width: 100px;
        height: 100px;
      }
      .company-name {
        font-size: 32px;
        color: #fff;
      }
    }

    .nav-container {
      position: absolute;
      padding: 0 40px;
      top: 0;
      right: 0px;
      width: 45%;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .menu-item {
        flex: 1;

        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        .menu-item-title {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          &::first-letter {
            font-size: 26px;
          }
          &.is-active {
            font-size: 24px;
            color: #fff;
            position: relative;
            // background: radial-gradient(ellipse at center, #ffffff66 20%, transparent 75%, transparent 100%);

            // &::before,
            // &::after {
            //   content: "";
            //   width: 4px;
            //   height: 4px;
            //   border-radius: 50%;

            //   background-color: #fff;
            //   position: absolute;
            //   top: 50%;
            //   transform: translateY(-50%);
            // }
            // &::before {
            //   left: -10px;
            // }
            // &::after {
            //   content: "";

            //   right: -10px;
            // }
            &::first-letter {
              font-size: 32px;
            }
          }
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
    background-color: #111;

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
        color: #f1f0ea;
        margin-bottom: 20px;
        cursor: pointer;
      }

      ul {
        li {
          --liColor: #f1f0ea;

          font-size: 18px;
          font-weight: 300;
          color: var(--liColor);
          margin-bottom: 20px;
          cursor: pointer;
          &:before {
            content: "";
            width: 4px;
            height: 4px;
            display: inline-block;
            border-radius: 50%;
            background: var(--liColor);
            vertical-align: middle;
            margin-right: 14px;
            position: relative;
            left: 4px;
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
    // padding-right: 100px;
    // width: 70%;
    padding: 0 40px;

    height: var(--headerH);
    display: flex;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.3s;

    .menu-item {
      flex: 1;
      cursor: pointer;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .menu-item-title {
        position: relative;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.8);
        &::first-letter {
          font-size: 26px;
        }
        &.is-active {
          font-size: 24px;
          color: #fff;
          position: relative;

          &::after {
            position: absolute;
            display: inline-block;
            content: "";
            width: 80%;
            height: 0.5px;
            background-color: rgba(255, 255, 255, 0.2);
            left: 50%;
            transform: translateX(-50%);
            bottom: -16px;
          }
          // background: radial-gradient(ellipse at center, #ffffff66 20%, transparent 75%, transparent 100%);

          // &::before,
          // &::after {
          //   content: "";
          //   width: 4px;
          //   height: 4px;
          //   border-radius: 50%;

          //   background-color: #fff;
          //   position: absolute;
          //   top: 50%;
          //   transform: translateY(-50%);
          // }
          // &::before {
          //   left: -10px;
          // }
          // &::after {
          //   content: "";

          //   right: -10px;
          // }
          &::first-letter {
            font-size: 32px;
          }
        }
      }
    }
  }

  .drawer-content {
    margin-top: var(--headerH);
    height: calc(100% - var(--headerH));
    background-color: #000;
    transition: background-color 0.3s;
    display: flex;
    flex-direction: column;
    padding: 40px;
    transition: opacity 0.3s;

    .sub-menu-item {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.6);
      font-size: 24px;
      margin-bottom: 50px;
    }
  }
}

:deep(.el-menu--horizontal > .el-menu-item.is-active),
:deep(.el-menu--horizontal > .el-menu-item) {
  border-bottom: none;
}

:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):focus),
:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):hover) {
  outline: 0;
  color: var(--el-menu-hover-text-color);
  background-color: transparent;
}
</style>
