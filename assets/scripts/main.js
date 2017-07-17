/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
       
        $(document).ready( function () {
              var body = $("body"),
                   navOverlay = $(".overlay"),
                   nav = $("nav#off-canvas-nav"),
                   navIcon = $("#nav-icon"),
                   subMenu = $("li.menu-item-has-children > a");
              navIcon.click(function(e) {
                  e.preventDefault();
                  $(this).toggleClass("open");
                  body.toggleClass("nav-open");
                  nav.toggleClass("open");
              });
              navOverlay.click(function() {
                  navIcon.removeClass("open");
                  body.removeClass("nav-open");
                  nav.removeClass("open");
              });
              subMenu.click(function(drop) {
                  drop.preventDefault();
                  $(this).parent().toggleClass("open");
              });


              $(window).scroll(function(){
                if ($('.hero').length !== 0) {
                    if($(window).scrollTop() >= 400) {
                      $('header.header').addClass('blue');
                    } else {
                      $('header.header').removeClass('blue');
                    }
                }
              });

              // v=I0cbrQUCHJ4

              // AIzaSyD2V_BHDg5FA-wDqe5ihKKH7pIVgEzYGIE

              // function youTubeApi() {
              //   var res;
              //   $.ajax({
              //     url: 'https://www.googleapis.com/youtube/v3/videos?id=I0cbrQUCHJ4&key=AIzaSyD2V_BHDg5FA-wDqe5ihKKH7pIVgEzYGIE&part=snippet',
              //     method: 'GET'
              //   }).done(function (result) {
              //     res = result;
              //     console.log(res);
              //     var id = 'https://www.youtube.com/watch?v=' + res.items[0].id;
              //     $('.test source').attr('src', id);

              //   });

              // }
              // youTubeApi();


              
        });

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
