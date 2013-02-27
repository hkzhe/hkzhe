var TODAY = ZNDate.today();
var showdiv=function(v){$(v).toggle()}
var tm1 = S.tm1||(($.cookie('tm1')&&($.cookie('tm1')>=ZNDate.format(ZNDate.plus(TODAY,1))))?$.cookie('tm1'):ZNDate.format(ZNDate.plus(TODAY,1)));
var tm2 = S.tm2||(($.cookie('tm2')&&($.cookie('tm2')>ZNDate.format(ZNDate.plus(TODAY,2))))?$.cookie('tm2'):ZNDate.format(ZNDate.plus(TODAY,2)));
$("#tm1").val(tm1);
$("#tm2").val(tm2);
ZN_A.init("#city");

var boxcity = new H({mousedown:function(){
	var o = this.init.arguments[0];
	$("#"+o._boxID).mousedown(function(e){
		var $e = $(e.target);
		if($e.is("a")){
			var d = $e.data("d").split("|");
			$(o._triggerID).val(d[1]);
			$("#cityId").val(d[0]);
			ZN_A.U = d[1];
            ZN_A.choose = true;
			Tips.removeBox(1,"#cityselect");
		}else if(!$e.is("em")||$e.is("span")||$e.is("li")){
				if($e.is("span")||($e.is("li")&&$e.children("span"))){
					if($e.is("li")){$e = $e.children("span");}
					if(!$e.hasClass("hot_selected")){
						var v = $e.html(),t = $e.closest("ol"),u = t.parent();
						t.find("span").removeClass("hot_selected");
						$e.addClass("hot_selected");
						u.find("ul").hide();
						u.find("ul[t='"+v+"']").show();
					}
				}
			e.stopPropagation();
			if ($.browser.msie) $(this).html($(this).html()+"");//For IE
			return false;
		}
	});
},"focus":true,"self":true,"input":"#city",showicon:true});
boxcity.init("#city",105,19);

var pointcity = new H({toptip:"选择某个城市的地标",offsets:{left:"-418",top:"21"},self:true,boxid:"pointcity",wrapper:"#pointcity_p",input:".db_city",mousedown:function(){
						var o = this.init.arguments[0];
							$("#"+o._boxID).mousedown(function(e){
								var $e = $(e.target);
								if($e.is("a")){
									var d = $e.data("d").split("|");
									$("#city").val(d[1]);
									$("#cityId").val(d[0]);
									ZN_A.U = d[1];
									pointsearch({cityid:d[0],cityname:d[1]});
									Tips.removeBox(1,"#cityselect");
								}else if(!$e.is("em")||$e.is("span")||$e.is("li")){
										if($e.is("span")||($e.is("li")&&$e.children("span"))){
											if($e.is("li")){$e = $e.children("span");}
											if(!$e.hasClass("hot_selected")){
												var v = $e.html(),t = $e.closest("ol"),u = t.parent();
												t.find("span").removeClass("hot_selected");
												$e.addClass("hot_selected");
												u.find("ul").hide();
												u.find("ul[t='"+v+"']").show();
											}
										}
									e.stopPropagation();
									if ($.browser.msie) $(this).html($(this).html()+"");//For IE
									return false;
								}
							});
						}});
pointcity.init(".db_city",105,19);

