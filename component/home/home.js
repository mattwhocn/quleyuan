//定义home模块
define(['text!./home.html','css!./home.css','swiper','lazyload'],function(content,css){
	// console.log(content);
	function render(){
		$('#content').html(content);
	}

	function getData(){
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/home_data.php',
			type: 'GET',
			async: 'true',
			success:function(res){
				// console.log(res);
				var data = JSON.parse(res);
				setCarousel(data.slider);
				setBanner(data.arealist);
				setList(data.reclist);
			},
			error:function(){

			}
		});
		function setCarousel(arr){
			//插入轮播图的图片
			for (var i = 0; i < arr.length; i++) {
				var obj = arr[i];
				var imgObj = $('<div class="swiper-slide"><a><img src="" alt="" /></a></div>');
				imgObj.find('img').attr('src',obj.img);
				imgObj.find('img').attr('alt',obj.img);
				$('.in-carousel').append(imgObj);
			}
			
			//初始化swiper，让轮播动起来
			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				autoplay:1000,
			 	// 如果需要分页器
			    pagination: '.swiper-pagination',
			}); 
		}

		//设置banner图
		function setBanner(arr){
			var rowObj = $('<div class="row"></div>');
			$('.container-fluid').append(rowObj);
			for (var i = 0; i < arr.length; i++) {
				var obj = arr[i];
				var imgObj = $('<div class="col-xs-6 banner-item"><a href="www.baidu.com"><img src="" alt=""></a></div>');
				imgObj.find('img').attr('src',obj.img);
				imgObj.find('img').attr('alt',obj.img);
				rowObj.append(imgObj);
			}
		}

		//设置列表图
		function setList(arr){
			for (var i = 0; i < arr.length; i++) {
				// console.log(arr[i]);
				var obj = arr[i];
				var liObj = $('<li class = "home-li"><a href="http://www.baidu.com"><img class = "lazy" src="" data-original="" alt="" ></a></li>');
				// liObj.find('img').attr('src',obj.img);
				liObj.find('img').attr('data-original',obj.img);
				liObj.find('img').attr('alt',obj.img);
				$('#home-ul').append(liObj);
			}
			//设置懒加载
			$('.lazy').lazyload({
				effect: "fadeIn",
				effectspeed: "1000",
				// event:'click'
			});

		}
		
	}


	return {
		render:render,
		getData:getData
	};
});
