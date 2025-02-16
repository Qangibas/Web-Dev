export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  mainImage: string;
  images?: string[];
  kaspiLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max",
    description: "256Gb черный титан",
    rating: 4.9,
    price: 622070,
    mainImage: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    kaspiLink: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-titan-113138420/"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    description: "12 GB/512 GB черный",
    rating: 4.8,
    price: 559730,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/?c=750000000"
  },
  {
    id: 3,
    name: "Apple MacBook Air 13",
    description: "M2 8 GB/256 GB серый",
    rating: 4.9,
    price: 477711,
    mainImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    kaspiLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/"
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    description: "45 мм черный",
    rating: 4.7,
    price: 218325,
    mainImage: "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-series9-1.jpg",
    kaspiLink: "https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-chernyi-113398437/"
  },
  {
    id: 5,
    name: "Sony PlayStation 5",
    description: "1 TB slim белый",
    rating: 4.9,
    price: 301713,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/sony-playstation-5-slim-1-tb-belyi-114696098/"
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S9+",
    description: "12 GB/256 GB серый",
    rating: 4.8,
    price: 598990,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h74/h44/82729278636062.jpg?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-12-gb-256-gb-seryi-112423162/"
  },
  {
    id: 7,
    name: "Apple AirPods Pro 2",
    description: "с зарядным кейсом MagSafe",
    rating: 4.9,
    price: 127476,
    mainImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1660803972361",
    kaspiLink: "https://kaspi.kz/shop/p/apple-airpods-pro-2-with-wireless-magsafe-charging-case-belyi-106362968/"
  },
  {
    id: 8,
    name: "Dyson V15s Detect",
    description: "Submarine пылесос вертикальный",
    rating: 4.7,
    price: 423224,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hab/h62/86157341360158.jpg?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/dyson-v15s-detect-submarine-serebristyi-114424216/?c=750000000"
  },
  {
    id: 9,
    name: "ASUS ROG Strix G16",
    description: "16 RTX 4060 серый",
    rating: 4.8,
    price: 1029979,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/asus-rog-strix-g16-16-32-gb-ssd-1000-gb-dos-g614ji-n4181-90nr0d41-m00v20-118060952/?c=750000000"
  },
  {
    id: 10,
    name: "Samsung Galaxy A25",
    description: "Смартфон Samsung Galaxy A25 5G 6 ГБ/128 ГБ темно-синий",
    rating: 4.9,
    price: 109900,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000"
  }
];