$(document).mousedown(function(e){
	var target = e.target;
	if(target!=$('#pointcity_p')[0]){
		$('#pointcity_p').hide();
	}
});
ZN.F.pointinfo_cc=function(t){
  var $e = $(t);
	  if(!($e.attr("id")=="stc2_curr")){
		  tabid = $e.attr("tab");
		  $e.parent().find("div[tab]").removeAttr("id");
		  $e.attr("id","stc2_curr");
		  $e.parent().siblings("div[t]:visible").addClass("hidden");
		  $e.parent().siblings("div[t='"+tabid+"']").removeClass("hidden");
	  }
}
function pointsearch(v){
	$("#pointinfo").remove();	
	var box = $("#iside .index_box:eq(0) .box_con"),T=this;
	var temp = ["<div id=\"pointinfo\" style=\"position: relative;margin-top:5px;background-color: rgb(255, 255, 255);\"><div class=\"srh_tips_arr\" style=\"left:25px;\"></div><div class=\"srh_tips_top\"><div class=\"srh_tips_top1\"></div></div><div class=\"srh_tips_con\"><div class=\"srh_tips_con1\">{$info}</div></div><div class=\"srh_tips_bot\"><div class=\"srh_tips_bot1\"></div></div></div>","<div style=\"width:300px; padding:10px;\">查找：<input class=\"srh_input1 gray\" value=\"{$defu}\" id=\"pointsearchinput\" />&nbsp;&nbsp;<input value=\"查找\" class=\"btn_50\" type=\"button\" id=\"pointsearchbutton\" /></div>"];
	if(v){$("#iside .index_box:eq(0) .db_city strong").html(v.cityname);}
	this.cache = new __cache__(50);
	this.d = $.extend({type:0,cityid:$("#cityId").val(),key:null,areaid:S.areaid},v);
	this.ajax = function(e){
		var type_ = e.target.nodeName == "IMG"?$(e.target).attr("t"):$(e.target).find("img").attr("t"),type__ = type_+"_"+T.d.cityid;
		T.d.type = type_;
		if(T.cache.get(type__)){
			T.fillbox(T.cache.get(type__),e,null,type__);
		}else{
			$.ajax({type:"POST",dataType:"json",url:SERVERURL+"/Ajax/A_hotpoint.asp",data:T.d,beforeSend:function(){},timeout:3000,error:function(){$(".srh_tips_con1").html("对不起，超时了！");},success:function(data){T.cache.set(type__,data);T.fillbox(data,e,null,type__);}});
		}
	}
	box.find("ul li").unbind("click");
	box.find("ul li").bind("click",function(e){
		$('html').animate({scrollTop:$("#iside .index_box").offset().top-50}, 'fast');
		var pointinfo = $("#pointinfo");
		if(pointinfo.length&&$(this).attr("c")){
			pointinfo.remove();
			return;
		}else{
			T.ajax(e);
		}
		$(this).attr("c","c").siblings().removeAttr("c");
	});
	this.Q = null;
	this.fillbox = function(dt,e,s,t){
		var pointinfo = $("#pointinfo"),f = new Array(),l,temp_,T=this;
			var dp = Array(),w,pos,types_ = dt.type, d = dt.value,l,
			temp_all = "<div class=\"srh_tips_con2\">{$info}</div>",
			tab = "<div class=\"stc2_tit\">{$info}</div>";
		function createurl(id,title){
			if(T.d.type == 1){
				return "<span><a target=\"_blank\" href=\"http://www.zhuna.cn/hotellist/e"+T.d.cityid+"/b"+id+"/\">"+title+"</a></span>";
			}else if(T.d.type == 2){
				return "<span><a target=\"_blank\" href=\"http://www.zhuna.cn/hotellist/e"+T.d.cityid+"/a"+id+"/\">"+title+"</a></span>";
			}else{
				return "<span><a target=\"_blank\" href=\"http://www.zhuna.cn/lable"+id+"/\">"+title+"</a></span>";
			}
		}
		if(dt&&d){
			l= d.length;
			switch(types_){
				case "pool":
					if($.isArray(d)&&d.length>0){
						var i,dp_ = new Array();
						for(i = 0;i<d.length;i++){
							if(!$.isEmptyObject(d[i])){
								dp_.push(createurl(d[i].id,d[i].title));
							}else if($.isArray(d[i])){
								dp_.push(createurl(d[i].id,d[i].title));
							}else{
								dp_.push(createurl(d[i].id,d[i].title));
							}
						}
						dp.push(ZN.F.re(temp_all,{
							info: dp_.join("")
						}));
						dp_ = null;
					}
					break;
				case "lable":
					w = 0;
					var temp_,i=0,j,temp__;
					if(!$.isEmptyObject(d)){
						try{
						for(var a in d){
							i++;
							temp_ = ZN.F.re(tab,{info:"<div id=\"stc2_curr\">"+a+"</div>"}); //tab
							var ddp = Array();
							for(j = 0;j<d[a].length;j++){
								ddp.push(createurl(d[a][j].id,d[a][j].title));
							}
							dp.push(ZN.F.re(temp_all,{
								info: window.F.c(temp_,"<div t=\""+i+"\">"+ddp.join("")+"</div>")
							}));
							ddp = null;
							if(j>4){w_=600;}else{w_ = (j*160)}
							if(w<w_){w=w_}
						}
						}catch(e){alert(e)}
					}
					break;
				case "tab":
					w = 0;
					var temp_ = Array(),temp__ = Array(),i=0,j,title;
					if(!$.isEmptyObject(d)){
						try{
						for(var a in d){
							i++;
							temp_.push("<div"+(i==1?" id=\"stc2_curr\"":"")+" tab=\""+i+"\" onmousedown=\"ZN.F.pointinfo_cc(this)\">"+a+"</div>");
							var ddp = Array();
							for(j = 0;j<d[a].length;j++){
								ddp.push(createurl(d[a][j].id,d[a][j].title));
							}
							temp__.push("<div t=\""+i+"\""+(i==1?"":" class=\"hidden\"")+">"+ddp.join("")+"</div>");
							ddp = null;
							if(j>4){w_=600;}else{w_ = (j*160)}
							if(w<w_){w=w_}
						}
							title = ZN.F.re(tab,{info:temp_.join("")}); //tab
							dp.push(ZN.F.re(temp_all,{
								info: window.F.c(title,temp__.join(""))
							}));
						}catch(e){alert(e)}
					}
					emp_ = temp__ = null;
					break;
				}
		}else{
			l = 0 ;	
		}
		if(l==0){dp.push("<span>对不起！暂无数据！</span>");}
		dp.push(F.re(temp[1],{defu:"输入关键字查找酒店..."}));

		if(pointinfo.length){
			pointinfo.remove();
			box.append(F.re(temp[0],{
				info: dp.join("")
			}));
		}else{
			box.append(F.re(temp[0],{
				info: dp.join("")
			}));
		}
		
		/*postion and bind event*/
		pointinfo = $("#pointinfo");
		var left = $(e.target).position().left;
		pointinfo.find(".srh_tips_arr").css("left",left+8);
		
		R = $("#pointsearchinput");
		G = $("#pointsearchbutton");
		
		function enterclick(){
			var v = R.val();
			if(v!=""&&v!="输入关键字查找酒店..."){
				$("#key").val(R.val());
			}else{
				R.addClass("redborder").tip({"text":"请输入地标关键字！",timeout:1000});
				R.val('').focus();
				return false;
			}
			$("#hotelso").trigger("click");
			return false;
		};
		R.keyup(function (event){
			if(event.keyCode==13){
				enterclick();
			}
		});
		G.bind("click",function(){
			enterclick();
		});
		R.click(function(){
			$(this).val('').focus();
		});
	}
}
pointsearch()

