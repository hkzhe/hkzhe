// A function that shows the tutorial with the current layout of the page
var ShowTutorial = function () {
    var $tutContainer = $('#tutorial');

    $tutContainer.click(function () {
        $(this).hide();
    });
    $tutContainer.children().each(function () {

        // Get the target elements' selector from the data-target-selector attribute
        var selector = $(this).attr("data-target-selector");

        // Get the orientation (on what side should the tutorial appear) from the data-orientation attribute
        var orientation = $(this).attr("data-orientation");

        // Get the actual target element
        var $targetElement = $('' + selector);

        // Get the element's position
        var left = $targetElement.offset().left;
        var top = $targetElement.offset().top;

        // Switch on the orientation and determine what should be the offset of the tutorial element respective to the target element
        switch (orientation) {
            case "sw":
                top += $targetElement.height() + 50;
                left -= 400;
                break;
            case "e":
                top -= $targetElement.height() / 2;
                left += $targetElement.width() + 50;
                break;
            case "n":
                left += $targetElement.width() / 2 - 200;
                top -= 100;
                break;
            case "s":
                left += $targetElement.width() / 2 - 300;
                break;
            default:
                top += 345;
                left += 100;
                break;
        }

        $(this).css("top", top + "px").css("left", left + "px");
    });

    $tutContainer.show();
};

// Sets a cookie that indicates that the user has seen the tutorial
var SetSeenTutorial = function () {
    $.cookie('seen_tutorial', 'true', { expires: 365 * 10 });
};

// Check if the tutorial cookie exists
var HasSeenTutorial = function () {
    var seen = $.cookie('seen_tutorial');
    return seen;
};


$(document).ready(function () {

    // Start the slideshow plugin on explorer window
    $('#slideShowCont').slideshow({
        interval: 5000,
        transitionTime: 1500,
        stopOnHover: false
    });

    // Responsive design for the slideshow element
    // Basic, once the page height is less than 870pixels we shrink the window pixel for pixel until a minimum height of 350px
    $(window).resize(function (event) {

        var height = $(this).height();

        if (height < 870) {
            var delta = 870 - height;
            var newSlideshowHeight = 500 - delta;
            var margin = (900 - newSlideshowHeight) / 2;

            newSlideshowHeight = Math.max(350, newSlideshowHeight);

            margin = Math.min(400, margin);

            $('#splashScreen').css("height", newSlideshowHeight + 'px');

            if (newSlideshowHeight > 350) {
                $('#slideshow img').css("margin-top", -margin + 'px');
            } else {
                $('#slideshow img').css("margin-top", -271.5 + 'px');
            }
            
        } else {
            $('#splashScreen').css("height", '500px');
            $('#slideshow img').css("margin-top", -200 + 'px');
        }
    });

    if (!HasSeenTutorial()) {
        ShowTutorial();
        SetSeenTutorial();
    }

    $(window).trigger('resize');

});
