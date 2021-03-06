// carousel 添加 touch 事件
var isTouch=('ontouchstart' in window);
if(isTouch){
  $(".carousel").on('touchstart', function(e){
      var that=$(this);
      var touch = e.originalEvent.changedTouches[0];
      var startX = touch.pageX;
      var startY = touch.pageY;
      $(document).on('touchmove',function(e){
        touch = e.originalEvent.touches[0] ||e.originalEvent.changedTouches[0];
        var endX=touch.pageX - startX;
        var endY=touch.pageY - startY;
        if(Math.abs(endY)<Math.abs(endX)){
          if(endX > 10){
            $(this).off('touchmove');
            that.carousel('prev');
          }else if (endX < -10){
            $(this).off('touchmove');
            that.carousel('next');
          }
          return false;
        }
      });
  });
  $(document).on('touchend',function(){
    $(this).off('touchmove');
  });
}

$(".navbar-toggle").click(function(){
  if ($('#bs-example-navbar-collapse-1').hasClass('left')) {
    toRight()
  } else if ($('#bs-example-navbar-collapse-1').hasClass('right')) {
    toLeft()
  } else {
    toRight()
  }
})
var toLeft = function () {
  $('#bs-example-navbar-collapse-1').removeClass('right').addClass('left');
};
var toRight = function () {
  $('#bs-example-navbar-collapse-1').removeClass('left').addClass('right');
};
var reset = function () {
  $('#bs-example-navbar-collapse-1').removeClass('left right');
};
