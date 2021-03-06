//Use Strict Mode
(function ($) {
    "use strict";

    //Begin - Window Load
    $(window).load(function () {


        $('#loader-name').addClass('loader-left');
        $('#loader-job').addClass('loader-right');
        $('#loader-animation').addClass('loader-hide');

    });

    //Begin - Document Ready
    $(document).ready(function () {



        //==============_Map_================
        $('.map').on('click', function () {
            $('.map-overlay').hide();
        });

        $('.map').on('mouseleave', function () {
            $('.map-overlay').show();
        });




        //==============___Scrollbars___================
        $('.section-vcardbody').perfectScrollbar({
            wheelSpeed: 0.9
        });

        //==============___Menu & Pages Animation___================

        var linkHome = 0;
        var linkPage = '';

        function pageOn() {
            $('#main-menu').addClass('main-menu-pgactive');
            $('#section-home').addClass('section-vcardbody-pgactive');
            $('.profileActive').removeClass('profileActive');
            $('#profile2').addClass('profileActive');

            linkHome = 1;
        }

        function pageOff() {
            $('.section-page-active').removeClass('section-page-active');
            $('#main-menu').removeClass('main-menu-pgactive');
            $('#section-home').removeClass('section-vcardbody-pgactive');
            $('.profileActive').removeClass('profileActive');
            $('#profile1').addClass('profileActive');
            linkHome = 0;
        }


        $(".link-page").on('click', function (event) {
            event.preventDefault();
            $('.menuActive').removeClass('menuActive');
            $(this).addClass('menuActive');
            linkPage = $(this).attr('href');
            $('.section-page-active').removeClass('section-page-active');
            $(linkPage).addClass('section-page-active');
            pageOn();
        });


        $(".link-home").on('click', function (event) {
            event.preventDefault();

            if (linkHome == 0) {
                //pageOn();
            }
            else if (linkHome == 1) {
                $('.menuActive').removeClass('menuActive');
                $(this).addClass('menuActive');
                pageOff();
            }
        });

    });

    //End - Use Strict mode
})(jQuery);