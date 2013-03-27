
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">
var performancePingbackInit = {
enabled: true,
start: new Number( new Date() ),
uid: "CD54EA1D44F225F6A3889456CD9B2F2F|72|www.daodao.com|v1",
servlet: "Hotels",
loadTimeSet : false,
domreadyTimeSet : false
}
</script>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=8"/>
<meta http-equiv="imagetoolbar" content="no"/>
<title>香港酒店预订 - hkzhe香港打折网</title>
<meta http-equiv="pragma" content="no-cache"/>
<meta http-equiv="cache-control" content="no-cache,must-revalidate"/>
<meta http-equiv="expires" content="0"/>
<meta property="og:image" content="http://cc.ddcdn.com/img2/postimg.jpg" height="150px" width="150px"/>
<meta name="keywords" content="香港酒店预订"/>
<meta name="description" content="到到网(DaoDao.com)为您提供634家香港酒店预订信息，通过比较艺龙/携程等多家酒店预订网站的价格,帮您选择最优惠,最实惠的酒店."/>
<script type="text/javascript">
var pageInit = new Date();
var jsGlobalMonths =   new Array("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月");
var jsGlobalMonthsAbbrev =   new Array("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月");
var jsGlobalDaysAbbrev =   new Array("周日","周一","周二","周三","周四","周五","周六");
var jsGlobalDaysShort =   new Array("日","一","二","三","四","五","六");
var sInvalidDates = "您输入的日期无效。请修正您的日期后再查找。";
var sSelectDeparture = "请选择出发机场。";
var DATE_FORMAT_MMM_YYYY = "YYYY年MMM";
var DATE_PICKER_FORMAT = "MMMd日";
var jsGlobalDayOffset = 1 - 1;
var DATE_FORMAT = { pattern: /(\d{2,4})\-(\d{1,2})\-(\d{1,2})/, year: 1, month: 2, date: 3 };
var formatDate = function(d, m, y) { if (d < 10) d = "0" + d; if (++m < 10) m = "0" + m; return [y,m,d].join("-");}
var cal_month_header = function(month, year) {return year+"\u5E74"+cal_months[month];}
var currencyLevel = new Array();
var currencySymbol = new Array();
var cur_prefix = false;
var cur_postfix = true;
currencySymbol["USD"] = new Array("美元", true);
currencyLevel["USD"] = new Array("100美元以下","100" ,"200美元以下","200" ,"300美元以下","300" ,"价格不限","9999999" );
currencySymbol["EUR"] = new Array("€", true);
currencyLevel["EUR"] = new Array("75€以下","75" ,"150€以下","150" ,"225€以下","225" ,"价格不限","9999999" );
currencySymbol["GBP"] = new Array("£", true);
currencyLevel["GBP"] = new Array("50£以下","50" ,"100£以下","100" ,"150£以下","150" ,"价格不限","9999999" );
currencySymbol["CAD"] = new Array("加元", true);
currencyLevel["CAD"] = new Array("100加元以下","100" ,"200加元以下","200" ,"300加元以下","300" ,"价格不限","9999999" );
currencySymbol["AUD"] = new Array("澳元", true);
currencyLevel["AUD"] = new Array("100澳元以下","100" ,"200澳元以下","200" ,"300澳元以下","300" ,"价格不限","9999999" );
currencySymbol["CHF"] = new Array("瑞士法郎", true);
currencyLevel["CHF"] = new Array("100瑞士法郎以下","100" ,"200瑞士法郎以下","200" ,"300瑞士法郎以下","300" ,"价格不限","9999999" );
currencySymbol["JPY"] = new Array("日元", true);
currencyLevel["JPY"] = new Array("10000日元以下","10000" ,"20000日元以下","20000" ,"30000日元以下","30000" ,"价格不限","9999999" );
currencySymbol["RMB"] = new Array("元", true);
currencyLevel["RMB"] = new Array("200元以下","200" ,"500元以下","500" ,"800元以下","800" ,"价格不限","9999999" );
currencySymbol["INR"] = new Array("卢比", true);
currencyLevel["INR"] = new Array("4000卢比以下","4000" ,"8000卢比以下","8000" ,"12000卢比以下","12000" ,"价格不限","9999999" );
currencySymbol["SEK"] = new Array("瑞典克朗", true);
currencyLevel["SEK"] = new Array("500瑞典克朗以下","500" ,"1000瑞典克朗以下","1000" ,"1500瑞典克朗以下","1500" ,"价格不限","9999999" );
currencySymbol["BRL"] = new Array("R$ ", true);
currencyLevel["BRL"] = new Array("200R$ 以下","200" ,"400R$ 以下","400" ,"600R$ 以下","600" ,"价格不限","9999999" );
currencySymbol["TRY"] = new Array("土耳其里拉", true);
currencyLevel["TRY"] = new Array("200土耳其里拉以下","200" ,"400土耳其里拉以下","400" ,"600土耳其里拉以下","600" ,"价格不限","9999999" );
currencySymbol["DKK"] = new Array("克朗", true);
currencyLevel["DKK"] = new Array("500克朗以下","500" ,"1000克朗以下","1000" ,"1500克朗以下","1500" ,"价格不限","9999999" );
currencySymbol["MXN"] = new Array("墨西哥比索", true);
currencyLevel["MXN"] = new Array("1000墨西哥比索以下","1000" ,"2000墨西哥比索以下","2000" ,"3000墨西哥比索以下","3000" ,"价格不限","9999999" );
currencySymbol["ARS"] = new Array("ARS", true);
currencyLevel["ARS"] = new Array("300ARS以下","300" ,"600ARS以下","600" ,"900ARS以下","900" ,"价格不限","9999999" );
currencySymbol["NOK"] = new Array("挪威克朗", true);
currencyLevel["NOK"] = new Array("600挪威克朗以下","600" ,"1200挪威克朗以下","1200" ,"1800挪威克朗以下","1800" ,"价格不限","9999999" );
currencySymbol["PLN"] = new Array("波兰兹罗提", true);
currencyLevel["PLN"] = new Array("300波兰兹罗提以下","300" ,"600波兰兹罗提以下","600" ,"900波兰兹罗提以下","900" ,"价格不限","9999999" );
currencySymbol["SGD"] = new Array("S$", true);
currencyLevel["SGD"] = new Array("100S$以下","100" ,"200S$以下","200" ,"300S$以下","300" ,"价格不限","9999999" );
currencySymbol["THB"] = new Array("THB", true);
currencyLevel["THB"] = new Array("4000THB以下","4000" ,"8000THB以下","8000" ,"12000THB以下","12000" ,"价格不限","9999999" );
currencySymbol["KRW"] = new Array("KRW", true);
currencyLevel["KRW"] = new Array("100000KRW以下","100000" ,"200000KRW以下","200000" ,"300000KRW以下","300000" ,"价格不限","9999999" );
currencySymbol["RUB"] = new Array("RUB", true);
currencyLevel["RUB"] = new Array("3000RUB以下","3000" ,"6000RUB以下","6000" ,"9000RUB以下","9000" ,"价格不限","9999999" );
currencySymbol["IDR"] = new Array("IDR", true);
currencyLevel["IDR"] = new Array("1000000IDR以下","1000000" ,"2000000IDR以下","2000000" ,"3000000IDR以下","3000000" ,"价格不限","9999999" );
currencySymbol["TWD"] = new Array("台币", true);
currencyLevel["TWD"] = new Array("3000台币以下","3000" ,"6000台币以下","6000" ,"9000台币以下","9000" ,"价格不限","9999999" );
currencySymbol["MYR"] = new Array("RM", true);
currencyLevel["MYR"] = new Array("300RM以下","300" ,"600RM以下","600" ,"900RM以下","900" ,"价格不限","9999999" );
currencySymbol["EGP"] = new Array("EGP", true);
currencyLevel["EGP"] = new Array("3000EGP以下","3000" ,"6000EGP以下","6000" ,"9000EGP以下","9000" ,"价格不限","9999999" );
var groupingSize = 3;
var groupingSeparator = ",";
var JS_location_not_found = "没有发现您要找的地点";
var JS_click_to_expand = "点击此处来打开看";
var JS_choose_valid_city = "请在列表中选一个城市。";
var JS_select_a_cruise_line = "请选择一家游轮";
var JS_loading = "载入中...";
var JS_Ajax_failed="对不起，检索此内容时出现问题。请几分钟之后重新访问。";
var JS_maintenance="\u6211\u4eec\u7684\u7f51\u7ad9\u76ee\u524d\u6b63\u5728\u7ef4\u62a4\u4e2d\u3002\u975e\u5e38\u62b1\u6b49\u7ed9\u60a8\u5e26\u6765\u4e0d\u4fbf......\u6211\u4eec\u4f1a\u5c3d\u5feb\u6062\u590d\u6b63\u5e38\u3002";
var JS_Stop_search = "停止搜索";
var JS_Resume_search = "重新搜索";
var JS_Thankyou = "谢谢";
var JS_DateFormat = "年-月-日";
var JS_review_lost = "您的点评将不能被保存。";
var JS_coppa_sorry = "对不起……";
var JS_coppa_privacy = "根据您提供的信息，您的到到网账户不符合我们<a href='/pages/privacy.html'>保密政策</a>的要求。";
var JS_coppa_deleted = "您的账户已经被删除。";
var JS_close = "关闭";
var JS_close_image = "http://cc.ddcdn.com/img2/langs/zh_CN/buttons/closeButton.gif";
var JS_CHANGES_SAVED = "保存变更";
var JS_community_on = "社区已激活";
var lang_Close = JS_close;
var JS_UpdatingYourResults = "正在更新您的搜索结果";
var JS_OwnerPhoto_heading = "感谢您更新信息。";
var JS_OwnerPhoto_subheading = "我们会在5个工作日内处理完毕。请您耐心等待。";
var JS_OwnerPhoto_more = "添加更多照片";
var JS_OwnerPhoto_return = "返回酒店管理中心";
var JS_NMN_Timeout_title = "Do you want to keep trying?";
var JS_NMN_Timeout_msg = "It is taking longer than expected to get your location.";
var JS_NMN_Error_title = "Location error";
var JS_NMN_Error_msg   = "There has been an error in trying to determine your location";
var JS_KeepTrying = "Keep Trying";
var JS_TryAgain   = "Try Again";
var js_0001 = "请至少勾选一家预订网站"; var js_0002 = "请指定今日之后的日期"; var js_0003 = "请指定离店日在入住日之后"; var js_0004 = "请指定330天之内的日期";   var js_0005 = "查找中...请稍候"; var js_0006 = "您的选择没有改变"; var js_0010 = "请再次点击每个窗口或者调整浏览器设定以解除弹出窗口"; var js_0011 = "更新"; var js_0012 = "显示下一个报价"; var js_0013 = "请点击上面的\"查看房价\"按钮以打开窗口"; var js_0014 = '每个报价都将打开一个新窗口，请设置为允许弹出。';
var js_0015 = '比较价格';
var js_invalid_dates_text = "输入日期无效。请确认日期后重新搜索。"; var js_invalid_dates_text_new = "请输入具体日期后查看房费"; var js_invalid_dates_text_new2 = "请输入具体日期以显示价格";
var qcErrorImage = '<center><img src="http://cc.ddcdn.com/img/langs/zh_CN/action_required_blinking.gif" /></center>';
var selectedHotelName = ""; var cr_loc_vend = 'http://cc.ddcdn.com/img2/langs/zh_CN/checkrates/cr.gif';
var cr_loc_vend_ch = 'http://cc.ddcdn.com/img2/langs/zh_CN/checkrates/cr_check.gif';
var cr_loc_logo = 'http://cc.ddcdn.com/img2/checkrates/logo.gif';
var cd_loc_vend = 'http://cc.ddcdn.com/img2/langs/zh_CN/checkrates/cd.png';
var cd_loc_vend_ch = 'http://cc.ddcdn.com/img2/langs/zh_CN/checkrates/cd_check.png';
var JS_Any_Date = "\u4EFB\u4F55\u65E5\u671F";
var JS_Update_List = "\u5237\u65B0\u5217\u8868";
var JS_Stop_search = "\u505C\u6B62\u641C\u7D22";
var JS_Resume_search="\u91CD\u65B0\u641C\u7D22";
var sNexusTitleMissing = "The title must be populated";
var JS_Challenge="Challenge";
var JS_TIQ_Level="Level";
var JS_TIQ="Travel IQ";
var JS_TIQ_Pts="pts";
var RATING_STRINGS = [
"(点击评分)",
"很糟",
"差",
"一般",
"很好",
"非常好"
];
var overlayLightbox = false;
if("" != "")
{
overlayLightbox = true;
}
var isTakeOver = false;
var overlayOptions = "";
var overlayBackupLoc = "";
var gmapDomain = "ditu.google.cn";
var mapChannel = "dd.PRODUCTION";
var bingMapsLang = "zh".toLowerCase();
var bingMapsCountry = "CN".toLowerCase();
var bingMapsBaseUrl = "http://www.bing.com/maps/default.aspx?cc=cn&";
var googleMapsBaseUrl = "http://ditu.google.cn/?";
var serverPool = "X";
var reg_overhaul = true;
var posLocale = "zh_CN";
var cssPhotoViewerAsset = "http://www.hkzhe.com/css/photos_with_inline_review.css";
var jsPhotoViewerAsset = 'http://cc.ddcdn.com/js3/src/ta/photos/Viewer-v1065323216c.js';
var jsPhotoViewerTALSOAsset = 'http://cc.ddcdn.com/js3/src/TALSO-v12862410c.js';
var jsJWPlayerHelperAsset = 'http://cc.ddcdn.com/js3/src/ta/media/jwplayerHelper-v995955711c.js';
var hideOnLoad = new Array();
var IS_DEBUG = false;
var CDNHOST = "http://cc.ddcdn.com";
var VERSION_MAP = {
"ta-maps.js": "http://cc.ddcdn.com/js3/ta-maps-baidu-c-v2056150400c.js",
"ta-widgets-typeahead.js": "http://cc.ddcdn.com/js3/dd-widgets-typeahead-c-v1158112134c.js",
"ta-media.js": "http://cc.ddcdn.com/js3/ta-media-c-v2668349490c.js"
}
var cookieDomain = ".daodao.com";
var pageServlet = "Hotels";
var crPageServlet = "Hotels";
var cdnHost = "http://cc.ddcdn.com";
var userLoggedIn = false;
var migrationMember = false;
var savesEnable = false;
var flagsUrl = '/Hotels-g294217-zfa5-Hong_Kong-Hotels.html';
var flagsSettings = [
];
var lang_Close  = "关闭";
var img_loop    = "/img2/generic/site/loop.gif";
var communityEnabled = true
var footerFlagFormat = "common_0hotels";
var modelLocId = "294217";
var modelGeoId = "294217";
var gClient = 'gme-tripadvisorinc';
var gKey = 'ABQIAAAAbrotionfLoNjvl0WlUPGSRTP2Iex4ImkDFvmfrlkHkdl-bP0mBS9KN7hno7cyV6AsOY9ocbleQeydQ&client=gme-tripadvisorinc';
var gLang = '&hl=zh-CN';
var mapsJs = 'http://cc.ddcdn.com/js3/ta-maps-gmaps2-c-v2351723997c.js';
var mapsJsLite = 'http://cc.ddcdn.com/js3/lib/TAMap-v2716202300c.js';
var memoverlayCSS = 'http://cc.ddcdn.com/css2/pages/memberoverlay-v1425099229c.css';
var regflowCss = 'http://cc.ddcdn.com/ddcss/gen/reg-v1734338131c.css';
var JS_SECURITY_TOKEN = "AAABPary+1E0HoAxm2KXO9KQMdSfSC1IdxOt0Q==";
var taSecureToken = "AAABPary+1E0HoAxm2KXO9KQMdSfSC1IdxOt0Q==";
var addOverlayCloseClass = "";
var isOverlayServlet = "";
var IS_OVERLAY_DEBUG = "false";
var IS_MTPU_ENABLED = true;
var MTPU_RULE = 453;
var ddIsLogin = false;
var passportStampsCSS = 'http://cc.ddcdn.com/css2/modules/passport_stamps-v1996473260c.css';
var UCTopTab = "";
var MEDIA_HTTP_BASE = "http://ccm.ddcdn.com/";
</script>
<script type="text/javascript">
var freshVSTrackingCookie = true;         </script>
<script type="text/javascript" src="http://cc.ddcdn.com/ddjs/gen/daodao_common-v3611477955c.js"></script>
<script type="text/javascript">
ta.store('isDaoDao',true);
ta.store('servletName', "Hotels");
ta.store("daodao.checkrate.error.nodate","请输入您的入住和离店时间")
ta.store("member_info_redesign", true);
ta.store('disable_cr_href', true);
</script>
<script type="text/javascript">
ta.store('useBMap', true);
</script>
<script type="text/javascript">
var geoParam = "&geo=294217";
</script>
<link rel="stylesheet" type="text/css" media="screen" href="http://cc.ddcdn.com/ddcss/gen/daodao_common-v2860973788c.css"/>
<link rel="stylesheet" type="text/css" media="screen" href="http://cc.ddcdn.com/ddcss/gen/hotels-v1105105535c.css"/>
<style type="text/css">
</style>
<script type="text/javascript" src="http://cc.ddcdn.com/js3/src/trsupp-v283141723c.js"></script>
</head>
<?php echo $content; ?>
<!-- st: 418 dc: 1 sc: 9 -->
<!-- uid: UVKsy8CoAXwAAHh6VSQAAAAO -->
</html>
