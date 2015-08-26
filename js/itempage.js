(function(){
    'use strict';
    // function qs(key) {
    //     key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&'); // escape RegEx meta chars
    //     var match = location.search.match(new RegExp('[?&]'+key+'=([^&]+)(&|$)'));
    //     return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    // }

    $(function(){
        var imgNumber = parseInt(parseInt(window.location.hash.substring(1))) - 1,
            $c = $('.carousel');

        // initialize the carousel
        $c.carousel({interval: false});
        // jump to the right image to display and stop cycling images
        $c.carousel(imgNumber);

        //
        $('#carousel').on('slid.bs.carousel', function () {
            var $img = $('.carousel div.active img'),
                imgNumber = $img.data('imgnumber');
            // console.log(evt.relatedTarget);
            window.location.hash = '#' + imgNumber;

            $img.on('click', function(){
                $.colorbox({href: $(this).attr('src')});
            });
        });
    });
}());
