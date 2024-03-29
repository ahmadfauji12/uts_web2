
!function($) {
    "use strict";

  
    var Portlet = function() {
        this.$body = $("body"),
        this.$portletIdentifier = ".portlet",
        this.$portletCloser = '.portlet a[data-toggle="remove"]',
        this.$portletRefresher = '.portlet a[data-toggle="reload"]'
    };

   
    Portlet.prototype.init = function() {
      
        var $this = this;
        $(document).on("click",this.$portletCloser, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);
                var $portlet_parent = $portlet.parent();
            $portlet.remove();
            if ($portlet_parent.children().length == 0) {
                $portlet_parent.remove();
            }
        });


        $(document).on("click",this.$portletRefresher, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);

            $portlet.append('<div class="panel-disabled"><div class="loader-1"></div></div>');
            var $pd = $portlet.find('.panel-disabled');
            setTimeout(function () {
                $pd.fadeOut('fast', function () {
                    $pd.remove();
                });
            }, 500 + 300 * (Math.random() * 5));
        });
    },
    
    $.Portlet = new Portlet, $.Portlet.Constructor = Portlet

}(window.jQuery),


function($) {
    "use strict";

    var Notification = function() {};


    Notification.prototype.notify = function(style,position, title, text) {
        var icon = 'fa fa-adjust';
        if(style == "error"){
            icon = "fa fa-exclamation";
        }else if(style == "warning"){
            icon = "fa fa-warning";
        }else if(style == "success"){
            icon = "fa fa-check";
        }else if(style == "custom"){
            icon = "md md-album";
        }else if(style == "info"){
            icon = "fa fa-question";
        }else{
            icon = "fa fa-adjust";
        }
        $.notify({
            title: title,
            text: text,
            image: "<i class='"+icon+"'></i>"
        }, {
            style: 'metro',
            className: style,
            globalPosition:position,
            showAnimation: "show",
            showDuration: 0,
            hideDuration: 0,
            autoHide: true,
            clickToHide: true
        });
    },

 
    Notification.prototype.autoHideNotify = function (style,position, title, text) {
        var icon = "fa fa-adjust";
        if(style == "error"){
            icon = "fa fa-exclamation";
        }else if(style == "warning"){
            icon = "fa fa-warning";
        }else if(style == "success"){
            icon = "fa fa-check";
        }else if(style == "custom"){
            icon = "md md-album";
        }else if(style == "info"){
            icon = "fa fa-question";
        }else{
            icon = "fa fa-adjust";
        }
        $.notify({
            title: title,
            text: text,
            image: "<i class='"+icon+"'></i>"
        }, {
            style: 'metro',
            className: style,
            globalPosition:position,
            showAnimation: "show",
            showDuration: 0,
            hideDuration: 0,
            autoHideDelay: 5000,
            autoHide: true,
            clickToHide: true
        });
    },

    Notification.prototype.confirm = function(style,position, title) {
        var icon = "fa fa-adjust";
        if(style == "error"){
            icon = "fa fa-exclamation";
        }else if(style == "warning"){
            icon = "fa fa-warning";
        }else if(style == "success"){
            icon = "fa fa-check";
        }else if(style == "custom"){
            icon = "md md-album";
        }else if(style == "info"){
            icon = "fa fa-question";
        }else{
            icon = "fa fa-adjust";
        }
        $.notify({
            title: title,
            text: 'Are you sure you want to do nothing?<div class="clearfix"></div><br><a class="btn btn-sm btn-white yes">Yes</a> <a class="btn btn-sm btn-danger no">No</a>',
            image: "<i class='"+icon+"'></i>"
        }, {
            style: 'metro',
            className: style,
            globalPosition:position,
            showAnimation: "show",
            showDuration: 0,
            hideDuration: 0,
            autoHide: false,
            clickToHide: false
        });

        $(document).on('click', '.notifyjs-metro-base .no', function() {

          $(this).trigger('notify-hide');
        });
        $(document).on('click', '.notifyjs-metro-base .yes', function() {
          
          alert($(this).text() + " clicked!");
         
          $(this).trigger('notify-hide');
        });
    },
    
    Notification.prototype.init = function() {

    },
    
    $.Notification = new Notification, $.Notification.Constructor = Notification
}(window.jQuery),

