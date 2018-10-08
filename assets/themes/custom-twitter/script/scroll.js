$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(document).getElementsByClassName("fade");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) { 
      $(tag).css("opacity", 1);
    } else {
      $(tag).css("opacity", .5);
  }
})
