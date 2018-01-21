$(function() {
  var $category = $('div.subcategorybox > ul > li:gt(5):not(:last)');
  $category.hide(); // hide some list items by default
  var $toggleBtn = $('div.showmore > a');
  $toggleBtn.click(function(event) {
    if ($category.is(':visible')) {
      $category.hide();
      $(this).find('span')
        .css('background', 'url(./images/up.gif) no-repeat 0 0')
        .text('显示全部品牌');
      $('div.subcategorybox>ul>li').removeClass('promoted');
    } else {
      $category.show();
      $(this).find('span')
        .css('background', 'url(./images/down.gif) no-repeat 0 0')
        .text('精简显示列表');
      $('div.subcategorybox>ul>li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
        .addClass('promoted');
    }
    event.preventDefault(); // disable hyperlink opening
  });
});
