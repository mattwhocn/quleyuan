define(['text!./user.html','css!./user.css'],function(content,css){
	function render(){
		$('#content').html(content);
	}

	return {render:render};
});