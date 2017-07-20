jQuery(function(){
	$(".nav-box li").hover(function(){
		$(".nav-box").find(".menu").hide();
		$(this).find(".menu").show();
	},function(){
		$(".nav-box").find(".menu").hide();
	})
	
	
	$(".product-list-box h3").click(checkshow)
		
	function checkshow(){
		if($(this).next(".item-box").is(":hidden")){
			$(this).next(".item-box").show();
		}else{
			$(this).next(".item-box").hide();
		}
	}
})

function fontZoom(size)
{
   document.getElementById('article-box').style.fontSize=size+'px';
}