<body id="body">

<script src="js/header.js"></script>
<div id="wrap">
  <div id="container">
    <div id="mainContent">
      <div id="imain">
        <div id="srh">
          <div id="srh_tab">
            <ul>
              <li class="srh_tab11"><a href="http://www.zhuna.cn/search/">酒店预订</a></li>
              <li class="srh_tab3"><a href="http://www.zhuna.cn/zuche/">汽车租赁</a></li>
            </ul>
          </div>
          <!--search box-->
          <form action="/hotellist.html" method="get" name="aForm" id="aForm" onsubmit="return ZN.checkForm(this);document.getElementById('hotelso').disabled=true;$(this).loading({div:'#body'});">
            <input name="znv5" type="hidden" value="index" />
            <div id="srh_con">
              <ul>
                <li>
                  <label for="city"><span class="f_f00">*</span>选择城市：</label>
                  <div class="qcbox">
                    <input name="city" maxlength="20" type="text" class="srh_input" id="city" value="北京" autocomplete="off" />
                    <input value="0101" name="cityId" type="hidden" id="cityId" />
                  </div>
                </li>
                <li>
                  <label for="tm1"><span class="f_f00">*</span>入住日期：</label>
                  <div class="qcbox qdate">
                    <input name="tm1" type="text" class="srh_input1" id="tm1" />
                  </div>
                </li>
                <li>
                  <label for="tm2"><span class="f_f00">*</span>退房日期：</label>
                  <div class="qcbox qdate">
                    <input name="tm2" type="text" class="srh_input1" id="tm2" />
                  </div>
                </li>
                <li>
                  <label for="key">酒店位置：</label>
                  <div class="qcbox">
                    <input name="key" type="text" class="srh_input1 gray" id="key" />
                  </div>
                </li>
                <li>
                  <label for="minprice">价格范围：</label>
                  <div class="qcbox">
                    <input name="minprice" type="text" class="srh_input2" id="minprice" onkeyup="this.value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/>
                    至
                    <input name="maxprice" type="text" class="srh_input2" id="maxprice" onkeyup="this.value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/>
                  </div>
                </li>
                <li>
                  <label for="hn">酒店名称：</label>
                  <div class="qcbox">
                    <input name="hn" type="text" class="srh_input1 gray" id="hn" />
                  </div>
                </li>
                <li>
                  <label>显示模式：</label>
                  <div class="qcbox" style="width:150px">
                    <input name="viewmode" type="radio" id="hotel_list" value="hotellist" onclick="document.aForm.action='/hotellist.html';" checked="checked" /><label for="hotel_list">列表模式</label>
                    <input type="radio" name="viewmode" id="hotel_map" value="hotelmap" onclick="document.aForm.action='/hotelmap.html';" /><label for="hotel_map">地图模式</label>
                  </div>
                </li>
                <li class="p_left">
                  <input name="button3" type="submit" class="btn_srh" id="hotelso" value="  "/>
                </li>
              </ul>
            </div>
          </form>
          <!--search box end-->
          <div id="srh_bot"><a href="http://www.zhuna.cn/findhotel/" target="_blank"><img src="http://tp1.znimg.com/v5/images/map_hotel.gif" width="278" height="39" /></a></div>
        </div>
    
        <div id="imobile"><a href="http://shouji.zhuna.cn/iphone.asp"  target="_blank"> </a><a href="http://shouji.zhuna.cn/android.asp" class="iphone_mark" target="_blank"> </a></div>
        <div class="index_box">
          <div class="box_tt">
            <h4>看看别人在做什么？</h4>
          </div>
          <div class="box_con new_info">
            <div class="bottomcover"></div>
            <div id="marquee" style="overflow:hidden;">
              <!--marquee-->
              <dl><dt><span class="new_info_icon3">酒店问答</span><a href="http://www.zhuna.cn/hotel-26037.html" target="_blank">西塘西风瘦马连锁客栈</a></dt><dd><p>酒店怎么联系？</p>39分钟前提问（Uni****uest）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-51453.html" target="_blank">成都百年商务酒店</a></dt><dd><p>13分钟之前预订了商务单间b1间1晚</p>可获得<em>11</em>元奖金（138****6486）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-14519.html" target="_blank">北京龙城丽宫国际酒店（昌平-回龙观）</a></dt><dd><p>12分钟之前预订了豪华客房1间1晚</p>可获得<em>33</em>元奖金（138****2029）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-27538.html" target="_blank">开封99快捷宾馆（鼓楼街店）</a></dt><dd><p>12分钟之前预订了标准间(无窗)1间1晚</p>可获得<em>10</em>元奖金（186****7787）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-104842.html" target="_blank">黄冈德尔福遗爱湖大酒店</a></dt><dd><p>12分钟之前预订了套房1间1晚</p>可获得<em>24</em>元奖金（136****2883）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-14964.html" target="_blank">重庆君顿精品酒店</a></dt><dd><p>10分钟之前预订了个性商务房（限时抢购）2间2晚</p>可获得<em>72</em>元奖金（139****1168）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-14964.html" target="_blank">重庆君顿精品酒店</a></dt><dd><p>10分钟之前预订了自助商务房（限时抢购）1间2晚</p>可获得<em>36</em>元奖金（139****1168）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-39314.html" target="_blank">南京汉庭快捷酒店（大学云南路店）</a></dt><dd><p>10分钟之前预订了特价房2间1晚</p>可获得<em>30</em>元奖金（158****7868）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-104288.html" target="_blank">九月连锁酒店（佛山南海店）</a></dt><dd><p>10分钟之前预订了大床房1间3晚</p>可获得<em>33</em>元奖金（139****7229）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-12349.html" target="_blank">北京民族园智选假日酒店</a></dt><dd><p>10分钟之前预订了标准大床房无烟1间1晚</p>可获得<em>26</em>元奖金（137****0884）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-10111.html" target="_blank">宁波凯洲皇冠假日酒店</a></dt><dd><p>10分钟之前预订了皇冠高级房1间4晚</p>可获得<em>120</em>元奖金（137****7037）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-21579.html" target="_blank">咸阳亿隆商务酒店</a></dt><dd><p>9分钟之前预订了单人房1间3晚</p>可获得<em>36</em>元奖金（132****1366）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-106835.html" target="_blank">北京倪氏海泰白云商务酒店</a></dt><dd><p>9分钟之前预订了大床房1间1晚</p>可获得<em>21</em>元奖金（138****4831）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-106835.html" target="_blank">北京倪氏海泰白云商务酒店</a></dt><dd><p>9分钟之前预订了标准房2间1晚</p>可获得<em>44</em>元奖金（138****4831）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-48268.html" target="_blank">西安汉庭快捷酒店（火车站万达广场店）</a></dt><dd><p>9分钟之前预订了大床房A1间1晚</p>可获得<em>12</em>元奖金（137****7870）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-49291.html" target="_blank">南京丽锦花园酒店</a></dt><dd><p>7分钟之前预订了商务标准间1间1晚</p>可获得<em>22</em>元奖金（136****3725）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-43586.html" target="_blank">深圳速8酒店（罗湖区委店）</a></dt><dd><p>7分钟之前预订了高级大床房1间1晚</p>可获得<em>16</em>元奖金（189****1288）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-14657.html" target="_blank">上海莫泰168（浦东金桥路国际商业广场店）</a></dt><dd><p>7分钟之前预订了标准双人房2间1晚</p>可获得<em>24</em>元奖金（151****2963）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-14923.html" target="_blank">重庆皇侨大酒店</a></dt><dd><p>3分钟之前预订了特价房(无窗)1间1晚</p>可获得<em>15</em>元奖金（151****1808）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-42617.html" target="_blank">杭州西溪十八家宾馆</a></dt><dd><p>3分钟之前预订了普通标间2间1晚</p>可获得<em>38</em>元奖金（186****9387）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-42309.html" target="_blank">常州布丁酒店连锁（大学城店）</a></dt><dd><p>3分钟之前预订了乐活抢购双床房1间1晚</p>可获得<em>9</em>元奖金（151****4974）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-43068.html" target="_blank">深圳东方精品酒店</a></dt><dd><p>3分钟之前预订了数码大床房1间1晚</p>可获得<em>19</em>元奖金（189****1288）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-31087.html" target="_blank">重庆君顿两江酒店</a></dt><dd><p>3分钟之前预订了商务标间1间1晚</p>可获得<em>22</em>元奖金（159****9999）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-50411.html" target="_blank">北京忠瑞宾馆</a></dt><dd><p>3分钟之前预订了亲子间（3人）1间2晚</p>可获得<em>40</em>元奖金（139****0780）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-14569.html" target="_blank">北京昌平大宅门·迎祥商务度假酒店</a></dt><dd><p>3分钟之前预订了高级大床(无窗)1间1晚</p>可获得<em>29</em>元奖金（138****2029）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-44062.html" target="_blank">重庆宜必思酒店（冉家坝店）</a></dt><dd><p>3分钟之前预订了标准大床房1间7晚</p>可获得<em>126</em>元奖金（137****7165）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-50654.html" target="_blank">武汉凯瑞祥商务酒店</a></dt><dd><p>3分钟之前预订了商务标间5间1晚</p>可获得<em>60</em>元奖金（134****3063）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-16070.html" target="_blank">盐城银都大酒店（大丰）</a></dt><dd><p>1分钟之前预订了南楼标房B4间1晚</p>可获得<em>36</em>元奖金（136****0526）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-14647.html" target="_blank">上海汉庭快捷酒店（虹桥枢纽二店）</a></dt><dd><p>1分钟之前预订了节日百元房(大床)1间1晚</p>可获得<em>8</em>元奖金（136****1999）</dd></dl><dl><dt><span class="new_info_icon1">最新订单</span><a href="http://www.zhuna.cn/hotel-103921.html" target="_blank">上海轩境宾馆</a></dt><dd><p>1分钟之前预订了普通标间1间3晚</p>可获得<em>39</em>元奖金（139****0730）</dd></dl>
            </div>
          </div>
          <!--marquee end-->
        </div>
        <div class="index_box">
          <div class="inter_top">
            <div class="inter_tab">
              <h3></h3>
              <a class="inter_more" href="http://www.zhuna.cn/about/news/index.shtml">更多..</a>
              <ul>
                <li class="current">网站动态</li>
                <li class="cur1" url="http://www.zhuna.cn/special/">专题活动</li>
              </ul>
            </div>
          </div>
          <div class="web_news">
            <ul>
              <li><a target="_blank" title='2013年住哪网春节放假通知' href='/about/news/69.shtml'>2013年住哪网春节放假通知</a></li><li><a target="_blank" title='住哪网发布安卓客户端“住哪儿订酒店1.0”版' href='/about/news/68.shtml'>住哪网发布安卓客户端“住哪儿订酒店1.0”版</a></li><li><a target="_blank" title='住哪网与扬州网达成订房业务合作' href='/about/news/66.shtml'>住哪网与扬州网达成订房业务合作</a></li>
            </ul>
          </div>
          <div class="web_news hidden">
            <ul>
              
