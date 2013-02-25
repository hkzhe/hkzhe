(function($,options){ $.fn.loading = function(options){
	var o = $.extend(true, {},options);
	return this.each(function() {
		if(!o.div)o.div="body";
		var q;
		if(o.div=="body"){
			q=$(document.body);
			var s=$("<div class='loading'>").css({position:"fixed",'z-index':2,width:"100%",height:"100%",left:"0",top:"0"});
			var r=$("<div class='pop_load loading'>").css({left:($(window).width()/2)-150,top:$(window).height()/2-100}).html("<div class='pop_loading'><dl><dt>请稍等，您查询的酒店正在搜索中......</dt><dd>住哪网—订酒店返现金,20000家酒店任您选!</dd></dl></div>");
		}else{
			q=$(""+o.div+"");
			var s=$("<div class='loading'>").css({position:"absolute",'z-index':2,width:q.outerWidth(),height:q.outerHeight(),left:0,top:0});
			if(o.mini){
					q.css({position:"relative"});
					var r=$("<div class='pop_load1 loading'>").css({position:"absolute",left:(q.width()/2)-100,top:q.height()/2-10}).html("<div class='pop_loading1'>正在加载最新数据，请稍候...</div>");
			}else{
				
					s.css({left:q.position().left,top:q.position().top});
					var r=$("<div class='pop_load loading'>").css({position:"absolute",left:($(window).width()/2)-150,top:((document.body.scrollTop || document.documentElement.scrollTop) + $(window).height()/2-180)}).html("<div class='pop_loading'><dl><dl><dt>请稍等，您查询的酒店正在搜索中......</dt><dd>住哪网—订酒店返现金,20000家酒店任您选!</dd></dl></div>");
				}
		}
		r.appendTo(q);s.appendTo(q);s.css({opacity:0,background:'#B0D1E8'}).fadeTo(700,0.4);
		if($.browser.msie&&($.browser.version == "6.0")){$(window).scroll(function(){var f_top = $(window).scrollTop() + $(window).height() - $(window).height()/2-100;$(r).css( 'top' , f_top );});}
	});
}})(jQuery);