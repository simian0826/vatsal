<template>
  <el-container class="container">
    <div
      class="nav-header"
      :style="{
        boxShadow: isTop ? 'none' : '0px 0px 16px #33333333',
        // background: isTop
        //   ? 'transparent'
        //   : 'linear-gradient(#99999933 10%, #66666633 70% , #00000033 100%)',
        zIndex: drawerOpened ? 99 : 1000,
      }"
    >
      <div class="header-content">
        <div class="mobile-menu-container hidden-sm-and-up">
          <el-dropdown>
            <el-button plain circle :icon="Menu" style="background-color: #111111; box-shadow: 0px 0px 10px rgba(155, 155, 155, 0.6); color: #f9f9f9"></el-button>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :key="index" v-for="(item, index) in menu" @click="menuItemClick(item)" :divided="index !== 0">
                  {{ item.name }}
                  <!-- <a  v-if="item.linkType === 'external'" :href="item.link">{{ item.sectionName }}</a>-->
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <img class="logo" src="/assets/logo-veda.png" />
      </div>
      <div class="nav-container">
        <div class="menu-item" :key="index" :index="item.path" v-for="(item, index) in menu" @click="menuItemClick(item)">
          <div class="menu-item-title" :class="activeRoute === item.path ? 'is-active' : ''">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="child-view">
      <router-view v-slot="{ Component, route }">
        <transition name="animation" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <div class="footer hidden-xs-only">
      <div class="footer-content">
        <el-row>
          <el-col :span="4">
            <img @click="vueRouter.push({ path: '/' })" src="/assets/logo-veda.png" class="footer-logo" />
          </el-col>
          <el-col :span="20">
            <el-row>
              <el-col :key="index" v-for="(item, index) in footerNav" :span="6">
                <template v-if="item.linkType === 'scroll'">
                  <div class="title">
                    <router-link :to="item.link">
                      {{ item.sectionName }}
                    </router-link>
                  </div>
                </template>

                <template v-else-if="item.linkType === 'type'">
                  <div class="title">
                    <router-link :to="item.link">{{ item.sectionName }}</router-link>
                  </div>
                </template>
                <template v-else>
                  <div class="title">
                    {{ item.sectionName }}
                  </div>
                </template>

                <ul v-if="item.children">
                  <li :key="subIndex" v-for="(subItem, subIndex) in item.children">
                    <template v-if="item.sectionName === 'Contact Us'">
                      <a :href="subItem.link">{{ item.children[0].sectionName }}</a>
                    </template>
                    <template v-else>
                      <router-link
                        v-if="item.linkType === 'scroll'"
                        :to="`${item.link}`"
                        v-scroll-to="{
                          el: subItem.link,
                          offset: -100,
                        }"
                      >
                        {{ subItem.sectionName }}
                      </router-link>
                      <router-link
                        v-else
                        :to="`${item.link}?category=${subItem.sectionName}`"
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

    <div class="mobile-footer">
      <div class="footer-logo-container">
        <img @click="vueRouter.push({ path: '/' })" src="/assets/logo-veda.png" class="footer-logo" />
      </div>

      <div class="menu-container">
        <div class="menu-header">Get in Touch</div>
        <div class="menu-item" v-for="item in footerNav" :key="item.sectionName" @click="vueRouter.push({ path: item.link })">{{ item.sectionName }}</div>
      </div>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { FooterNavItem, MenuItem } from "@/type/layout";
import { Menu } from "@element-plus/icons-vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { useProductStore } from "@/store/modules/product";
import { useAppStore } from "@/store/modules/app";

const vueRouter = useRouter();
const productStore = useProductStore();
const appStore = useAppStore();
const isTop = ref<boolean>(false);
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    isTop.value = false;
  } else {
    isTop.value = true;
  }
});

