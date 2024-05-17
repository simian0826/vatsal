import { ProductDetail } from "@/types/productDetail";

const productDetailData: Partial<ProductDetail>[] = [
  {
    id: "1",
    mainInfo: {
      title: "Brightness,texture and  mattesilk",
      categoty: "tile",
      desc: "This is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary.uct's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of .summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative typesThis is a summary of the product's narrative types.",
      imgs: ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.jpg"],
    },
    productName: "Product Name",
    productInfoImg: "./assets/15.jpg",
    properties: [
      {
        name: "Surfaces",
        items: [
          {
            label: "Naturale",
            value: "Naturale",
          },
          {
            label: "Full lappato",
            value: "Full lappato",
          },
          {
            label: "Lappato matt",
            value: "Lappato matt",
          },
          {
            label: "Spazzolato",
            value: "Spazzolato",
          },
          {
            label: "Lucido opaco",
            value: "Lucido opaco",
          },
          {
            label: "Rigato",
            value: "Rigato",
          },
          {
            label: "Bocciardato",
            value: "Bocciardato",
          },
          {
            label: "Pettinato",
            value: "Pettinato",
          },
        ],
      },
      {
        name: "Color",
        items: [
          {
            label: "White",
            value: "White",
          },
          {
            label: "Black",
            value: "Black",
          },
          {
            label: "Lappato matt",
            value: "Lappato matt",
          },
          {
            label: "Spazzolato",
            value: "Spazzolato",
          },
          {
            label: "Lucido opaco",
            value: "Lucido opaco",
          },
          {
            label: "Rigato",
            value: "Rigato",
          },
          {
            label: "Bocciardato",
            value: "Bocciardato",
          },
          {
            label: "Pettinato",
            value: "Pettinato",
          },
        ],
      },
      {
        name: "Thickness",
        items: [
          {
            label: "20mm",
            value: "20mm",
          },
          {
            label: "30mm",
            value: "30mm",
          },
          {
            label: "40mm",
            value: "40mm",
          },
        ],
      },
      {
        name: "Size",
        items: [
          {
            label: "120x240cm",
            value: "120x240cm",
          },
          {
            label: "80x160cm",
            value: "80x160cm",
          },
          {
            label: "120x120cm",
            value: "120x120cm",
          },
          {
            label: "120x160cm",
            value: "120x160cm",
          },
        ],
      },
    ],
    certificate: ["./assets/logo.jpg", "./assets/logo.jpg", "./assets/logo.jpg"],
  },
];

export default productDetailData;
