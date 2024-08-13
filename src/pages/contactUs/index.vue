<template>
  <div class="contact-us-container">
    <HeroSection :module="'contact us'" />

    <div class="construct-container">
      <div class="header">CONTACT US</div>
      <div class="sub-header">We are always available to provide the information you need</div>
      <div class="content-container">
        <div class="block contact-info">
          <div class="title">Contact Info</div>

          <div class="info-line">
            <div class="icon">
              <el-icon><LocationFilled /></el-icon>
            </div>
            <div class="info-item">
              <div class="main-info">Veda Sourcing</div>
              <div class="secondary-info">{{ appStore.getBasicInfo.address }}</div>
            </div>
          </div>
          <div class="info-line">
            <div class="icon">
              <el-icon><PhoneFilled /></el-icon>
            </div>
            <div class="info-item">
              <div class="main-info">Write to Us</div>
              <div class="secondary-info">{{ appStore.getBasicInfo.email }}</div>
            </div>
          </div>
        </div>
        <div class="block contact-form">
          <el-form :model="form" :rules="rules" ref="formRef" label-width="auto">
            <el-form-item class="form-item" prop="name">
              <MaterialInput label="name" v-model="form.name" />
            </el-form-item>
            <el-form-item class="form-item" prop="email">
              <MaterialInput label="email" v-model="form.email" />
            </el-form-item>
            <el-form-item class="form-item" prop="mobile">
              <MaterialInput label="mobile" v-model="form.mobile" />
            </el-form-item>
            <el-form-item class="form-item" prop="message">
              <MaterialInput label="message" v-model="form.message" />
            </el-form-item>

            <div class="submit-container">
              <div
                v-loading="loading"
                :element-loading-spinner="LoadingSvg"
                element-loading-svg-view-box="-10, -10, 50, 50"
                element-loading-background="rgba(122, 122, 122, 0.8)"
                class="submit-button"
                @click="handleSubmit"
              >
                Submit
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import { ref, reactive, watch } from "vue";
import { sendEmail } from "@/api";
import type { ContactUsRequest } from "@/api/model";
import { useAppStore } from "@/store/modules/app";
import type { FormInstance, FormRules } from "element-plus";
import MaterialInput from "@/components/MaterialInput.vue";
import { ElMessage } from "element-plus";
import { LoadingSvg } from "@/assets/loading";

const loading = ref(false);
const appStore = useAppStore();
const form = reactive<ContactUsRequest>({
  name: "",
  email: "",
  mobile: "",
  message: "",
});

const formRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  name: [{ required: true, message: "Please input your name", trigger: "blur" }],
  email: [
    { required: true, type: "email", message: "Please input your eamil", trigger: "blur" },
    { required: true, type: "email", message: "Your eamil format is not correct", trigger: "blur" },
  ],
  mobile: [{ required: true, message: "Please input your mobile", trigger: "blur" }],
  message: [{ required: true, message: "Please input your message", trigger: "blur" }],
});

const handleSubmit = async () => {
  if (await formRef.value?.validate()) {
    loading.value = true;
    const res = await sendEmail(form);
    if (res) {
      ElMessage.success("We've recieved your message!");
    }
    loading.value = false;
  }
};

watch(
  () => form,
  () => {
    // formRef.value?.validate();
  },
  { deep: true },
);

// onMounted(() => {
//   formRef.value?.validate();
// });
</script>

<style scoped lang="scss">
.contact-us-container {
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
      padding-bottom: 20px;
    }

    .header {
      font-size: 38px;
      font-weight: 700;
      color: #d4d4d4;
      margin-bottom: 20px;
      @include responseTo("xs") {
        padding: 0 20px;
      }
    }
    .sub-header {
      font-size: 24px;
      color: #d4d4d4;
      margin-bottom: 40px;
      @include responseTo("xs") {
        padding: 0 20px;
        font-size: 20px;
      }
    }

    .content-container {
      width: 100%;
      display: flex;
      @include responseTo("xs") {
        flex-wrap: wrap;
        padding: 20px;
      }

      .block {
        padding: 40px;
        border: 1px solid #fff;
        @include responseTo("sm") {
          flex: 1;
        }
        @include responseTo("xs") {
          width: 100%;
        }

        &.contact-info {
          @include responseTo("sm") {
            margin-right: -0.5px;
          }
          @include responseTo("xs") {
            margin-bottom: -0.5px;
          }

          .title {
            font-size: 24px;
            letter-spacing: 3px;
            font-weight: 300;
            color: #fff;
            margin-bottom: 20px;
            text-align: center;
          }

          .info-line {
            display: flex;
            align-items: center;
            margin-bottom: 60px;
            .icon {
              font-size: 40px;
              margin-right: 20px;
            }
            .info-item {
              width: 100%;
              .main-info {
                font-size: 13px;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 2px;
                margin-bottom: 10px;
              }
              .secondary-info {
                font-size: 13px;
                line-height: 1.8;
                letter-spacing: 2px;
              }
            }
          }
        }

        &.contact-form {
          @include responseTo("sm") {
            margin-left: -0.5px;
          }
          @include responseTo("xs") {
            margin-top: -0.5px;
          }

          .form-item {
            margin-bottom: 30px;
          }

          .submit-container {
            display: flex;
            justify-content: center;

            .submit-button {
              width: 200px;
              @include responseTo("xs") {
                width: 100%;
              }
              background-color: transparent;
              border: none;
              color: #fff;
              font-size: 16px;
              font-weight: 600;
              letter-spacing: 2px;
              cursor: pointer;
              border: 1px solid #ccc;
              border-radius: 4px;
              transition: all 0.3s ease;
              text-align: center;
              padding: 12px;

              &:hover {
                background-color: #fff;
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
