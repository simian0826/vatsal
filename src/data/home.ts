import { HomeProductItem, IntroductionItem } from "@/types/home";
// import { CategoryListItem } from "@/types/productList";

const homeData: {
  introductionItems: IntroductionItem[];
  processItems: {
    title: string;
    subTitle: string;
    description: string;
    percentage: number;
    amount: number;
    image: string;
  }[];
  productItems: HomeProductItem[];
  clientLogos: string[];
  leaders: { name: string; description: string; image?: string }[];
  // productsMenu: MenuItem[];
} = {
  introductionItems: [
    {
      title: "PRODUCT SELECTION",
      image: "./assets/1.jpg",
      detaiText: "Our team is constantly scouring the globe to find new materials and inspiration. We work directly with manufacturers to secure the best rates for our customers.",
    },
    {
      title: "QUALITY CONTROL",
      image: "./assets/2.jpg",
      detaiText:
        "Oversight at very level of the manufacturing and packaging process helps us maintain the highest standards of quality. All of our products are vigorously tested and certified by the appropriate authorities.",
    },
    {
      title: "TRANSPORT & DELIVERY",
      image: "./assets/3.jpg",
      detaiText: "From the manufacturer's warehouse to your project site, we work with freight providers to ensure that your goods will arrive right on schedule.",
    },
  ],
  processItems: [
    {
      title: "This copy introduces the product title",
      subTitle: "STARTINGG EROM SX/SCOFT",
      description:
        "This copy introduces the product abstract This copy intro-duces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introducesthe product abstract This copy introduces the product abstract ",
      percentage: 82,
      amount: 100,
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
    },
    {
      title: "This copy introduces the product title",
      subTitle: "STARTINGG EROM SX/SCOFT",
      description:
        "This copy introduces the product abstract This copy intro-duces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introducesthe product abstract This copy introduces the product abstract ",
      percentage: 32,
      amount: 100,
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecf_nathan-dumlao-pLoMDKtl-JY-unsplash.jpg",
    },
    {
      title: "This copy introduces the product title",
      subTitle: "STARTINGG EROM SX/SCOFT",
      description:
        "This copy introduces the product abstract This copy intro-duces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introducesthe product abstract This copy introduces the product abstract ",
      percentage: 52,
      amount: 122,
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
    },
    {
      title: "This copy introduces the product title",
      subTitle: "STARTINGG EROM SX/SCOFT",
      description:
        "This copy introduces the product abstract This copy intro-duces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introducesthe product abstract This copy introduces the product abstract ",
      percentage: 12,
      amount: 140,
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecf_nathan-dumlao-pLoMDKtl-JY-unsplash.jpg",
    },
    {
      title: "This copy introduces the product title",
      subTitle: "STARTINGG EROM SX/SCOFT",
      description:
        "This copy introduces the product abstract This copy intro-duces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introduces the product abstract This copy introducesthe product abstract This copy introduces the product abstract ",
      percentage: 92,
      amount: 109,
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caee57/64d54eb7f99a540e86caeecd_wu-jianxiong-UniC8xhlzaE-unsplash.jpg",
    },
  ],
  productItems: [
    {
      title: "Tile", //展示的值
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caeea1/64d54eb7f99a540e86caeeaa_patrick-hendry-eDgUyGu93Yw-unsplash.jpg",
    },
    {
      title: "Stone",
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caeea1/64d54eb7f99a540e86caeea8_ryan-holloway-JyDmUaXMib4-unsplash.jpg",
    },
    {
      title: "Wood Door",
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caeea1/64d54eb7f99a540e86caeea7_denisse-leon-J7CjWufjmg4-unsplash.jpg",
    },
    {
      title: "Plumbing",
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caeea1/64d54eb7f99a540e86caeea6_jakob-owens-O_bhy3TnSYU-unsplash.jpg",
    },
    {
      title: "Light",
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caeea1/64d54eb7f99a540e86caeea8_ryan-holloway-JyDmUaXMib4-unsplash.jpg",
    },
    {
      title: "Gas Stove",
      image: "https://uploads-ssl.webflow.com/64d54eb7f99a540e86caeea1/64d54eb7f99a540e86caeea7_denisse-leon-J7CjWufjmg4-unsplash.jpg",
    },
  ],
  clientLogos: ["./assets/logo.png", "./assets/logo-forth-development.png", "./assets/logo-bombay-darbar.png"],
  leaders: [
    {
      name: "Anil",
      description:
        "Anil has a multi-faceted background in industries such as garment manufacturing and restaurants. Having run businesses across multiple countries, he has the expertise in finding the right manufacturers, ensuring quality control and managing logistica issuas",
    },
    {
      name: "Vatsal",
      description:
        "Vatsal comes from a family with six decades of experience running a construction and real estate development powerhouse in India. He spearheads their firm's US division with a goal to match the Indian division's scale in just five short years. Through his involvement in this sector, he has intricate knowledge of the design, quality and value of materials used in construction",
      image: "./assets/vatsal.png",
    },
  ],
};

export default homeData;
