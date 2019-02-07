<template>
    <div class="successPage" style="background: #ccc">
        <div class="mask">
            <div class="success am-modal am-modal-alert am-modal-active" tabindex="-1" id="my-alert" style="display: block;">
                <div class="am-modal-dialog am-padding">
                    <div class="yesLogo">
                        <img src="../../assets/img/yes.png" alt="">
                    </div>
                    <div class="am-padding notice">您的礼物已兑换成功！<p>前往个人中心查看~</p></div>
                    <div class="am-g ">
                        <a class="am-btn am-btn-default-flase am-round" href="" >继续兑换</a>
                        <a class="am-btn am-btn-default am-round" href="" >立即使用</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    /*兑换成功*/
    .mask{position: fixed;top:0;right:0;bottom:0;left:0;background: rgba(0,0,0,.5);z-index: 100;text-align: center}
    .success .am-modal-dialog { border-radius:5px; padding: 2em 0;}
    .success i{ color: #000; font-size:4em;  line-height:1em;}
    .success .am-btn{ width: 40%; margin:0 2% ;}
    .yesLogo{text-align: center}
    .yesLogo img{width: 80px;height:80px;margin: 0 auto}
    .notice{text-align: center}
</style>