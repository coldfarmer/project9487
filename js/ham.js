 //動畫
 var tlmenu = new TimelineMax();

//  tlmenu.to('.top' , .3 , {
//      width :'55px'
//  }).to('.middle' , .3 ,{
//      width : '65px'
//  }).to('.bottom' , .3 , {
//      width : '30px'
//  })
 var top_mv = TweenMax.to('.top', .2, {
     y: '8px',
     rotation: 45,
 })
 var bottom_mv = TweenMax.to('.bottom', .2, {
     y: '-8px',
     rotation: -45,
 })
 var middle_mv = TweenMax.to('.middle', .2, {
     opacity: 0,
     x: '200%'
 })
 tlmenu.stop();

 tlmenu.add([top_mv, bottom_mv, middle_mv]);
 //動畫stop


 //事件被觸發
 document.getElementById('nav').onmouseover = function () {
     tlmenu.play();
 }
 document.getElementById('nav').onmouseleave = function () {
     tlmenu.reverse();
 }
