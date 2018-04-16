$(function() {
    var $product = $('#jnDetails .jnProDetail');
    $('#cart').click(function() {
        var pro_name = $product.find('h4:first').text(),
            pro_size = $product.find('.pro_size strong').text(),
            pro_color = $product.find('.color_change strong').text(),
            pro_num = $product.find('#num_sort').val(),
            pro_price = $product.find('.pro_price strong').text(),
            dialog =
            "感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是：" +
            pro_name + "；" +
            "尺寸是：" + pro_size + "；" +
            "颜色是：" + pro_color + "；" +
            "数量是：" + pro_num + "；" +
            "总价是：" + pro_price + "元。</div>";
        $('#jnDialogContent').html(dialog);
        $('#basic-dialog-ok').modal();
        return false;
    });
});
