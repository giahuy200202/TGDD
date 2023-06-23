<template>
    <HeaderLayout />
    <BodyLayout />
    <FooterLayout />
</template>

<script>
import HeaderLayout from "./components/Header/HeaderLayout.vue";
import BodyLayout from "./components/Body/BodyLayout.vue";
import FooterLayout from "./components/Footer/FooterLayout.vue";

export default {
    components: { HeaderLayout, BodyLayout, FooterLayout, },
};
</script>

<style>
* {
    box-sizing: border-box;
}
html {
    font-family: "Jost", sans-serif;
    font-size: 10px;
    text-decoration: none;
}
body {
    margin: 0;
}
</style>
