var index = 0,
    len = $('.show li').length,
    timer = 0;


// 封装轮播效果函数
function slider(cb) {
    $('.show li').stop(true, true);
    $('.show li').eq(index).fadeOut(1000);
    $('.side-slider li').eq(index).removeClass('active');
    cb();
    $('.show li').eq(index).fadeIn(1000);
    $('.side-slider li').eq(index).addClass('active');
}


// 轮播图初始化调用
function run() {
    timer = setInterval(function() {
        slider(function() {
            index = ++index > len - 1 ? 0 : index;
        })
    }, 5000);
}
run();


// 轮播点击特效
$('.side-slider li').click(function() {
    var that = $(this);
    slider(function() {
        index = that.index();
    });
})
$('.free').mouseover(function() {
    $('.free-inner').stop().fadeIn(500);
    $(this).css({
        // 'border': 0,
        'borderTop': '3px solid #ff9d00'
    })
    $('.free a').css({
        'border': 0
    })
}).mouseout(function() {
    $('.free-inner').stop().fadeOut(500);
    $(this).css({
        'borderColor': 'transparent'
    })
})