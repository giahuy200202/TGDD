<template>
    <div class="body-content">
        <div class="header-body-content">
            <img
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/des-1920x450.jpg"
            />
            <div class="arrow-container">
                <div class="slide-container">
                    <div class="img-container" v-for="image in listImages">
                        <img :src="image.img1" height="181.8" width="605" />
                        <img :src="image.img2" height="181.8" width="605" />
                    </div>
                    <div class="arrow1" @click="onPrevious">
                        <img src="../../../../public/images/arrow-left.svg" width="14.14" height="14.14"/>
                    </div>
                    <div class="arrow2" @click="onForward">
                        <img src="../../../../public/images/arrow-right.svg" width="14.14" height="14.14"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body-container">
            <div class="category-container">
                <div class="each-category-container" v-for="midProduct in midProducts">
                    <div class="category-inside-container">
                        <img :src="midProduct.img" height="70" width="70" />
                        <div>{{ midProduct.title }}</div>
                    </div>
                </div>
            </div>
            <div class="imgBanner">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/1200x100-1200x100-3.png" height="100" width="1220" />
            </div>
            <div class="pro-img-ban">
                <div class="pro-img-ban-container">
                    <div class="each-pro-ban" v-for="banProduct in banProducts">
                        <div class="ban-product-disc">{{ banProduct.disc }}</div>
                        <img :src="banProduct.img" height="206" width="206"/>
                        <img src="../../../../public/images/disc-img.png" class="disc-img"/>
                        <div class="ban-product-name">{{ banProduct.name }}</div>
                        <div class="price-container">
                            <div class="ban-product-price">{{ banProduct.price }}</div>
                            <div class="ban-product-price-disc">{{ banProduct.priceDisc }}</div>
                        </div>
                        <div class="rate-container">
                            <div v-show="banProduct.rate!==''" class="ban-product-rate">{{ banProduct.rate }}</div>
                            <img v-show="banProduct.rate!=='' && banProduct.numRate!=='' " src="../../../../public/images/star.png" />
                            <div v-show="banProduct.numRate!==''" class="ban-product-num-rate">({{ banProduct.numRate }})</div>
                        </div>
                    </div>
                </div>
                <div class="read-more-but">
                    Xem tất cả
                    <img src="../../../../public/images/arrow-right.svg" width="9.9" height="9.9"/>
                </div>
            </div>

            <div class="after-pro-img-ban">
                <div class="pro-img-ban-container">
                    <div class="each-pro-ban" v-for="banProduct in banProducts" >
                        <div class="ban-product-disc">{{ banProduct.disc }}</div>
                        <img :src="banProduct.img" height="206" width="206"/>
                        <img src="../../../../public/images/disc-img.png" class="disc-img"/>
                        <div class="ban-product-name">{{ banProduct.name }}</div>
                        <div class="price-container">
                            <div class="ban-product-price">{{ banProduct.price }}</div>
                            <div class="ban-product-price-disc">{{ banProduct.priceDisc }}</div>
                        </div>
                        <div class="rate-container">
                            <div v-show="banProduct.rate!==''" class="ban-product-rate">{{ banProduct.rate }}</div>
                            <img v-show="banProduct.rate!=='' && banProduct.numRate!=='' " src="../../../../public/images/star.png" />
                            <div v-show="banProduct.numRate!==''" class="ban-product-num-rate">({{ banProduct.numRate }})</div>
                        </div>
                    </div>
                </div>
                <div class="read-more-but">
                    Xem thêm Loa
                    <img src="../../../../public/images/arrow-right.svg" width="9.9" height="9.9"/>
                </div>
            </div>

            <div class="search-trend">

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 1,
            timer: null,
        };
    },
    mounted() {
        this.funcSetInterval();
    },
    computed: {
        listImages() {
            return this.$store.getters["listImages"];
        },
        midProducts() {
            return this.$store.getters["midProducts"];
        },
        banProducts() {
            return this.$store.getters["banProducts"];
        },
        afterBanProducts() {
            return this.$store.getters["afterBanProducts"];
        },
    },
    methods: {
        updateIndex(upIndex) {
            document
                .querySelectorAll("div.img-container")
                .forEach(
                    (el) =>
                        (el.style.transform = `translateX(calc(-${
                            upIndex * 100
                        }% - .05rem))`)
                );
        },
        funcSetInterval() {
            this.timer = setInterval(() => {
                this.updateIndex(this.index);
                this.index++;
                if (this.index > 3) this.index = 0;
            }, 2000);
        },
        onPrevious() {
            clearInterval(this.timer);
            this.index = this.index - 1;
            if (this.index < 0) this.index = 3;
            this.updateIndex(this.index);
            this.funcSetInterval();
        },
        onForward() {
            clearInterval(this.timer);
            this.index = this.index + 1;
            if (this.index > 3) this.index = 0;
            this.updateIndex(this.index);
            this.funcSetInterval();
        },
    },
};
</script>

<style>
.body-content {
    background-color: #f3f3f3;
    height: 200rem;
}

.body-content > .header-body-content {
    position: relative;
}

.body-content > .header-body-content > .arrow-container {
    width: 122rem;
    margin: 0 auto;
    height: 18.18rem;
    position: absolute;
    top: 81%;
    left: 50%;
    transform: translate(-50%, -3%);
    border-radius: 1.2rem;
}

.body-content > .header-body-content > .arrow-container > .slide-container {
    width: 122rem;
    height: 18.18rem;
    border-radius: 1.2rem;
    display: flex;
    overflow: hidden;
}

.body-content
    > .header-body-content
    > .arrow-container
    > .slide-container
    > .arrow1 {
    position: absolute;
    top: 50%;
    transform: translate(-45%, -50%);
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 1.8rem;
    border-radius: 50%;
}

