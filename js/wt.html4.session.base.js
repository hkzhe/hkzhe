$(document).ready(function () {
    var locationcookievalue = getCookie('location');
    var cookieExists = ((locationcookievalue != undefined) && (locationcookievalue != ""));

    if (!cookieExists) {
        setHtml4Position();
    } else {
        $(document).trigger('location-set', locationcookievalue);
    }

    function setHtml4Position() {

        var locationInput = document.getElementById('locationtext');
        var locationOptions = {
            types: ['geocode']
        };

        $('#whereAreYouBox').show();

        locationAutoComplete = new google.maps.places.Autocomplete(locationInput, locationOptions);


        google.maps.event.addListener(locationAutoComplete, 'place_changed', function () {
            var place = locationAutoComplete.getPlace();
            console.log(place);
            var ll = { lat: place.geometry.location.Ta, lng: place.geometry.location.Ua };

            setPosition(ll);
            $('#whereAreYouBox').hide();
        });
    }


    // NOTICE: Not the same 'position' as in the html5-location-session setPosition
    function setPosition(position) {

        locationcookievalue = { ll: position.lat + "," + position.lng };

        // set a local cookie with expiration of 30 minutes
        setCookie('location', locationcookievalue.ll, 30);
        // set the search location
        var searchLocationCookie = getCookie('slocation');
        if ((searchLocationCookie != undefined) && (searchLocationCookie != "")) {
            setCookie('slocation', locationcookievalue.ll, 30);
            console.log('search cookie created now!!');
        }
        console.log('cookie created now!!');
        $(document).trigger('location-set', [locationcookievalue.ll]);

    }
});