<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxcf87e00c3cd9feaa","b20d6a7c0a1baecce9ba8eb2c4fcb6d5");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<title>去乐园</title>
	<link rel="stylesheet" type="text/css" href="lib/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="lib/swiper-3.3.1.min.css">
	<link rel="stylesheet" type="text/css" href="index.css">
	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.1.0.js"></script>
	<script type="text/javascript" src="lib/require.js" data-main="app"></script>
</head>
<body>
	<div id="content">
		

	</div>
	<div id="tab-bar">
		<ul id="tab-ul">
			<a href="#home">
				<li class="tab-li">
					<span class="iconfont myicon">&#xe605;</span>
					<span class="tab-name">首页</span>
				</li>
			</a>
			
			<a href="#eden">
				<li class="tab-li">
					<span class="iconfont myicon">&#xe604;</span>
					<span >乐园</span>
				</li>
			</a>
			
			<a href="#card">
				<li class="tab-li">
					<span class="iconfont myicon">&#xe603;</span>
					<span>乐享卡</span>
				</li>
			</a>
			
			<a href="#user">
				<li class="tab-li">
					<span class="iconfont myicon">&#xe601;</span>
					<span>我的</span>
				</li>
			</a>
			
		</ul>
	</div>
</body>
<!-- <script type="text/javascript">
    define = null;
    require = null;
</script> -->

<script type="text/javascript">
	wx.config({
	    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	    appId: '<?php echo $signPackage["appId"];?>', // 必填，公众号的唯一标识
	    timestamp:<?php echo $signPackage["timestamp"];?> , // 必填，生成签名的时间戳
	    nonceStr: '<?php echo $signPackage["nonceStr"];?>', // 必填，生成签名的随机串
	    signature: '<?php echo $signPackage["signature"];?>',// 必填，签名，见附录1
	    jsApiList: [
		    'onMenuShareWeibo',
	        'onMenuShareQZone',
	        'hideMenuItems',
	        'showMenuItems',
	        'hideAllNonBaseMenuItem',
	        'showAllNonBaseMenuItem',
	        'translateVoice',
	        'startRecord',
	        'stopRecord',
	        'onVoiceRecordEnd',
	        'playVoice',
	        'onVoicePlayEnd',
	        'pauseVoice',
	        'stopVoice',
	        'uploadVoice',
	        'downloadVoice',
	        'chooseImage',
	        'previewImage',
	        'uploadImage',
	        'downloadImage',
	        'getNetworkType',
	        'openLocation',
	        'getLocation',
	        'hideOptionMenu',
	        'showOptionMenu',
	        'closeWindow',
	        'scanQRCode',
	        'chooseWXPay',
	        'openProductSpecificView',
	        'addCard',
	        'chooseCard',
	        'openCard'
	    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(function(){
	    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
	    //在这里调用接口--获取地理位置
	    wx.getLocation({
	    	success:function(){
	    		var latitude = res.latitude;//维度
	    		var longitude = res.latitude;	//经度
	    		var speed = res.speed;	//速度
	    		var accuracy = res.accuracy;//位置精度
	    	},
	    	cancel:function(res){
	    		alert('用户拒绝授权获取地理位置');
	    	}

	    })


	});
	wx.error(function(res){
	    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
	});
</script>
</html>