// 記得要 CDN 載入 BS5 的 JS ，手機版的漢堡選單 navbar 才會有效

console.clear();

$(window).scroll(function(event){
  if($(window).scrollTop() > 0 ){
    // 往下滑動時
    $(".navbar").removeClass("navbar-top");//移除灰白底線
    $(".navbar").removeClass("navbar-dark"); //移除淺色文字
    //控制漢堡選單三條線的顏色用的。往下滑之後漢堡線條變深色。
    $(".navbar").addClass("bg-light");//套用白色底色
    $(".navbar").addClass("navbar-light");//套用深色文字搭配白底色
  }else {
      //位於頭頂時     
      $(".navbar").addClass("navbar-top"); //添加灰白底線
      $(".navbar").addClass("navbar-dark"); //套用淺色文字
      //處於頭頂時，底色透明是吃深色背景圖片，讓行動版漢堡選單三條線變成淺色
      $(".navbar").removeClass("bg-light");
      $(".navbar").removeClass("navbar-light"); 
  }
  
});

var s = skrollr.init();