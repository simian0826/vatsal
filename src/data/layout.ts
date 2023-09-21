import productListData from "./productList";
import { MenuItem } from "@/types/layout";
// import { CategoryListItem } from "@/types/productList";

const layoutData: {
  // productsMenu: ProductsMenuItem[];
  productsMenu: MenuItem[];
} = {
  productsMenu: [],
};

productListData.categoryList.forEach((element, index) => {
  const imageUrl = `./assets/${index + 1}.jpg`;
  // layoutData.productsMenu.push({ name: element.name, value: element.value, image: imageUrl });
  layoutData.productsMenu.push({ name: element.name, path: element.value });
});

export default layoutData;
