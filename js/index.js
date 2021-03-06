// 处理mouseover事件
$('window').ready(function(){
  $('#screen_item_one').mouseover(function(){
      //判断元素上有没有done类
      var flag = $("#screen_item_one").hasClass("done");
      //设置屏幕动画
      setScreenOneAnimation(flag,"#screen_item_one");
  });
  $('#screen_item_two').mouseover(function(){
      var flag = $("#screen_item_two").hasClass("done");
      setScreenTwoAnimation(flag,"#screen_item_two");
  });

  $('#screen_item_three').mouseover(function(){
    var flag = $("#screen_item_three").hasClass("done");
    setScreenThreeAnimation(flag,"#screen_item_three");
  });

  $('#screen_item_four').mouseover(function(){
    var flag = $('#screen_item_four').hasClass("done");
    setScreenFourAnimation(flag,"#screen_item_four");
  });

  $('#screen_item_five').mouseover(function(){
    var flag = $('#screen_item_five').hasClass("done");
    setScreenFiveAnimation(flag,"#screen_item_five");
  });


//处理侧边栏的点击事件
  $('#outline_item_one').click(function(){
    scrollTo(0,0);
    var flag = $("#screen_item_one").hasClass("done");
    setScreenOneAnimation(flag,"#screen_item_one");
  });

  $('#outline_item_two').click(function(){
    scrollTo(0,800);
    var flag = $("#screen_item_two").hasClass("done");
    setScreenTwoAnimation(flag,"#screen_item_two");
  });

  $('#outline_item_three').click(function(){
    scroll(0,1600);
    var flag = $("#screen_item_three").hasClass("done");
    setScreenThreeAnimation(flag,"#screen_item_three");
  });

  $('#outline_item_four').click(function(){
    scroll(0,2400);
    var flag = $('#screen_item_four').hasClass("done");
    setScreenFourAnimation(flag,"#screen_item_four");
  });
  $('#outline_item_five').click(function(){
    scroll(0,3200);
    var flag = $('#screen_item_five').hasClass("done");
    setScreenFiveAnimation(flag,"#screen_item_five");
  });


  //处理标题按钮的点击事件
  $('#toolbar_title_one').click(function(){
    scrollTo(0,0);
    var flag = $("#screen_item_one").hasClass("done");
    setScreenOneAnimation(flag,"#screen_item_one");
  });

  $('#toolbar_title_two').click(function(){
    scrollTo(0,800);
    var flag = $("#screen_item_two").hasClass("done");
    setScreenTwoAnimation(flag,"#screen_item_two");
  });

  $('#toolbar_title_three').click(function(){
    scroll(0,1600);
    var flag = $("#screen_item_three").hasClass("done");
    setScreenThreeAnimation(flag,"#screen_item_three");
  });

  $('#toolbar_title_four').click(function(){
    scroll(0,2400);
    var flag = $('#screen_item_four').hasClass("done");
    setScreenFourAnimation(flag,"#screen_item_four");
  });
  $('#toolbar_title_five').click(function(){
    scroll(0,3200);
    var flag = $('#screen_item_five').hasClass("done");
    setScreenFiveAnimation(flag,"#screen_item_five");
  });
});


//处理滚动条的滚动事件
$(window).scroll(function () {
  //获得滚动位置
  var height = $(window).scrollTop();
  //如果滑动位置小于120 则判断在顶部
  if(height > 120){
    $("#toolbar").addClass("active");
    $('#toolbar_title').css("color","#fff");

    $('#outline').addClass("outline_done");
  }else if(height <= 120){
    $("#toolbar").removeClass("active");
    $('#toolbar_title').css("color","#000");

    $('#outline').removeClass("outline_done");
    $('#outline').addClass("outline_init");
  }

  if(height < 529){
    toolbarMenuChange("#toolbar_title_one");
    navMenuChange("#outline_item_one");
  }else if(height >= 529 && height < 1354){
    toolbarMenuChange("#toolbar_title_two");
    navMenuChange("#outline_item_two");
  }else if(height >= 1354 && height < 2200){
    toolbarMenuChange("#toolbar_title_three");
    navMenuChange("#outline_item_three");
  }else if(height >= 2200 && height < 2988){
    toolbarMenuChange("#toolbar_title_four");
    navMenuChange("#outline_item_four");
  }else if(height >= 2988){
    toolbarMenuChange("#toolbar_title_five");
    navMenuChange("#outline_item_five");
  }
});

//设置标题栏上的按钮文字选中效果
function toolbarMenuChange(view){
  var menuArray = document.getElementById("toolbar_titles").getElementsByTagName("a");
  for(var i = 0 ; i< menuArray.length ; i++){
    menuArray[i].className = "";
  }
  $(view).addClass('nav_active');
}

//设置侧边栏按钮的选择效果
function navMenuChange(view){
  var navArray = document.getElementById("outline").getElementsByTagName("a");
  for(var i = 0 ; i < navArray.length ; i++){
    var id = navArray[i].id;
    $('#'+id).removeClass("outline__item_status_active");
  }
  $(view).addClass('outline__item_status_active');
}

//设置第一屏的动画
function setScreenOneAnimation(flag,view){
  if(!flag){
    $("#screen_item_one_phone").addClass("item_one_phone_done");
    $("#screen_item_one_title").addClass("item_one_title_done");
    $("#screen_item_one_shadow").addClass("item_one_shadow_done");

    $(view).remove("init");
    $(view).addClass("done");
  }
}
//设置第二屏的动画
function setScreenTwoAnimation(flag,view){
  if(!flag){
    $("#screen_item_two_title").addClass("item_two_title_done");
    $("#screen_item_two_phone").addClass("item_two_phone_done");

    $(view).remove("init");
    $(view).addClass("done");
  }
}

//设置第三屏的动画
function setScreenThreeAnimation(flag,view){
  if(!flag){
    $('#screen_item_three_title').addClass("item_three_title_done");
    $('#screen_item_three_second_title').addClass("item_three_second_title_done");
    $('#screen_item_three_phone').addClass("item_three_phone_done");
    $('#screen_item_three_function').addClass("item_three_function_layout_done");

    $(view).remove("init");
    $(view).addClass("done");
  }
}

//设置第四屏的动画
function setScreenFourAnimation(flag,view){
  if(!flag){
    $('#screen_item_four_title').addClass("item_three_title_done");
    $('#screen_item_four_second_title').addClass("item_three_second_title_done");
    $('#screen_item_four_one').addClass("item_four_item_one");
    $('#screen_item_four_two').addClass("item_four_item_two");
    $('#screen_item_four_three').addClass("item_four_item_three");
    $('#screen_item_four_four').addClass("item_four_item_four");

    $(view).remove("init");
    $(view).addClass("done");
  }
}

//设置第五屏的动画
function setScreenFiveAnimation(flag,view){
  if(!flag){
    $('#screen_item_five_title').addClass("item_three_title_done");
    $('#screen_item_five_second_title').addClass("item_three_second_title_done");
    $('#screen_item_five_left').addClass("item_five_phone_done");
    $('#screen_item_five_center').addClass("item_five_phone_done");
    $('#screen_item_five_right').addClass("item_five_phone_done");

    $(view).remove("init");
    $(view).addClass("done");
  }
}
