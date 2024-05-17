import { CategoryListItem, CategoryItemGroupObject } from "@/types/productList";

const productListData: {
  heroImgUrl: string;
  categoryList: CategoryListItem[];
  categoryItemGroup: CategoryItemGroupObject;
} = {
  //首评大图
  heroImgUrl: "https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg",
  //左侧分类
  categoryList: [
    {
      name: "Tiles", //展示的值
      value: "tiles",
    },
    {
      name: "Natural Stones",
      value: "natural stones",
    },
    {
      name: "Artificial Stones",
      value: "artificial stones",
    },
    {
      name: "Doors",
      value: "doors",
    },
    {
      name: "Porcelain",
      value: "porcelain",
    },
    {
      name: "Cabinet",
      value: "cabinet",
    },
  ],
  //右侧列表展示数据，跟分类的值对应
  categoryItemGroup: {
    "tiles": [
      {
        id: 1, //数字，必须唯一值
        img: "./assets/1.jpg", //封面图路径
        type: "marble", //产品类型
        name: "Onice Nero", //产品名字
      },
      {
        id: 2,
        img: "./assets/2.jpg",
        type: "marble",
        name: "Statuario Freddo",
      },
      {
        id: 3,
        img: "./assets/3.jpg",
        type: "marble",
        name: "Onice Aria Beige",
      },
      {
        id: 4,
        img: "./assets/4.jpg",
        type: "marble",
        name: "Quarzo Verde Aqua",
      },
      {
        id: 5,
        img: "./assets/5.jpg",
        type: "stone",
        name: "Gabbro Sfumato",
      },
      {
        id: 6,
        img: "./assets/6.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
    ],
    "natural stones": [
      {
        id: 7,
        img: "./assets/7.jpg",
        type: "marble",
        name: "Onice Nero",
      },
      {
        id: 8,
        img: "./assets/8.jpg",
        type: "marble",
        name: "Statuario Freddo",
      },
      {
        id: 9,
        img: "./assets/9.jpg",
        type: "marble",
        name: "Onice Aria Beige",
      },
      {
        id: 10,
        img: "./assets/10.jpg",
        type: "marble",
        name: "Quarzo Verde Aqua",
      },
    ],
    "doors": [
      {
        id: 11,
        img: "./assets/11.jpg",
        type: "stone",
        name: "Gabbro Sfumato",
      },
      {
        id: 12,
        img: "./assets/12.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
      {
        id: 13,
        img: "./assets/13.jpg",
        type: "stone",
        name: "Gabbro Sfumato",
      },
      {
        id: 14,
        img: "./assets/14.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
      {
        id: 15,
        img: "./assets/2.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
      {
        id: 16,
        img: "./assets/3.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
      {
        id: 17,
        img: "./assets/4.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
    ],
    "artificial stones": [
      {
        id: 18,
        img: "./assets/15.jpg",
        type: "stone",
        name: "Gabbro Sfumato",
      },
      {
        id: 19,
        img: "./assets/16.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
      {
        id: 20,
        img: "./assets/17.jpg",
        type: "stone",
        name: "Gabbro Sfumato",
      },
      {
        id: 21,
        img: "./assets/18.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
      {
        id: 22,
        img: "./assets/1.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
    ],
    "cabinet": [
      {
        id: 23,
        img: "./assets/19.jpg",
        type: "stone",
        name: "Gabbro Sfumato",
      },
      {
        id: 24,
        img: "./assets/20.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
    ],
    "porcelain": [
      {
        id: 23,
        img: "./assets/19.jpg",
        type: "stone",
        name: "Gabbro Sfumato",
      },
      {
        id: 24,
        img: "./assets/20.jpg",
        type: "stone",
        name: "Vicenza Beige",
      },
    ],
  },
};

export default productListData;
