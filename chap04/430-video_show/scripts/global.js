$(function() {
  var page = 1; // default page
  var i = 4; // pictures on each page
  $('div.change_btn > span.next').click(function(event) {
    var $parent = $(this).parents("div.v_show");
    var $v_show = $parent.find('div.v_content_list');
    var $v_content = $parent.find('div.v_content');

    var v_width = $v_content.width(),
      len = $v_show.find('li').length,
      page_count = Math.ceil(len / i);
    if (!$v_show.is(':animated')) {
      if (page === page_count) {
        /* reach the last page */
        $v_show.animate({ "left": "0px" }, 'slow');
        page = 1;
      } else {
        /* slide to the next page */
        $v_show.animate({ "left": "-=" + v_width }, 'slow');
        page++;
      }
      $parent.find('div.highlight_tip > span').eq(page - 1).addClass('current')
        .siblings().removeClass('current');
    }
  });

  $('div.change_btn > span.prev').click(function(event) {
    var $parent = $(this).parents("div.v_show");
    var $v_show = $parent.find('div.v_content_list');
    var $v_content = $parent.find('div.v_content');

    var v_width = $v_content.width(),
      len = $v_show.find('li').length,
      page_count = Math.ceil(len / i);
    if (!$v_show.is(':animated')) {
      if (page === 1) {
        /* reach the last page */
        $v_show.animate({ "left": "-" + (page_count - 1) * v_width }, 'slow');
        page = page_count;
      } else {
        /* slide to the next page */
        $v_show.animate({ "left": "+=" + v_width }, 'slow');
        page--;
      }
      $parent.find('div.highlight_tip > span').eq(page - 1).addClass('current')
        .siblings().removeClass('current');
    }
  });
});
