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


                  var a = 0;
                  $(window).scroll(function(){
                      if ($('.hero').length !== 0) {
                          if($(window).scrollTop() >= 400) {
                            $('header.header').addClass('blue');
                          } else {
                            $('header.header').removeClass('blue');
                          }
                      }

                      var oTop = $('.big').offset().top - window.innerHeight;
                        if (a === 0 && $(window).scrollTop() > oTop) {
                          $('.big').each(function() {
                            var $this = $(this),
                              countTo = $this.attr('data-count');
                            $({
                              countNum: $this.text()
                            }).animate({
                                countNum: countTo
                              },

                              {

                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                  $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                  $this.text(this.countNum);
                                  //alert('finished');
                                }

                              });
                          });
                          a = 1;
                        }

                  });//end scroll

                $.ajax({
                  url: 'http://api.openweathermap.org/data/2.5/weather?lat=33.62&lon=-117.93&units=imperial&appid=9951bddf3af7e21abdb61ad50b4325a2',
                  method: 'GET'
                }).done( function (response) {

                  console.log(response);

                  // function jsUcfirst(string) {
                  //     return string.charAt(0).toUpperCase() + string.slice(1);
                  // }  [33.62,-117.93]

                  function icon(string) {
                    var icon;
                    switch(string) {
                      case 'Clouds':
                        icon = 'fa-cloud';
                        break;
                      case 'Clear':
                        icon = 'fa-sun-o';
                        break;
                    }
                    return icon;

                  }

                  $('.weather').append(

                    '<h5 class="white">Newport Beach <i class="fa ' + icon(response.weather[0].main) + '" aria-hidden="true"></i></h5>' +
                    '<p class="white">Forecast: ' + response.weather[0].main +
                    '<br>T: ' + response.main.temp + '&deg; | ' +
                    'RH: ' + response.main.humidity + '%</p>' +
                    'img src="' + response.weather[0].icon + '">'

                  );

                });



              
        });//end ready

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
