
$(function(){
	setLayout();
});
$(window).resize(function(){
	setLayout();
})
function setLayout(){
	var bodyWidth=$(window).width();
	var bodyHeight=$(window).height();
	var $container=$('.content');
	$container.css({
		width:(bodyWidth)-5-5+'px',
		height:(bodyHeight)-45-5+'px'
	})
}
