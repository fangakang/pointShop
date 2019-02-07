<template>
    <div class="sign">
        <img src="../assets/img/banner1.jpg" class="am-img-responsive">
        <div class="qiandao-box">
            <div class="qiandao-jilu am-round am-g">
                <div class="on"><span>+5</span><span class="date">第1天</span><i class="fa fa-check"></i></div>
                <div><span>+5</span><span class="date">第2天</span></div>
                <div class="on"><span>+7</span><span class="date">今天</span><i class="fa fa-check"></i></div>
                <div><span>+9</span><span class="date">第4天</span></div>
                <div><span>+12</span><span class="date">第5天</span></div>
                <div><span>+15</span><span class="date">第6天</span></div>
                <div><span>+20</span><span class="date">第7天</span></div>
            </div>
            <a class="am-btn am-round am-btn-default">签&nbsp;到</a>
        </div>
        <div class="line"></div>
        <div class="title am-padding ">获得积分任务</div>
        <div class="jifen-renwu am-g">
            <div class="am-u-sm-4 "><a href="jifenzhuanqu.html"><div class="renwu "><div class="text">分享给朋友<br /><span>+50积分</span></div></div></a></div>
            <div class="am-u-sm-4 "><a href=""><div class="renwu "><div class="text">派发优惠劵<br /><span>+50积分</span></div></div></a></div>
            <div class="am-u-sm-4 "><a href=""><div class="renwu "><div class="text">派发会员卡<br /><span>+50积分</span></div></div></a></div>

        </div>
        <div class="line"></div>
        <div class="title am-padding ">累积签到3天奖品<div class="jindu-box"><div class="jindu"><span style="width:75%;"></span></div>
            &nbsp;已签到 <span class="font-red">2/3</span></div></div>
        <div class="pay-list am-padding" >

            <div class="volume">
                <div class="am-g flex">
                    <div class="am-u-sm-4 img am-padding-0"><img src="../assets/img/1.jpg" class="am-img-responsive"></div>
                    <div class="describe am-u-sm-5 ">
                        <div class="money">70积分</div>
                        <div class="preferential">送10元优惠卷</div>
                    </div>
                    <div class="am-u-sm-3">
                        <a class="am-btn doc-confirm-toggle" data-num="100">领取</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="title am-padding " style="border-top: 1px solid #EFEFF4">累积签到7天奖品<div class="jindu-box"><div class="jindu"><span style="width:75%;"></span></div>
            &nbsp;已签到 <span class="font-red">4/7</span></div></div>
        <div class="pay-list am-padding" >

            <div class="volume">
                <div class="am-g flex">
                    <div class="am-u-sm-4 img am-padding-0"><img src="../assets/img/1.jpg" class="am-img-responsive"></div>
                    <div class="describe am-u-sm-5 ">
                        <div class="money">70积分</div>
                        <div class="preferential">送10元优惠卷</div>
                    </div>
                    <div class="am-u-sm-3">
                        <a class="am-btn doc-confirm-toggle am-disabled" >已领取</a>
                    </div>
                </div>
            </div>
            <div class="volume">
                <div class="am-g flex">
                    <div class="am-u-sm-4 img am-padding-0"><img src="../assets/img/1.jpg" class="am-img-responsive"></div>
                    <div class="describe am-u-sm-5 ">
                        <div class="money">70积分</div>
                        <div class="preferential">送10元优惠卷</div>
                    </div>
                    <div class="am-u-sm-3">
                        <a class="am-btn doc-confirm-toggle" data-num="100">领取</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="line"></div>
        <div class="title am-padding ">活动规则 </div>
        <div class="pay-text am-padding">
            <p>
                卡可在本公司指定服务网点办理退卡，并退还底卡押金。卡内金额不足10元的，可全额退还；卡内金额高于10元（含）的，应凭购卡凭证在扣除5%的手续费后予以退还。单张卡内金额100元以下的，可采用现金方式退还。一次退卡金额累计大于2000元（含）的须前往指定服务网点办理，凭购卡凭证及本人身份证在扣除卡内金额5%的手续费后予以退还，提前预约的可当场退还，未预约的将在三个工作日内
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    .qiandao-box{  position: relative; padding:0.5rem;}
    .qiandao-jilu{ margin-top: -2rem; background: #FFF; padding:0.5em 0 0.5em 0;box-shadow:0px 0px 5px #ccc;}
    .qiandao-jilu div{ margin-right: 3%;  position:relative;width: 11%; padding-bottom: 10.5%; height:0;float: left; border-radius: 150px; border: 1px solid #E1E1E1; }
    .qiandao-jilu div:nth-child(1){ margin-left: 2%;}
    .qiandao-jilu div:after{ content: ""; display: inline-block; width: 3px; background: #ccc; height: 6px; position: absolute; left: 50%; margin-left: -1.5px;bottom: -10px;}
    .qiandao-jilu div span:nth-child(1){color:#E1E1E1;font-size:0.8rem;  position: absolute; top:50%; margin-top:-0.7rem; width: 100%; text-align: center;  font-weight: bold;}
    .qiandao-jilu div .date{color:#999;font-size:0.8rem; position: absolute; width: 100%; border: 0; text-align: center; bottom: -3rem; }

    .qiandao-jilu div.on{border: 1px solid #000;}
    .qiandao-jilu div.on:after{background:#000}
    .qiandao-jilu div.on span:nth-child(1){color:#000;}
    .qiandao-jilu div.on .date{color:#000;}
    .qiandao-jilu div.on .fa{color:#fff ; position: absolute; right: -3px; bottom: 0; background:#bc3031;  font-size:8px; width: 15px; line-height: 15px; border-radius: 50%; text-align: center;}
    .qiandao-box .am-btn{ width: 6em; margin:40px auto 0 auto; display: block;}
    .qiandao-box:after{ content: ""; display: block; clear: both;}
    .jifen-renwu {padding:10px 5px 10px 0;}
    .jifen-renwu .am-u-sm-4{  padding-left:5px; padding-right: 0; }
    .jifen-renwu .renwu{  border-radius: 5px;  text-align: center;  height:25vw; position: relative; overflow: hidden;}
    .jifen-renwu .renwu:after{ content: ""; display: block; width: 11em; height: 11rem; position: absolute;  right:-5rem; bottom: -8rem; border-radius: 200px;  }
    .jifen-renwu .renwu .text{ position: absolute; z-index:2; width: 100%; top:50%; margin-top:-1.5rem;}
    .jifen-renwu .renwu .text span{  display: inline-block;  border-radius: 10px; font-size:0.8rem; padding:0.2rem; }
    .jifen-renwu .am-u-sm-4:nth-child(1) .renwu{color:#fff ;background: #785a1a;}
    .jifen-renwu .am-u-sm-4:nth-child(1) .renwu:after{background: #8a6b2a;}
    .jifen-renwu .am-u-sm-4:nth-child(1) .renwu .text span{background: #fbf2e1; color:#785a1a ;}
    .jifen-renwu .am-u-sm-4:nth-child(2) .renwu{color:#fff ;background: #1c569f;}
    .jifen-renwu .am-u-sm-4:nth-child(2) .renwu:after{background: #346bae;}
    .jifen-renwu .am-u-sm-4:nth-child(2) .renwu .text span{background: #cfdef1; color:#1c569f ;}
    .jifen-renwu .am-u-sm-4:nth-child(3) .renwu{color:#fff ;background: #782d1a;}
    .jifen-renwu .am-u-sm-4:nth-child(3) .renwu:after{background: #963e2a;}
    .jifen-renwu .am-u-sm-4:nth-child(3) .renwu .text span{background: #f6dbd4; color:#963e2a ;}
    .pay-list .volume{ position: relative;margin-bottom: 1rem; }
    .pay-list .volume:last-child{ margin-bottom: 0;}
    .pay-list .volume:before{content: ''; display:inline-block;border-left: 1px solid #EFEFF4;border-right: 1px solid #EFEFF4;border-bottom: 1px solid #EFEFF4; width: 16px; height: 8px;  position: absolute; z-index:2; border-radius:0 0 100px 100px ; left: 33.3333%; top:0px; margin-left: -8px; background: #FFF; }
    .pay-list .volume:after{content: ''; display:inline-block;border-left: 1px solid #EFEFF4;border-right: 1px solid #EFEFF4;border-top: 1px solid #EFEFF4; width: 16px; height: 8px;  position: absolute; z-index:2; border-radius:100px 100px  0 0 ; left: 33.3333%; bottom:0px; margin-left: -8px; background: #FFF; }
    .pay-list .volume .am-g{ border: 1px solid #EFEFF4;border-radius:5px; overflow: hidden; border-right: 4px solid #333;}
    .pay-list .volume .img{border-radius:5px 0  0 5px; overflow: hidden; }
    .pay-list .volume .describe{ padding-left: 1rem;}
    .pay-list .volume .describe .money{font-size:1.5em; line-height: 1rem; margin-bottom: 0.5rem;}
    .pay-list .volume .describe .money span{  font-size:0.5rem;}
    .pay-list .volume .describe .preferential{font-size: 0.8rem;}
    .pay-list .volume .am-btn{ display: inline-block; border: 1px solid #bc3031; font-size: 0.9rem;  border-radius:50px; color: #bc3031; font-weight: bold; width: 100%; text-align: center; padding: 5px 0;}
    .pay-list .volume .am-btn.am-disabled{border: 1px solid #666; color: #666;}
    .jindu-box{ float: right;}
    .jindu-box .jindu{ display: inline-block; width:5rem; height: 0.8rem; border-radius: 200px;box-shadow:0px 0px 5px #ccc;}
    .jindu-box .jindu span{ display:block;height: 0.8rem;border-radius: 200px;background-image:-webkit-gradient(linear,100% 0%, 0% 100%, from(#E86062), to(#AD2D2E));}
</style>