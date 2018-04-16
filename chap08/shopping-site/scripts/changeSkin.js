$(function() {
    function switchSkin(skinName) {
        $('#' + skinName).addClass('selected')
            .siblings().removeClass('selected');
        $('#cssfile').attr("href", './styles/skin/' + skinName + '.css');
        Cookies.set('MyCssSkin', skinName, { path: '/', expires: 10 })
    }
    var $li = $('#skin li');
    $li.click(function() {
        switchSkin(this.id);
    });
    // init the skin from cookie
    var cookie_skin = Cookies.get('MyCssSkin');
    if (cookie_skin) {
        switchSkin(cookie_skin);
    }
});
