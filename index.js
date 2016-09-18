require(['jquery'],function($){

	console.log('==========================');
	$(function(){
		//footer部分的点击事件
		$('.tab-li').on('touchstart',function(){
			$('.tab-li span').css('color','#9d8d9d');
			$(this).find('span').css('color','#f56e6a');
		});
	});
});