function($) {
    "use strict";

    var Components = function() {};

    
    Components.prototype.initTooltipPlugin = function() {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip()
    },

   
    Components.prototype.initPopoverPlugin = function() {
        $.fn.popover && $('[data-toggle="popover"]').popover()
    },

    
    Components.prototype.initCustomModalPlugin = function() {
        $('[data-plugin="custommodal"]').on('click', function(e) {
        	Custombox.open({
                target: $(this).attr("href"),
                effect: $(this).attr("data-animation"),
                overlaySpeed: $(this).attr("data-overlaySpeed"),
                overlayColor: $(this).attr("data-overlayColor")
            });
        	e.preventDefault();
        });
    },

   
    Components.prototype.initNiceScrollPlugin = function() {
       
        $.fn.niceScroll &&  $(".nicescroll").niceScroll({ cursorcolor: '#98a6ad',cursorwidth:'6px', cursorborderradius: '5px'});
    },

    
    Components.prototype.initSlimScrollPlugin = function() {
       
        $.fn.niceScroll &&  $(".slimscroll-noti").slimScroll({ position: 'right',size: "5px", color: '#98a6ad',height: '230px',wheelStep: 10});
    },

   
    Components.prototype.initRangeSlider = function() {
        $.fn.slider && $('[data-plugin="range-slider"]').slider({});
    },

    
    Components.prototype.initSwitchery = function() {
        $('[data-plugin="switchery"]').each(function (idx, obj) {
            new Switchery($(this)[0], $(this).data());
        });
    },
   
    Components.prototype.initMultiSelect = function() {
        if($('[data-plugin="multiselect"]').length > 0)
            $('[data-plugin="multiselect"]').multiSelect($(this).data());
    },


     Components.prototype.initPeityCharts = function() {
        $('[data-plugin="peity-pie"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; 
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; 
            $(this).peity("pie", {
                fill: colors,
                width: width,
                height: height
            });
        });
        
         $('[data-plugin="peity-donut"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; 
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; 
            $(this).peity("donut", {
                fill: colors,
                width: width,
                height: height
            });
        });

         $('[data-plugin="peity-donut-alt"]').each(function(idx, obj) {
            $(this).peity("donut");
        });

        
         $('[data-plugin="peity-line"]').each(function(idx, obj) {
            $(this).peity("line", $(this).data());
         });

       
         $('[data-plugin="peity-bar"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; 
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; 
            $(this).peity("bar", {
                fill: colors,
                width: width,
                height: height
            });
         });
     },

    Components.prototype.initCounterUp = function() {
        var delay = $(this).attr('data-delay')?$(this).attr('data-delay'):100; 
        var time = $(this).attr('data-time')?$(this).attr('data-time'):1200; 
         $('[data-plugin="counterup"]').each(function(idx, obj) {
            $(this).counterUp({
                delay: 100,
                time: 1200
            });
         });
     },




    Components.prototype.init = function() {
        var $this = this;
        this.initTooltipPlugin(),
        this.initPopoverPlugin(),
        this.initNiceScrollPlugin(),
        this.initSlimScrollPlugin(),
        this.initCustomModalPlugin(),
        this.initRangeSlider(),
        this.initSwitchery(),
        this.initMultiSelect(),
        this.initPeityCharts(),
        this.initCounterUp(),

        $.Portlet.init();
    },

    $.Components = new Components, $.Components.Constructor = Components

}(window.jQuery),

function($) {
    "use strict";
    $.Components.init();
}(window.jQuery);




