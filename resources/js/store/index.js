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
                listContacts:[
                    {
                        title: "Gọi mua: ",
                        contact: "1800.1060",
                        time: "(7:30 - 22:00)"

                    },
                    {
                        title: "Khiếu nại: ",
                        contact: "1800.1062",
                        time: "8:00 - 21:30)"

                    },
                    {
                        title: "Bảo hành: ",
                        contact: "1800.1064",
                        time: "(8:00 - 21:00)"

                    },
                ]
            },

            bodyContents:{
                categories:[
                    {
                        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/200x200-200x200.png",
                        title: "Hot Sale Rẻ Hơn"
                    }
                ]
            }

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
    },
});

export default store;
