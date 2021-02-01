$(document).ready(function(){
  // alert();
    var pos =  $('#top_list').offset();// offset() 獲得div1當前的位置，左上角座標(x,y)
    $(window).scroll(function () { //滾動條滾動事件
      // alert();
        // if ($(this).scrollTop() > pos.top ) {
        //     $('#top_list').css('top', $(this).scrollTop() - pos.top);
        // } else if ($(this).scrollTop() <=  pos.top ) {
        //     $('#top_list').css('top',0).css('position', 'relative');
        // }
        　if($(this).scrollTop() > 10){      
            $('#top_list').css('top', $(this).scrollTop() - pos.top);
          }else if ($(this).scrollTop() <= 10) {
             $('#top_list').css('top',0).css('position', 'relative');
          }
    });
});