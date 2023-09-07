export type ProductListItem = {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  image: string;
};

export type CategoryTypeValue =
  | "tile"
  | "stone"
  | "woodDoor"
  | "plumbing"
  | "light";

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