.body-content
    > .header-body-content
    > .arrow-container
    > .slide-container
    > .arrow2 {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    right: 0;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 1.8rem;
    border-radius: 50%;
}

.body-content
    > .header-body-content
    > .arrow-container
    > .slide-container
    > .arrow1:hover{
        cursor: pointer;
    }

.body-content
    > .header-body-content
    > .arrow-container
    > .slide-container
    > .arrow2:hover{
        cursor: pointer;
    }

.body-content
    > .header-body-content
    > .arrow-container
    > .slide-container
    > .img-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    transition: all 1s ease-in-out;
}

.body-content
    > .header-body-content
    > .arrow-container
    > .slide-container
    > .img-container
    > img {
    border-radius: 1.2rem;
}

.body-content > .content-body-container {
    width: 122rem;
    background: plum;
    margin: 13rem auto 0 auto;
    height: 100rem;
}


.body-content > .content-body-container > .category-container{
    display: flex;
    justify-content: space-between;
}

.body-content > .content-body-container > .category-container > .each-category-container {
    height: 10rem;
    width: 22%;
    border-radius: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.body-content
    > .content-body-container
    > .category-container
    > .each-category-container
    > .category-inside-container {
    height: 7rem;
    display: flex;
    width: 20.4rem;
    gap: 1.5rem;
    align-items: center;
}

.body-content
    > .content-body-container
    > .category-container
    > .each-category-container
    > .category-inside-container
    > img {
    height: 7rem;
    display: flex;
}

.body-content
    > .content-body-container
    > .category-container
    > .each-category-container
    > .category-inside-container
    > div {
    font-size: 2.2rem;
}

.body-content > .content-body-container > .imgBanner{
    height: 10rem;
    margin-top: 3rem;
}

.body-content > .content-body-container > .pro-img-ban{
    height: 51.4rem;
    margin-top: 1.25rem;
    background: #FAA118;
    border-radius: 1.5rem;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container{
    height: 43.43rem;
    width: 96.75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban{
    width: 22.6rem;
    height: 100%;
    margin: 0 auto;
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .ban-product-disc{
    font-size: 1.1rem;
    background: #f1f1f1;
    width: 6.4rem;
    margin-bottom: 1.5rem;
    padding: 0.3rem;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .disc-img{
    margin: 1rem 0 0.5rem 0;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .ban-product-name{
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .price-container{
    display: flex;
    gap: 1.5rem;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .price-container >.ban-product-price{
    font-size: 1.8rem;
    color: #d0021c;
    font-weight: 600;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .price-container > .ban-product-price-disc{
    color: #eb5757;
    border-radius: 0.4rem;
    padding: 0.1rem 0.2rem 0.2rem 0.2rem;
    font-size: 1.4rem;
    background: #fff0e9;
    font-weight: 600;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .rate-container{
    display: flex;
    gap: 0.1rem;
    align-items: center;
    font-size: 1.4rem;
    margin-top: 0.8rem;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .rate-container > .ban-product-rate{
    color: #fb6e2e;
    font-weight: 600;
}

.body-content > .content-body-container > .pro-img-ban > .pro-img-ban-container > .each-pro-ban > .rate-container > .ban-product-num-rate{
    color: #999;
}

.body-content > .content-body-container > .pro-img-ban > .read-more-but{
    background-color: #fff;
    border-radius: 0.4rem;
    border: 1px solid #e0e0e0;
    margin: 1.5rem auto;
    padding: 1.5rem 2rem;
    text-align: center;
    color: #333;
    display: block;
    width: 34rem;
    height: 4.8rem;
    font-size: 1.4rem;
}

.body-content > .content-body-container > .after-pro-img-ban{
    height: 58rem;
    margin-top: 3rem;
    background-color: #920101;
    border-radius: 1.5rem;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container{
    height: 50rem;
    width: 96.75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban{
    width: 22.6rem;
    height: 100%;
    margin: 0 auto;
    background: white;
    padding: 1.2rem;
    border-radius: 0.5rem;
    background: white url("https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/campaign/Frame-knockout-desktop-226x500.png") no-repeat;

}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .ban-product-disc{
    font-size: 1.1rem;
    background: #f1f1f1;
    width: 6.4rem;
    margin-bottom: 1.5rem;
    padding: 0.3rem;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .disc-img{
    margin: 1rem 0 0.5rem 0;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .ban-product-name{
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .price-container{
    display: flex;
    gap: 1.5rem;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .price-container >.ban-product-price{
    font-size: 1.8rem;
    color: #d0021c;
    font-weight: 600;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .price-container > .ban-product-price-disc{
    color: #eb5757;
    border-radius: 0.4rem;
    padding: 0.1rem 0.2rem 0.2rem 0.2rem;
    font-size: 1.4rem;
    background: #fff0e9;
    font-weight: 600;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .rate-container{
    display: flex;
    gap: 0.1rem;
    align-items: center;
    font-size: 1.4rem;
    margin-top: 0.8rem;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .rate-container > .ban-product-rate{
    color: #fb6e2e;
    font-weight: 600;
}

.body-content > .content-body-container > .after-pro-img-ban > .pro-img-ban-container > .each-pro-ban > .rate-container > .ban-product-num-rate{
    color: #999;
}

.body-content > .content-body-container > .after-pro-img-ban > .read-more-but{
    background-color: #fff;
    border-radius: 0.4rem;
    border: 1px solid #e0e0e0;
    margin: 1.5rem auto;
    padding: 1.5rem 2rem;
    text-align: center;
    color: #333;
    display: block;
    width: 34rem;
    height: 4.8rem;
    font-size: 1.4rem;
}


</style>
