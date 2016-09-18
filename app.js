//模块的目录配置配置文件
require.config({
	paths:{
		//自己写的js模块
		index:'index',
		resize:'resize',
		router:'router',

		//引用js插件
		jquery:'./lib/jquery-2.1.1',
		underscore:'./lib/underscore',
		backbone:'./lib/backbone',
		swiper:'./lib/swiper-3.3.1.min',
		text:'./lib/text',
		css:'./lib/css'
	},
	shim:{	//shim可以不写
		'index':{
			deps:['jquery'],
		},
		'resize':{
			deps:['jquery'],
		}
	},
});

//引用模块
require(['jquery','backbone','index','resize','router'],function($,backbone){	//'index','resize'必须写
	//监听地址栏锚点的变化
	backbone.history.start();
});