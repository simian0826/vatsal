import { UserLoginParam, UserLoginResult } from "@/api/type";
import { login } from "@/api/user";
import { HttpData } from "@/types/http";
import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("userStore", () => {
  const user = ref(null);
  const userLogin = (param: UserLoginParam): Promise<HttpData<UserLoginResult>> => {
    return login(param);
  };
  return {
    user,
    userLogin,
  };
});

export default useUserStore;
