console.log("test")
$(document).ready(function(){
    $("button").click(function(){
        $("h1").fadeToggle();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("li").slideToggle();
    });
});

$("img").mouseover(function(){
  // for(var i = 0; i < 20; i++){
  //   if(i%2 === 0){
  //     $("img").css("border-color", "pink");
  //     sleep(1000);
  //   } else {
  //     $("img").css("border-color", "yellow");
  //     sleep(1000);
  //   }
  // }
    $("img").css("border-color", "yellow");
});

$("img").mouseout(function(){
  //sleep(5000);
    $("img").css("border-color", "pink");
});


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

import bar from './bar';

bar();

console.log('hello 🐶');
