import { ContactUsRequest, ListRequest, ListResult, Product, Project } from "./model/index";
import { defHttp } from "@/utils/http/axios";
import { AboutUsPage, BasicInfo, Dict, HeroSection, HomePage } from "./model";

enum Api {
  GetHeroSection = "/heroSection/findHeroSections",
  GetHomePage = "/generalConfig/findHomePage",
  GetAboutUsPage = "/generalConfig/findAboutUsPage",
  GetBasicInfo = "/generalConfig/findBasicInfo",
  GetProductCategory = "/dict/findProductCategory",
  GetProductList = "/product/list",
  GetProductDetail = "/product/detail",
  GetProjectList = "/project/list",
  GetProjectDetail = "/project/detail",

  SendEmail = "/contactUs/sendMail",
}

/**
 * @description: user login api
 */
export function getHeroSectionApi() {
  return defHttp.get<HeroSection[]>({
    url: Api.GetHeroSection,
  });
}

export function getBasicInfoApi() {
  return defHttp.get<BasicInfo>({
    url: Api.GetBasicInfo,
  });
}

export function getHomePageApi() {
  return defHttp.get<HomePage>({
    url: Api.GetHomePage,
  });
}

export function getAboutUsPageApi() {
  return defHttp.get<AboutUsPage>({
    url: Api.GetAboutUsPage,
  });
}

export function getProductCategoryApi() {
  return defHttp.get<Dict[]>({
    url: Api.GetProductCategory,
  });
}

export function getProductListApi(params: ListRequest<{ category: string }>) {
  return defHttp.get<ListResult<Product>>({
    url: Api.GetProductList,
    params,
  });
}
export function getProductDetail(id: number) {
  return defHttp.get<Product>({
    url: Api.GetProductDetail + `/${id}`,
  });
}

export function sendEmail(params: ContactUsRequest) {
  return defHttp.post<boolean>({
    url: Api.SendEmail,
    params,
  });
}

export function getProjectListApi(params: ListRequest<{ type: string }>) {
  return defHttp.get<ListResult<Project>>({
    url: Api.GetProjectList,
    params,
  });
}
export function getProjectDetail(id: number) {
  return defHttp.get<Project>({
    url: Api.GetProjectDetail + `/${id}`,
  });
}