<li><a target="_blank" title="2013年浙江公务员考试考场周边酒店推荐" href="http://www.zhuna.cn/special/2013zhejianggwy/">2013年浙江公务员考试考场周边酒店推荐</a></li>

<li><a target="_blank" title="2013年江苏选调生考试考场周边酒店推荐" href="http://www.zhuna.cn/special/2013jiangsuxds/">2013年江苏选调生考试考场周边酒店推荐</a></li>

<li><a target="_blank" title="2013年江苏公务员考试考场周边酒店推荐" href="http://www.zhuna.cn/special/2013jiangsugwy/">2013年江苏公务员考试考场周边酒店推荐</a></li>

            </ul>
          </div>
        </div>
        <div class="index_box">
          <div class="box_tt">
            <h4>关注我们</h4>
          </div>
          <div class="box_con index_weibo">
            <dl>
              <dt><a href="http://www.weibo.com/zhunacn" rel="nofollow" target="_blank"><img class="icon_sina" src="/v5/images/blank.gif" width="62" height="22" alt="" />@住哪网</a></dt>
              <dd><a href="http://t.qq.com/zhunacn" rel="nofollow" target="_blank"><img class="icon_qq" src="/v5/images/blank.gif" width="62" height="22" alt="" />@住哪网</a></dd>
              <dt><a href="http://t.163.com/zhunacn" rel="nofollow" target="_blank"><img class="icon_sohu" src="/v5/images/blank.gif" width="62" height="22" alt="" />@住哪网</a></dt>
              <dd><a href="http://t.sohu.com/u/32693864" rel="nofollow" target="_blank"><img class="icon_163" src="/v5/images/blank.gif" width="62" height="22" alt="" />@住哪网</a></dd>
            </dl>
            <p>我们会不定期推出一些有奖活动，期待您的参与</p>
          </div>
        </div>
        <div id="tools">
          <ul>
            <li><a href="http://www.zhuna.cn/flight/airport/" target="_blank">机场大全</a></li>
            <li><a href="http://www.zhuna.cn/weather/" target="_blank">天气预报</a></li>
            <li><a href="http://www.zhuna.cn/ditie/" target="_blank">地铁周边</a></li>
            <li><a href="http://www.zhuna.cn/findhotel/" target="_blank">电子地图</a></li>
            <li><a href="http://www.zhuna.cn/travelmap/" target="_blank">旅游地图</a></li>
            <li><a href="http://www.zhuna.cn/gongjiao/" target="_blank">住哪公交</a></li>
          </ul>
        </div>
      </div>
      <div id="iside">
        <div id="index_pic">
          <script language="javascript">if(typeof(J)!=undefined){J.j('/flashad_index_nodata.js?20130225');}</script>
        </div>
        <div class="index_box1">
          <div class="index_box1_money">
            <h2><a href="http://www.zhuna.cn/Special/fanxian/" target="_blank" title="订酒店返现金">订酒店返现金</a></h2>
            <p><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">在香港打折网上订酒店，每间夜最高返房费<strong>3%</strong><br />
              上传酒店照片，还能额外获得<strong>50</strong>元照片奖金</a></p>
            <div id="marquee1" class="marquee">
              <ul style="width:3000em;"><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">183****8350 2分钟前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">138****8382 20分钟前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">159****2130 26分钟前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">186****9119 57分钟前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">136****5133 58分钟前提现了<strong>300</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">136****5539 1小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">138****7414 1小时前提现了<strong>900</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">186****0168 2小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">136****3031 2小时前提现了<strong>300</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">150****2961 3小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">151****2031 3小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">138****3172 3小时前提现了<strong>300</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">138****4130 3小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">186****8258 4小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">139****0333 4小时前提现了<strong>400</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">186****4583 4小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">135****6249 14小时前提现了<strong>200</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">138****7675 15小时前提现了<strong>500</strong>元</a></li><li><a href="http://www.zhuna.cn/special/fanxian/" target="_blank">187****3680 16小时前提现了<strong>200</strong>元</a></li></ul>
            </div>
          </div>
          <div class="index_box1_quanyi"></div>
        </div>
        <div class="index_box">
          <div class="box_tt">
            <h4>快速查找目的地附近酒店</h4>
            <div class="db_city"><strong>北京</strong></div>
          </div>
          <div class="box_con index_db" style="position:relative;">
            <ul>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="车站/机场附近酒店" src="http://tp1.znimg.com/V5/images/new/ad01.gif" t="3" width="54" height="55"><br>
                车站/机场</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="商业区附近酒店" src="http://tp1.znimg.com/V5/images/new/ad02.gif" t="1" width="54" height="55"><br>
                商业区</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="行政区附近酒店" src="http://tp1.znimg.com/V5/images/new/ad03.gif" t="2" width="54" height="55"><br>
                行政区</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="大学附近酒店" src="http://tp1.znimg.com/V5/images/new/ad04.gif" t="83" width="54" height="55"><br>
                大学附近</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="中学附近酒店" src="http://tp1.znimg.com/V5/images/new/ad05.gif" t="82" width="54" height="55"><br>
                中学附近</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="景点附近酒店" src="http://tp1.znimg.com/V5/images/new/ad06.gif" t="65" width="54" height="55"><br>
                景点附近</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="展馆会场附近酒店" src="http://tp1.znimg.com/V5/images/new/ad07.gif" t="70" width="54" height="55"><br>
                展馆会场</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="地铁站周边酒店" src="http://tp1.znimg.com/V5/images/new/ad08.gif" t="170" width="54" height="55"><br>
                地铁站周边</a></li>
              <li><a href="javascript:void(0);" hidefocus="on" style="outline:medium none;"><img alt="医院附近酒店" src="http://tp1.znimg.com/V5/images/new/ad09.gif" t="119" width="54" height="55"><br>
                医院附近</a></li>
            </ul>
          </div>
          <div class="clearfloat"></div>
        </div>
        <div class="index_box">
          <div class="box_tt1">
            <ul>
              <li id="pp_current">经济连锁酒店</li>
              <li>品牌连锁酒店</li>
            </ul>
            <span><a href="http://www.zhuna.cn/liansuo/">更多..</a></span></div>
          <div class="box_con index_pinpai">
            <ul class="ichain">
              <li><a target='_blank' href='http://www.zhuna.cn/liansuo-1/HomeInn/' title='如家快捷'><img src='http://tp1.znimg.com/images/liansuo/1.gif' width='50' height='40' alt="如家快捷" />如家快捷</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-3/7DaysInn/' title='7天连锁'><img src='http://tp1.znimg.com/images/liansuo/3.gif' width='50' height='40' alt="7天连锁" />7天连锁</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-5/HanTingInns/' title='汉庭连锁'><img src='http://tp1.znimg.com/images/liansuo/5.gif' width='50' height='40' alt="汉庭连锁" />汉庭连锁</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-7/GreenTreeInns/' title='格林豪泰'><img src='http://tp1.znimg.com/images/liansuo/7.gif' width='50' height='40' alt="格林豪泰" />格林豪泰</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-2/JinJiangInn/' title='锦江之星'><img src='http://tp1.znimg.com/images/liansuo/2.gif' width='50' height='40' alt="锦江之星" />锦江之星</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-4/Super8/' title='速8连锁'><img src='http://tp1.znimg.com/images/liansuo/4.gif' width='50' height='40' alt="速8连锁" />速8连锁</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-6/Motel168/' title='莫泰168'><img src='http://tp1.znimg.com/images/liansuo/6.gif' width='50' height='40' alt="莫泰168" />莫泰168</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-58/PodInn/' title='布丁连锁'><img src='http://tp1.znimg.com/images/liansuo/58.gif' width='50' height='40' alt="布丁连锁" />布丁连锁</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-90/Thankyou/' title='尚客优'><img src='http://tp1.znimg.com/images/liansuo/90.gif' width='50' height='40' alt="尚客优" />尚客优</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-89/ViennaHotels/' title='维也纳'><img src='http://tp1.znimg.com/images/liansuo/89.gif' width='50' height='40' alt="维也纳" />维也纳</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-86/GraceInn/' title='银座佳驿'><img src='http://tp1.znimg.com/images/liansuo/86.gif' width='50' height='40' alt="银座佳驿" />银座佳驿</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-79/CityComfortInn/' title='城市便捷'><img src='http://tp1.znimg.com/images/liansuo/79.gif' width='50' height='40' alt="城市便捷" />城市便捷</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-205/Yibai/' title='易佰连锁'><img src='http://tp1.znimg.com/images/liansuo/205.gif' width='50' height='40' alt="易佰连锁" />易佰连锁</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-85/IbisHotel/' title='宜必思'><img src='http://tp1.znimg.com/images/liansuo/85.gif' width='50' height='40' alt="宜必思" />宜必思</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-155/Jjlg/' title='99旅馆'><img src='http://tp1.znimg.com/images/liansuo/155.gif' width='50' height='40' alt="99旅馆" />99旅馆</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-209/Bestay/' title='百时快捷'><img src='http://tp1.znimg.com/images/liansuo/209.gif' width='50' height='40' alt="百时快捷" />百时快捷</a></li>

            </ul>
            <ul class="ichain hidden">
              <li><a target='_blank' href='http://www.zhuna.cn/liansuo-115/Jinjiang/' title='锦江酒店'><img src='http://tp1.znimg.com/images/liansuo/115.gif' width='50' height='40' alt="锦江酒店" />锦江酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-126/HolidayInn/' title='假日酒店'><img src='http://tp1.znimg.com/images/liansuo/126.gif' width='50' height='40' alt="假日酒店" />假日酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-129/Intercontinental/' title='洲际酒店'><img src='http://tp1.znimg.com/images/liansuo/129.gif' width='50' height='40' alt="洲际酒店" />洲际酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-120/Sheraton/' title='喜来登'><img src='http://tp1.znimg.com/images/liansuo/120.gif' width='50' height='40' alt="喜来登" />喜来登</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-295/BTGJianGuoHotel/' title='首旅建国'><img src='http://tp1.znimg.com/images/liansuo/295.gif' width='50' height='40' alt="首旅建国" />首旅建国</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-118/CrownePlaza/' title='皇冠假日'><img src='http://tp1.znimg.com/images/liansuo/118.gif' width='50' height='40' alt="皇冠假日" />皇冠假日</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-84/DaysInn/' title='戴斯酒店'><img src='http://tp1.znimg.com/images/liansuo/84.gif' width='50' height='40' alt="戴斯酒店" />戴斯酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-119/ShangriLa/' title='香格里拉'><img src='http://tp1.znimg.com/images/liansuo/119.gif' width='50' height='40' alt="香格里拉" />香格里拉</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-294/NewCenturyHotel/' title='开元酒店'><img src='http://tp1.znimg.com/images/liansuo/294.gif' width='50' height='40' alt="开元酒店" />开元酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-238/JinLingHotelsResorts/' title='金陵'><img src='http://tp1.znimg.com/images/liansuo/238.gif' width='50' height='40' alt="金陵" />金陵</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-135/ramadash/' title='华美达'><img src='http://tp1.znimg.com/images/liansuo/135.gif' width='50' height='40' alt="华美达" />华美达</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-140/Howardjohnson/' title='豪生酒店'><img src='http://tp1.znimg.com/images/liansuo/140.gif' width='50' height='40' alt="豪生酒店" />豪生酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-136/Hiexpress/' title='智选假日'><img src='http://tp1.znimg.com/images/liansuo/136.gif' width='50' height='40' alt="智选假日" />智选假日</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-122/Marriott/' title='万豪酒店'><img src='http://tp1.znimg.com/images/liansuo/122.gif' width='50' height='40' alt="万豪酒店" />万豪酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-466/HuaTianHotel/' title='华天大酒店'><img src='http://tp1.znimg.com/images/liansuo/466.gif' width='50' height='40' alt="华天大酒店" />华天大酒店</a></li>
