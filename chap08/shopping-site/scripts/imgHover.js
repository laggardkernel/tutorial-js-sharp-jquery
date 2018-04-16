$(function() {
    $('#jnBrandList li').each(function(index) {
        var $img = $(this).find('img'),
            img_w = $img.width(),
            img_h = $img.height();
        var spanHtml =
            '<span style="position:absolute;top:0;left:5px;width:' +
            img_w +
            'px;height:' + img_h +
            'px;" class="imageMask"></span>';
        $(spanHtml).appendTo(this);
    })
    $('#jnBrandList .imageMask').hover(function() {
        $(this).toggleClass('imageOver');
    });
});
