/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-scrollspy.js, bootstrap-affix.js, bootstrap-dropdown.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),
!function($){function ScrollSpy(element,options){var process=$.proxy(this.process,this),$element=$(element).is("body")?$(window):$(element),href;this.options=$.extend({},$.fn.scrollspy.defaults,options);this.$scrollElement=$element.on("scroll.scroll-spy.data-api",process);this.selector=(this.options.target||(href=$(element).attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,"")||"")+" .main-nav li:not(.top) > a";this.$body=$("body");this.refresh();this.process()}ScrollSpy.prototype={constructor:ScrollSpy, refresh:function(){var self=this,$targets;this.offsets=$([]);this.targets=$([]);$targets=this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data("target")||$el.attr("href"),$href=/^#\w/.test(href)&&$(href);return $href&&$href.length&&[[$href.offset().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0]);self.targets.push(this[1])})},process:function(){var scrollTop= this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i;if(scrollTop>=maxScroll)return activeTarget!=(i=targets.last()[0])&&this.activate(i);for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])},activate:function(target){var active, selector;this.activeTarget=target;$(this.selector).parent(".active").removeClass("active");selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]';active=$(selector).parent("li").addClass("active");if(active.parent(".dropdown-menu").length)active=active.closest("li.dropdown").addClass("active");active.trigger("activate")}};var old=$.fn.scrollspy;$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data("scrollspy"),options=typeof option== "object"&&option;if(!data)$this.data("scrollspy",data=new ScrollSpy(this,options));if(typeof option=="string")data[option]()})};$.fn.scrollspy.Constructor=ScrollSpy;$.fn.scrollspy.defaults={offset:10};$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old;return this};$(window).on("load",function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);$spy.scrollspy($spy.data())})})}(window.jQuery); !function($){var Affix=function(element,options){this.options=$.extend({},$.fn.affix.defaults,options);this.$window=$(window).on("scroll.affix.data-api",$.proxy(this.checkPosition,this));this.$element=$(element);this.checkPosition()};Affix.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var scrollHeight=$(document).height(),scrollTop=this.$window.scrollTop(),position=this.$element.offset(),offset=this.options.offset,offsetBottom=offset.bottom,offsetTop=offset.top,reset= "affix affix-top affix-bottom",affix;if(typeof offset!="object")offsetBottom=offsetTop=offset;if(typeof offsetTop=="function")offsetTop=offset.top();if(typeof offsetBottom=="function")offsetBottom=offset.bottom();affix=this.unpin!=null&&scrollTop+this.unpin<=position.top?false:offsetBottom!=null&&position.top+this.$element.height()>=scrollHeight-offsetBottom?"bottom":offsetTop!=null&&scrollTop<=offsetTop?"top":false;if(this.affixed===affix)return;if(affix)this.$element.trigger("unaffixed");else this.$element.trigger("affixed"); this.affixed=affix;this.unpin=affix=="bottom"?position.top-scrollTop:null;this.$element.removeClass(reset).addClass("affix"+(affix?"-"+affix:""))};$.fn.affix=function(option){return this.each(function(){var $this=$(this),data=$this.data("affix"),options=typeof option=="object"&&option;if(!data)$this.data("affix",data=new Affix(this,options));if(typeof option=="string")data[option]()})};$.fn.affix.Constructor=Affix;$.fn.affix.defaults={offset:0};$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var $spy= $(this),data=$spy.data();data.offset=data.offset||{};data.offsetBottom&&(data.offset.bottom=data.offsetBottom);data.offsetTop&&(data.offset.top=data.offsetTop);$spy.affix(data)})})}(window.jQuery);
+function(a){"use strict";function e(d){d&&3===d.which||(a(b).remove(),a(c).each(function(){var b=f(a(this)),c={relatedTarget:this};b.hasClass("open")&&(b.trigger(d=a.Event("hide.bs.dropdown",c)),d.isDefaultPrevented()||b.removeClass("open").trigger("hidden.bs.dropdown",c))}))}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function g(b){return this.each(function(){var c=a(this),e=c.data("bs.dropdown");e||c.data("bs.dropdown",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var b=".dropdown-backdrop",c='[data-toggle="dropdown"]',d=function(b){a(b).on("click.bs.dropdown",this.toggle)};d.VERSION="3.2.0",d.prototype.toggle=function(b){var c=a(this);if(!c.is(".disabled, :disabled")){var d=f(c),g=d.hasClass("open");if(e(),!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e);var h={relatedTarget:this};if(d.trigger(b=a.Event("show.bs.dropdown",h)),b.isDefaultPrevented())return;c.trigger("focus"),d.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},d.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=f(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(c).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=g,a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+', [role="menu"], [role="listbox"]',d.prototype.keydown)}(jQuery);

/*!
 * imagesLoaded
 */
;(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded", p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}): n();return d?d.promise(g):g}})(jQuery);

/**
 * browser detect
 */
;(function(){var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!= -1)return data[i].identity}else if(dataProp)return data[i].identity}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionSearchString);if(index==-1)return;return parseFloat(dataString.substring(index+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"}, {prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla", versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();window.jQuery.client={os:BrowserDetect.OS,browser:BrowserDetect.browser}})();

var less1080;
var fixedOffset;
var myScroll;
var navFixed = false;
var headerHeight;
var topOffset,
    pagesCordsGathered = false,
    inview = false;

var config = {
    autoplay: false,
    introWait: 1000,
    introTimeout: {},
    preloader: {},
    pager: {}
};
$(document).ready(function(){
    var headerHeight = parseInt($('#header').outerHeight(true), 10),
        navHeight = isNaN(parseInt($('#nav').height(), 10)) ? 0 : parseInt($('#nav').outerHeight(), 10),
        subNavHeight = isNaN(parseInt($('.subnav').height(), 10)) ? 0 : parseInt($('.subnav').outerHeight(), 10),
        overallBarHeight = headerHeight + navHeight + subNavHeight;

    $('#header').on('affixed', function(){
        $('#nav, #header, .subnav, #bottom').addClass('fixed');

        if ($('.subnav').length == 0){
          $('body').addClass('no-subnav');
        }
        if ($('#nav').length == 0){
          $('body').addClass('no-nav');
        }

        $('#container').css('padding-top', overallBarHeight);

        $('#header.fixed h1 a').hover(function(){
            var marginleft = ($('> #hello', this).width() - $('> span.page', this).width());
            $('> span.icon-home', this).css('margin-left', marginleft);
        }, function(){
            $('> span.icon-home', this).css('margin-left', 0);
        });
    }).on('unaffixed', function(){
        $('#nav, #header, .subnav, #bottom').removeClass('fixed');
        $('body').removeClass('no-subnav no-nav');
        $('#container').css('padding-top', 0);

        $('#header h1 a').unbind('hover');
    });

    headerHeight = $('.subnav').length ? $('#header').height() + $('.subnav').outerHeight(true) : $('#header').height();

    // Load high-resolution images for supported devices
    var devicePixelRatio = ( ( window.devicePixelRatio && window.devicePixelRatio > 1 ) ? window.devicePixelRatio : 1 );

    if(devicePixelRatio > 1){
        $('img').each(function(index) {
            if($(this).attr('data-hires') == 'true'){
                var src = $(this).attr('src');
                var ratio_pos = src.lastIndexOf('x1.');

                if(ratio_pos != -1){
                    var width = $(this).width();
                    var height = $(this).height();
                    $(this).attr('width', width);
                    $(this).attr('height', height);

                    src = src.substr(0,ratio_pos) + 'x2' + src.substr(ratio_pos+2);
                    $(this).attr('src', src);
                }
            }
        });
    }

    fullscreenHero();
    // initScrollLinks();
    initLastClass();
    //initGallery();
    //initShareCommas();
    initFontReplacement();

    initAccordian();
    initTabModule();
    carouselCaption();
    carouselHeroQuote();
    // carouselTicker();
    carouselHero();
    carouselSlab();
    calendarFilter();
    expandSub();
    exhibitionsCarousel();
    checkHash();
    initSearch();
    landingBlocks();
    externalLinks();
    initToggle();
    initTwitterModule();
    initBodyText();
    fancyTransitions();
    initSpacesLanding();
    initSpacesFilter();
    subscribeForm();
    //initTopBar();
    resizeFunctions();
    vertAlignSubnav();
    //initIdeaCity();
    //fbLikeBox();

    var rtime = new Date(1, 1, 2000, 12,00,00);
    var timeout = false;
    var delta = 100;

    $(window).resize(function(){
        rtime = new Date();
        if (timeout === false) {
            setTimeout(resizeend, delta);
            timeout = true;
        }
        if(isTablet() || ($.browser.msie && $.browser.version < 10)){return;}
        //initTopBar();
    }).resize();

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;

            //set resize functions
            getOffset();
            if( !($.browser.msie && $.browser.version < 9) ){
              fullscreenHero();
            }
            vertAlignSubnav();
            resizeFunctions();
            pagesCordsGathered = false;
            initInView();
        }
    }
    //initiate topbar once for IOS
    //if(isTablet() || ($.browser.msie && $.browser.version < 10)){initTopBar();}

    //date picker
    $('.datepicker').datepicker();

    //activate fancy exhibition transitions
    /*if($('.controller-exhibitions.action-view').size() && !isTablet()){
        // mask away preloader
        config.preloader = new preloader({
            onComplete: function(){}
        });
        config.preloader.start();
    }*/

    $('body').imagesLoaded(function(){
      initInView();
      initTopBar();
    });
    $('body').on({
        //'imagesLoaded': initInView,
        'filtered': function(){
            pagesCordsGathered = false;
            //initInView();
            initTopBar();
            initScrollLinks();
        }
    });

    //custom iframe textile styling
    $('.body p:has(iframe)').each(function(){
        if($(this).next('p').hasClass('caption')){
            $(this).css('margin', 0);
        }
    });
    $('.body p:has(.body-image-right)').css('margin', 0);


    if ("onhashchange" in window) {
        $(window).bind( 'hashchange', function(e) {
            var theoffset = -(getTopBarPadding());
            checkHash(theoffset);
        });
    }


    $('.trigger-panelists').click(function(){
        $('#fade-layer, #panelists-overlay').fadeIn();
        positionModal($('#panelists-overlay'));
        $('#fade-layer').fadeTo('fast', 0.95);
        $('html, body').css('overflow', 'hidden');
        return false;
    });
    $('.trigger-participating').click(function(){
        var archiveYear = $(this).attr('data-year');
        var pathname = $('.ic-generic-page').length ? '' : '/ideascity';
        var dest = pathname + '/organizations/' + archiveYear;
        var displayed = false;

        if(!displayed){
            $.ajax({
                type: 'GET',
                url: dest,
                cache: true
            }).done(function(data) {
                var content = $(data);
                $('#org-overlay .box').html(content);
                displayed = true;
                positionModal($('#org-overlay'));

                $('#fade-layer, #org-overlay').fadeIn();
                $('#fade-layer').fadeTo('fast', 0.95);
                $('html').css('overflow', 'hidden');
            });
        }

        return false;
    });

	if( $("#social-carousel__inner").length && ( $("#social-carousel__inner").triggerHandler('configuration') === undefined ) ){
        var threevisible = ($('.social-carousel__block').outerWidth(true)*2) + $('.social-carousel__block').outerWidth();
            ml = ($(window).width() - threevisible)/2;
        $("#social-carousel__inner").carouFredSel({
            circular: false,
            infinite: false,
            items: {
                visible: 3
            },
            scroll: {
                wipe : true,
                items: 1,
                onAfter: function(){
                    $(".social-carousel__block").stop().fadeTo('fast', 0.3);
                    $(".social-carousel__block:eq(1)").stop().fadeTo('fast', 1);
                },
                easing: 'easeInOutQuint'
            },
            onCreate: function(){
                if($.browser.msie && ($.browser.version < 9)){
                    $(this).css('margin-left', ml);
                }
                $(".social-carousel__block").stop().fadeTo('fast', 0.3);
                $(".social-carousel__block:eq(1)").stop().fadeTo('fast', 1);
                $('.ticker--social .didactic').delay(5000).fadeOut();
                if( typeof FB == 'object' )
                  FB.XFBML.parse();
            },
            width: '100%',
            prev: {
                button: '.social-carousel__prev'
                //,key: 'left'
            },
            next: {
                button: '.social-carousel__next'
                //,key: 'right'
            },
            auto: false
        });
    }

    /**
     * Dynamic width dropdown menu
     */
    $('.meta .dropdown').on('show.bs.dropdown', function () {
        var content = $('.dropdown-menu > div', this);
        var contentWidth = content.outerWidth(true);
        var len = content.length;
        if ( len > 1 ){
            $('.dropdown-menu', this)[0].style.minWidth = (contentWidth*2) + 'px';
        }
    });
    /**
     * Avoid dropdown menu close when clicking inside
     */
    $('.meta .dropdown-menu .icon-x').on('click', function (e) {
        $(this).dropdown('toggle');
    });
    $(document).on('click', '.meta .dropdown-menu', function (e) {
        e.stopPropagation();
    });

});

function initIdeaCity(){

    var is_touch_device = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch;
    $('.inaccessible[title]').tooltip({
        html: true,
        placement: is_touch_device ? "top" : "mouse",
        trigger: is_touch_device ? "click" : "hover"
    });
    if( is_touch_device && $('.inaccessible').length > 0 ){
        $('html').on('touchstart', function(){
            $('.inaccessible').tooltip('hide');
        });
    }

    $('.btn-itinerary').tooltip();


    $('.trigger-filter-events').click(function(){
        //positionModal($('#filter-overlay'));
        $('#fade-layer, #filter-overlay').fadeIn();
        $('#fade-layer').fadeTo('fast', 0.95);
        $('html, body').css('overflow', 'hidden');

        return false;
    });

    $('.trigger-ticker').click(function(){
        if( $('.ticker--social').is(':visible') ){
            $('.ticker--social').slideUp();
            $('.pager-bottom').animate({
                'bottom' : 0
            }, 'easeInOutQuint');
        } else {
            $('.ticker--social').slideDown();
            $('.pager-bottom').animate({
                'bottom' : 480
            }, 'easeInOutQuint');
            if( $("#social-carousel__inner").triggerHandler('configuration') === undefined ){
                var ml = ($(window).width() - 1650)/2;
                $("#social-carousel__inner").carouFredSel({
                    circular: false,
                    infinite: false,
                    items: {
                        visible: 3
                    },
                    scroll: {
                        wipe : true,
                        items: 1,
                        onAfter: function(){
                            $(".social-carousel__block").stop().fadeTo('fast', 0.3);
                            $(".social-carousel__block:eq(1)").stop().fadeTo('fast', 1);
                        },
                        easing: 'easeInOutQuint'
                    },
                    onCreate: function(){
                        $(".social-carousel__block").stop().fadeTo('fast', 0.3);
                        $(".social-carousel__block:eq(1)").stop().fadeTo('fast', 1);
                    },
                    width: '100%',
                    prev: {
                        button: '.social-carousel__prev',
                        key: 'left'
                    },
                    next: {
                        button: '.social-carousel__next',
                        key: 'right'
                    },
                    auto: false
                });
                $('.ticker--social .didactic').delay(5000).fadeOut();
                FB.XFBML.parse();
            }
        }
        return false;
    });

}

function resizeFunctions() {
    if($('body').hasClass('less1080')){
        $('.less1080.action-index #nav .expand-sub > .add-to-cal').unbind('click').removeClass('selected');
        initScrollLinks();
        less1080 = true;
    } else {
        expandSub();
        initScrollLinks();
        less1080 = false;
    }

    if( isTablet() ){
        $('body').addClass('touch');
        $('body').removeClass('no-press');
    } else {
        $('body').addClass('no-press');
        $('body').removeClass('touch');
    }
}

function vertAlignSubnav(){
    if( less1080 ){
        $('#nav .main-nav > li > a').each(function(){
            var $this = $(this);
            $this.css({
                'padding-top' : (($this.parent().height() - $this.height())/2),
                'padding-bottom' : (($this.parent().height() - $this.height())/2)
            });
        });
    } else {
        $('#nav ul > li > a[style^=padding]').css({
            'padding-top' : 0,
            'padding-bottom' : 0
        });
    }
}

function subscribeForm(){
    if( $('#subscribe-form').size() ){
        $('#subscribe-form form').submit(function(){
            var $this = $(this);
            $this.find('.submit input').attr('disabled', 'disabled');
            $.post($this.attr('action'), $this.serialize(), function(data) {
                var divs = $(data).filter(function(){ return $(this).is('div#container'); });
                $('#subscribe-message').html(divs.html());
                $this.find('.submit input').removeAttr('disabled');
            });
            return false;
        });
    }
}

function initSpacesFilter(){
    var expanded = false;
    var easing   = 'easeInOutQuint';
    var dur      = 500;
    $('.map_q-wrapper #toggle').click(function(){
        if( !expanded ){
            $('.map_q-wrapper #right').animate({
                'margin-right' : -565
            }, dur, easing);
            $('.map_q-wrapper').addClass('collapsed');
            expanded = true;
        } else {
            $('.map_q-wrapper #right').animate({
                'margin-right' : 0
            }, dur, easing);
            $('.map_q-wrapper').removeClass('collapsed');
            expanded = false;
        }
        return false;
    });
}

function initFontReplacement(){
    //replace din font with arial if Windows
    if( $.client.os.toLowerCase() == 'windows' ){
        $('body').addClass('os-win');
        var selectors = 'p:visible, a:visible, li:visible, em:visible, strong:visible, h1:visible, h2:visible, h3:visible, h4:visible, h5:visible, h6:visible, address:visible, span:visible, .date-range:visible, td:visible, .meta:visible, label:visible, .meta-sub:visible, .sub:visible';
        //var selectors = ['p', 'a', 'li', 'em', 'strong', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'span', '.date-range', 'td', '.meta', 'label'];
        var filterOut = 'td > a, .section h1, .section h2, .section h3, .section h4, .section h5';
        $(selectors).not(filterOut).each(function(i){
            var $this    = $(this);
            var pixels   = $this.css('font-size').length > 0 ? $this.css('font-size').replace('px', '') : 0;
            var fontsize = parseInt(pixels, 10);
            var fontfam  = $this.css('font-family');
            if( (fontsize <= 16) ){
                //serve sans-serif font for body copy
                if( fontfam.indexOf('Bold') > -1 ){
                    $this.addClass('sansbold');
                } else if ( fontfam.indexOf('Italic') > -1 ){
                    $this.addClass('sansitalic');
                } else if ( fontfam.indexOf('Din') > -1 ) {
                    $this.addClass('sans');
                }
            }
        });

    }
}

function initSpacesLanding(){

    if($('.controller-spaces.action-landing').size()){
        $('#spaces-overlay, .top-tile, .center-tile').css('opacity', 0);
        $('#section-spaces').append('<img src="/img/loader_asd.gif" class="loader" width="64" height="64"/>');
        function random_compare(a, b){
            var i = Math.round(Math.random());
            if(i == 0){
                return -1;
            }
            return 1;
        }

        $.get('spaces/refresh/index.html', null, function(data){
            spaces = $.evalJSON(data);
            spaces = spaces.sort(random_compare);
            newspaces = Array();
            for (var i=0; i < spaces.length; i++) {
                if(spaces[i]['Space']['grid'] != null && spaces[i]['Space']['skip'] != 1){
                    newspaces.push(spaces[i]);
                }
            }
            spaces = newspaces.slice(0, 20);
            for (var i=0; i < spaces.length; i++) {
                html = '<li class="photo-tile-' + (i+1) + '">';
                    html += '<a href="/artspaces/view/' + spaces[i]['Space']['slug'] + '">';
                        html += '<img src="' + spaces[i]['Space']['grid'] + '" alt="">';
                        if(spaces[i]['Space']['subtitle'] != null){
                            html += '<span class="body-reveal"><strong>' + spaces[i]['Space']['name'] + '</strong> ' + spaces[i]['Space']['subtitle'] + '</span>';
                        }
                        else{
                            html += '<span class="body-reveal"><strong>' + spaces[i]['Space']['name'] + '</strong></span>';
                        }
                    html += '</a>';
                html += '</li>';

                $('#spaces-photo-tiles').append(html);
                $('.photo-tile-' + (i+1)).delay(i*50).fadeTo('fast', 1);
            };
            $('#spaces-photo-tiles li').css('opacity', 0);
        }).complete(function(){

            $('.loader').fadeOut('fast');
            $('#spaces-overlay').fadeTo('slow', 1, function(){
                $('.top-tile, .center-tile').fadeTo('slow', 1);
            });

            $('.photo-tiles img').imagesLoaded(function(){
                $(window).resize(function(){

                    var tilePos = [];
                    $('.photo-tiles li').show();
                    $('.photo-tiles li').each(function(i){
                        var $this = $(this);
                        tilePos[i] = $(this).position();
                        tilePos[i]['top2'] = $(this).position().top + $(this).height();
                        tilePos[i]['left2'] = $(this).position().left + $(this).width();
                        if(tilePos[i]['top'] > 560){
                            $(this).hide();
                        }
                        if($this.find('.body-reveal').height() < 73){
                            var diff = 73 - $this.find('.body-reveal').height();
                            $this.find('.body-reveal').css('padding-top', 45 + diff);
                        } else {
                            $this.find('.body-reveal');
                        }

                    });

                    var len = tilePos.length;
                    var theEvent = isTablet() === true ? 'click' : 'mouseover';
                    $('#spaces-overlay').bind(theEvent, function(e){
                        var mouseX, mouseY;

                        if(e.offsetX) {
                            mouseX = e.offsetX;
                            mouseY = e.offsetY;
                        } else if(e.pageX) {
                            mouseX = e.pageX;
                            mouseY = e.pageY - 196;
                        }
                        for (var i = 0; i < len; i++ ){

                            if(
                                (mouseX > tilePos[i].left && mouseX < tilePos[i].left2) &&
                                (mouseY > tilePos[i].top && mouseY < tilePos[i].top2)
                            ){
                                var ind = i+1;
                                if( !$('.photo-tile-' + ind).hasClass('hover') ){
                                    $('.photo-tiles li').removeClass('hover');
                                    $('.photo-tile-' + ind).addClass('hover');
                                    if($.browser.msie && ($.browser.version < 9)){
                                        $('.photo-tile-' + ind + ' .body-reveal').css('opacity', 0);
                                        $('.photo-tile-' + ind + ' .body-reveal').css('filter', '');
                                    }
                                }
                            }

                        }
                    });

                }).resize();
            });

            $('.photo-tiles').mouseleave(function(){
                $('.photo-tiles li').removeClass('hover');
                if($.browser.msie && ($.browser.version < 9)){
                    $('.photo-tiles .body-reveal').css('opacity', 0);
                }
            });

        });
    }
}

// All internal links run a mask animation before the link is called.
function fancyTransitions(){
    var bgcolor  = $('#container > .pager a').css('background-color');
    var duration = 500;
    var doit;
    var expanded = false;
    var easing   = 'easeInOutQuint';
    var dur      = 250;

    $('.trigger-itinerary').on({
        click: function(){
            $('.overlay-itinerary').stop().slideToggle(dur, easing);

            return false;
        }
    });

    // all links
    $("#container > .pager > a").each(function(idx, item) {

        // some links behave normally
        if ($(this).attr("target") == "_blank") return;
        if ($(this).attr("href") == "#") return;
        if (item.href.indexOf( "mailto" ) != -1) return;

        if($('.pager a').size() > 1){ $('.prev .overlaywrapper').css('right', '-54px'); }

        // assign action
        $(item).on({
            /*click : function(){
                if($('.controller-exhibitions').size()){
                    // open link after preloader transitions in
                    if( $(this).hasClass('prev') ){
                        config.preloader.transitionIn($(this).attr("href"), 'prev');
                    } else if( $(this).hasClass('next') ) {
                        config.preloader.transitionIn($(this).attr("href"), 'next');
                    }

                    // defer default action
                    return false;
                }
            },*/
            mouseenter : function(){
                var $this = $(this);
                doit = setTimeout(function(){
                        if(!expanded ){
                            expanded = true;
                            if( !$this.hasClass('trigger-itinerary') ){
                                $('.overlaywrapper').slideUp(dur, easing);
                            }
                            $this.find('.overlaywrapper').stop().slideDown(dur, easing);

                            if( $this.hasClass('prev') ){
                                $this.siblings('a').fadeTo('fast', 0.4);
                                $this.fadeTo('fast', 1);
                            } else if( $this.hasClass('next') ) {
                                $this.siblings('a').fadeTo('fast', 0.4);
                                $this.fadeTo('fast', 1);
                            } else {
                                $this.siblings('a').fadeTo('fast', 0.4);
                                $this.fadeTo('fast', 1);
                            }
                            /*$('.pager')
                                .removeClass('hover')
                                .addClass('hover');*/
                            duration = 0;
                        }
                }, duration);
            },
            mouseleave: function(){
                clearTimeout(doit);
                var $this = $(this);
                if(expanded){
                    //$('.pager').removeClass('hover');
                    expanded = false;

                    if( !$this.hasClass('trigger-itinerary') ){
                        $('.overlaywrapper').slideUp(dur, easing);
                    }
                }
            }
        });

    });

    $('#container > .pager').mouseleave(function(){
        //$('#container > .pager').removeClass('hover');
        clearTimeout(doit);
        expanded = false;
        duration = 500;
        $(this).find('a').fadeTo('fast', 1);
        if( $('.overlaywrapper').hasClass('overlay-itinerary') ){
            $('.overlaywrapper').slideUp(dur, easing);
        }
    });
}

// user agent functions
function isIpad() {
    return !!navigator.userAgent.match(/iPad/i);
}

function isIphone () {
    return !!navigator.userAgent.match(/iPhone/i);
}

function isIpod() {
    return !!navigator.userAgent.match(/iPod/i);
}
function isAndroid() {
    return !!navigator.userAgent.match(/Android/i);
}

function isAppleIos() {
  return (isIpad() || isIphone() || isIpod());
}
function isTablet() {
  return (isIpad() || isIphone() || isIpod() || isAndroid());
}
function isNotOldIE(){
    return !($.browser.msie && $.browser.version < 10);
}

function initBodyText(){
    var $body = $('.body');
    if( $body.size() ){
        //if a floated right content is preceded by another
        //floated right content, clear right the latter content
        $('.body-image-right, blockquote').each(function(){

            var prevDiv = $(this).parent().prev();

            if( prevDiv.is('blockquote') ||
                prevDiv.find('.body-image-right').size() ){
                    $(this).css('clear', 'right');
            }

        });
    }
    var $bodyExpandButton = $('.trigger--body-expand');
    if( $bodyExpandButton.size() ){
        $bodyExpandButton.click(function(e){
            e.preventDefault();
            $body.css('height', 'auto').addClass('body--expanded');
            $bodyExpandButton.hide();
        });
    }
}

function initTwitterModule(){
    if ( $('.buzz').size() > 1 && !$('body').hasClass('pass-follow') ){
        $('.buzz-tw').after('<div class="buzz-pager clearfix"><a href="#" class="prev-buzz">previous</a><a href="#" class="next-buzz">next</a></div>');
        $('.buzz:not(:eq(0))').hide();
        $('.buzz:eq(0)').show();
        var buzzLength = $('.buzz').size()-1;
        var currentBuzz = 0;

        $('.prev-buzz').click(function(){
            if( currentBuzz === 0 ){
                currentBuzz = buzzLength;
            } else {
                currentBuzz--;
            }

            $('.buzz, .buzz-tw').hide();
            $('.buzz').eq(currentBuzz).fadeIn();
            $('.buzz-tw').fadeIn();

            return false;
        });

        $('.next-buzz').click(function(){
            if( currentBuzz === buzzLength ){
                currentBuzz = 0;
            } else {
                currentBuzz++;
            }

            $('.buzz, .buzz-tw').hide();
            $('.buzz').eq(currentBuzz).fadeIn();
            $('.buzz-tw').fadeIn();

            return false;
        });
    }
}

function initToggle(){
    if($('.toggle-container').size()){
        $('.toggle-container').hide();

        $('.trigger-toggle').click(function(){
            $(this).parent().prev('.toggle-container').fadeToggle();
            var text = $(this).text();
            $(this).text( text == "Learn More" ? "Close" : "Learn More" );

            return false;
        });
    }
}

function externalLinks(){
    $('a[target="_blank"][href!="http://kettlenyc.com"][href^=http]', $('#header, #top, #footer')).each(function(index){
        $(this).append('<span class="icon icon-external"></span>');
        $(this).addClass('link-external');
    });
    $('a[target="_blank"][href!="http://kettlenyc.com"][href^=http]', $('.sub-content-left__links')).each(function(index){
        if($(this).height() > parseInt($(this).css('line-height'), 10)){
            $(this).addClass('twoline');
        }
    });
}

function fbLikeBox(){
    var fbBox = $('#fb-box');
    var less1024 = false;
    if(fbBox.size()){
        $(window).resize(function(){
            if($(window).width() > 1024){
                if(less1024 === true){
                    less1024 = false;
                    fbBox.html('<div class="fb-like-box" data-href="http://www.facebook.com/newmuseum" data-width="310" data-height="421" data-show-faces="true" data-border-color="white" data-stream="true" data-header="true"></div>');
                    FB.XFBML.parse(document.getElementById('fb-box'));
                }
            } else {
                if(less1024 === false){
                    less1024 = true;
                    fbBox.html('<div class="fb-like-box" data-href="http://www.facebook.com/newmuseum" data-width="247" data-height="421" data-show-faces="true" data-border-color="white" data-stream="true" data-header="true"></div>');
                    FB.XFBML.parse(document.getElementById('fb-box'));
                }
            }
        }).resize();
    }
}

function landingBlocks(){
    var $container     = $('.landing-blocks');
    var $containerImgs = $('.landing-blocks img');
    var $blocks        = $('.landing-block');
    var colWidth       = $('.landing-block').width();

    if($container.hasClass('fluid')){
        $containerImgs.imagesLoaded(function(){
            $container.masonry({
                itemSelector : '.landing-block',
                columnWidth: function(containerWidth){
                    return containerWidth / 3;
                },
                isAnimated: true,
                animationOptions: {
                    easing: 'easeInOutQuint'
                }
            });
        });
    } else {
        $containerImgs.imagesLoaded(function(){
            $container.masonry({
                itemSelector : '.landing-block',
                columnWidth : colWidth,
                gutterWidth: 21
            });
        });
    }
    $('.landing-block a[href^="http"], .slab-carousel a[href^="http"], .hero-carousel a[href^="http"], .pr-entry li a[href^="http"]').attr('target', '_blank');
}

function initSearch(){
    $('.search-trigger').click(function(){
        positionModal($('#search-overlay'));
        $('#fade-layer, #search-overlay').fadeIn();
        $('#fade-layer').fadeTo('fast', 0.95);

        return false;
    });

    $('.trigger-close-button, #fade-layer').click(function(){
        $('#fade-layer, .overlay, .fancybox').fadeOut();
        $('html').removeAttr('style');

        return false;
    });
    $('.glow input').click(function(e){
        e.stopPropagation();
    });

    if( $('.lt-ie10').length ){
        var placeholders = [];
        $('input[placeholder]').each(function(i, el){
            placeholders[i] = $(el).attr('placeholder');
            $(el).val(placeholders[i]);
            $(el).focus(function(){
                if($(el).val() == placeholders[i]){
                    $(el).val('').removeClass('placeholder');
                }
            }).blur(function(){
                if($(el).val() == ''){
                    $(el).val(placeholders[i]).addClass('placeholder');
                }
            });
        });
    }

    $(document).keyup(function(e){
        if(e.keyCode == 27){
            $('.trigger-close-button').click();
            return false;
        }
    });
}

function positionModal(el){
    var docheight    = $(document).height();
    var scrollOffset = $(window).scrollTop();
    var fromtop      = $(window).height()/8;
    var windowwidth  = $(window).width();
    var windowheight = $(window).height();
    var modalwidth   = el ? el.width() : $('.modal-layer').outerWidth();
    var modalheight  = el ? el.height() : $('.modal-layer').height();

    $('#fade-layer').height(docheight);
    el.css({
        //'top': scrollOffset + fromtop,
        'left' : (windowwidth - modalwidth)/2,
        'top': (windowheight - modalheight)/2
    });
}

function fullscreenHero(){

    if($('.fs-hero').size()){

        var headerHeight = $('.ic-generic-page').length ? 100 : 121;
        var wHeight      = $(window).height();
        var wWidth       = $(window).width();
        var topBarHeight = $('#top').outerHeight(true) + headerHeight + $('.subnav').outerHeight(true);
        var heroHeight   = wHeight - topBarHeight;
        var heroar       = wWidth / heroHeight;
        var fscontent    = $('.fs-hero *');
        var fsimgurl     = $('.fs-hero').size() ? $('.fs-hero').attr('data-img') : null;
        var fsimg;

        $('.fs-hero').height(heroHeight);
        //attach fullscreen image if its IE9 or less
        if( $.browser.msie && $.browser.version < 9 ){
            fsimg = $('<img src="'+ fsimgurl +'" alt="">').prependTo('.fs-hero');
            fsimg.removeAttr('style');
            fscontent.hide();
            stretchHero(fsimg, function(){ fscontent.fadeIn(); });
            /*$(window).scroll(function(){
                var pos = $(window).scrollTop();
                fsimg.css('top', newPos(50, wHeight, pos, wHeight, -0.06));
            });*/
        } else {
        //use fixed background with parallax on modern browsers
            /*if( !$('body').hasClass('less1080') ){
                $(window).scroll(function(){
                    var pos = $(window).scrollTop();
                    $('.fs-hero').css('background-position', newPos(50, wHeight, pos, wHeight, -0.03));
                });
            }*/
        }

    }

}

function stretchHero(src, callback){
    var wHeight      = $(window).height();
    var wWidth       = $(window).width();
    var headerHeight = $('#top').outerHeight(true) + $('#header').outerHeight(true) + $('.subnav').outerHeight(true);
    var heroHeight   = wHeight - headerHeight;
    var heroar       = wWidth / heroHeight;
    var fsimg        = src;
    fsimg.imagesLoaded(function(){

        if (typeof callback == 'function') { // make sure the callback is a function
            callback.call(this); // brings the scope to the callback
        }

        var fsimgw  = fsimg.width();
        var fsimgh  = fsimg.height();
        var fsimgar = fsimgw / fsimgh;

        //if image aspect ratio is less than hero aspect ratio
        if((fsimgar < heroar) || (heroar > 2)) {
            fsimg.width('100%');
            var fsimgrh = fsimg.height();
            fsimg.css({
                'top' : '50%',
                'margin-top' : -(fsimgrh/2)
            });
        } else {
            fsimg.height('100%');
            var fsimgrw = fsimg.width();
            fsimg.css({
                'left' : '50%',
                'margin-left' : -(fsimgrw/2)
            });
        }

    });
}

function newPos(x, windowHeight, pos, adjuster, inertia){
    return ((-((windowHeight + pos) - adjuster) * inertia) + 50)  + "%";
}

function expandSub(){
    $('.expand-sub').parent().addClass('jq-dd');
    //if( $('.expand-sub .add-to-cal').parents('#nav').length && $(window).width() < 1080 ) return;
    $('.expand-sub .add-to-cal').unbind('click').click(function(e){
        var $notThis = $('.expand-sub .add-to-cal').not(this);
        var $this = $(this);
        $notThis.next('ul').slideUp();
        $notThis.removeClass('selected');
        $this.next('ul').slideToggle();
        $this.toggleClass('selected');

        return false;
    });
}

function calendarFilter(){
    var ddtimeout;
    var showing = [];
    var mp = 0;
    var l = ($('.button-dropdown').length)*2; //multiply by 2 for fixed nav

    $('.dd-container').addClass('jq-dd');
    $('.button-dropdown').each(function(index){
        showing[index] = false;

        $(this).click(function(){
            var index = $('.button-dropdown').index(this);
            if(showing[index]){
                clearTimeout(ddtimeout);
                $('.dd-container .dropdown').slideUp(function(){
                    showing[index] = false;
                });
                $('.dd-container').removeClass('focus-dd');
            } else {

                var windowwidth = $(window).width();
                var offsetleft = $(this).offset().left;

                closeCalendarFilter();

                showing[index] = true;
                $(this).parents('.dd-container').addClass('focus-dd');
                $(this).find('.dropdown').slideDown();

                /*if($(this).hasClass('dd-full-width')){
                    $(this).find('.dropdown').css({
                        width: windowwidth,
                        left: -(offsetleft)
                    });
                } else {
                    $(this).find('.dropdown').css({
                        width: '100%',
                        left: 'auto'
                    });
                }*/
            }
            return false;
        }).mouseleave(function(){
            ddtimeout = setTimeout(function(){
                /*$('.dd-container').removeClass('focus-dd');
                showing[index] = false;*/
                closeCalendarFilter();
            }, 700);
        }).mouseenter(function(){
            clearTimeout(ddtimeout);
        });
    });
    $('.button-dropdown .dropdown').click(function(e){
        e.stopPropagation();
    });


    $('.dd-close').click(function(){
        closeCalendarFilter();

        return false;
    });

    /*
    $('html, #container').click(function(e){
        e.stopPropagation();
        closeCalendarFilter();
    });
    */

    function closeCalendarFilter(){
        for(var i = 0; i < l; i++){
            showing[i] = false;
        }
        clearTimeout(ddtimeout);
        $('.dd-container .dropdown').slideUp();
        $('.dd-container').removeClass('focus-dd');
    }

    $('.dd-container .next').click(function(e) {
        $this = $(this);

        var update = function(data, textStatus, xhr){
            var tables = $this.parents('#the-calendar').find('.dropdown-3');
            var offset = $this.parents('#the-calendar').find('.dropdown-3').attr('data-month-offset');
            $this.parents('#the-calendar').find('.dropdown-3').attr('data-month-offset', parseInt(offset, 10)+2);

            $(tables).fadeOut(null, function(){
                $(this).html(data).fadeIn();
            });
        };

        var offset = $('.dd-container .dropdown-3').attr('data-month-offset');
        $.get('/events/calendar/' + (parseInt(offset, 10)+2).toString(), update);
        return false;
    });

    $('.dd-container .prev').click(function(e) {
        $this = $(this);

        var update = function(data, textStatus, xhr){
            var tables = $this.parents('#the-calendar').find('.dropdown-3');
            var offset = $this.parents('#the-calendar').find('.dropdown-3').attr('data-month-offset');
            $this.parents('#the-calendar').find('.dropdown-3').attr('data-month-offset', parseInt(offset, 10)-2);

            $(tables).fadeOut(null, function(){
                $(this).html(data).fadeIn();
            });
        };

        var offset = $('.dd-container .dropdown-3').attr('data-month-offset');
        $.get('/events/calendar/' + (parseInt(offset, 10)-2).toString(), update);
        return false;
    });

}

function carouselHeroQuote(){
    if($('.quote-carousel').size()){
        $('.quote-carousel').carouFredSel({
            height: 2000,
            direction: 'up',
            items: 1,
            align: false,
            scroll: {
                duration: 1000,
                easing: 'easeInOutQuint',
                pauseOnHover : true
            },
            auto: {
                pauseDuration: 7000
            },
            prev : {
                button: '#hero .carousel-pager a.prev',
                key: 'left'
            },
            next : {
                button: '#hero .carousel-pager a.next',
                key: 'right'
            }
        });
        if( ($('.hero-sr').size() > 0) && ( $.browser.msie && $.browser.version < 9 ) ){
            var url = $('.hero-sr').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace(/\"/g, '');
            var bgImg = $('<img />');
            $('.hero-sr').css('background-image','none');
            bgImg.hide();
            bgImg.bind('load', function(){
                var height = $(this).height();
            });
            $('.hero-sr').prepend(bgImg);
            bgImg.attr('src', url);
            stretchHero(bgImg, function(){
                bgImg.fadeIn();
            });
        }
    }
}

function carouselTicker(){
    if( $('.ticker ul').size() ){
        $('.ticker ul').carouFredSel({
            height: 2000,
            direction: 'up',
            items: 1,
            align: false,
            scroll: {
                duration: 1000,
                easing: 'easeInOutQuint'
            },
            auto: {
                pauseDuration: 5000
            }
        });
    }
}
function carouselHero(){
    if($('.hero-carousel').size()){
        if($('.hero-carousel li').length > 1){
            var dur            = 1000;
            var ease           = 'easeInOutQuint';
            var carouselLength = $('.hero-carousel li').length;
            var eqCarousel     = carouselLength > 1 ? carouselLength : 1;
            var animating      = false;

            //if(carouselLength <= 3){
                var $clone = $('.hero-carousel li').clone();
                var $clone2 = $('.hero-carousel li').clone();
                $('.hero-carousel ul').append($clone);
                $('.hero-carousel ul').append($clone2);
            //}

            $('.hero-carousel ul').carouFredSel({
                width: 50000,
                align: false,
                items: 1,
                scroll: {
                    wipe : true,
                    duration: dur,
                    easing: ease,
                    onBefore : function(oldItems, newItems, newSizes, duration){
                        $('.hero-carousel li').stop().fadeTo(dur , '.5', ease);
                        newItems.nextAll().eq(carouselLength-1).stop().fadeTo(dur , 1, ease);
                    }
                },
                prev : {
                    button : '.hero-carousel .carousel-pager .prev',
                    key : 'left'
                },
                next : {
                    button: '.hero-carousel .carousel-pager .next',
                    key : 'right'
                },
                onCreate : function(){
                    $('.hero-carousel li').not(':eq('+eqCarousel+')').css('opacity', 0.5);
                }
            });

            $(window).resize(function(){
                var offsetleft = $('.section:first .inner').offset().left;
                var herow = 1020;
                var offsetl = $(window).width() > 1080 ? ((herow*eqCarousel) - offsetleft + 10) : (herow*eqCarousel);
                $('.hero-carousel ul').css('margin-left', -offsetl+'px');
            }).resize();

        } else {
            $('.carousel-pager a').hide();
            $('.hero-carousel ul li').css({
                'float' : 'none',
                'margin-left' : 'auto',
                'margin-right' : 'auto'
            });
        }
    }

}

function carouselSlab(){
    var carouselLength = $('.slab-carousel li').length;
    var offsetleft = $('.section:first .inner').size() ? $('.section:first .inner').offset().left : 0;
    if(carouselLength > 4){
        $clones = $('.slab-carousel ul li').clone();
        $('.slab-carousel ul').append($('.slab-carousel ul li').clone());
        $('.slab-carousel ul').append($clones);
        $(window).resize(function(){
            var offsetleft = $('.section:first .inner').size() ? $('.section:first .inner').offset().left : 0;
            $('.slab-carousel-list').css('margin-left', (-(carouselLength)*277) + offsetleft);
            $('.slab-carousel-list').parent().css('margin-left', 0);
        }).resize();

        $('.slab-carousel').append('<div class="carousel-pager clearfix"><a href="#" class="prev" title="Previous"><span class="icon icon-leftwhite"></span></a><a href="#" class="next" title="Next"><span class="icon icon-rightwhite"></span></a></div>');

        var scrollnum;
        if(carouselLength < 7){
            scrollnum = 1;
        } else {
            if($(window).width() < 1024){
                scrollnum = 3;
            } else {
                scrollnum = 4;
            }
        }
        $('.slab-carousel ul').carouFredSel({
            width: 20000,
            align: false,
            items: scrollnum,
            scroll: {
                wipe : true,
                duration: 1000,
                easing: 'easeInOutQuint'
            },
            prev : {
                button : '.slab-carousel .carousel-pager .prev'
            },
            next : {
                button: '.slab-carousel .carousel-pager .next'
            },
            auto : false
        });
    } else {
        $('.slab-carousel ul').css({
            'width': 1110,
            'position' : 'relative',
            'margin' : '0 auto',
            'left' : 54
        });
    }
}

function carouselCaption(){

    var gc = [];
    $('.gc-container').each(function(index){
        $(this).find('.gallery-caption').carouFredSel({
            width: 791,
            height: 460,
            align: false,
            items: 1,
            scroll: {
                wipe : true,
                duration: 1000,
                easing: 'easeInOutQuint'
            },
            prev : {
                button : '.gc-container:eq('+ index +') .prev'
            },
            next : {
                button: '.gc-container:eq('+ index +') .next'
            },
            auto: false
        });
    });
}

function exhibitionsCarousel(){
    if( $('.section-carousel').size() ){
        $('.section-carousel').each(function(){
            var $this = $(this).closest('.anchors').length > 0 ? $(this).closest('.anchors') : $(this);
            var carouselLength = $this.find('.section-carousel .carousel .lightbox').length;

            if(carouselLength > 1){
                if ( $this.attr('id') == 'gallery' ){
                    var $bc = $this.find('.wrapper-carousel').clone(false, false);
                    $bc.attr('id', 'zoom-carousel');
                    $bc.insertAfter('#fade-layer').wrap('<div class="modal-layer" />');
                    $('.modal-layer').append('<a href="#" class="trigger-close-button close-button"><span class="icon icon-close"></span></a>');
                    $('.modal-layer .carousel .lightbox img').each(function(i){
                        $(this).attr('src', $(this).attr('src').replace('2000x430x1', '20000x1080x1'));
                        $(this).parent().wrapInner('<span class="lb-wrap clearfix" />');
                    });
                }

                $('.section-carousel .carousel').slick({
                  dots: false,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 1,
                  centerMode: true,
                  variableWidth: true,
                  arrows: false,
                  accessibility: false
                });
                bindExhibitionCarouselKeys();
                didacticPopup();

                $this.find('.section-carousel .carousel').on('click', '.lightbox', function(e){
                    e.preventDefault();
                    var ind = parseInt($(this).attr('data-index'), 10);
                    var once = false;

                    $('#fade-layer, .modal-layer').css('opacity', 0).fadeIn(function(){
                        if( !once ){
                            once = true;
                            $('.modal-layer .carousel img').imagesLoaded(function(){
                                $('.modal-layer .carousel img').css('max-width', $(window).width()-60);
                                $('.modal-layer .carousel .caption').css('max-width', $('.modal-layer .carousel img').width());
                                $('.modal-layer .carousel').unslick().slick({
                                  dots: false,
                                  infinite: true,
                                  speed: 300,
                                  slidesToShow: 1,
                                  centerMode: true,
                                  variableWidth: true,
                                  arrows: false,
                                  accessibility: false,
                                  onInit: (function(_this) {
                                    unbindExhibitionCarouselKeys();
                                    bindZoomCarouselKeys();
                                  })(this)
                                });
                                var item = $('.modal-layer .carousel .slick-slide');
                                item.each(function(){
                                    var wh = $(window).height()-41;
                                    var ih = $(this).height();
                                    var offset = (wh-ih)/2;
                                    $(this).css({
                                        'margin-top': offset
                                    });
                                });
                                $('.modal-layer .carousel').slickGoTo(ind);
                            });
                            $('#fade-layer, .modal-layer').fadeTo('slow', 1);
                        }
                    });

                    positionModal($('.modal-layer'));

                    $('.trigger-close-button, .modal-layer').click(function(){
                        $('.modal-layer, #fade-layer').fadeOut();
                        $('.modal-layer, #fade-layer').unbind('click');
                        unbindExhibitionCarouselKeys();
                        bindExhibitionCarouselKeys();
                        return false;
                    });

                    return false;
                });
            } else {
                console.log($this.find('.section-carousel a'));
                $this.find('.wrapper-carousel').addClass('single-carousel');
                $this.find('.wrapper-carousel a').each(function(){
                    console.log($('> img', this).attr('src'));
                    $(this).attr({
                        'href': $('> img', this).attr('src').replace('2000x430x1', '20000x1080x1'),
                        'target' : '_blank'
                    });
                });
            }
        });
    }
}
function bindExhibitionCarouselKeys(){
    $(document).keyup(function(e){
        if (e.keyCode == 37) {
           $(".section-carousel .carousel").slickPrev();
           $('#bar').stop().fadeOut();
           return false;
        }
        if (e.keyCode == 39) {
           $(".section-carousel .carousel").slickNext();
           $('#bar').stop().fadeOut();
           return false;
        }
        if(e.keyCode == 27){
            $('.trigger-close-button').click();

            return false;
        }
    });
}
function bindZoomCarouselKeys(){
    $(document).keyup(function(e){
        if (e.keyCode == 37) {
           $(".modal-layer .carousel").slickPrev();
           return false;
        }
        if (e.keyCode == 39) {
           $(".modal-layer .carousel").slickNext();
           return false;
        }
        if(e.keyCode == 27){
            $('.trigger-close-button').click();

            return false;
        }
    });
}

function unbindExhibitionCarouselKeys(){
    $(document).unbind('keyup');
}
function didacticPopup(){
    var didactic;
    var carouselOffset = $('.section-carousel').offset().top - (($(window).height() - $('.section-carousel').outerHeight(true))/2) - ($('.header.fixed').height() + $('#nav.fixed').height());
    var navHelpShowing = false;
    var $navhelp       = $('.carousel-pager > span');

    $(window).scroll(function(){
        var fromTop = $(window).scrollTop();
        if(fromTop > carouselOffset){
            if(!navHelpShowing && !isTablet()) {
                navHelpShowing = true;
                $('.carousel-pager').html($navhelp).fadeIn(function(){
                    $(this).delay(4000).fadeOut(function(){
                        $navhelp.remove();
                    });
                });
            }
        }
    });
}
/*function initGallery(){
    myScroll = new iScroll('wrapper', {
        snap: 'li',
        momentum: false,
        hScrollbar: false
    });
    $('#wrapper').width((($(window).width()-1000)/2) + 794);

    $('#prev').click(function(){
        myScroll.scrollToPage('prev', 0);
        return false;
    });
    $('#next').click(function(){
        myScroll.scrollToPage('next', 0);
        return false;
    });
}*/
function initTabModule(){

    if($('.tab-module').size()){
        var animating = false;
        var showing   = [true];
        $('.tab').hide();
        $('.tab:eq(0)').show();

        $('.tab-module > ul > li > a').click(function(){
            if(!animating){
                animating = true;
                var index = $('.tab-module li').index($(this).parent());
                $('.tab-module a').removeClass('active');
                $(this).addClass('active');

                if(!showing[index]){
                    $('.tab-module a').each(function(index){
                        showing[index] = false;
                    });
                    $('.tab').hide();
                    showing[index] = true;

                    $('.tab:eq(' + index + ')').fadeIn(function(){
                        animating = false;
                    });
                } else {
                    animating = false;
                }
            }

            return false;
        });
    }
}

function initAccordian(){
    if($('.collapsable').size()){
        var thewidth = $('.collc').width();
        var showing  = [];
        $('.collc').css('width', thewidth);
        $('.collapse-content .collc').hide();

        $('.collapsable a.option').click(function(){
            var index = $('.collapsable a.option').index($(this));

            $('.collapsable a.option').removeClass('active');
            $(this).addClass('active');

            if(!showing[index]){
                $('.collapsable a.option').each(function(i){
                    showing[i] = false;
                });
                $('.collc').hide();

                showing[index] = true;
                $('.collc-' + index).fadeIn();
            } else {
                $('.collapsable a').each(function(i){
                    showing[i] = false;
                });
                $('.collapsable a.option').removeClass('active');
                $('.collc').fadeOut();
            }

            return false;
        });
    }
}
function getOffset(){

    if($(window).width() <= 1080){
        $('body').addClass('less1080');
        if($('#nav').hasClass('fixed')){
            topOffset =  parseInt(-105 - $('.subnav').height(), 10);
        }
        less1080 = true;
    } else {
        $('body').removeClass('less1080');
        if($('#nav').hasClass('fixed')){
            topOffset = parseInt(-50 - $('.subnav').height(), 10);
        } else {
            topOffset = parseInt(-$('.subnav').height(), 10);
        }
        less1080 = false;
    }

}

function initInView(){
    var scrollOffset = getTopBarPadding(),
        scrollspyAttached = $('body').data().scrollspy == undefined ? false : true;

    if( scrollspyAttached ){
        $('body').scrollspy('refresh');
    }
    $('body').scrollspy({
        offset: scrollOffset,
        target: '#nav'
    });
    $('#nav').on('activate', function(e){
        var $this = $(e.target),
            section = $(e.target).find('> a').attr('href'),
            $section = $(section).find('.section');

        // add class if dark section in view
        if( $section.hasClass('section-dark') ){
            $('#nav').addClass('dark-nav');
        } else {
            $('#nav').removeClass('dark-nav');
        }

        // open nav dropdown when scrolled in view
        if( $('#nav .expand-sub .add-to-cal').size() && !less1080 ){
            $('#nav .expand-sub > .add-to-cal').removeClass('selected');
            $this.closest('.expand-sub').find('.add-to-cal').addClass('selected');

            $('#nav .expand-sub > ul').stop(true, true).slideUp();
            $this.closest('.expand-sub').find('ul').stop().slideDown();
        }
    });

}

var navOffset = 0;
var addOffset = 0;
function initTopBar(){

    $('#nav, #header, .subnav').affix({
        offset: {
            top: getTopBarOffset
        }
    });

    $(window).scroll(function(){
        var lastSection = $('#container .section:last-child').hasClass('section-dark') ? $('#container .section:last-child').outerHeight() : 0;
            bottomOfPage = (($(document).height()-$(window).height()) - ($('#footer').outerHeight() + $('#bottom').height() + lastSection)),
            topOfFooter = (($(document).height()-$(window).height()) - ($('#footer').outerHeight() + $('#bottom').height())),
            wscrolltop = $(window).scrollTop();

        //stick paginator to top of footer when scrolling down
        if( $('#container > .pager > a').length ) {
            if( (wscrolltop > topOfFooter) ){
                $('.pager').addClass('anchored-bottom');
                /*if( lastSection !== 0 )
                    $('.pager').css('bottom', lastSection);*/
            } else if( (wscrolltop <= topOfFooter) ) {
                $('.pager').removeClass('anchored-bottom').removeAttr('style');
            }
        }
    });

}

function initScrollLinks(){
    $('#nav .anchor a, a.to-top, .fs-hero, a[href^="#go-"]').unbind('click').click(function(){
        var dest = $(this).attr('href') || $(this).attr('data-dest'),
            scrollOffset = getTopBarPadding();

        if( $(dest).length < 1 ){
            dest = 0;
        }

        $.scrollTo( dest, {
            duration: 1000,
            offset: -(scrollOffset  - 1),
            axis: 'y',
            easing: 'easeInOutQuint',
            onAfter: function(){
                forceReflow();
            }
        });

        return false;
    });

    $('.fs-hero .type a').click(function(e){
        e.stopPropagation();
    });
}

function getTopBarPadding(){
    var headerHeight = $('#header').length ? 50 : 0,
        subnavHeight = $('.subnav').length ? 28 : 0,
        alertHeight = $('.alert').length ? $('.alert').outerHeight() : 0,
        navHeight = 0,
        additionalPadding = $('.controller-ideaevents.action-index').length ? 20 : 0;

        if( $('body').hasClass('less1080') ){
            navHeight = $('#nav').length ? 54 : 0
        }
        return headerHeight + subnavHeight + navHeight + alertHeight + additionalPadding;
}

function getTopBarOffset(){
    var topBarOffset = $('#top').outerHeight(true) + $('#header').outerHeight(true) + $('#hero').height() - 50;

    if( $('body').hasClass('less1080') ){
        return topBarOffset;
    } else {
        return topBarOffset;
    }
}


function initLastClass(){
    $('.block:odd').addClass('last');
}

function initGallery(){
    var cc         = $('#scroller').parent();
    var leftOffset = $('.inner').offset().left + parseInt($('.content').css('padding-left').replace('px',''), 10);
    if(less1080){
        cc.width(700);
    } else {
        $(window).resize(function(){
            leftOffset = $('.inner').offset().left + parseInt($('.content').css('padding-left').replace('px',''), 10);
            cc.width( ($(window).width() - leftOffset) );
        }).resize();
    }
    $("ul.carousel").jcarousel({
        scroll: 1,
        easing: 'easeInOutQuint'
    });
}

function initShareCommas(){
    var shareNum = parseInt($('#share-num').text(), 10);
    shareNum = addCommas(shareNum);

    $('#share-num').html(shareNum);
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '<em>,</em>' + '$2');
    }
    return x1 + x2;
}
function getHash(){
    var hash = window.location.hash;
    return hash.substring(1);
}
function checkHash(offset) {
    var currentHash = getHash();
    if (currentHash.length > 0) {
        if (currentHash.charAt(0) == '!') {
            var src       = '#' + currentHash.substr(1);
            var theoffset = offset;
            if($(src).size()){
                if( less1080 ) forceReflow();
                initTopBar();
                $('#nav, #header, .subnav, #bottom').addClass('fixed');

                $('#container').imagesLoaded(function(){
                    var fromtop = $(src).offset().top;
                    theoffset = theoffset !== undefined ? parseInt(theoffset, 10) : getTopBarPadding();
                    window.scrollTo(0, (parseInt(fromtop, 10) + parseInt(theoffset, 10)));
                });

            }
        }
    }
}

//iOS fix for elements losing functionality
//in fixed elements after using scrollTo
function forceReflow(){
    var removeFix;
    $('body').append($('<div></div>').addClass('iosfix'));
    $('.iosfix').remove();
}





//lightbox stuff

