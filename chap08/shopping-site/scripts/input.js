$(function() {
    $('#inputSearch').focus(function() {
        $(this).addClass('focus');
        if ($(this).val() === this.defaultValue) {
            $(this).val('');
        }
    }).blur(function() {
        $(this).removeClass('focus');
        if ($(this).val().trim() === '') {
            $(this).val(this.defaultValue);
        }
    }).keyup(function(event) {
        if (event.which === 13) {
            alert('回车提交表单！');
        }
    });
});
