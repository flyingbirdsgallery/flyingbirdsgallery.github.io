(function(){
    'use strict';
    $(function(){
        var $itemImg = $('img.img-responsive.center-block');
        // set img click handler to display in colorbox
        $itemImg.on('click', function(){
            $.colorbox({href: $(this).attr('src'), title: $(this).attr('title')});
        });
    });
}());
