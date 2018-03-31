var comments = [{
    "username": "张三",
    "content": "沙发."
  },
  {
    "username": "李四",
    "content": "板凳."
  },
  {
    "username": "王五",
    "content": "地板."
  }
];

var html = "";
$.each(comments, function(indexInArray, value) {
  html += "<div class='comment'><h6>" + value['username'] +
    "：</h6><p class='para'>" + value['content'] + "</p></div>";
});

$('#resText').html(html);
