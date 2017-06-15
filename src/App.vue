<template>
<div id="app" class="app-bg">
    <!-- <transition name="fade"> -->
        <router-view></router-view>
    <!-- </transition> -->
</div>
</template>

<script>
import '@/static/styles/common/base.less'
export default {
    name: 'yiyuan'
}
</script>
<style media="screen">
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
