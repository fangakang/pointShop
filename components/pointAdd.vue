<template>
    <div class="pageMain">
        <div class="rank">
            <div class="rankList clearfix">
                <div class="goodsPic fl">
                    <img src="../assets/img/5.jpg" alt="">
                </div>
                <div class="detail fl">
                    <div class="detailName">我很囧，你晒晒旅行中我很囧！我很囧，你晒晒旅行中我很囧！</div>
                    <div class="moneyPoint">400积分+￥2000</div>
                    <div class="priceMsg clearfix">
                        <div class="goodsMoney fl">原价：￥200</div>
                        <div class="goodsRemain fr">库存：200</div>
                    </div>
                </div>
            </div>
            <div class="rankList clearfix">
                <div class="goodsPic fl">
                    <img src="../assets/img/5.jpg" alt="">
                </div>
                <div class="detail fl">
                    <div class="detailName">我很囧，你晒晒旅行中我很囧！我很囧，你晒晒旅行中我很囧！</div>
                    <div class="moneyPoint">400积分+￥2000</div>
                    <div class="priceMsg clearfix">
                        <div class="goodsMoney fl">原价：￥200</div>
                        <div class="goodsRemain fr">库存：200</div>
                    </div>
                </div>
            </div>
            <div class="rankList clearfix">
                <div class="goodsPic fl">
                    <img src="../assets/img/5.jpg" alt="">
                </div>
                <div class="detail fl">
                    <div class="detailName">我很囧，你晒晒旅行中我很囧！我很囧，你晒晒旅行中我很囧！</div>
                    <div class="moneyPoint">400积分+￥2000</div>
                    <div class="priceMsg clearfix">
                        <div class="goodsMoney fl">原价：￥200</div>
                        <div class="goodsRemain fr">库存：200</div>
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
    .clearfix{overflow: hidden}
    .fl{float: left}
    .fr{float:right}
    .rank{background: #fff}
    .rankList{padding: 0.5rem 0.75rem;border-bottom: 1px solid #efefef}
    .goodsPic{width: 4.5rem;height:4.5rem;margin-right: 10px;}
    .goodsPic img{width: 4.5rem;height:4.5rem;}
    .detailName{width:9.5rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; overflow: hidden;font-size: 0.7rem;line-height: 0.8rem;height:1.6rem}
    .moneyPoint{color:#bc3031;font-size: 0.7rem;margin: 0.5rem 0;}
    .priceMsg{font-size: 0.6rem;color:#999}
</style>