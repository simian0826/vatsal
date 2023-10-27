import { MaterialItem } from "@/types/productDetail";

const productDetailData: {
  heroImgUrl: string;
  header: {
    title: string;
    subtitle: string;
    description: string;
  };
  materials: MaterialItem[];
  projectImage: string;
}[] = [
  {
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
        titleFirstLine: "titleFirstLine", //material 第一行标题
        titleSecondLine: "titleSecondLine", // 第二行标题
        subtitle: "subtitle", //子标题
        taxType: "taxType", // 税的类型
        image: "https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-2.jpg", // material 图片地址
      },
    ],
    projectImage: "https://miclglobal.com/wp-content/uploads/2022/08/Edition-Residences-Fort-Lauderdale-2.jpg", // project Images 的图片地址
  },
];

export default productDetailData;
