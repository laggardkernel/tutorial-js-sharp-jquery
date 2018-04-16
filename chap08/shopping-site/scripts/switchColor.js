$(function() {
    $('#jnDetails .color_change ul li img').click(function() {
        $(this).addClass('hover')
            .parent().siblings().find('img').removeClass(
                'hover');
        var imgSrc = $(this).attr('src'),
            i = imgSrc.lastIndexOf('.');
        imgSrc = imgSrc.substring(0, i);

        var alt = $(this).attr('alt');
        $('#jnDetails .color_change strong').text(alt);
        var newImgSrc = imgSrc.replace('images/pro_img/', '');

        /* show the respondent color thumbnails */
        var num = 0;
        $('#jnProitem .imgList li').hide()
            .each(function() {
                if ($(this).hasClass('imgList_' + newImgSrc)) {
                    $(this).show();
                    /* triggerHandler does not work with delegation */
                    if (num === 0) {
                        $(this).find('a').trigger('click');
                    }
                    num++;
                }
            });
    });
});
