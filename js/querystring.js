(function(){
    'use strict';
    function qs(key) {
        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&'); // escape RegEx meta chars
        var match = location.search.match(new RegExp('[?&]'+key+'=([^&]+)(&|$)'));
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    $(function(){
        var imgNumber = parseInt(qs('img')) - 1,
            $c = $('.carousel');
        $c.carousel({interval: false});
        $c.carousel(imgNumber);
    });
}());
