
<body>
    <!-- Qualaroo Stuff -->
    <script type="text/javascript" src="//s3.amazonaws.com/ki.js/44816/8OG.js" async="true"></script>
    <script type="text/javascript">
        // Qualaroo
        var _kiq = _kiq || [];
    </script>

    <div id="container">
        <header>
<script id="messagesTemplate" type="text/template">
    <ul id="messages-content-list" class="wt-list">
        {{#Threads}}
            <li class="ui-message ui-box clearfix {{#IsNew}}new{{/IsNew}}">
                <a href="/messages/thread/{{ThreadId}}">
                    <div id="message-pic-wrapper-{{ThreadId}}" class="message-friend-image">
                        <div style="background-image:url('{{SenderImage}}')" class="userImage mediumpic">
                        </div>
                    </div>
                    <div id="message-details-wrapper-{{ThreadId}}" class="message-text">
                        <p class="name">
                            {{SenderName}}
                        </p>
                        <p class="message {{#LastMessageByMe}}replied{{/LastMessageByMe}}">
                            {{Summary}}
                        </p>
                        <abbr class="timeago time-sent" title="{{MessageDateString}}">
                        </abbr>
                    </div>
                </a>
            </li>
        {{/Threads}}
    </ul>
</script>
<script id="notificationsTemplate" type="text/template">
    <ul id="notifications-content-list" class="wt-list">
        {{#Notifications}}
            <li class="ui-message ui-box clearfix">
                <a href="{{DataLink}}">
                    <div id="message-pic-wrapper-{{Id}}" class="message-friend-image">
                        <div style="background-image:url('{{ProfileImageUri}}')" class="userImage mediumpic">
                        </div>
                    </div>
                    <div id="notification-details-wrapper-{{Id}}" class="message-text">
                        <p class="message">
                            <b>{{UserName}}</b> {{Verb}} {{Summary}}
                        </p>
                        <abbr class="timeago time-sent" title="{{NotificationCreatedAt}}">
                        </abbr>
                    </div>
                </a>
            </li>
        {{/Notifications}}
    </ul>
</script>
<div id="headerWrapper">
    <div id="headerBar" class="headerBar fixedBar clearfix">
        <div id="header-logo-wrapper" class="header-main-element">
            <a href="https://itunes.apple.com/us/app/wetrip/id521559602" target="_blank">
                <img src="/content/images/DownloadAppstore.svg" alt="WeTrip Logo"/>
            </a>
        </div>
        <div class="header-navigation-links header-main-element">
            <a id="header-wetrip-writing" href="/"></a>

        </div>
            <div id="header-log-in" class="clearfix">
                
                <span class="login">Log In / Sign Up</span>
            </div>
    </div>
</div>
    <div class="modal">
        <div id="signinModal">
            <span class="closeButton"></span>
            <div class="title">
                <h1>HEY THERE
                </h1>
                <h2>HERE ARE 3 GREAT REASONS TO LOG IN (FROM THE TOP OF OUR HEAD):</h2>
            </div>
            <div class="reasons">
                <div class="reason">
                    <img src="images/icon_activity.png" alt="Activity Icon" />
                    <p class="caption">Join and create activities</p>
                </div>

                <div class="reason">
                    <img src="images/icon_comment.png" alt="Activity Icon" />
                    <p class="caption">Write comments and reviews</p>
                </div>

                <div class="reason">
                    <img src="images/icon_recommendation.png" alt="Activity Icon" />
                    <p class="caption">Recommend and make wish lists</p>
                </div>

            </div>
            <div class="buttonCont">
                <div class="facebookButton" data-method="/facebook/login" style="margin-left: -83px;">
                    <img class="facebookLoader loader" src="images/ajax-loader-white.gif"/>
                    <span class="login">Login with <b>Facebook</b></span>
                </div>
                <span class="explinationArrow"></span>
            </div>
        </div>
    </div>

            <div id="header">
                
            </div>
        </header>
        <div id="body">
            



<div id="mainCon">
    
    
<div id="splashScreen">
    <div id="slideShowCont">
        <ul id="slideshow">
                <li class="bpn-box">
                    <img src="http://i2.wetrip.me/aimg/at20121003094458389_6870_1.jpg" alt="Alcatraz Picture" title="Alcatraz"/>
                    <a class="caption" href="/activities/alcatraz-san-francisco">
                        <p class="title">
                            Alcatraz
                        </p>
                        <p class="location">
                            San Francisco, CA, United States
                        </p>
                    </a>
                </li>
                <li class="bpn-box">
                    <img src="http://i2.wetrip.me/aimg/at20121003094803456_9839_1.jpg" alt="Phang Nga Bay Picture" title="Phang Nga Bay"/>
                    <a class="caption" href="/activities/phang-nga-bay-phuket">
                        <p class="title">
                            Phang Nga Bay
                        </p>
                        <p class="location">
                            Phuket, Thailand
                        </p>
                    </a>
                </li>
                <li class="bpn-box">
                    <img src="http://i2.wetrip.me/aimg/at20121003094743410_11421_1.jpg" alt="Milford Sound Picture" title="Milford Sound"/>
                    <a class="caption" href="/activities/milford-sound-te-anau">
                        <p class="title">
                            Milford Sound
                        </p>
                        <p class="location">
                            Te Anau, New Zealand
                        </p>
                    </a>
                </li>
        </ul>
    </div>

    <div id="imgOverlayCont">
        <div id="search-box">
            <h1>EXPLORE NEW DESTINATIONS</h1>
            <h2>Enjoy more than 50,000 activities worldwide</h2>
            <input type="text" name="location-search" id="location-search" placeholder="Where do you want to explore?" />
        </div>

        <div id="blob-bg"></div>
    </div>
</div>

<div id="boxesCon" data-message="Something is wrong, please reload the page" data-method="hkzhe/ajax/GetExploreActivities">
    <ul id="activLis" class="clearfix">
    </ul>
</div>

<div id="tutorial">
    <div id="facebookTut" data-target-selector="#header-log-in" data-orientation="sw">
        <img src="images/arrow_facebook.png" />
    </div>
    <div id="searchTut" data-target-selector="#location-search" data-orientation="e">
        <img src="images/arrow_search_location.png" />
    </div>
    <div id="popularActsTut" data-target-selector="#boxesCon" data-orientation="n">
        <img src="images/arrow_popular_activities.png" />
    </div>

    <div id="tapToDismissTut" data-target-selector="#headerBar" data-orientation="se">>
        <img src="images/arrow_dismiss.png" style="width: 200px;"/>
    </div>
</div>



    <div id="boxesLoaderCon">
        <img src="images/ajax_loader_big.gif" alt="Big Loader GIF" height="100" class="loader"/>
        <p>
            Loading Activities...
        </p>
    </div>
    <div id="pagingLoaderCon">
        <img src="images/loader-arrows.gif" alt="Small Arrow GIF" class="loader"/>
        <p>
            Loading More...
        </p>
    </div>
</div>

        </div>
        <footer>
            <section id="footer-wrapper" class="clearfix">

                <section class="footer-menu">
                    <h4 class="footer-title">Our Pick </h4>
                    <ul>
                        <li>
                            <a href="/queenstown-new-zealand" class="footer-link">Queenstown</a>
                        </li>
                        <li>
                            <a href="/rotorua-new-zealand" class="footer-link">Rotorua</a>
                        </li>
                        <li>
                            <a href="/san-francisco-ca-united-states" class="footer-link">San Francisco</a>
                        </li>
                        <li>
                            <a href="/sydney-australia" class="footer-link">Sydney</a>
                        </li>
                        <li>
                            <a href="/roma-italy" class="footer-link">Rome</a>
                        </li>
                        <li>
                            <a href="/new-york-city-ny-united-states" class="footer-link">New York</a>
                        </li>
                        <li>
                            <a href="/san-diego-ca-united-states" class="footer-link">San Diego</a>
                        </li>
                        <li>
                            <a href="/paris-france" class="footer-link">Paris</a>
                        </li>
                        <li>
                            <a href="/venice-italy" class="footer-link">Venice</a>
                        </li>
                        <li>
                            <a href="/london-eng-united-kingdom" class="footer-link">London</a>
                        </li>
                    </ul>
                </section>

                <section class="footer-menu">
                    <h4 class="footer-title">About </h4>
                    <ul>
                        <li>
                            <a href="http://blog.wetrip.me" target="_blank" class="footer-link">Blog</a>
                        </li>
                        <li>
                            <a href="http://www.linkedin.com/company/backpack-network" target="_blank" class="footer-link">The team</a>
                        </li>
                        <li>
                            <a href="http://www.linkedin.com/company/backpack-network" target="_blank" class="footer-link">Press room</a>
                        </li>
                        <li>
                            <a href="#uvTab" onclick="UserVoice.showPopupWidget();" class="footer-link">Contact</a>
                        </li>
                    </ul>
                </section>

                <section class="footer-menu">
                    <h4 class="footer-title">Legal </h4>
                    <ul>
                        <li>
                            <a href="/legal/termsofuse" class="footer-link">Terms of use
                            </a>
                        </li>

                        <li>
                            <a href="/legal/privacypolicy" class="footer-link">Privacy policy
                            </a>
                        </li>
                    </ul>
                </section>

                <section class="footer-image">
                    <a href="http://www.wetrip.me">
                        <img src="images/wetrip_logo_130.png" />
                    </a>

                    <a href="https://itunes.apple.com/us/app/wetrip/id521559602" target="_blank">
                        <img src="/content/images/DownloadAppstore.svg" />
                    </a>
                </section>

            </section>
        </footer>
    </div>
    <!--! end of #container -->

    <div id="fb-root">
    </div>


    <div id="dialog-login" title="Where have you been?" style="display: none">
        <p>
            <span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>
            You were away for too long. Please refresh and re-log. Sorry for the inconvenience.
        </p>
    </div>
    <!-- JavaScript at the bottom for fast page loading -->
    <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
        <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>

        <script src="js/jquery.unobtrusive-ajax.min.js" type="text/javascript"></script>

    <!-- scripts concatenated and minified via ant build script-->
    <script type="text/javascript">
        window.fbAsyncInit = function () {
            FB.init({
                appId: '352385084773644', // App ID
                status: true, // check login status
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true  // parse XFBML
            });
        };

        // Load the SDK Asynchronously
        (function (d) {
            var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }(document));

        function submitFacebookAuth(response) {

            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;

            var data = {
                accessToken: accessToken
            };

            var url = '/facebook/login';

            $.ajax({
                type: 'POST',
                url: url,
                data: data
            }).done(function (response) {
                window.location.reload();
            }).fail(function (error) {
                console.log("Facebook auth bug detected. Forcing a logout on the user");
                var $connect = $('.connect');
                $connect.find('#facebookLoader').hide();
                $connect.find('span').text("Oops, Try again");
                $connect.unbind('click');
                $connect.click(function () {
                    window.location.reload();
                });
            });
        }
    </script>
        <script src="js/plugins.min.js" type="text/javascript"></script>


        <script src="js/wt.header.main.min.js" type="text/javascript"></script>

        <script src="js/mustache.min.js" type="text/javascript"></script>

        <script src="js/jquery.timeago.js" type="text/javascript"></script>

        <script src="js/jquery.cookie.min.js" type="text/javascript"></script>

    
    
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false&language=en"></script>
        <script src="js/jquery-ui-1.9.1.min.js" type="text/javascript"></script>

        <script src="js/wt.boxes.min.js" type="text/javascript"></script>


    <script id="activityCommentTemplate" type="text/template">
        <li class="box-comment clearfix">
            <div class="leftCol userImage" style="background-image: url('{{User.ProfileImageUri}}');margin-top: 4px;">
            </div>
            <div class="commentTextCon rightCol">
                <a href="/{{User.Id}}">{{User.Name}}</a>
                <p class="commentText">
                    {{MessageText}}
                </p>
                <p class="time">
                    <abbr class="timeago" title="{{CreateAtJsFormat}}"></abbr>
                </p>
            </div>
            <img src="images/comment_handle.png" alt="Comment hanle" class="handle"/>
            
        </li>
    </script>
    
    
        <script src="js/jquery-ui-1.8.11.min.js" type="text/javascript"></script>

        <script src="js/jquery.transit.min.js" type="text/javascript"></script>

        <script src="js/jquery.slideshow.js" type="text/javascript"></script>

        <script src="js/wt.explore.page.js" type="text/javascript"></script>



    <script type="text/javascript">
        Modernizr.load({
            test: Modernizr.geolocation,
            yep: 'js/wt.session.base.js',
            nope: 'js/wt.html4.session.base.js'
        });
    </script>
    <!-- end scripts-->
    <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
	   chromium.org/developers/how-tos/chrome-frame-getting-started -->
    <!--[if lt IE 7 ]>
	<script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
	<script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
    
</body>

