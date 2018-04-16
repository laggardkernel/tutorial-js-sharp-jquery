$(function() {
    function showBrandList(index) {
        var $rollObj = $('#jnBrandList'),
            rollWidth = $rollObj.find('li').outerWidth();
        rollWidth = rollWidth * 4;
        $rollObj.stop(true, false).animate({
            "left": -rollWidth * index
        }, 1000);
    }
    $('#jnBrandTab li a').click(function() {
        $(this).parent().addClass('chos')
            .siblings().removeClass('chos');
        var index = $('#jnBrandTab li a').index(this);
        showBrandList(index);
        return false;
    }).eq(0).click();
});
