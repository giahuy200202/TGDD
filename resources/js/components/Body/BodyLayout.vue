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
            <div class="category-container" v-for="midProduct in midProducts">
                <div class="category-inside-container">
                    <img :src="midProduct.img" height="70" width="70" />
                    <div>{{ midProduct.title }}</div>
                </div>
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
    display: flex;
    justify-content: space-between;
}

.body-content > .content-body-container > .category-container {
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
    > .category-inside-container
    > img {
    height: 7rem;
    display: flex;
}

.body-content
    > .content-body-container
    > .category-container
    > .category-inside-container
    > div {
    font-size: 2.2rem;
}
</style>
