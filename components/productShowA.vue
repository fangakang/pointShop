<template>
    <div class="productShowA" id="productShowA">
        <div class="headerNav">
            <div class="headerBg">
                <img src="../assets/img/pic.jpg" alt="">
            </div>
            <div class="headMsg">
                <div class="goodsName">加咖啡的京东方看的撒积分快递费减肥的斯科拉疯狂的撒娇放开手</div>
                <div class="clearfix priceMsg">
                    <div class="point fl">400积分</div>
                    <div class="oldPrice fl">原价：￥200</div>
                    <div class="limit fr">每人限领2件</div>
                </div>
            </div>
        </div>
        <div class="couponDetail">
            <div class="title">
                <div class="titleName">优惠券详情</div>
            </div>
            <div class="detailImg">
                <img src="../assets/img/pic2.jpg" alt="">
            </div>
            <a class="pageBottom" @click="showMask">我要兑换</a>
            <div class="mask" v-if="maskShow">
                <div class="maskBody">
                    <div class="maskContent">
                        <img class="maskImg" src="../assets/img/2.jpg" alt="">
                        <div class="maskTitle">
                            <div class="fr">
                                <div class="pointNum">400积分</div>
                                <div class="remain">库存：200</div>
                                <a class="iconfont icon-guanbi" @click="closeMask"></a>
                            </div>
                        </div>
                        <div class="numLine">
                            <div class="fl">数量：</div>
                            <div class="fr operateGroup">
                                <a class="add" @click="add">+</a>
                                <a class="num">{{num}}</a>
                                <a class="less" @click="less">-</a>
                            </div>
                        </div>
                    </div>
                    <div class="maskFooter">
                        <div class="total fl">总价：800积分</div>
                        <a class="sureBtn fr" @click="sure">确 定</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                maskShow:false,
                num:0
            }
        },
        methods:{
            showMask:function () {
                var that=this;
                that.maskShow=true
            },
            closeMask:function () {
                var that=this;
                that.maskShow=false
            },
            sure:function () {
                var that=this;
                that.maskShow=false
            },
            add:function () {
                var that=this;
                that.num++;
            },
            less:function () {
                var that=this;
                that.num--;
                if(that.num<=0){
                    that.num=0
                }
            },
        }
    }
</script>

<style scoped>
    .clearfix{overflow: hidden}
    .fl{float: left}
    .fr{float:right}
    .headerNav{margin-bottom: 0.5rem}
    .headerBg img{width: 100%}
    .headMsg{padding: 0.6rem;background: #fff}
    .goodsName{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;font-size: 0.7rem;color:#333;line-height: 0.8rem}
    .point{color:#bc3031;font-size: 0.7rem}
    .oldPrice{color:#666;font-size: 0.6rem;margin-left: 1rem;}
    .limit{color: #333;font-size: 0.6rem}
    .priceMsg{line-height: 1.3rem;margin-top: 5px;}
    .title{padding:0.3rem 0.5rem;font-size: 0.7rem;cursor: pointer}
    .couponDetail{background: #fff;}
    .titleName{color:#333}
    .titleName:before{ content: "\25C6";margin-right: 10px;font-size: 0.8rem;}
    .detailImg img{width:100%}
    .pageBottom{position: fixed;right:0;bottom: 0;left: 0;background: #333;color: #fff;font-size: 0.7rem;line-height: 2.2rem;text-align: center}
    .productShowA{padding-bottom: 2.5rem}
    .mask{position: fixed;top:0;right:0;bottom: 0;left: 0;background: rgba(0,0,0,.5)}
    .maskBody{position: fixed;right:0;bottom: 0;left: 0;}
    .maskContent{background: #fff;padding: 0.5rem 0}
    .maskTitle{text-align: left;position: relative;overflow: hidden;}
    .maskTitle .fr{width:60%;}
    .maskTitle .iconfont{position: absolute;color: #333;font-size: 0.75rem;top:0;  padding:0.5rem;right:0;padding-top: 0}
    .pointNum{color:#bc3031;font-size: 0.7rem}
    .remain{color:#666;font-size: 0.6rem;}
    .numLine{overflow: hidden;padding: 1rem 0.5rem;font-size: 0.7rem;color:#333}
    .numLine .fl{line-height: 1.5rem}
    .operateGroup a{display: inline-block;width:1.5rem;text-align: center;line-height: 1.5rem;height:1.5rem;border:1px solid #333;border-radius: 0.75rem}
    .operateGroup .add,.operateGroup .less{font-size: 1rem;line-height: 1.5rem}
    .operateGroup .num{width: 3rem}
    .maskFooter{background: #eee;overflow: hidden;line-height: 2.2rem}
    .total{color:#bc3031;font-size: 0.8rem;padding-left: 0.5rem}
    .sureBtn{font-size: 0.8rem;color:#fff;background: #333;padding: 0 1.5rem}
    .maskImg{width: 4.75rem;height:4.75rem;border-radius: 5px;position: absolute;top:-2rem;left:1rem}
</style>