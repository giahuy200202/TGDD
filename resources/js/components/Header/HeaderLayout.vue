<template>
    <div class="container">
        <div class="content-container">
            <div class="content-top">
                <img src="../../../../public/images/tgdd.png"/>
                <div class="lbutton">
                    <div>Xem giá, tồn kho tại: <b>Hồ Chí Minh</b></div>
                    <img src="../../../../public/images/arrow-down.png" height="8px" width="16px"/>
                </div>
                <div class="input-class">
                    <input placeholder="Bạn tìm gì..."/>
                    <img src="../../../../public/images/search.png" height="20px" width="20px"/>
                </div>
                <div class="lbutton lbutton-1">
                    <div>Tài khoản & Đơn hàng</div>
                </div>
                <div class="lbutton lbutton-2">
                    <img src="../../../../public/images/cart.png" height="25px" width="25px"/>
                    <div style="font-weight: 600;">Giỏ hàng</div>
                </div>
                <div class="nbutton">
                    <div class="nbutton-1">24h <br>Công nghệ</div>
                    <div class="nbutton-2">Hỏi Đáp</div>
                    <div class="nbutton-3">Game App</div>
                </div>
            </div>
            <div class="content-bottom">
                <div class="product-content" v-for="product in navbarProducts" :key="product.name">
                    <img v-show="product.icon!=='' " :src="product.icon" width="20" height="20"/>
                    <div>{{ product.name }}</div>
                    <img v-show="product.arrow" src="../../../../public/images/arrow-down.png" width="10" height="10" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        navbarProducts(){
            return this.$store.getters['navbarProducts']
        }
    }
};
</script>

<style>
.container {
    background-color: #ffd400;
    height: 11.4rem;
    width: 100%;
}

.container > .content-container {
    height: 100%;
    width: 122rem;
    margin: 0 auto;
    padding-top: 1rem 0;
}

.container > .content-container > .content-top {
    height: 5rem;
    width: 122rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 0 0;
}

.container > .content-container > .content-top > .lbutton {
    height: 4rem;
    width: 13.711rem;
    background-color: #FFAC0A99;
    padding: 0.4rem 1rem 0.4rem 1rem;
    font-size: 1.1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.container > .content-container > .content-top > .lbutton-1{
    width: 9.6rem;
    text-align: center;
    font-size: 1.2rem;
}

.container > .content-container > .content-top > .lbutton-2{
    height: 4rem;
    width: 11rem;
    font-size: 1.2rem;
    gap: 1rem;
}

.container > .content-container > .content-top > .input-class{
    width: 26.6rem;
    height: 4rem;
    padding: 0;
    border: none;
    display: flex;
    align-items: center;
    background-color: white;
}

.container > .content-container > .content-top > .input-class > input{
    width: 23rem;
    height: 100%;
    padding: 0.8rem 0.8rem 0.8rem 1.3rem;
    border: none;
}

.container > .content-container > .content-top > .nbutton {
    height: 4rem;
    width: 24.8rem;
    background-color: #ffd400;
    font-size: 1.4rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin: 0;
}

.container > .content-container > .content-top > .nbutton > .nbutton-1 {
    width: 9.2rem;
    padding: 0.5rem 0.5rem;
    height: 4rem;
    border-right: 1px solid white;
}

.container > .content-container > .content-top > .nbutton > .nbutton-2 {
    width: 7.5rem;
    padding: 1.15rem 0.3rem;
    height: 4rem;
    border-right: 1px solid white;
}

.container > .content-container > .content-top > .nbutton > .nbutton-3 {
    padding: 1.15rem 0;
    border: none;
    height: 4rem;
}

.container > .content-container > .content-bottom {
    height: 5.4rem;
    width: 122rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 0 0;
    margin-top: 0.5rem;
}

.container > .content-container > .content-bottom > .product-content {
    height: 4.4rem;
    display: flex;
    gap: 0.7rem;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
}

</style>
