import galaxyImg from "../assets/galaxy.webp";
import iphoneImg from "../assets/iphone.webp";
import oneplusImg from "../assets/oneplus.webp";
import pixelImg from "../assets/pixel.webp";
import xiomiImg from "../assets/xiomi.jfif";
import vivoImg from "../assets/vivo.webp";

const products = [
    {
      id: 1,
      name: "Galaxy Ultra",
      brand: "Samsung",
      price: 98000,
      image: galaxyImg,
      features: ["5000mAh Battery", "6.9-inch Display", "108MP Camera"],
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      brand: "Apple",
      price: 125000,
      image: iphoneImg,
      features: ["A17 Chip", "6.1-inch Display", "48MP Camera"],
    },
    {
      id: 3,
      name: "OnePlus 12",
      brand: "OnePlus",
      price: 65000,
      image: oneplusImg,
      features: ["5000mAh Battery", "120Hz Display", "50MP Camera"],
    },
    {
      id: 4,
      name: "Pixel 8 Pro",
      brand: "Google",
      price: 89000,
      image: pixelImg,
      features: ["Tensor G3", "6.7-inch Display", "50MP Camera"],
    },
    {
      id: 5,
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      price: 68000,
      image: xiomiImg,
      features: ["Leica Camera", "6.73-inch Display", "120W Charging"],
    },
    {
      id: 6,
      name: "Vivo X90 Pro",
      brand: "Vivo",
      price: 62000,
      image: vivoImg,
      features: ["Zeiss Optics", "6.78-inch Display", "120Hz Refresh"],
    },
  ];

  export default products;