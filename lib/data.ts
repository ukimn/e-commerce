import { CommentCardProps, routeTypes } from "./types";

const Routes: routeTypes[] = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "Products", route: "/products" },
  { id: 3, title: "Feedback", route: "/feedback" },
];

const comments: CommentCardProps[] = [
  {
    id: 1,
    image: "/PersonOne.jpg",
    Name: "Youssef Ahmed",
    description: "أفضل خدمة في حياتي! جودة المنتجات رائعة وشكراً لكم.",
    date: new Date("2025-6-23"),
  },
  {
    id: 2,
    image: "/PersonOne.jpg",
    Name: "Youssef Ahmed",
    description: "ناس مجتهدة في شغلها وجودة المنتجات ممتازة.",
    date: new Date("2022-10-1"),
  },
  {
    id: 3,
    image: "/PersonOne.jpg",
    Name: "Youssef Ahmed",
    description: "تجربة رائعة مع التسوق، شكراً لجهودكم.",
    date: new Date("2020-1-1"),
  },
  {
    id: 4,
    image: "/PersonOne.jpg",
    Name: "Youssef Ahmed",
    description: "خدمة ممتازة ومنتجات عالية الجودة.",
    date: new Date("2019-12-31"),
  },
  {
    id: 5,
    image: "/PersonOne.jpg",
    Name: "Youssef Ahmed",
    description: "أشكركم على الجهد الرائع والمنتجات الجميلة.",
    date: new Date("2016-1-15"),
  },
  {
    id: 6,
    image: "/PersonOne.jpg",
    Name: "Youssef Ahmed",
    description: "أفضل تجربة تسوق، أنصح الجميع بهذه الخدمة.",
    date: new Date("2014-4-12"),
  },
];

export { Routes, comments };
