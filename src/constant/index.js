import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/contact", label: "أتصل بنا" },
  { href: "/material", label: "المواد" },
  { href: "/teacher", label: "المعلمين" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: shieldTick,
    label: "رؤية المدرسة",
    subtext:
      "معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه وسلم. تحفيظ القرآن اونلاين علي يد محفظين",
  },
  {
    imgURL: support,
    label: "رسالة المدرسة",
    subtext:
      "معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه وسلم. تحفيظ القرآن اونلاين علي يد محفظين",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "ِAhmed Khalid",
    feedback:
      "معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه وسلم. تحفيظ القرآن اونلاين علي يد محفظين",
  },
  {
    imgURL: customer1,
    customerName: "Ahmed Samak",
    feedback:
      "معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه وسلم. تحفيظ القرآن اونلاين علي يد محفظين",
  },
];

export const footerLinks = [
  {
    title: "الخدمات",
    links: [
      { name: "تحفيظ القران", link: "/" },
      { name: "تعلم التجويد", link: "/" },
      { name: "تعلم علم البيان", link: "/" },
      { name: "تعلم الاحاديث", link: "/" },
      { name: "تعلم السيره النبويه", link: "/" },
    ],
  },
  {
    title: "للمساعده",
    links: [
      { name: "خدماتنا", link: "/" },
      { name: "للاسئله", link: "/" },
      { name: "تفاصيل الدفع", link: "/" },
    ],
  },
  {
    title: "للتواصل",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
