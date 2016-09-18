require(['jquery'],function($){

	console.log('*****************************');
	$(function(){
		document.documentElement.style.fontSize = innerWidth/16 + 'px';
		window.onresize = function(){
			document.documentElement.style.fontSize = innerWidth/16 + 'px';
		};

	});

});



	
