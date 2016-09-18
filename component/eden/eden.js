define(['text!./eden.html','css!./eden.css'],function(content,css){
	//返回html页面
	function render(){
		$('#content').html(content);
	}

	function getData(){
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城',
			type: 'GET',
			async: 'true',
			success:function(res){
				setData(JSON.parse(res).data);
			},
		});
		function setData(arr){
			for (var i = 0; i < arr.length; i++) {
				var obj = arr[i];
				var liObj = $('<li class="eden-li"> <img src="../../img/111.jpg" alt=""> <div class="text"> <section class="line"> <span class="left-p name">梦追忆&amp;家宝贝亲子乐园</span><span class="right-p icon"></span> </section> <section class="line"> <span class="left-p addr">昌平区</span><span class="right-p dist">1.7公里</span> </section> </div> </li>');
				liObj.find('img').attr('src',obj.img);
				liObj.find('.name').text(obj.name);
				liObj.find('.addr').text(obj.address);
				liObj.find('.dist').text(obj.dist + "公里");
				$('.eden-ul').append(liObj);
			}
		}
	}
	//设置点击标签出现蒙版
	function mask(){
		$('.nav-item').on('click',function(){
			$('.nav-item').css('border-bottom-color','white');
			$(this).css('border-bottom-color','#ec6a6a');
		});
		$('.nav-item').on('click',function(){
			$('.mask').css('display','none');
			$(this).next().toggle();
		});

		//里面的p标签的点击事件
		$('.mask-item p').on('click', function(event) {
			$('.mask').css('display','none');
		});
	}



	// 把这一个函数返回
	return {
		render:render,
		getData:getData,
		mask:mask,
	};
});