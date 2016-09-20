define(['text!./eden.html','css!./eden.css','iscroll'],function(content,css){
	//返回html页面
	function render(){
		$('#content').html(content);
	}
	function getData(para){
		$('.eden-ul').empty();
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/leyuan_data.php?address=' + para,
			type: 'GET',
			async: 'true',
			success:function(res){
				var data = JSON.parse(res);
				if(data.data){
					setData(data.data);
				}else{
					setErrorMsg(para);
				}
				
			},
		});
		function setData(arr){
			//第一次加载n条数据
			loadonepage(0,arr.length);

			function loadonepage(start,num){
				for (var i = start; i < start+num; i++) {
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
		function setErrorMsg(para){
			if(para == "全部分类" || para == "默认排序" ){
				getData('全城');
			}else{
				var errorMsgObj = $('<div><p>没有 '+ para +' 的数据</p></div>');
				$('.eden-ul').append(errorMsgObj);
			}
			
		}
	}
	//设置点击标签出现蒙版
	function showmask(){
		//点击三个标签下面出现红线
		$('.nav-item').on('touchstart',function(){
			$('.nav-item').css('border-bottom-color','white');
			$(this).css('border-bottom-color','#ec6a6a');
		});
		//点击出现、消失 方案一
		$('.nav-item').on('touchstart',function(){
			$('.mask').fadeOut(1);	//fadeOut
			$('.mask').eq($(this).index()).stop();
			$('.mask').eq($(this).index()).slideToggle();	//fadeToggle
		});

		//点击出现、消失 方案二
		// var tag = true;
		// $('.nav-item').on('touchstart',function(){
		// 	$('.mask').css('display', 'none');	//fadeOut
		// 	if(tag){
		// 		$('.mask').eq($(this).index()).slideToggle();	//fadeToggle
		// 		tag = !tag;
		// 	}
		// });

		//点击每一个项目，把文字添加到对应的框内 -- 同时 把文字也传递给ajax 重新获取数据
		$('.in-item').on('touchstart',function(){
			var ind = $(this).parent().attr('indexnum');
			console.log(ind);
			$('.nav-item').eq(ind).find('p').text($(this).text());

			//调用ajx函数
			getData($(this).text());
		})
		//点击空白地方，也消失
		$('.mask').on('touchstart',function(){
			$(this).fadeOut(100);
		})


	}



	// 把这一个函数返回
	return {
		render:render,
		getData:getData,
		showmask:showmask,
	};
});