$("#tm1,#tm2").each(function(){
	$(this).click(function(e){e.stopPropagation();c(e);});
	function c(e){
		var t = e.target.id;
		if(!t){
			t=$(e.target).closest("#Wrapper").siblings()[0].id
		}
		if(t=="tm1"){
			return showCalendarZN(t,false,t,'tm2','tm2',''+ZNDate.format(ZNDate.today())+'',''+ZNDate.format(ZNDate.plus(ZNDate.today(),60))+'','','','','text','','','WP.S');
		
		}else{
			return SelHotelCalMethod(e,'out','tm1','tm2',''+ZNDate.format(ZNDate.plus(ZNDate.today(),60))+'','WP.S');
		}
	};
	var s =WP.c(80,19,c);
	$(this).before(s);
}).blur(function(){
	this.value=this.value.replace(/[^\d\-]/g,'');
});

var lazy = new F.lazyload("div.list_box:visible .lb_pic dt img");
lazy.loadimg();
//F.cart.init(".beixuan1,.beixuan");//加入备选
//$(function(){
	//$("#list").find(".list_box:hidden img[s]").clearlazyload();
//});
F.moreimg=function(id,title){
	Tips({_title:title,_width:"800", _height:"600",_content:"iframe:"+SERVERURL+"/ajax/A_hotelpic.asp?hid="+id+"",_drag:"_boxTitle",_showbg:true});
}
F.map = function(id,title){
	Tips({_title:title+"地图",
		_content:"iframe:/map/viewmap.asp?hid="+id+"&w=700px&h=500px",
		_width:"700",
		_height:"500",
		_drag:"_boxTitle",
		_showbg:true
	});

}
F.feedback = function(){
	Tips({_title:"问题反馈",
		_content:"iframe:http://www.zhuna.cn/about/fankui.asp?keepThis=true&w=800px&h=500px",
		_width:"800",
		_height:"500",
		_drag:"_boxTitle",
		_showbg:true
	});
}
//F.advise.init();


