export type SystemModule = "home" | "about us" | "contact us" | "product" | "project";

export type Pagenigation = {
  page: number;
  pageSize: number;
};

export type ListRequest<T> = T & Pagenigation;

export type ListResult<T> = {
  list: T[];
  total: number;
};

export type HeroSection = {
  background: string;
  header: string;
  content: string;
  module: SystemModule;
};

export type BasicInfo = {
  address?: string;
  email?: string;
};

export type HomePage = {
  processItems: HomeProcessItem[];
  introductionItems: HomeIntroductionItem[];
  productCategoryItems: HomeProductionCategoryItem[];
  leaders: Member[];
  clientLogos: string[];
};

export type HomeIntroductionItem = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  infoRight: IntroductionInfo;
  infoLeft: IntroductionInfo;
  productId: number;
};

export type HomeProcessItem = {
  title: number;
  image: string;
  detailText: string;
};
export type IntroductionInfo = {
  info: string;
  supplementary: string;
};

export type HomeProductionCategoryItem = {
  title: string;
  image: string;
  category: string;
};

export type Member = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type Dict = {
  label: string;
  value: string;
};

export type AboutUsPage = {
  qualityItems: AboutUsQualityItem[];
  needHelpHeader: string;
  needHelpDesc: string;
  teamMembers: Member[];
};

export type AboutUsQualityItem = {
  title: string;
  desc: string;
  image: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  imgs: string[];

  certificate: string[];
  description: string;
  properties: ProductProperty[];
};

export type ProductProperty = {
  name: string;
  items: Dict[];
};

export type Project = {
  image: string | undefined;
  id: number;
  title: string;
  subtitle: string;
  type: string;
  location: string;
  description: string;
  projectImages: string[];
  materials: ProjectMaterial[];
};

export type ProjectMaterial = {
  projectId: number;
  title: string;
  subtitle: string;
  image: string;
  taxType: string;
};

export type ContactUsRequest = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
