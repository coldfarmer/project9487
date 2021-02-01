$(document).ready(function(){

    $('.menu_text .flitter').click(function(){
    //   
        if($('#flliter_i img').attr('src') == '../images/flitter_2.png'){
            $('#flliter_i img').attr('src','../images/flitter.png')
            // alert(1);
            $('#flliter_i img').toggleClass('flact1');
            $('#flliter_i span').toggleClass('flact2');
            $('#flliter_i').toggleClass('flact3');
            $('.store_sellitem .flitter').toggleClass('active');
        }else{
            $('#flliter_i img').toggleClass('flact1');
            $('#flliter_i span').toggleClass('flact2');
            $('#flliter_i').toggleClass('flact3');
            $('#flliter_i img').attr('src','../images/flitter_2.png')
            // alert(2);
             $('.store_sellitem .flitter').toggleClass('active');
        }

    });
});