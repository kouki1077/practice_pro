// トップへ戻るボタン
$(function() {
    var topBtn = $('#page_top');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
// ナビ固定
$(function() {
    var offset = $('#globalNavi').offset();
 
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('#globalNavi').addClass('fixed');
        } else {
            $('#globalNavi').removeClass('fixed');
        }
    });
});
