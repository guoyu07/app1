var index = 0,
    len = $('.show li').length,
    timer = 0;

timer = setInterval(function() {
    $('.show li').eq(index).fadeOut(1000);
    $('.side-slider li').eq(index).removeClass('active');
    index = ++index > len - 1 ? 0 : index;
    $('.show li').eq(index).fadeIn(1000);
    $('.side-slider li').eq(index).addClass('active');
    console.log(index);
}, 5000)