import productListData from "./productList";
import { ProductsMenuItem } from "@/types/layout";

const layoutData: {
  productsMenu: ProductsMenuItem[];
} = {
  productsMenu: [],
};

productListData.categoryList.forEach((element, index) => {
  const imageUrl = `./assets/${index + 1}.jpg`;
  layoutData.productsMenu.push({ ...element, image: imageUrl });
});

export default layoutData;
