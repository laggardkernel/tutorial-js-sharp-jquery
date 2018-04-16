$(function() {
    $('#jnDetails .pro_size li').click(function() {
        $(this).addClass('cur')
            .siblings().removeClass('cur');
        $(this).parents('ul').siblings('strong')
            .text($(this).text());
    });

    var $span = $('#jnDetails .pro_price strong'),
        unitPrice = $span.text();
    $('#num_sort').change(function() {
        $span.text($(this).val() * unitPrice);
    }).change();
});
