// 記得要 CDN 載入 BS5 的 JS ，手機版的漢堡選單 navbar 才會有效

console.clear();

$(window).scroll(function(event){
  if($(window).scrollTop() > 0 ){
    // 往下滑動時
    // $(".navbar").removeClass("navbar-top");//可移除自訂灰白底線
    $(".navbar").removeClass("navbar-dark"); //移除BS5淺色文字

    //控制漢堡選單三條線的顏色用的。往下滑之後漢堡線條變深色。
    $(".navbar").addClass("bg-light");//套用BS5白色底色
    $(".navbar").addClass("navbar-light");//套用BS5深色文字搭配白底色。navbar-light意思就是，當底色是淺色時，文字會指定為深色的意思。
  }else {
      //位於頭頂時     
      //處於頭頂時，底色因為是透明的，會以深色背景照為底，所以套用 BS5 的 navbar-dark 可讓行動版漢堡選單三條線變成淺色
      $(".navbar").addClass("navbar-top"); //添加自訂灰白底線
      $(".navbar").addClass("navbar-dark"); //套用BS5淺色文字
      
      $(".navbar").removeClass("bg-light");
      $(".navbar").removeClass("navbar-light"); 
  }
  
});

var s = skrollr.init();


// 偵測導覽列的高度，解決導覽列點擊頁籤後會覆蓋內容的現象
const navBar = document.querySelector("nav.navbar");
const navBarHeight = navBar.getBoundingClientRect().height;

// 用偵測到的導覽列高度，取代 html 樣式中 scroll-padding-top 的值
document.documentElement.style.setProperty("scroll-padding-top", navBarHeight + "px" )

