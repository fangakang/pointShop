<template>
    <div class="pageMain">
        <div class="banner">
            <div class="swiper-container" id="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img style="width: 100%" src="../assets/img/banner1.jpg"></div>
                    <div class="swiper-slide"><img style="width: 100%" src="../assets/img/banner1.jpg"></div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="sectionBody">
                <div class="fl">
                    <div class="myPoint">
                        <span class="pointNum">4888</span>
                        <span>我的积分</span>
                    </div>
                    <div class="makePoint">
                        赚取更多积分&nbsp;>
                    </div>
                </div>
                <div class="fr">
                    <a class="signBtn">签到</a>
                </div>
            </div>
            <div class="sectionTitle">
                <div class="titleName" @click="trailNotice">积分兑换预告<span class="fa fa-chevron-right fr"></span></div>
            </div>
        </div>
        <div class="section">
            <div class="sectionTitle">
                <div class="titleName">积分兑换</div>
            </div>
            <div class="sectionBody">
                <div class="flexDiv">
                    <div class="shorter pr2">
                        <div class="pointType">
                            <img src="../assets/img/2.jpg">
                            <div class="typeMask">
                                <span>积分加购</span>
                            </div>
                        </div>
                    </div>
                    <div class="longer pl2">
                        <div class="pointType">
                            <img src="../assets/img/3.jpg">
                            <div class="typeMask">
                                <span>积分换商品</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flexDiv">
                    <div class="longer pr2">
                        <div class="pointType">
                            <img src="../assets/img/3.jpg">
                            <div class="typeMask">
                                <span>积分换商品</span>
                            </div>
                        </div>
                    </div>
                    <div class="shorter pl2">
                        <div class="pointType">
                            <img src="../assets/img/2.jpg">
                            <div class="typeMask">
                                <span>积分加购</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="sectionTitle">
                <div class="titleName">排行榜</div>
            </div>
            <div class="rank">
                <div class="rankList clearfix">
                    <div class="goodsPic fl">
                        <img src="../assets/img/5.jpg" alt="">
                    </div>
                    <div class="detail fl">
                        <div class="detailName">我很囧，你晒晒旅行中我很囧！我很囧，你晒晒旅行中我很囧！</div>
                        <div class="moneyPoint">￥2000+400积分</div>
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
                        <div class="moneyPoint">￥2000+400积分</div>
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
                        <div class="moneyPoint">￥2000+400积分</div>
                        <div class="priceMsg clearfix">
                            <div class="goodsMoney fl">原价：￥200</div>
                            <div class="goodsRemain fr">库存：200</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper';
    export default {
        components: {},
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){

            this.swiperInit()
            this.getCouponSetting();
        },
        methods:{
            swiperInit:function () {
                var ele=document.getElementById('swiper');
                var mySwiper = new Swiper(ele, {
                    onlyExternal: false,
                    observer: true,
                    observeParents: true,
                    followFinger: false,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable :true,
                    },
                })
            },
            getCouponSetting:function(){
                let that=this;
                that.$post("?m=Wap&c=coupon&a=getCouponSetting&token='enspyv1506341661'","")
                    .then((res) => {
                        console.log(res);
                        alert(111)
                    }).catch((err)=>{
                    console.log(err)
                })
            },
            trailNotice:function () {
                let that=this;
                that.$router.push(`/trailNotice`);
            },
            sign:function () {
                let that=this;
                that.$router.push(`/sign`);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .swiper-slider{width: 100%}
    .clearfix{overflow: hidden}
    .fl{float: left}
    .fr{float:right}
    .section{background: #fff;overflow: hidden;margin-bottom: 0.5rem}
    .sectionBody{padding:0.75rem;overflow: hidden;border-bottom: 1px solid #efefef}
    .myPoint{font-size: 0.5rem;color:#333;}
    .myPoint .pointNum{font-size: 0.8rem;color: #bc3031}
    .makePoint{color:#333;margin-top: 5px;font-size: 0.7rem}
    .signBtn{display:inline-block;background:#333;color:#fff;font-size: 0.6rem;font-size: 0.65rem;padding: 0.25rem 1rem;border-radius: 0.75rem;margin-top: 0.25rem}
    .sectionTitle{padding:0.3rem 0.5rem;font-size: 0.7rem;cursor: pointer}
    .titleName{color:#333}
    .titleName:before{    content: "\25C6";margin-right: 10px;font-size: 0.8rem;}
    .titleName .fa{color:#999;margin-top: 0.3rem}
    .sectionTitle{border-bottom: 1px solid #efefef}
    .flexDiv{display: flex;margin-bottom: 5px;}
    .flexDiv .pointType{height:4.7rem;border-radius: 5px;position: relative}
    .flexDiv .shorter{flex:1;}
    .flexDiv .longer{flex:2;}
    .pr2{padding-right:2px;}
    .pl2{padding-left: 2px;}
    .flexDiv img{width: 100%;height:100%;border-radius: 5px;}
    .typeMask{position: absolute;width: 100%;height:100%;top:0;left:0;background: rgba(0,0,0,.2);border-radius: 5px;text-align: center}
    .typeMask span{color:#fff;font-size: 0.75rem;display: inline-block;margin-top: 3.2rem}
    .rankList{padding: 0.5rem 0.75rem;border-bottom: 1px solid #efefef}
    .goodsPic{width: 4.5rem;height:4.5rem;margin-right: 10px;}
    .goodsPic img{width: 4.5rem;height:4.5rem;}
    .detailName{width:9.5rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; overflow: hidden;font-size: 0.7rem;line-height: 0.8rem;height:1.6rem}
    .moneyPoint{color:#bc3031;font-size: 0.7rem;margin: 0.5rem 0;}
    .priceMsg{font-size: 0.6rem;color:#999}
</style>
