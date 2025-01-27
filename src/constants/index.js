// Import images
import features1 from '../assets/images/features1.png';
import features2 from '../assets/images/features2.png';
import features3 from '../assets/images/features3.png';
import features4 from '../assets/images/features4.png';
import category1 from '../assets/images/category1.png';
import category2 from '../assets/images/category2.png';
import category3 from '../assets/images/category3.png';
import item1 from '../assets/images/item1.png';
import item2 from '../assets/images/item2.png';
import item3 from '../assets/images/item3.png';
import item4 from '../assets/images/item4.png';
import item5 from '../assets/images/item5.png';
import item6 from '../assets/images/item6.png';
import item7 from '../assets/images/item7.png';
import item8 from '../assets/images/item8.png';
import item9 from '../assets/images/item9.png';
import item10 from '../assets/images/item10.png';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';

// Import CSS
import "../index.css"; // Updated import path

// Jackets Data
export const jacketsData = [
    {
        thumbnail: "/thumbnailjacket1.png",
        jacket: "/jacket1.png",
    },
    {
        thumbnail: "/thumbnailjacket2.png",
        jacket: "/jacket2.png",
    },
    {
        thumbnail: "/thumbnailjacket3.png",
        jacket: "/jacket3.png",
    },
];

// Category Data
export const CategoryData = [
    {
        imgURL: category1,
        title: "For Men",
        des:"Designs 2025"
    },
    {
        imgURL: category2,
        title: "For Women",
        des:"Designs 2025"
    },
    {
        imgURL: category3,
        title: "For Kids",
        des:"Designs 2025"
    },
   
];

// Blog Data
export const blogData = [
    {
        imgURL: blog1,
        ctg: 'Fashion',
        title: 'Best Joggers in summer',
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing lorem blaaadajd",
        info: 'By Mr Admin - 07 Sep, 2023',
    },
    {
        imgURL: blog2,
        ctg: 'Trends',
        title: 'Best Joggers fir walk',
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing lorem blaaadajd",
        info: 'By Mr Admin - 17 Sep, 2023',
    },
    {
        imgURL: blog3,
        ctg: 'Deals',
        title: 'Best Joggers in winter',
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing lorem blaaadaj",
        info: 'By Mr Admin - 27 Sep, 2023',
    },
    {
        imgURL: blog4,
        ctg: 'Collection',
        title: 'Best joggers for gym',
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing lorem blaaadajd",
        info: 'By Mr Admin - 29 Sep, 2023',
    },
];

// Swiper Settings
export const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
        },
    },
};
export const ShopData = [
    {
      imgURL: item1,
      title: "Men Jogger Black",
      price: "₹999",
    },
    {
      imgURL: item2,
      title: "Women Jogger Blue",
      price: "₹1,299",
    },
    {
      imgURL: item3,
      title: "Jogger for Running",
      price: "₹899",
    },
    {
      imgURL: item4,
      title: "Exercise Jogger Black",
      price: "₹1,099",
    },
    {
      imgURL: item5,
      title: "Men Jogger Gray",
      price: "₹1,199",
    },
    {
      imgURL: item6,
      title: "Women Jogger Pink",
      price: "₹1,499",
    },
    {
      imgURL: item7,
      title: "Jogger for Gym",
      price: "₹1,099",
    },
    {
      imgURL: item8,
      title: "Casual Jogger Green",
      price: "₹1,399",
    },
  ];
// Features Data
export const featuresData = [
    {
        imgURL: features1,
        title: "24 hours support",
        des: "Our customer cares will be looking into users issues and resolve it quickly",
    },
    {
        imgURL: features2,
        title: "Secure Payments",
        des: "Free Transaction and securing user Data",
    },
    {
        imgURL: features3,
        title: "Return Policies",
        des: "7days Return and replacements",
    },
    {
        imgURL: features4,
        title: "Fast Delivery",
        des: "Free delivery ",
    },
];
export const TestimonialsData = [
    {
      imgURL: user1.jpg,
      title: "John Doe",
      des: "The products are amazing! I love the quality and customer service.",
    },
    {
      imgURL: user2.jpg,
      title: "Jane Smith",
      des: "Absolutely fantastic experience! Fast delivery and great designs.",
    },
    {
      imgURL: user3.jpg,
      title: "Mark Johnson",
      des: "Highly satisfied with my purchase. Everything was perfect!",
    },
  ];    