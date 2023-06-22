<template>
    <div class="body-content">
        <div class="header-body-content">
            <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/des-1920x450.jpg"/>
            <div class="slide-container">
                <!-- <div class="img-container fade">
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/y36-720-220-720x220-6.png" height="181.8" width="605"/>
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/C53-720-220-720x220-7.png" height="181.8" width="605"/>
                </div> -->
                <!-- <div class="img-container fade">
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/Redmi12-720-220-720x220-1.png" height="181.8" width="603"/>
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/iP-14-720-220-720x220-1.png" height="181.8" width="603"/>
                </div> -->
                <div class="img-container fade">
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/Befit-720-220-720x220-1.png" height="181.8" width="603"/>
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/720-220-720x220-83.png" height="181.8" width="603"/>
                </div>
                <!-- <div class="img-container fade">
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/a57-720-220-720x220-7.png" height="181.8" width="603"/>
                    <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/LTMS-720-220-720x220-2.png" height="181.8" width="603"/>
                </div> -->


            </div>

        </div>
        <div class="content-body-container">
            <div class="category-container">
                <div class="category-inside-container">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            test: 0
        }
    },
};
</script>

<style>

.body-content{
    background-color: #f3f3f3;
}

.body-content > .header-body-content{
    position: relative;
}


.body-content > .header-body-content > .slide-container{
    width: 122rem;
    margin: 0 auto;
    height: 18.18rem;
    position: absolute;
    top: 81%;
    left: 50%;
    transform: translate(-50%, -3%);
    border-radius: 1.2rem;

}


.body-content > .header-body-content > .slide-container > .img-container {
    display: flex;
    justify-content: space-between;
}

.body-content > .header-body-content > .slide-container > .img-container >.fade {
  animation-name: fade;
  animation-duration: 2s;
}

.body-content > .header-body-content > .slide-container > .img-container > img {
    border-radius: 1.2rem;
}


.body-content > .content-body-container{
    width: 122rem;
    background: plum;
    margin: 13rem auto 0 auto;
    height: 100rem;
}


.body-content > .content-body-container > .category-container{
    height: 10rem;
    background: aqua;
    width: 22%;
    border-radius: 1.2rem;
    padding-top: 1.5rem;
}

.body-content > .content-body-container > .category-container > .category-inside-container{
    height: 7rem;
    background: white;
    display: flex;
    padding: 0 1rem 0 1rem;
}
</style>
