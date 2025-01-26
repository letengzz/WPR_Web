<template>
    <div>
        <h1>UnoCSS</h1>
        <div class="box"></div>
        <hr />
        <div class="h-100 w-100 bg-red-800 text-30 text-blue hover:text-black">小猫米</div>
        <hr />
        <div class="box2">小猫咪</div>
        <hr />
        <div h100 w100 bg-blueGray text-fuchsia mt10 py20>小猫咪</div>
        <hr />
        <div class="wrap" w200 h100 flex-center gap10>
            <div w20 h20 bg-blue></div>
            <div w20 h20 bg-blue></div>
            <div w20 h20 bg-blue></div>
        </div>
        <hr />
        <div i-ep:dish></div>
        <i w100 h100 block i-ep:switch-button></i>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: salmon;
}
.box2{
    @apply h-100 w-100 bg-red-800 text-30 text-blue hover:text-black
}
.wrap{
    border: 1px solid #ddd;
}
</style>