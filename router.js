//定义一个路由的模块--用来调用自己封装的模块
define(['backbone'],function(backbone){//第一个参数是添加依赖关系,路由依赖于backbone

	var Router = backbone.Router.extend({	//定义router的对象
		routes:{//这里写每一个锚点，和每个锚点对应的方法
			'':'homefunc',
			'home':'homefunc',
			'eden':'edenfunc',
			'card':'cardfunc',
			'user':'userfunc'
		},
		//分别写每一个锚点对应的函数

		//直接把页面插入
		// homefunc:function(){
		// 	require(['text!./component/home/home.html'],function(content){
		// 		console.log(content);
		// 		$('#content').html(content);
		// 	});
		// },

		homefunc:function(){
			//在函数内写一个方法，把home.html文件插入到主页面相应的位置
			//把home.js封装到一个模块，在这里调用home模块
			require(['./component/home/home.js'],function(home){
				home.render();
				home.getData();
			});
		},
		edenfunc:function(){
			require(['./component/eden/eden.js'],function(eden){
				eden.render();
				eden.getData('全城');
				eden.showmask();
			});
		},
		cardfunc:function(){
			require(['./component/card/card.js'],function(card){
				card.render();
			});
		},
		userfunc:function(){
			require(['./component/user/user.js'],function(user){
				user.render();
				user.tucaoevent();
			});
		},
	});

	//实例化
	var router = new Router();
	
});