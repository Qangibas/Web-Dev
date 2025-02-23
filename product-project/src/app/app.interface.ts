export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  mainImage: string;
  images?: string[];
  kaspiLink: string;
  likes: number;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Smartphones', description: 'Latest mobile devices' },
  { id: 2, name: 'Laptops', description: 'Professional computers' },
  { id: 3, name: 'Accessories', description: 'Tech accessories' },
  { id: 4, name: 'Home Tech', description: 'Smart home devices' },
];

export const products: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: "Apple iPhone 15 Pro Max",
    description: "256Gb черный титан",
    rating: 4.9,
    price: 622070,
    likes: 0,
    mainImage: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    kaspiLink: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-titan-113138420/"
  },
  {
    id: 2,
    categoryId: 1,
    name: "Samsung Galaxy S24 Ultra",
    description: "12 GB/512 GB черный",
    rating: 4.8,
    price: 559730,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/"
  },
  {
    id: 3,
    categoryId: 1,
    name: "Xiaomi Redmi 13C",
    description: "8 ГБ/256 ГБ черный",
    rating: 4.7,
    price: 53508,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000"
  },
  {
    id: 4,
    categoryId: 1,
    name: "Apple iPhone 15",
    description: "128Gb черный",
    rating: 4.8,
    price: 372181,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000"
  },
  {
    id: 5,
    categoryId: 1,
    name: "Samsung Galaxy S23",
    description: "8 ГБ/256 ГБ кремовый",
    rating: 4.7,
    price: 350000,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000"
  },

  {
    id: 6,
    categoryId: 2,
    name: "Apple MacBook Air 13",
    description: "M2 8 GB/256 GB серый",
    rating: 4.9,
    price: 477711,
    likes: 0,
    mainImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    kaspiLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/"
  },
  {
    id: 7,
    categoryId: 2,
    name: "Lenovo IdeaPad 3",
    description: "15.6\" / 8 ГБ / SSD 512 ГБ / Win 11",
    rating: 4.6,
    price: 234799,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000"
  },
  {
    id: 8,
    categoryId: 2,
    name: "HP 15s",
    description: "15.6\" / 16 ГБ / SSD 512 ГБ / Win 11",
    rating: 4.7,
    price: 303900,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hbf/h68/86365946642462.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/hp-15s-15-6-8-gb-ssd-512-gb-win-11-15s-eq2047ur-4l5u0ea-103541938/?c=750000000"
  },
  {
    id: 9,
    categoryId: 2,
    name: "Zentek Savior",
    description: "16\" / 16 ГБ / SSD 512 ГБ / Win 10 Pro",
    rating: 4.8,
    price: 450000,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/p59/p9a/21962595.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/zentek-freya-15-6-16-gb-ssd-512-gb-win-11-pro-zk7940hsfreya-133910765/?c=750000000"
  },
  {
    id: 10,
    categoryId: 2,
    name: "HYDRA H21",
    description: "15.6\" / 12 ГБ / SSD 512 ГБ / Win 11",
    rating: 4.5,
    price: 129990,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/p27/p48/9287052.jpeg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/hydra-h21-15-6-12-gb-ssd-512-gb-win-11-mkii-117849530/?c=750000000"
  },

  {
    id: 11,
    categoryId: 3,
    name: "Apple Watch Series 9",
    description: "45 мм черный",
    rating: 4.7,
    price: 218325,
    likes: 0,
    mainImage: "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-series9-1.jpg",
    kaspiLink: "https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-chernyi-113398437/"
  },
  {
    id: 12,
    categoryId: 3,
    name: "Сумка-рюкзак Tiding Bag",
    description: "кожаная, черная",
    rating: 4.6,
    price: 50000,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hbe/haa/64119287283742.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/kartholder-tiding-bag-9119lh-natural-naja-kozha-chernyi-103169515/?c=750000000"
  },
  {
    id: 13,
    categoryId: 3,
    name: "Наручные часы Casio",
    description: "модель G-Shock, черные",
    rating: 4.8,
    price: 70000,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h0b/h84/63833719144478.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/kvartsevye-casio-g-shock-ga-2100-1a1er-plastik-21412032/?c=750000000"
  },
  {
    id: 14,
    categoryId: 3,
    name: "Солнцезащитные очки Ray-Ban",
    description: "модель Aviator, золотистые",
    rating: 4.7,
    price: 60000,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/pb5/p70/13218033.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/ray-ban-rb-r0101s-003-gr-62-aviatory-odnotonnye-131430809/?c=750000000"
  },
  {
    id: 15,
    categoryId: 3,
    name: "Кожаный ремень KIK BELT",
    description: "черный с пряжкой",
    rating: 4.9,
    price: 4900,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h95/hab/64371486851102.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/remen-kik-store-kozhanyi-remen-kik-belt-black-35-k-115-natural-naja-kozha-115-sm-chernyi-103031840/?c=750000000"
  },

  {
    id: 16,
    categoryId: 4,
    name: "Dyson V15s Detect",
    description: "Submarine пылесос вертикальный",
    rating: 4.7,
    price: 423224,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hab/h62/86157341360158.jpg?format=gallery-medium",
    kaspiLink: "https://kaspi.kz/shop/p/dyson-v15s-detect-submarine-serebristyi-114424216/"
  },
  {
    id: 17,
    categoryId: 4,
    name: "Samsung WW60AG4S00CELD",
    description: "Стиральная машина, белая",
    rating: 4.8,
    price: 136700,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h7d/h11/82896148693022.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-ww60ag4s00celd-belyi-112618357/?c=750000000"
  },
  {
    id: 18,
    categoryId: 4,
    name: "LG F2J3NS0W",
    description: "Стиральная машина, белая",
    rating: 4.9,
    price: 148934,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000"
  },
  {
    id: 19,
    categoryId: 4,
    name: "Leadbros BC/BD-217AT",
    description: "Морозильный ларь, 217 л, белый",
    rating: 4.7,
    price: 81999,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/h9d/h20/64348814868510.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/leadbros-bc-bd-217at-217-l-belyi-105632244/?c=750000000"
  },
  {
    id: 20,
    categoryId: 4,
    name: "Samsung WW70AG5S21EELD",
    description: "Стиральная машина, белая",
    rating: 4.8,
    price: 151174,
    likes: 0,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/hc6/h2b/83598948597790.jpg?format=gallery-large",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-ww70ag5s21cxld-chernyi-113180273/?c=750000000"
  }
];
