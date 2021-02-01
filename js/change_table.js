$(document).ready(function(){

  
        $('.store_menu .store_icon img').click(function(){   
            if(document.body.clientWidth>=768){
            // alert(document.body.clientWidth);
            if($(this).attr('class') =='icatc1'){
            }else{
                $('.store_menu .store_icon img').toggleClass('icatc1');
                $('.store_menu .store_icon ic768').toggleClass('icatc1');
                if($('.store_menu .store_icon .ic768').attr('src') == '../images/icon-block.png'){  
                    // alert($('.store_menu .store_icon .ic768').attr('src'));
                    $('.store_menu .store_icon .ic768').attr('src','../images/icon-rows.png');
                }else{
                    // alert($('.store_menu .store_icon .ic768').attr('src'));
                    $('.store_menu .store_icon .ic768').attr('src','../images/icon-block.png');
                }

                $('.table_item_newgames').toggleClass('active2');
                $('.table_item_newgames .item_sell').toggleClass('active3');
                $('.table_item_newgames .gm_img').toggleClass('active4');
                $('.table_item_newgames .item_text').toggleClass('active5');
                $('.table_item_newgames .price').toggleClass('active6');
                $('.table_item_newgames .gm_img img').toggleClass('active7');
                $('.table_item_newgames .title').toggleClass('active8');
            }
           
            }
        });
    
    
        $('.store_menu .store_icon .ic768').click(function(){   
            if(document.body.clientWidth<768){ 
            // alert(document.body.clientWidth);
            $('.store_menu .store_icon img').toggleClass('icatc1');
            $('.store_menu .store_icon ic768').toggleClass('icatc1');

           
            if($('.store_menu .store_icon .ic768').attr('src') == '../images/icon-block.png'){  
                // alert($('.store_menu .store_icon .ic768').attr('src'));
                $('.store_menu .store_icon .ic768').attr('src','../images/icon-rows.png');
            }else{
                // alert($('.store_menu .store_icon .ic768').attr('src'));
                $('.store_menu .store_icon .ic768').attr('src','../images/icon-block.png');
            }
            $('.table_item_newgames').toggleClass('active2');
            $('.table_item_newgames .item_sell').toggleClass('active3');
            $('.table_item_newgames .gm_img').toggleClass('active4');
            $('.table_item_newgames .item_text').toggleClass('active5');
            $('.table_item_newgames .price').toggleClass('active6');
            $('.table_item_newgames .gm_img img').toggleClass('active7');
            $('.table_item_newgames .title').toggleClass('active8');
            }
        });

    

});
