define(['text!./user.html','css!./user.css'],function(content,css){
	function render(){
		$('#content').html(content);
	}
	function tucaoevent(){
		$('#tucao').on('touchstart', function() {
			console.log('aaaaa');
			$('#tucao-mask').css('display', 'block');
		});
		$('.mybtn').on('touchstart', function() {
			$('#tucao-mask').css('display', 'none');
		});

	}
	return {render:render,tucaoevent:tucaoevent};
});