const GAME_DATA = {
    single: [{
            name: "《黑神话：悟空》",
            des: "《黑神话：悟空》是一款由游戏科学公司制作的动作角色扮演游戏。游戏以“西游记”为背景，“悟空”为故事主线，还原心玩家中一直存在的东方魔幻世界。"
        }, //第一个为占位符
        {
            name: "《塞尔达传说 旷野之息》",
            des: "《塞尔达传说 旷野之息》是一款由任天堂开发的动作冒险游戏，玩家在游戏中扮演重伤复苏的骑士林克，踏上打败邪恶的古老恶魔——灾厄盖侬，拯救公主的道路。塞尔达在任天堂Switch上首发后，获得了业界的极高评价，多家媒体给予本作满分，并获得多个年度游戏奖项。"
        },
        {
            name: "《荒野大镖客2》",
            des: "《荒野大镖客2》是一款由Rockstar San Diego工作室制作，Rockstar公司发行的以美国西部拓荒史为题材的动作冒险类开放世界游戏，是2010年该公司发行的《Red Dead Redemption》的正统续作。游戏中述说亚瑟·摩根和声名狼藉的范德林德帮派的传奇故事，让玩家体验在 19 世纪的最后岁月里横跨美国的亡命之旅。"
        },
        {
            name: "《巫师3：狂猎》",
            des: "《巫师3：狂猎》是一款由CD Projekt RED制作，WB Games（NA）、Spike Chunsoft（JP）发行的角色扮演类游戏。该作承接《巫师2：国王刺客》的剧情，那些想要利用杰洛特的人已经不在了。杰洛特寻求改变自己的生活，着手于新的个人使命，而世界的秩序也在悄然改变。"
        },
        {
            name: "《刺客信条》",
            des: "《刺客信条》是由育碧蒙特利尔工作室研发的动作冒险类游戏系列，于2007年发行第一部，现2020年发布最新续作《刺客信条：英灵殿》。该系列以超高的自由度和精美的画面著称。玩家将在每部游戏中控制一名刺客，通过在任务中巧妙穿插重要的历史人物及历史事件带给玩家深沉的代入感。"
        },
        {
            name: "《战神》",
            des: "《战神》是一款由索尼旗下圣莫尼卡工作室制作的第三人称动作角色扮演游戏，于2005年由索尼发行，最新续作第四部已于2018年发布。游戏以希腊神话为背景，讲述由凡人成为战神的奎托斯成为战神并展开弑神屠杀的冒险历程。"
        },
        {
            name: "《黑神话：悟空》",
            des: "《黑神话：悟空》是一款由游戏科学公司制作的动作角色扮演游戏。游戏以“西游记”为背景，“悟空”为故事主线，还原心玩家中一直存在的东方魔幻世界。"
        }
    ],
    online: [{
            name: "《原神》",
            des: "《原神》是由上海米哈游制作发行的一款开放世界冒险游戏。游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。玩家将扮演一位名为“旅行者”的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘“原神”的真相。"
        },
        {
            name: "《英雄联盟》",
            des: "《英雄联盟》是由美国拳头游戏公司开发、中国大陆地区腾讯游戏代理运营的英雄对战MOBA竞技网游。游戏里拥有数百个个性英雄，并拥有排位系统、符文系统等特色系统。玩家在游戏中扮演召唤英雄的召唤师，操控自己的英雄与其他玩家进行战斗。"
        },
        {
            name: "《DOTA2》",
            des: "《DOTA2》是一款由《DOTA》的地图核心制作者IceFrog联手美国Valve公司研发的一款MOBA竞技游戏。其完整继承了原作《DotA》一百多位的英雄，游戏时每个阵营分别由五位玩家所扮演的英雄担任守护者，玩家将以守护己方远古遗迹并摧毁敌方远古遗迹为使命，通过提升等级、赚取金钱、购买装备和击杀敌方英雄等手段达成胜利。"
        },
        {
            name: "《魔兽世界》",
            des: "《魔兽世界》是一款由暴雪娱乐开发的多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，有着完整的历史背景时间线。玩家可在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。"
        },
        {
            name: "《守望先锋》",
            des: "《守望先锋》是一款由暴雪娱乐公司开发，中国大陆地区网易公司代理的第一人称射击游戏。游戏以未来地球为背景，讲述人类、守望先锋成员和智能机械的恩怨纠葛。玩家在游戏中操控自己选择的英雄进行各种形式的竞技，每一位英雄都拥有各自标志性的武器和技能。"
        },
        {
            name: "《炉石传说：魔兽英雄传》",
            des: "《炉石传说：魔兽英雄传》是一款由暴雪娱乐公司出品的策略类卡牌游戏。游戏背景设定于暴雪的魔兽系列，共十位魔兽中的角色作为十种不同的职业。玩家根据现有的卡牌组建合适的卡组，指挥英雄，驱动随从，施展法术，与游戏好友或素不相识的对手一决高下。"
        },
        {
            name: "《原神》",
            des: "《原神》是由上海米哈游制作发行的一款开放世界冒险游戏。游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。玩家将扮演一位名为“旅行者”的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘“原神”的真相。"
        }
    ]
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
        $("#warpper1").css("animation", "flashin1 1s");
        $("#warpper2").css("animation", "flashin2 1s");
        $(".skew .line").fadeIn();
    }
    if (scrolled > 1.75) {
        banner.style.opacity = 1;
    } else {
        banner.style.opacity = 0;
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
        let i = 1;
        for (sider of siders) {
            sider.style.animation = "getin" + i + " 1s";
            sider.style.visibility = "visible";
            console.log("getin" + i + " 1s");
            i += 1;
        }
    }
    if (scrolled < 2.5) {
        for (sider of siders) {
            sider.style.visibility = "hidden";
            sider.style.animation = "";
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
    var myVue = new Vue({
        el: ".swiper-container",
        data: {
            b: 0
        }
    })
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
        loop: false,
        virtualTranslate: true,
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
        myVue.b = 0;
        if (!status[0]) {
            line.style.transform = "translate(-18.5vw,0)";
            $(".swiper-container").fadeIn();
            $(".mask").css("display", "flex");
            $("#more1 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
            $("#warpper1").css({
                transform: "translate(-20%,-20%)"
            });
            $("#gameName").text(GAME_DATA.single[1].name);
            $("#gameDes").text(GAME_DATA.single[1].des);
        } else {
            line.style.transform = "translate(0px,0)";
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
        let line = document.querySelector('.container .screen.s2 .wrapper .skew');
        myVue.b = 6;
        if (!status[1]) {
            line.style.transform = "translate(15vw,0)";
            $(".swiper-container").fadeIn();
            $("#gameName").text(GAME_DATA.online[1].name);
            $("#gameDes").text(GAME_DATA.online[1].des);
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
                transform: "translate(20%,24%)"
            });
            $("#more2 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
        } else {
            line.style.transform = "translate(0px,0)";
            $(".swiper-container").fadeOut();
            $(".mask").fadeOut(() => {
                $(".mask").css({
                    left: "auto",
                    right: "0",
                    width: "80vw"
                });
                $(".swiper-container").css({
                    left: "auto",
                    right: "0"
                });
            });
            $(".mask h3").css("padding-right", "50%");
            $("#warpper2").css({
                transform: "none"
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