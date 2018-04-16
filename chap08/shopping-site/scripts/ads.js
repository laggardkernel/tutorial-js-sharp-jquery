$(function() {
    function showImg(index) {
        var $rollObj = $('#jnImageroll'),
            $rollList = $rollObj.find('div a'),
            newhref = $rollList.eq(index).attr('href');
        $('#JS_imgWrap').attr('href', newhref).
        find('img').eq(index).stop(true, true).fadeIn()
            .siblings().fadeOut();
        $rollList.removeClass('chos').css('opacity', 0.7)
            .eq(index).addClass('chos').css('opacity', 1);
    }
    var $imgRolls = $('#jnImageroll div a');
    $imgRolls.css('opacity', 0.7);
    var len = $imgRolls.length,
        index = 0,
        adTimer = null;
    $imgRolls.mouseover(function() {
        index = $('#jnImageroll div a').index(this);
        showImg(index);
    }).eq(0).triggerHandler('mouseover');
    $('#jnImageroll').hover(function() {
        if (adTimer) {
            clearInterval(adTimer);
        }
    }, function() {
        adTimer = setInterval(function() {
            showImg(index);
            index++;
            if (index === 5) {
                index = 0;
            }
        }, 5000);
    }).triggerHandler('mouseleave');
});
