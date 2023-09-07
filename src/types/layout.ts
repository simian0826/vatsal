import { CategoryListItem } from "./productList";
export type FooterNavItem = {
  sectionName: string;
  link: string;
  children?: FooterNavItem[];
};

export type ProductsMenuItem = CategoryListItem & {
  image: string;
};