ZN.login();


$("#akey").tokenInput(SERVERURL+"/Ajax/A_autocomplete.asp", {theme: "zn",trigger:"#autocompletebutton"});

$("#hn,#key").focus(function(){
	if($(this).val()=="如：如家"||$(this).val()=="如：天安门"){
		$(this).removeClass("gray").val('');
	}else{
		$(this).removeClass("gray").select();
	}
}).blur(function(e){
	var v = $(this).val();
	if(e.target.id=="hn"&&(v==''||v=='如：如家')){$(this).addClass("gray").val('如：如家');}
	if(e.target.id=="key"&&(v==''||v=='如：天安门')){$(this).addClass("gray").val('如：天安门');}
});

$(".box_tt1").find("li").bind("click",function(e){
	var p = $(".index_pinpai").find("ul");
	$(this).attr("id","pp_current").siblings().removeAttr("id");
	if($(this).next().attr("nodeName")=="LI"){
		p.eq(0).fadeIn("fast");
		p.eq(1).hide();
	}else{
		p.eq(1).fadeIn("fast");
		p.eq(0).hide();
	}
});

function pushorders(){
	var b = $(".new_info #marquee"),b_,scrtime;
	//this.temp = "<dl><dt><span class=\"{$class_}\">{$class_name}<\/span><a href=\"#\">{$hotelname}<\/a><\/dt><dd>{$info}<\/dd><\/dl>";
	b_ = b.find("dl");
 	b.hover(function(){
		clearInterval(scrtime);
	},function(){
		scrtime = setInterval(function(){
			var l = b.find("dl:last"),h = l.height();
			if(isIE6){
				b.prepend(l.css({height:0}).outer());
				b.find("dl:first").animate({height:h},1000);
			}else{
				b.prepend(l.css({height:0,opacity:0}).outer());
				b.find("dl:first").animate({height:h,opacity:1},1000);
			}
			l.remove();
		},5000);
	}).trigger("mouseleave");
}

pushorders();

function scrolltuan(){
	var page = 1;
	var i = 3; 
	$('.index_box:eq(5) .box_tt .scrollnav .next').click(function(){
		var $pictureShow = $('.index_box:eq(5) .index_tuan');
		var downwidth = $pictureShow.width();
		var len = $pictureShow.find('.tuan_box').length;
		var page_number = Math.ceil(len/i);
		var s = $pictureShow.find("#s");
		if(!s.is(":animated")){
			if( page == page_number){
				s.animate({left:'0px'},"fast");
			page = 1;
			}else{
				s.animate({left:'-='+downwidth},"fast");
				page++;
			}
		}
		$('.scrollnav a').eq((page-1)).addClass("current").siblings().removeClass("current");	
	});
	$('.index_box:eq(5) .box_tt .scrollnav .prev').click(function(){
		var $pictureShow = $('.index_box:eq(5) .index_tuan');
		var downwidth = $pictureShow.width();
		var len = $pictureShow.find('.tuan_box').length;
		var page_number = Math.ceil(len/i);
		var s = $pictureShow.find("#s");
		if(!s.is(":animated") ){
			if(page == 1){
				s.animate({left: '-='+downwidth*(page_number-1)},"fast");
				page = page_number;
			}else{
				s.animate({left:'+='+downwidth},"fast");	
				page--;
			}
		}
		$('.scrollnav a').eq((page-1)).addClass("current").siblings().removeClass("current");	
	});
}
scrolltuan();
$('#marquee1').Marquee({isEqual:false});


