
$(window).scroll(function () {
  var scrollHeight = $(window).scrollTop();
  if(typeof(scrollHeight) == "number"){
    console.log(scrollHeight);
  }
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    alert('bottom!!');
  }
});
