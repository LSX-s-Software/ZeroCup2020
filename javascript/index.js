const GAME_DATA = {
    single: [{
        name: "游戏名称",
        des: "游戏介绍"
    }],
    online: [{
        name: "游戏名称",
        des: "游戏介绍"
    }]
}
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
    let video = document.querySelectorAll('.screen.s2 .video-section video')[0];
    let img = document.querySelectorAll('.screen.s2 .video-section img')[0];
    let s3wrapper = document.querySelectorAll('.screen.s3 .wrapper svg');
    let WHRate = 1280 / 720;
    let sides = document.querySelectorAll('.container .sidebar .side');
    for (side of sides) {
        side.classList.remove("colored");
    }
    if (scrolled < 3 / 4) sides[0].classList.add("colored");
    if (scrolled > 3 / 4 && scrolled < 1 + 3 / 4) sides[1].classList.add("colored");
    if (scrolled > 1 + 3 / 4 && scrolled < 3 + 3 / 4) sides[2].classList.add("colored");
    if (scrolled > 3 + 3 / 4) sides[3].classList.add("colored");
    if (scrolled > 0.75) { 
        $("#warpper1,#warpper2").css("opacity", 1);
        $(".skew .line").fadeIn();
    }
    if (scrolled > 0.9) $(".container .screen.s2 .wrapper .btn").css("opacity", 1);
    if (scrolled >= 0.85) {
        $(".banner").css("opacity", 1);
    } else {
        $(".banner").css("opacity", 0);
    }
    if (scrolled < 2) {
        video.style.width = 1944 / 18.25 + 'vw';
        img.style.width = 1963 / 18.25 + 'vw';
        img.style.height = 1454 / 8.84 + 'vh';
    }
    if (scrolled > 2 && scrolled < 3) {
        let width = 747 + (1944 - 747) * (1 - easeInOutCubic(scrolled - 2));
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
    if (scrolled > 3.7) {
        for (item of s3wrapper) {
            item.style.opacity = "1";
        }
    }
})

$(document).ready(function () {
    $("#s1bgImg").fadeIn(500, function () {
        $("#s1l1").css({
            opacity: 1,
            transform: "none"
        });
        $("#s1l2").css({
            opacity: 1,
            transform: "none"
        });
        $("#s1l3").css({
            opacity: 1,
            transform: "none"
        });
        setTimeout(() => {
            $(".promote").fadeIn(2000);
        }, 1500);
    });
    setInterval(function () {
        $(".promote").animate({
            bottom: "+=50px"
        }, {
            duration: 2000
        }).queue(function (next) {
            $(".promote").fadeOut(function () {
                $(".promote").css("bottom", "0");
            });
            next();
        }).queue(function (next) {
            $(".promote").fadeIn();
            next();
        });
    }, 10000);
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
        if (status[0]) {
            if (mySwiper.realIndex > GAME_DATA.single.length) {
                $("#gameName").text(GAME_DATA.single[0].name);
                $("#gameDes").text(GAME_DATA.single[0].des);
            } else {
                $("#gameName").text(GAME_DATA.single[mySwiper.realIndex + 1].name);
                $("#gameDes").text(GAME_DATA.single[mySwiper.realIndex + 1].des);
            }
        } else if (status[1]) {
            if (mySwiper.realIndex > GAME_DATA.online.length) {
                $("#gameName").text(GAME_DATA.online[0].name);
                $("#gameDes").text(GAME_DATA.online[0].des);
            } else {
                $("#gameName").text(GAME_DATA.online[mySwiper.realIndex + 1].name);
                $("#gameDes").text(GAME_DATA.online[mySwiper.realIndex + 1].des);
            }
        }
    });
    var status = [false, false];
    $("#more1").click(function (e) {
        e.preventDefault();
        let line = document.querySelector('.container .screen.s2 .wrapper .skew');
        if (!status[0]) {
            line.style.transform = "translate(-20vw,0)";
            $(".swiper-container").fadeIn();
            $(".mask").css("display", "flex");
            $("#more1 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
            $("#warpper1").css({
                transform: "translate(-20%,-20%)"
            });
            $("#gameName").text(GAME_DATA.single[0].name);
            $("#gameDes").text(GAME_DATA.single[0].des);
        } else {
            line.style.transform = "translate(0px,0)";
            $(".swiper-container").fadeOut();
            $(".mask").fadeOut();
            $("#more1 svg text tspan").html("了解更多");
            $("#warpper1").css({
                transform: "none"
            });
            $("#gameName").text(GAME_DATA.online[0].name);
            $("#gameDes").text(GAME_DATA.online[0].des);
        }
        status[0] = !status[0];
    });
    $("#more2").click(function (e) {
        e.preventDefault();
        let line = document.querySelector('.container .screen.s2 .wrapper .skew');
        if (!status[1]) {
            line.style.transform = "translate(19vw,0)";
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
                transform: "translate(25%,25%)"
            });
            $("#more2 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
        } else {
            line.style.transform = "translate(0px,0)";
            $(".swiper-container").fadeOut();
            $(".mask").fadeOut();
            $(".mask h3").css("padding-right", "50%");
            $("#warpper2").css({
                transform: "none"
            });
            $(".mask").css({
                left: "auto",
                right: "0",
                width: "80vw"
            });
            $(".swiper-container").css({
                left: "auto",
                right: "0"
            });
            $("#more2 svg text tspan").html("了解更多");
        }
        status[1] = !status[1];
    });
    $("#hof").click(function (e) {
        e.preventDefault();
        $("#waterflow").fadeIn();
        $(".closeBtn").fadeIn();
        $("#b1").text("电竞");
        $("#b2").text("名人堂");
        $(".sidebar").css("filter", "blur(15px)");
    });
    $("#tl").click(function (e) {
        e.preventDefault();
        $("#timeline").fadeIn();
        $(".closeBtn").fadeIn();
        $("#b1").text("电竞");
        $("#b2").text("大事记");
        $(".sidebar").css("filter", "blur(15px)");
    });
    $(".closeBtn").click(function (e) {
        e.preventDefault();
        $(".sidebar").css("filter", "none");
        $("#waterflow").fadeOut();
        $("#timeline").fadeOut();
        $(".closeBtn").fadeOut();
        $("#b1").text("电子");
        $("#b2").text("竞技");
    });
});