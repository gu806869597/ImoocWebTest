// var item_one_layout = document.getElementById('screen_item_one');
// var item_two_layout = document.getElementById('screen_item_two');
// var item_three_layout = document.getElementById("screen_item_three");
// var item_four_layout = document.getElementById("screen_item_four");
// var item_five_layout = document.getElementById("screen_item_five");
var layoutArray = ['#screen_item_one','#screen_item_two','#screen_item_three','#screen_item_four','#screen_item_five'];

$('window').ready(function(){
  $('#screen_item_one').mouseover(function(){
      var flag = $("#screen_item_one").hasClass("done");
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

});

function setScreenOneAnimation(flag,view){
  if(!flag){
    $("#screen_item_one_phone").addClass("item_one_phone_done");
    $("#screen_item_one_title").addClass("item_one_title_done");
    $("#screen_item_one_shadow").addClass("item_one_shadow_done");

    $(view).remove("init");
    $(view).addClass("done");
  }
}

function setScreenTwoAnimation(flag,view){
  if(!flag){
    $("#screen_item_two_title").addClass("item_two_title_done");
    $("#screen_item_two_phone").addClass("item_two_phone_done");

    $(view).remove("init");
    $(view).addClass("done");
  }
}

function setScreenThreeAnimation(flag,view){
  if(!flag){
    $('#screen_item_three_title').addClass("item_three_title_done");
    $('#screen_item_three_second_title').addClass("item_three_second_title_done");
    $('#screen_item_three_phone').addClass("item_three_phone_done");

    $(view).remove("init");
    $(view).addClass("done");
  }
}