<li><a target='_blank' href='http://www.zhuna.cn/liansuo-347/CountryGarden/' title='碧桂园'><img src='http://tp1.znimg.com/images/liansuo/347.gif' width='50' height='40' alt="碧桂园" />碧桂园</a></li>

            </ul>
          </div>
          <div class="clearfloat"></div>
        </div>
        <!--tuangou-->
        <div class="index_box" style="height:271px;"> <div class="box_tt"><h4>今日团购</h4><div class="scrollnav"><a href="###" class="current"></a><a href="###"></a> <a href="###"></a> <span class="prev"></span><span class="next"></span></div> </div><div class="box_con index_tuan" style="overflow:hidden;width:648px;position:absolute;"><div style="width:2500em;position:relative;overflow:hidden;" id="s"><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/38484.html"><img src="http://tuan.zhuna.cn/static/team/2013/0221/13614072165257_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/38484.html">江苏句容余坤开元大酒店（含镇江韦岗温泉）</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/38484.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥549.00</strong></li><li>市场价：<span>￥<del>1776.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/36993.html"><img src="http://tuan.zhuna.cn/static/team/2013/0131/13595939541831_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/36993.html">常州新城瑞壹精品酒店（含温泉-周末）</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/36993.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥549.00</strong></li><li>市场价：<span>￥<del>1112.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/37650.html"><img src="http://tuan.zhuna.cn/static/team/2013/0221/13614426747371_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/37650.html">绍兴鉴湖大酒店</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/37650.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥548.00</strong></li><li>市场价：<span>￥<del>1410.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/36853.html"><img src="http://tuan.zhuna.cn/static/team/2013/0130/13595402579424_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/36853.html">广州凯景酒店+锦绣香江温泉-标准双床房平日</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/36853.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥548.00</strong></li><li>市场价：<span>￥<del>904.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/35500.html"><img src="http://tuan.zhuna.cn/static/team/2013/0118/13584705886242_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/35500.html">常州天安城市酒店（含恐龙园门票）</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/35500.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥548.00</strong></li><li>市场价：<span>￥<del>898.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/35496.html"><img src="http://tuan.zhuna.cn/static/team/2013/0118/13584705842836_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/35496.html">常州天安城市酒店-(含温泉-周末)</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/35496.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥548.00</strong></li><li>市场价：<span>￥<del>894.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/34427.html"><img src="http://tuan.zhuna.cn/static/team/2013/0111/13578646559607_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/34427.html">泰州宾馆</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/34427.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥548.00</strong></li><li>市场价：<span>￥<del>1216.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/33531.html"><img src="http://tuan.zhuna.cn/static/team/2013/0106/13574685924754_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/33531.html">宁海尚高国际商务酒店</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/33531.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥548.00</strong></li><li>市场价：<span>￥<del>914.00</del></span></li></ul></div><div class="tuan_box"><ul><li class="tuan_pic"><a target="_blank" href="http://tuan.zhuna.cn/team/33360.html"><img src="http://tuan.zhuna.cn/static/team/2013/0105/13573837769963_index.jpg" width="190" height="130" /></a></li><li><h2><a target="_blank" href="http://tuan.zhuna.cn/team/33360.html">苏州百益德精品酒店</a></h2></li><li class="tuan_btn"><a target="_blank" href="http://tuan.zhuna.cn/team/33360.html"><img src="/v5/images/btn_shop.gif" width="70" height="33" /></a></li><li>团购价：<strong>￥548.00</strong></li><li>市场价：<span>￥<del>984.00</del></span></li></ul></div> </div></div> <div class="clearfloat"></div> </div>
        <!--tuangou end-->
        <div class="index_box">
          <div class="box_tt">
            <h4>游记攻略</h4>
            <span><a href="http://www.zhuna.cn/news/gonglue/">更多..</a></span> </div>
          <div class="box_con zixun">
            
  <dl>
    <dt><a href="/news/gonglue/1191.asp" target="_blank" title="白苹红蓼西风里，一色湖光万顷秋">白苹红蓼西风里，一色湖光万顷秋</a></dt>
    <dd><a href="/news/gonglue/1191.asp" target="_blank" title="白苹红蓼西风里，一色湖光万顷秋"><img src="/sys/uploadfile/201302/22/1334133241.jpg" width="75" height="56" /></a>烟花三月是折不断的柳，思念总比那西湖瘦，不同于 西湖 的大家闺秀，瘦西湖自有小家碧玉的灵动秀<a href="/news/gonglue/1191.asp" target="_blank">[详细]</a></dd>
  </dl>
  
  <dl>
    <dt><a href="/news/gonglue/1162.asp" target="_blank" title="北京城的华丽灯光盛宴">北京城的华丽灯光盛宴</a></dt>
    <dd><a href="/news/gonglue/1162.asp" target="_blank" title="北京城的华丽灯光盛宴"><img src="/sys/uploadfile/201302/19/1519322757.jpg" width="75" height="56" /></a>北京 SOLANA蓝色港湾国际商区 时尚、新鲜且充满乐趣，不同的人群都可以在这里找到属于自己的Life<a href="/news/gonglue/1162.asp" target="_blank">[详细]</a></dd>
  </dl>
  
  <dl>
    <dt><a href="/news/gonglue/1159.asp" target="_blank" title="圆明园——虽由人做，宛自天开">圆明园——虽由人做，宛自天开</a></dt>
    <dd><a href="/news/gonglue/1159.asp" target="_blank" title="圆明园——虽由人做，宛自天开"><img src="/sys/uploadfile/201302/19/1113222497.jpg" width="75" height="56" /></a>小时候一直向往着来北京，来北京有3处必去的地方。 长城 、 故宫 、 圆明园 ，然而现在真正来北京<a href="/news/gonglue/1159.asp" target="_blank">[详细]</a></dd>
  </dl>
  
  <dl>
    <dt><a href="/news/gonglue/1151.asp" target="_blank" title="那一年的那首康定情歌——走进康定">那一年的那首康定情歌——走进康定</a></dt>
    <dd><a href="/news/gonglue/1151.asp" target="_blank" title="那一年的那首康定情歌——走进康定"><img src="/sys/uploadfile/201302/18/1537266041.jpg" width="75" height="56" /></a>跑马溜溜的山上，一朵溜溜的云哟，端端溜溜的照在，康定溜溜的城哟犹记得听见这首歌是初中的那个<a href="/news/gonglue/1151.asp" target="_blank">[详细]</a></dd>
  </dl>
  

          </div>
          <div class="clearfloat"></div>
        </div>
      </div>
      <div class="clearfloat"></div>
      <div class="index_tg">
        <ul>
          <script type="text/javascript">BAIDU_CLB_preloadSlots("344490","344488","344487","344485","344484");</script>
          <li class="one">
            <script type="text/javascript">BAIDU_CLB_fillSlot("344490");</script>
          </li>
          <li>
            <script type="text/javascript">BAIDU_CLB_fillSlot("344488");</script>
          </li>
          <li>
            <script type="text/javascript">BAIDU_CLB_fillSlot("344487");</script>
          </li>
          <li>
            
            <script type="text/javascript">BAIDU_CLB_fillSlot("344485");</script>
          </li>
          <li>
            <script type="text/javascript">BAIDU_CLB_fillSlot("344484");</script>
          </li>
        </ul>
      </div>
<script src="http://tp1.znimg.com/v5/inc/helper.js"></script>
<script src="js/calenda.js"></script>


<script src="js/footer.js"></script>
    </div>
  </div>
</div>
</div>
</body>
