define(['text!./card.html','css!./card.css'],function(content,css){
	function render(){
		$('#content').html(content);
	}

	return{render:render};
});