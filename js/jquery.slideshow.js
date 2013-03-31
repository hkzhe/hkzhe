/*!
 * jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @addyosmani
 * Further changes: @peolanha
 * Licensed under the MIT license
 
 * Slideshow plugin is used in the homepage to display several popular activities worldwide
 * The plugin displays a slideshow with special transitioning functions
 */


; (function ($, window, document, undefined) {

    $.widget("wt.slideshow", {

        //Options to be used as defaults
        options: {
            interval: 3000,
            transitionTime: 500,
            displayControls: false,
            stopOnHover: true
        },

        
        _create: function () {

            // Set this plugin on the element's data (jQuery)
            this.element.data = {
                plugin : this  
            };

            // Set the widget array data
            this.array = this.element.find('ul').children();
            
            // Since we don't want to display a blank screen if there are problems with Javascript we set the last element in the <ul>
            // as the first of the slideshow
            this.currentElementIndex = this.array.length - 1;
            
            // Due to z-indexing problems we'll hide all the rest of the elements in the <ul> as to not mess with our slideshow
            this.element.find('ul').children().eq(this.currentElementIndex).addClass("active");
            
            // Set stop slideshow on hover if the options indicate
            if (this.options.stopOnHover) {
                this.element.hover(function (event) {
                    $(this).data().slideshow.stop();
                },
                function (event) {
                    $(this).data().slideshow.start();
                });
            }

            // Setup controllers if neccassary
            if (this.options.displayControls) {
                this._buildControllers();
            }
            
            // Start the slideshow
            this.start();
        },

        // Destroy an instantiated plugin and clean up 
        // modifications the widget has made to the DOM
        destroy: function () {

            // Remove custom element data
            this.element.array = null;
            this.element.currentElementIndex = null;
            
            // For UI 1.8, destroy must be invoked from the 
            // base widget
            $.Widget.prototype.destroy.call(this);
            // For UI 1.9, define _destroy instead and don't 
            // worry about 
            // calling the base widget
        },
    
        // Start the timer
        start: function () {
            // We use the proxy to give the _slideNext function the appropriate context
            this.timeID = setInterval($.proxy(this._slideNext, this), this.options.interval);

            // TEST PRINT
            console.log("Slideshow started!");
        },
        
        // Stop the slideshow
        stop: function () {
            clearInterval(this.timeID);
        },
        
        // Slide to next element
        _slideNext: function () {
            
            // TEST PRINT
            console.log("Sliding to next");
            
            // Save the current index
            var fromIndex = this.currentElementIndex;
            
            // Update current index
            var index = this.currentElementIndex;
            this.currentElementIndex = (index + 1) % (this.array.length);

            // Call transition function
            this._transitionFromTo($(this.array[fromIndex]), $(this.array[this.currentElementIndex]));
        },

        _slidePrev : function () {
            // Save the current index
            var fromIndex = this.currentElementIndex;

            // Update current index
            var index = this.currentElementIndex;
            this.currentElementIndex = (index - 1) % (this.array.length);

            if (this.currentElementIndex < 0) {
                this.currentElementIndex = this.array.length - 1;
            }

            // Call transition function
            this._transitionFromTo($(this.array[fromIndex]), $(this.array[this.currentElementIndex]));
        },

        _transitionFromTo: function (from, to) {
            
            from.css("z-index", 2);
            to.css("z-index", 3);

            to.fadeIn(this.options.transitionTime,
            function () {
                from.css("z-index", 1).hide().removeClass("active");
                to.css("z-index", 3).addClass("active");
            });

        },
        
        // Respond to any changes the user makes to the 
        // option method
        _setOption: function (key, value) {
            switch (key) {
                case "someValue":
                    //this.options.someValue = doSomethingWith( value );
                    break;
                default:
                    //this.options[ key ] = value;
                    break;
            }

            // For UI 1.8, _setOption must be manually invoked 
            // from the base widget
            $.Widget.prototype._setOption.apply(this, arguments);
            // For UI 1.9 the _super method can be used instead
            // this._super( "_setOption", key, value );
        },

        // Builds the controllers for the slideshow
        _buildControllers: function () {
            var plugin = this;

            var $next = $('<div class="ss-button next"></div>').click(function () {
                $(this).unbind('click');
                plugin._slideNext();
            });

            var $prev = $('<div class="ss-button prev"></div>').click(function () {
                $(this).unbind('click');
                plugin._slidePrev();
            });

            var $controllers = $('<div class="ss-controllers"></div>').append($next).append($prev);

            console.log($controllers);

            this.element.append($controllers);

            this.element.hover(function () {
                $controllers.fadeIn('slow');
            },
            function () {
                $controllers.fadeOut('slow');
            });
        }
        
    });

})(jQuery, window, document);