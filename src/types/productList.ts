export type ProductListItem = {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  image: string;
};

export type CategoryTypeValue = "tiles" | "natural stones" | "artificial stones" | "porcelain" | "doors" | "cabinet";
``
export type CategoryListItem = {
  name: string;
  value: CategoryTypeValue;
};
export type CategoryItemGroupObject = {
  [key in CategoryTypeValue]: {
    id: number;
    img: string;
    type: string;
    name: string;
  }[];
};
