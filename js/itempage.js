(function(){
    'use strict';
    // function qs(key) {
    //     key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&'); // escape RegEx meta chars
    //     var match = location.search.match(new RegExp('[?&]'+key+'=([^&]+)(&|$)'));
    //     return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    // }

    $(function(){
        var imgNumber = parseInt(parseInt(window.location.hash.substring(1))),
            $c = $('.carousel'),
            $items = $('.carousel-inner .item');

        // initialize the carousel
        $c.carousel({interval: false});

        // set the item that relates to the url hash value as active
        $items.each(function(){
            var $this = $(this);
            if($this.data('imgnumber') === imgNumber){
                $this.addClass('active');
            }
            // set img click handler to display in colorbox
            $this.find('img').on('click', function(){
                $.colorbox({href: $(this).attr('src'), title: $(this).attr('title')});
            });
        });

        // event handler for the slid.bs.carousel event
        $('#carousel').on('slid.bs.carousel', function () {
            var $img = $('.carousel div.active img'),
                imgNumber = $img.data('imgnumber');

            // set the window location's hash
            window.location.hash = '#' + imgNumber;
        });
    });
}());
