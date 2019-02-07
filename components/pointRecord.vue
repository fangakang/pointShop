<template>
    <div class="pointRecord" id="pointRecord">
        <div class="pageHead">
            <div class="point">4888</div>
            <div class="headTitle">我的积分</div>
            <div class="detailList">
                <div class="detailTitle">积分明细</div>
                <div class="list">
                    <div class="coupon clearfix">
                        <div class="couponType fl">卡券兑换</div>
                        <div class="money fr">-1000</div>
                    </div>
                    <div class="time">2017-11-02 16:70</div>
                </div>
                <div class="list">
                    <div class="coupon clearfix">
                        <div class="couponType fl">卡券兑换</div>
                        <div class="money fr">-1000</div>
                    </div>
                    <div class="time">2017-11-02 16:70</div>
                </div>
                <div class="list">
                    <div class="coupon clearfix">
                        <div class="couponType fl">卡券兑换</div>
                        <div class="money fr">-1000</div>
                    </div>
                    <div class="time">2017-11-02 16:70</div>
                </div>
                <div class="list">
                    <div class="coupon clearfix">
                        <div class="couponType fl">卡券兑换</div>
                        <div class="money fr">-1000</div>
                    </div>
                    <div class="time">2017-11-02 16:70</div>
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
    .pageHead{background-image:url(../assets/img/xiaofei_bg.jpg);background-size: 100% 100%;background-repeat: no-repeat;text-align: center;height:8rem;position: relative;padding-top: 1rem}
    .point{color: #bc3031;font-size: 1.5rem}
    .headTitle{font-size: 0.7rem;color:#fff;}
    .detailList{position: absolute;width: 90%;background: #fff;border-radius: 5px;padding:0 0.75rem;text-align: left;left:5%;top:6rem}
    .detailList>div{border-bottom: 1px solid #efefef}
    .detailList>div:last-child{border:none}
    .detailTitle{font-size: 0.75rem;color:#333;padding: 0.5rem 0;}
    .coupon{font-size: 0.7rem}
    .couponType{color:#666;}
    .money{color:#bc3031}
    .time{font-size: 0.7rem;color:#999}
    .list{padding:0.5rem 0}
</style>