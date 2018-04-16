$(function() {
    $('#jnDetails ul.rating li a').click(function() {
        var title = $(this).attr('title');
        /* :hover style will override :blur style,
           hence when to alert doesn't matter,
           cause we're always hovering when clicking the links
        */
        alert("您给此商品的评分是：" + title);
        var cl = $(this).parent().attr('class');
        $(this).parent().parent().removeClass()
            .addClass('rating ' + cl + 'star');
        /* remove the dashed outer box */
        $(this).blur();
    });
});
