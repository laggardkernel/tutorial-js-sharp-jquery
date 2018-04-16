$(function() {
    var $easyzoom = $('.easyzoom').easyZoom();
    var api = $easyzoom.filter('.easyzoom--with-thumbnails').data(
        'easyZoom');
    $('#jnProitem .imgList').on('click', 'a', function(e) {
        var $this = $(this);
        api.swap($this.data('standard'), $this.attr('href'));
        $('#thickImg').attr('href', $this.attr('href'));

        e.preventDefault();
    });
});
