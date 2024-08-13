<template>
  <div>
    <el-button @click="handleLogin">login</el-button>
  </div>
</template>

<script setup lang="ts">
import { UserLoginParam, UserLoginResult } from "@/api/type";
// import { login } from "@/api/user";
import useUserStore from "@/stores/modules/user";
import { HttpData } from "@/types/http";
import { ref } from "vue";
const loginParams = ref<UserLoginParam>({
  username: "username",
  password: "password",
});
const userStore = useUserStore();
const handleLogin = async () => {
  const result: HttpData<UserLoginResult> = await userStore.userLogin(loginParams.value);
  console.log(userStore.user);

  console.log(result);
};
</script>
<style scoped></style>
@/type/http
