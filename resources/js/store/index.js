import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            navbarProducts: [
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phone-96x96-2.png",
                    name: "Điện thoại",
                    arrow: false,
                },
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png",
                    name: "Laptop",
                    arrow: false,
                },
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png",
                    name: "Tablet",
                    arrow: false,
                },
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phu-kien-96x96-1.png",
                    name: "Phụ kiện",
                    arrow: true,
                },
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png",
                    name: "Smartwatch",
                    arrow: false,
                },
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/watch-icon-96x96.png",
                    name: "Đồng hồ",
                    arrow: false,
                },
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-header-may-cu-30x30.png",
                    name: "Máy cũ giá rẻ",
                    arrow: false,
                },
                {
                    icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-pc-96x96.png",
                    name: "PC, Máy in",
                    arrow: true,
                },
                {
                    icon: "",
                    name: "Sim, Thẻ cào",
                    arrow: false,
                },
                {
                    icon: "",
                    name: "Dịch vụ tiện ích",
                    arrow: true,
                },
            ],

            footerContents: {
                listContents: [
                    [
                        {
                            name: "Tích điểm Quà tặng VIP",
                            arrow: false,
                        },
                        {
                            name: "Lịch sử mua hàng",
                            arrow: false,
                        },
                        {
                            name: "Tìm hiểu về mua trả góp",
                            arrow: false,
                        },
                        {
                            name: "Chính sách bảo hành",
                            arrow: false,
                        },
                        {
                            name: "Xem thêm",
                            arrow: true,
                        },
                    ],
                    [
                        {
                            name: "Giới thiệu công ty (MWG.vn)",
                            arrow: false,
                        },
                        {
                            name: "Tuyển dụng",
                            arrow: false,
                        },
                        {
                            name: "Gửi góp ý, khiếu nại",
                            arrow: false,
                        },
                        {
                            name: "Tìm siêu thị (3.379 shop)",
                            arrow: false,
                        },
                        {
                            name: "Xem bản mobile",
                            arrow: false,
                        },
                    ],
                ],
                listContacts: [
                    {
                        title: "Gọi mua: ",
                        contact: "1800.1060",
                        time: "(7:30 - 22:00)",
                    },
                    {
                        title: "Khiếu nại: ",
                        contact: "1800.1062",
                        time: "8:00 - 21:30)",
                    },
                    {
                        title: "Bảo hành: ",
                        contact: "1800.1064",
                        time: "(8:00 - 21:00)",
                    },
                ],
            },

            bodyContents: {
                categories: [
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/200x200-200x200.png",
                        title: "Hot Sale Rẻ Hơn",
                    },
                ],
                listImages: [
                    {
                        img1: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/y36-720-220-720x220-6.png",
                        img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/C53-720-220-720x220-7.png",
                    },
                    {
                        img1: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/Redmi12-720-220-720x220-1.png",
                        img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/iP-14-720-220-720x220-1.png",
                    },
                    {
                        img1: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/Befit-720-220-720x220-1.png",
                        img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/720-220-720x220-83.png",
                    },
                    {
                        img1: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/a57-720-220-720x220-7.png",
                        img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/LTMS-720-220-720x220-2.png",
                    },
                ],
                midProducts: [
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/200x200-200x200.png",
                        title: "Hot Sale Redmi 12",
                    },
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-xakho-120x120-3.png",
                        title: "Mua Sớm Rẻ Hơn",
                    },
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/100x100-100x100-41.png",
                        title: "Giảm đến 50%++",
                    },
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/dien-thoai-120x120-7.png",
                        title: "Điện Thoại Giá Rẻ Quá",
                    },
                ],
                banProducts: [
                    {
                        disc: "Trả góp 0%",
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/307556/xiaomi-redmi-12-bac-thumb-600x600.jpg",
                        name: "Xiaomi Redmi 12 4GB",
                        price: " 3.990.000₫",
                        priceDisc: "-6%",
                        rate: "",
                        numRate: "",
                    },
                    {
                        disc: "Trả góp 0%",
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/306785/realme-c53-gold-thumb-1-600x600.jpg",
                        name: "realme C53",
                        price: "3.990.000₫",
                        priceDisc: "-6%",
                        rate: "4.5",
                        numRate: "305",
                    },
                    {
                        disc: "Trả góp 0%",
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
                        name: "Samsung Galaxy A24 6GB",
                        price: " 5.890.000₫",
                        priceDisc: "-9%",
                        rate: "4.4",
                        numRate: "17",
                    },
                    {
                        disc: "Trả góp 0%",
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg",
                        name: "iPhone 14 Pro Max 128GB",
                        price: "27.290.000₫",
                        priceDisc: "-9%",
                        rate: "4.6",
                        numRate: "311",
                    },
                    {
                        disc: "Trả góp 0%",
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/235838/Galaxy-S22-Ultra-Burgundy-600x600.jpg",
                        name: "Samsung Galaxy S22 Ultra 5G 128GB",
                        price: "17.990.000₫",
                        priceDisc: "-41%",
                        rate: "4.2",
                        numRate: "136",
                    },
                ],

                afterBanProducts: [
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/2162/242826/bluetooth-jbl-go-3-xanh-den-thumb-5-600x600.jpg",
                        name: "Loa Bluetooth JBL Go 3",
                        sig:"Online giá rẻ quá",
                        price: "890.000₫",
                        priceDisc: "-18%",
                        rate: "4.7",
                        numRate: "61",
                    },
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/2162/125847/loa-vi-tinh-fenda-v320-thumb-600x600.jpeg",
                        name: "Loa vi tính Fenda V320",
                        sig:"Online giá rẻ quá",
                        price: "110.000₫",
                        priceDisc: "-55%",
                        rate: "4.2",
                        numRate: "283",
                    },
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/2162/212882/loa-bluetooth-mozard-e7-thumb2-600x600.jpeg",
                        name: "Loa Bluetooth Mozard E7",
                        sig:"Online giá rẻ quá",
                        price: "560.000₫",
                        priceDisc: "-20%",
                        rate: "4.6",
                        numRate: "156",
                    },
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/2162/299605/loa-bluetooth-jbl-go-essential-thumb-600x600.jpeg",
                        name: "Loa Bluetooth JBL Go Essential",
                        sig:"Online giá rẻ quá",
                        price: "690.000₫",
                        priceDisc: "-12%",
                        rate: "4.3",
                        numRate: "15",
                    },
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/2162/239476/vi-tinh-microlab-m108-thumb-600x600.jpeg",
                        name: "Loa vi tính Microlab M108",
                        sig:"Online giá rẻ quá",
                        price: "620.000₫",
                        priceDisc: "-15%",
                        rate: "4.2",
                        numRate: "52",
                    },
                ],
                listSearch: [
                    'iphone 15', 'pin', 'bàn phím máy tính',
                    'loa jbl', 'laptop hp', 'air tag', 'tai nghe sony', 'lg gram',
                    'đồng hồ lacoste', 'laptop đồ họa', 'phụ kiện samsung', 'đồng hồ quartz', 'đồng hồ skagen',
                    'đồng hồ thông minh chống nước', 'macbook', 'màn hình máy tính', 'máy chiếu', 'loa sony', 'loa kéo',
                    'asus rog', 'orient star', 'máy in brother', 'khoá cửa điện tử',
                    'loa nanomax', 'đồng hồ mặt vuông', 'màn hình asus', 'mac air', 'redmi 12', 'điện thoại oppo a98'
                ]
            },
        };
    },

    mutations: {},

    actions: {},

    getters: {
        navbarProducts(state) {
            return state.navbarProducts;
        },
        listContents(state) {
            return state.footerContents.listContents;
        },
        listContacts(state) {
            return state.footerContents.listContacts;
        },
        listImages(state) {
            return state.bodyContents.listImages;
        },
        midProducts(state) {
            return state.bodyContents.midProducts;
        },
        banProducts(state) {
            return state.bodyContents.banProducts;
        },
        afterBanProducts(state) {
            return state.bodyContents.afterBanProducts;
        },
        listSearch(state) {
            return state.bodyContents.listSearch;
        },
    },
});

export default store;
