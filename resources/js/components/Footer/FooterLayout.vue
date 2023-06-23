<template>
    <div class="footer-container">
        <div class="top-footer">
            <div class="top-footer-content">
                <div class="left-content">
                    <div class="sub-left-content" v-for="blockContent in listContents">
                        <div class="each-content" v-for="content in blockContent">
                            <div>{{ content.name }}</div>
                            <img v-show="content.arrow" src="../../../../public/images/arrow-down.png" height="10" width="10"/>
                        </div>
                    </div>
                    <div class="sub-left-content">
                        <div class="each-content">
                            <span><b>Tổng đài hỗ trợ</b> </span> (Miễn phí gọi)
                        </div>
                        <div class="each-content" v-for="econtact in listContacts">
                            <span style="width: 6.5rem;">{{econtact.title}}</span>
                            <span style="color: #2f80ed"><b>{{econtact.contact}}</b></span>
                            {{econtact.time}}
                        </div>
                    </div>
                </div>
                <div class="right-content">
                    <img src="../../../../public/images/footer-img.png" width="378.19" height="208"/>
                </div>
            </div>
        </div>>
        <div class="bottom-footer">
            <div class="bottom-footer-content">
                <div>
                    © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                    Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: Tot.huynhvan@thegioididong.com.
                    <span style="color: #288ad6">Xem chính sách sử dụng</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        listContents() {
            return this.$store.getters["listContents"];
        },
        listContacts(){
            return this.$store.getters["listContacts"];
        }
    },
};
</script>

<style>
.footer-container {
    width: 100%;
    height: 30.33rem;
}

.footer-container  > .top-footer {
    height: 21.8rem;
    background-color: white;
    padding-top: 1rem;
}

.footer-container  > .top-footer  > .top-footer-content{
    height: 100%;
    width: 122rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 0;
}

.footer-container  > .top-footer  > .top-footer-content > .left-content{
    width: 69%;
    display: flex;
    gap: 0;
}

.footer-container  > .top-footer  > .top-footer-content > .left-content > .sub-left-content{
    width: 31.33%;
}

.footer-container  > .top-footer  > .top-footer-content > .left-content > .sub-left-content > .each-content{
    font-size: 1.4rem;
    padding-top: 1.5rem;
    gap: 1rem;
    display: flex;
    align-items: center;
}

.footer-container  > .top-footer  > .top-footer-content > .right-content{
    width: 31%;
    display: flex;
    gap: 0;
}

.footer-container  > .bottom-footer {
    background-color: #f3f3f3;
    height: 8.53rem;
}

.footer-container  > .bottom-footer  > .bottom-footer-content{
    height: 100%;
    width: 122rem;
    margin: 0 auto;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
}

</style>
