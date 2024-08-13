import { MaterialItem } from "@/type/projectDetail";

const projectDetailData: {
  id: string;
  heroImgUrl: string;
  header: {
    title: string;
    subtitle: string;
    description: string;
  };
  materials: MaterialItem[];
  projectImages: string[];
}[] = [
  {
    id: "1",
    //首屏大图
    heroImgUrl: "https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg",
    //抬头
    header: {
      title: "MIAMI BEACH COLIVING", //header 标题
      subtitle: "MIXED-USE", // title 上面 子标题
      description:
        "This project features coliving, coworking, and an extended-stay hotel component alongside welln, nextTickess amenities and a robust food and beverage program, open to the neighborhood and community. The project will offer 10,319 SF of leasable workspace and combined 125 living spaces across hotel rooms and co-living residences. The ground floor will house F&B options including grab and go snacks/meals and a bar offering entertainment to guests and residents.", //header 描述
    },
    materials: [
      {
        id: 1, //material Id 数字， 不要重复
        subtitle: "subtitle", //子标题
        title: "PRODUCT SELECTION", //标题
        image: "./assets/6.jpg", //material 图片地址
        taxType: "Including taxType", // 税的类型
      },
      {
        id: 2, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "QUALITY CONTROL",
        image: "./assets/1.jpg",
        taxType: "Including taxType",
      },
      {
        id: 3, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/2.jpg",

        taxType: "Including taxType",
      },
      {
        id: 4, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/3.jpg",
        taxType: "Including taxType",
      },
      {
        id: 5, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/4.jpg",
        taxType: "Including taxType",
      },
      {
        id: 6, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/5.jpg",
        taxType: "Including taxType",
      },
      {
        id: 7, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "PRODUCT SELECTION",
        image: "./assets/6.jpg",
        taxType: "Including taxType",
      },
      {
        id: 8, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "QUALITY CONTROL",
        image: "./assets/1.jpg",
        taxType: "Including taxType",
      },
      {
        id: 9, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/2.jpg",

        taxType: "Including taxType",
      },
      {
        id: 10, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/3.jpg",
        taxType: "Including taxType",
      },
      {
        id: 11, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/4.jpg",
        taxType: "Including taxType",
      },
      {
        id: 12, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/5.jpg",
        taxType: "Including taxType",
      },
    ],
    projectImages: [
      "https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg",
      "https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-1.jpg",
      "https://miclglobal.com/wp-content/uploads/2022/08/Coral-Gables-Condominiums-img1.jpg",
      "https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg",
    ], // project Images 的图片地址
  },
  {
    id: "1",

    //首屏大图
    heroImgUrl: "https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg",
    //抬头
    header: {
      title: "MIAMI BEACH COLIVING", //header 标题
      subtitle: "MIXED-USE", // title 上面 子标题
      description:
        "This project features coliving, coworking, and an extended-stay hotel component alongside welln, nextTickess amenities and a robust food and beverage program, open to the neighborhood and community. The project will offer 10,319 SF of leasable workspace and combined 125 living spaces across hotel rooms and co-living residences. The ground floor will house F&B options including grab and go snacks/meals and a bar offering entertainment to guests and residents.", //header 描述
    },
    materials: [
      {
        id: 1, //material Id 数字， 不要重复
        subtitle: "subtitle", //子标题
        title: "PRODUCT SELECTION", //标题
        image: "./assets/6.jpg", //material 图片地址
        taxType: "Including taxType", // 税的类型
      },
      {
        id: 2, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "QUALITY CONTROL",
        image: "./assets/1.jpg",
        taxType: "Including taxType",
      },
      {
        id: 3, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/2.jpg",

        taxType: "Including taxType",
      },
      {
        id: 4, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/3.jpg",
        taxType: "Including taxType",
      },
      {
        id: 5, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/4.jpg",
        taxType: "Including taxType",
      },
      {
        id: 6, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/5.jpg",
        taxType: "Including taxType",
      },
      {
        id: 7, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "PRODUCT SELECTION",
        image: "./assets/6.jpg",
        taxType: "Including taxType",
      },
      {
        id: 8, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "QUALITY CONTROL",
        image: "./assets/1.jpg",
        taxType: "Including taxType",
      },
      {
        id: 9, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/2.jpg",

        taxType: "Including taxType",
      },
      {
        id: 10, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/3.jpg",
        taxType: "Including taxType",
      },
      {
        id: 11, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/4.jpg",
        taxType: "Including taxType",
      },
      {
        id: 12, //material Id 数字， 不要重复
        subtitle: "subtitle",
        title: "TRANSPORT & DELIVERY",
        image: "./assets/5.jpg",
        taxType: "Including taxType",
      },
    ],
    projectImages: [
      "https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg",
      "https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-1.jpg",
      "https://miclglobal.com/wp-content/uploads/2022/08/Coral-Gables-Condominiums-img1.jpg",
      "https://miclglobal.com/wp-content/uploads/2022/08/Shipping-Avenue-Townhomes-1.jpg",
    ], // project Images 的图片地址
  },
];

export default projectDetailData;