const drawerOpened = ref<boolean>(false);
const path = ref("");
const menu = ref<MenuItem[]>([
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/aboutUs" },
  {
    name: "Products",
    path: "/productList",
  },
  { name: "Projects", path: "/projectList" },
  { name: "Contact Us", path: "/contactUs" },
]);
const activeRoute = computed(() => {
  return vueRouter.currentRoute.value.path;
});
const menuItemClick = (item: MenuItem) => {
  path.value = item.path;
  vueRouter.push({ path: path.value });
};

const basicInfo = computed(() => appStore.getBasicInfo);
const productCategories = computed(() => productStore.getProductCategories);

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
    linkType: "type",
    children: productCategories.value.map((item) => ({ sectionName: item.label, link: "" })),
  },
  {
    sectionName: "Projects",
    link: "/projectList",
    linkType: "scroll",
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
    link: `/contactUs`,
    linkType: "external",
    children: [
      {
        sectionName: basicInfo.value.email,
        link: `mailto:${basicInfo.value.email}`,
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
  --menuItemFontSize: 20px;
  --menuItemFontSizeFirstLetter: 20px;

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
    @include responseTo("xs") {
      --headerH: auto;
      background: #00000099;
    }
    @include responseTo("sm") {
      background: #00000022;
    }
    width: 100%;
    position: fixed;
    width: 100%;

    height: var(--headerH);
    box-sizing: border-box;
    padding: 20px 0px;

    top: 0;
    z-index: 3;
    transition: background-color 0.3s, boxShadow 0.5s;

    .header-content {
      display: flex;
      align-items: center;
      // justify-content: space-between;
      width: 100%;
      margin: 0 auto;
      height: 100%;
      @include responseTo("xs") {
        width: 100px;
        justify-content: center;
      }
      @include responseTo("lg") {
        max-width: 1100px;
      }
      .logo {
        @include responseTo("xs") {
          width: 100px;
        }
        @include responseTo("sm") {
          width: 200px;
        }
      }
      .company-name {
        font-size: 26px;
        color: #fff;
      }
    }

    .nav-container {
      position: absolute;
      padding: 0 40px;
      top: 0;
      right: 0px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      @include responseTo("xs") {
        display: none;
      }

      .menu-item {
        flex: 1;
        width: 150px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        .menu-item-title {
          font-size: var(--menuItemFontSize);
          color: rgba(255, 255, 255, 0.8);
          &::first-letter {
            font-size: var(--menuItemFontSizeFirstLetter);
          }
          &.is-active {
            // font-weight: bold;
            color: #fff;
            position: relative;
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
      max-width: 1100px;
      margin: 0 auto;

      .footer-logo {
        width: 120px;
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

  .mobile-footer {
    width: 100%;
    background-color: #111;
    padding: 20px;
    display: none;

    @include responseTo("xs") {
      display: unset;
    }

    .footer-logo-container {
      width: 100%;
      margin-bottom: 20px;
      .footer-logo {
        width: 120px;
      }
    }
    .menu-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .menu-header {
        font-size: 20px;
        color: #fff;
        width: 100%;
        margin-bottom: 20px;
      }

      .menu-item {
        color: #fff;
        font-size: 16px;
        margin-bottom: 20px;
        padding-left: 0px;
        width: 50%;

        &:before {
          content: "";
          width: 4px;
          height: 4px;
          display: inline-block;
          border-radius: 50%;
          background: #fff;
          vertical-align: middle;
          margin-right: 14px;
          position: relative;
          left: 4px;
        }
      }
    }
  }

  .mobile-menu-container {
    position: absolute;
    top: 15px;
    left: 20px;
    z-index: 9999;
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
          font-size: var(--menuItemFontSize);

          color: rgba(255, 255, 255, 0.8);
          // &::first-letter {
          //   font-size: var(--menuItemFontSizeFirstLetter);
          // }
          &.is-active {
            // font-size: 28px;
            // font-weight: bold;
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
            // &::first-letter {
            //   font-size: 36px;
            // }
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
:deep(.el-dropdown__popper.el-popper) {
  background: rgba(255, 255, 255, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

:deep(.el-dropdown-menu) {
  background-color: rgba(255, 255, 255, 0.6) !important;
}
</style>