new ZN.autoComplete({
    showNotData:"无结果",
	elem:"#key",
    cache:false,
    draw:function(maxData){//maxData{title,content}
        var useWidth=maxData.title*6.6+22;
        this.ui.css("width",useWidth>146?useWidth:146);
    },
	request:function(e){
        if(e.key=="如：天安门"){return}
        var url,key = name = pinyin = "";
        if(/([\u4E00-\u9FFF（）]+)/ig.test(e.key)){
            name = RegExp.$1;
        }
        if(/([a-zA-Z]+)/ig.test(e.key)){
            pinyin = RegExp.$1;
        }
        if(pinyin != "" && name != ""){
            key = "(name:"+name+" OR pinyin:"+pinyin+")";
        }else if(pinyin != "" && name == ""){
            key = "(pinyin:"+pinyin+")";
        }else if(pinyin == "" && name != ""){
            key = name;
        }else{
            key = e.key;
        }
        url = "http://so.api.zhuna.cn/mbi/select/?q="+encodeURIComponent(key)+" AND ecityid:"+encodeURIComponent($("#cityId").val()||0)+"&version=2.2&start=0&rows=10&indent=on&wt=json&sort=jibie%20desc&fl=name&json.wrf=?";
		$.ajax({//&sort=g%20asc //("+encodeURIComponent(e.key)+" OR pinyin:zhongguancun)
			"url":url,
			"type":'GET',
			"dataType":'jsonp',
			"success":function(d){
				var datas=[];//[{title:"asdffff",content:"234aa"}]
				if(d&&d.response&&d.response.docs){
					for(var k in d.response.docs){
						var data=d.response.docs[k];
						var titleVal=String(data["name"]);
						//if(e.key==titleVal){continue}
						datas.push({title:String(data["name"])});
					}
				}
				e.setDatas(datas);
			},
			error:function(){

			}
		});
	},callback:function(){
		this.ui.addClass("ac_dibiao boxWrap shadow");
	}
});
new ZN.autoComplete({
    showNotData:"无结果",
	elem:"#hn",
    cache:false,
    draw:function(maxData){//maxData{title,content}
        var useWidth=maxData.title*6.7+22;
        this.ui.css("width",useWidth>146?useWidth:146);
    },
	request:function(e){//e.key,e.setDatas
        if(e.key=="如：如家"){return}
        var url,key = name = pinyin = "";
        if(/([\u4E00-\u9FFF（）]+)/ig.test(e.key)){
            name = RegExp.$1;
        }
        if(/([a-zA-Z]+)/ig.test(e.key)){
            pinyin = RegExp.$1;
        }
        if(pinyin != "" && name != ""){
            key = "(name:"+name+" OR p:"+pinyin+")";
        }else if(pinyin != "" && name == ""){
            key = "(p:"+pinyin+")";
        }else if(pinyin == "" && name != ""){
            key = name;
        }else{
            key = e.key;
        }
        var url = "http://so.api.zhuna.cn/kuangso/select/?q="+encodeURIComponent(key)+" AND g:4 AND e:"+encodeURIComponent($("#cityId").val()||0)+"&version=2.2&start=0&rows=10&indent=on&wt=json&fl=n&json.wrf=?";
		$.ajax({//&sort=g%20asc //("+encodeURIComponent(e.key)+" OR pinyin:zhongguancun)
			"url":url,
			"type":'GET',
			"dataType":'jsonp',
			"success":function(d){
				var datas=[];//[{title:"asdffff",content:"234aa"}]
				if(d&&d.response&&d.response.docs){
					for(var k in d.response.docs){
						var data=d.response.docs[k];
						var titleVal=String(data["n"]);
						//if(e.key==titleVal){continue}
						datas.push({title:String(data["n"])});
                    }
				}
				e.setDatas(datas);
			},
			error:function(){

			}
		});
	},callback:function(){
		this.ui.addClass("ac_dibiao boxWrap shadow");
	}
});