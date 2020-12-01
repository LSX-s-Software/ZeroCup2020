
top = ['210vh', 'calc(210vh + 253px)', 'calc(210vh + 506px)', 'calc(210vh)', 'calc(210vh + 253px)', 'calc(210vh + 506px)'];

left = ['234px', '144px', '218px'];

function pow(x, n) {
    let ret = 1;
    for (let i = 0; i < n; i++) {
        ret *= x;
    }
    return ret;
}

function easeInQuart(x) {
    return x * x * x * x;
}

function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
}

window.addEventListener('scroll', () => {
    let scrolled = (document.documentElement.scrollTop) / (document.documentElement.clientHeight); // 当前在第几分屏
    //分屏：0-1：游戏与电子竞技 1-2两个查看详情图 2-3视频全屏->缩小
    console.log(scrolled);
    let siders = document.querySelectorAll('.container .screen.s2 .sider');
    let banner = document.querySelector('.banner .span.hidden');
    let video = document.querySelectorAll('video')[0];
    let img = document.querySelectorAll('.screen.s2 img')[0];
    let s3wrapper = document.querySelectorAll('.screen.s3 .wrapper svg');
    let WHRate = 1280 / 720;
    if (scrolled < 2) {
        banner.style.opacity = "0";
    }
    if (scrolled < 2) {
        video.style.width = 1944 / 18.25 + 'vw';
        img.style.width = 1963 / 18.25 + 'vw';
        img.style.height = 1454 / 8.84 + 'vh';
    }
    else banner.style.opacity = "1";
    if (scrolled > 2 && scrolled < 3) {
        let width = 747 + (1944 - 747) * (1 - easeInOutCubic(scrolled - 2));
        // if(width > 728)console.log('!!!' + width);
        video.style.width = width / 18.25 + 'vw';
        img.style.width = width * 1.01 / 18.25 + 'vw';
        img.style.height = width / WHRate * 1.33 / 8.84 + 'vh';
    }
    if (scrolled > 3) {
        video.style.width = 747 / 18.25 + 'vw';
        img.style.width = 754 / 18.25 + 'vw';
        img.style.height = 558 / 8.84 + 'vh';
    }
    if (scrolled > 3) {
        for (sider of siders) {
            sider.style.opacity = 1;
        }
    }
    if (scrolled < 2.95) {
        for (sider of siders) {
            sider.style.opacity = 0;
        }
    }
    if (scrolled < 4) {
        for (item of s3wrapper) {
            item.style.opacity = "0";
        }
    }
    if (scrolled > 4) {
        for (item of s3wrapper) {
            item.style.opacity = "1";
        }
    }
})

$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        effect: 'slide',
        observeParents: true,
        observer: true,
        slidesPerView: 3,
        loop: true,
        speed: 500,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    mySwiper.on('slideChange', function () {
        console.log(mySwiper.realIndex);
        //这里写切换游戏介绍的代码
    });
    var status = [false, false];
    $("#more1").click(function (e) {
        e.preventDefault();
        if (!status[0]) {
            $(".swiper-container").fadeIn();
            $(".mask").css("display", "flex");
            $("#more1 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
            $("#warpper1").css({
                transform: "translate(-20%,-20%)"
            });
        } else {
            $(".swiper-container").fadeOut();
            $(".mask").fadeOut();
            $("#more1 svg text tspan").html("了解更多");
            $("#warpper1").css({
                transform: "none"
            });
        }
        status[0] = !status[0];
    });
    $("#more2").click(function (e) {
        e.preventDefault();
        if (!status[1]) {
            $(".swiper-container").fadeIn();
            $(".mask").css("display", "flex");
            $(".mask h3").css("padding-right", "15%");
            $(".swiper-container").css({
                left: "-22%",
                right: "auto"
            });
            $(".mask").css({
                left: "0",
                right: "auto",
                width: "50%"
            });
            $("#warpper2").css({
                transform: "translate(20%,20%)"
            });
            $("#more2 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
        } else {
            $(".swiper-container").fadeOut();
            $(".mask").fadeOut();
            $(".mask h3").css("padding-right", "50%");
            $("#warpper2").css({
                transform: "none"
            });
            $("#more2 svg text tspan").html("了解更多");
        }
        status[1] = !status[1];
    });
});