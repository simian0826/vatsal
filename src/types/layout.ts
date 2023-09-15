import { CategoryListItem } from "./productList";
export type FooterNavItem = {
  sectionName: string;
  link: string;
  children?: FooterNavItem[];
};
export type MenuItem = {
  name: string;
  path: string;
  children?: MenuItem[];
};
export type ProductsMenuItem = CategoryListItem & {
  image: string;
};
