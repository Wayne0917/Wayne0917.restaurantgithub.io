$(document).ready(function () {

        //先對 class='hamburger_menu' 綁定 點擊事件 
    $('.hamburger_menu').click(function () { 
        
        //當點擊 class='hamburger_menu' 
        //就對 class='hamburger_ul' 增加 事先寫好的 css 觸發樣式
        $('.hamburger_ul').toggleClass('hamburger_ul_show');
    });


        //設定一個防呆機制，當我按下 漢堡選單裡我要的 a 連結，跳轉到我要的錨點，且馬上幫我把漢堡選單給收起來
    $('a').click(function () { 
        
        $('.hamburger_ul').removeClass('hamburger_ul_show');
        $('.navbar_ul_dropDown').parent().removeClass('hamburger_ul_show');

    });

        //為 class="navbar_ul_dropDown" 綁定一個點擊下拉事件
    $('.navbar_ul_dropDown').click(function () { 
        
        $('.navbar_ul_dropDown_menu').slideToggle(500);
        
    });
    $('.hamburger_ul_dropDown').click(function () { 
        
        $('.hamburger_ul_dropDown_menu').slideToggle(500);
        
    });

        //將返回首頁的按鈕 加上一個平滑至頂的效果
    $('.goBack').click(function () { 
        
        $('html,body').animate({
            scrollTop : 0
        }, 600)
    });

});
