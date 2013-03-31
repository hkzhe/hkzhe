var locationcookievalue = $.cookie('location');
navigator.geolocation.getCurrentPosition(setPosition);

function setPosition(position) {

    locationcookievalue = { ll: position.coords.latitude + "," + position.coords.longitude };

    // set a local cookie with expiration of 30 minutes
    $.cookie('location', locationcookievalue.ll, { expires: 365 });
    // override the search location as well if required
    var searchLocationCookie = $.cookie('slocation');

    if (!searchLocationCookie) {
        $.cookie('slocation', locationcookievalue.ll, {expires : 1});
    }

    $(document).trigger('location-set', [locationcookievalue.ll]);
    
}