var models = [
    ["N0tail", "丹麦", "Dota2", "外赛区", "OG", false, "国际邀请赛冠军", "辅助", true],
    ["Zunba", "韩国", "守望先锋", "外赛区", "首尔王朝队", false, "世界杯冠军", "坦克", false],
    ["JJonak", "韩国", "守望先锋", "外赛区", "纽约九霄天擎队", true, "世界最强禅雅塔", "辅助", true],
    ["miro", "韩国", "守望先锋", "外赛区", "首尔王朝队", true, "世界杯冠军", "坦克", true],
    ["sky", "中国", "魔兽争霸", "中国", "无", false, "中国电竞第一人", "无", false],
    ["moon", "韩国", "魔兽争霸", "外赛区", "WeMade FOX", false, "黄金联赛冠军", "无", true],
    ["kuroky", "德国", "DOTA2", "外赛区", "Team Nigma", false, "国际邀请赛冠军", "辅助", true],
    ["faker", "韩国", "英雄联盟", "LCK", "SKT", true, "三冠王", "中单", true],
    ["the shy", "韩国", "英雄联盟", "LPL", "IG", false, "世界总决赛冠军", "上单", true],
    ["Rookie", "韩国", "英雄联盟", "LPL", "IG", false, "世界总决赛冠军", "中单", true],
    ["Doinb", "韩国", "英雄联盟", "LPL", "FPX", false, "世界总决赛冠军", "中单", true],
    ["doublelift", "美国", "英雄联盟", "LCS", "TSM", false, "LCS冠军", "下路", false],
    ["karsa", "中国", "英雄联盟", "LPL", "TES", false, "MSI冠军", "打野", true],
    ["tian", "中国", "英雄联盟", "LPL", "FPX", false, "世界总决赛冠军", "打野", true],
    ["Showmaker", "韩国", "英雄联盟", "LCK", "DWG", true, "世界总决赛冠军", "中单", true],
    ["Nuguri", "韩国", "英雄联盟", "LCK", "DWG", true, "世界总决赛冠军", "上单", true],
    ["bin", "中国", "英雄联盟", "LPL", "SN", true, "世界总决赛亚军", "上单", true],
    ["gimgoon", "韩国", "英雄联盟", "LPL", "FPX", true, "世界总决赛冠军", "上单", true],
    ["scout", "韩国", "英雄联盟", "LPL", "EDG", true, "LPL冠军", "中单", true],
    ["meiko", "中国", "英雄联盟", "LPL", "EDG", true, "LPL冠军", "辅助", true],
    ["ning", "中国", "英雄联盟", "LPL", "IG", true, "世界总决赛冠军", "打野", true],
    ["xiaohu", "中国", "英雄联盟", "LPL", "RNG", false, "MSI冠军", "中单", true],
    ["ming", "中国", "英雄联盟", "LPL", "RNG", false, "MSI冠军", "下路", true],
    ["Weixiao", "中国", "英雄联盟", "LPL", "WE", false, "IPL5冠军", "下路", false],
    ["Uzi", "中国", "英雄联盟", "LPL", "RNG", true, "MSI冠军", "下路", false],
    ["Clearlove", "中国", "英雄联盟", "LPL", "EDG", false, "MSI冠军", "打野", false],
    ["Jackeylove", "中国", "英雄联盟", "LPL", "TES", false, "世界总决赛冠军", "下路", true],
    ["mlxg", "中国", "英雄联盟", "LPL", "RNG", true, "MSI冠军", "打野", false],
    ["letme", "中国", "英雄联盟", "LPL", "RNG", false, "MSI冠军", "未知", false]
];

var question;
function work() {
    //结果判断
    if (models.length == 1) {
        $(".photo").css("flex-direction","column-reverse")
        var img = $('<img>',{
            src:"./source/img/player/"+models[0][0]+".png",
        });
        var div = $('<div>',{
            html:"再来一次",
            class:"button again",
        });
        $(".ask-menu-start").hide()
        $(".ask-menu").fadeIn(1000)
        img.appendTo($(".photo"))
        div.appendTo($(".ask-menu"))
        $(".name").text(models[0][0]);
        $(".yes").remove()
        $(".no").remove()
        $(".img").attr("src","./source/img/yes/end.png");
        return;
    }
    var count = [
        [{
            name: "",
            count: 0
        }]
    ];
    var j = 0;
    for (j = 0; j < 9; j++) {
        for (i = 0; i < models.length; i++) {
            if (!count[j]) {
                count.push([{
                    name: models[i][j],
                    count: 1
                }]);
            } else {
                var k = found(count[j], models[i][j]);
                if (k != -1) count[j][k].count++;
                else {
                    count[j].push({
                        name: models[i][j],
                        count: 1
                    })
                }
            }
        }
    }
    console.log("计数结果：");
    console.log(count);

    var max = {
        name: "",
        count: ""
    }
    var countBest = [max];
    for (i = 1; i < count.length; i++) {
        countBest[i] = getBest(count[i]);
    }
    console.log("取最接近半数的：");

    question = getBest(countBest);
    Switch();
}

$(document).ready(function () {
    alert("Hi! 我是拥有读心术的人工智能大E，能够猜出来你心中想的名人堂选手喔~现在你可以回去看看名人堂，然后选一个喜欢的选手，你只要回答我问题的答案是“对”还是“错”，我就能猜到你猜的是谁喔，你相信吗？");
    work();
    $("#text").fadeIn(1000);
    $(".yes").click(function () {
        var newModels = [];
        for (i = 0; i < models.length; i++) {
            if (models[i][question.index] == question.name) {
                newModels.push(models[i]);
            }
        }
        models = newModels;
        console.log("筛选后的列表");
        newModels.forEach(ele => {
            console.log(ele);
        })
        var p = $('<p>',{
            html:Switch(),
             });
        p.appendTo($(".information"))
        p.fadeIn(1000);
        var randnum = parseInt(Math.random()*(5)+1);
        $(".img").attr("src","./source/img/yes/"+randnum+".png");
        work();
    })

    $(".no").click(function () {
        var newModels = [];
        for (i = 0; i < models.length; i++) {
            if (models[i][question.index] != question.name) {
                newModels.push(models[i]);
            }
        }
        models = newModels;
        console.log("筛选后的列表");
        newModels.forEach(ele => {
            console.log(ele);
        })
        var p = $('<p>',{
            html:SwitchNo(),
             });
        p.appendTo($(".information"))
        p.fadeIn(1000);
        var randnum = parseInt(Math.random()*(5)+1);
        $(".img").attr("src","./source/img/no/"+randnum+".png");
        work();
    })

    $(".ask-menu").on("click",".again",function(){
        window.location.reload()
    })
})


function found(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == name) return i;
    }
    return -1;
}

function getBest(arr) {
    var bestObj = {
        name: "",
        count: 0,
        index: 0
    };
    var distance = [];
    var minDistance = Math.floor(models.length / 2);
    for (var j = 0; j < arr.length; j++) {
        distance.push(Math.abs(arr[j].count - Math.floor(models.length / 2)))
    }
    for (var j = 0; j < arr.length; j++) {
        if (distance[j] < minDistance) {
            bestObj = arr[j];
            bestObj.index = j;
            minDistance = distance[j];
        }
    }
    console.log("best:" + JSON.stringify(bestObj));
    return bestObj;
}

function SwitchNo(){
    var pask = $('<p>',{
        id:"text",
    });
    switch (question.index) {
        case 1:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("你所想的人是" + question.name + "人吗？")
            pask.fadeIn(800);
            return "你所想的人不是"+question.name+"人";
        case 2:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("你所想的人是" + question.name + "人吗？")
            pask.fadeIn(800);
            return "你所想的人不是"+question.name+"的职业选手";
        case 3:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("你所想的人参加" + question.name + "联赛吗？")
            pask.fadeIn(800);
            return "你所想的人没参加"+question.name+"联赛";
        case 4:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("他退役前或现在在" + question.name + "战队吗？")
            pask.fadeIn(800);
            return "你所想的人退役前或现在不在"+question.name+"战队";
        case 5:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("那他" + (question.name ? "" : "不") + "戴眼镜吗？(以名人堂上的照片为准)")
            pask.fadeIn(800);
            return "你所想的人"+(question.name ? "不" : "")+"戴眼镜";
        case 6:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("他得过的最高冠军奖项是" + question.name + "吗？")
            pask.fadeIn(800);
            return "你所想的人得过的最高奖项不是"+question.name;
        case 7:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("那..他是" + question.name + "选手吗？")
            pask.fadeIn(800);
            return "你所想的人不是"+question.name+"选手";
        case 8:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("那...你所想的人" + (question.name ? "在役" : "已经退役了") + "吗？")
            pask.fadeIn(800);
            return "你所想的人"+(question.name ? "已经退役了" : "在役");
        default:
            break;
    }
}

function Switch(){
    var pask = $('<p>',{
        id:"text",
    });
    switch (question.index) {
        case 1:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("你所想的人是" + question.name + "人吗？")
            pask.fadeIn(800);
            return "你所想的人是"+question.name+"人";
        case 2:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("你所想的人是" + question.name + "的职业选手吗？")
            pask.fadeIn(800);
            return "你所想的人是"+question.name+"的职业选手";
        case 3:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("你所想的人参加" + question.name + "联赛吗？")
            pask.fadeIn(800);
            return "你所想的人参加"+question.name+"联赛";
        case 4:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("他退役前或现在在" + question.name + "战队吗？")
            pask.fadeIn(800);
            return "你所想的人退役前或现在在"+question.name+"战队";
        case 5:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("那他" + (question.name ? "" : "不") + "戴眼镜吗？(以名人堂上的照片为准)")
            pask.fadeIn(800);
            return "你所想的人"+(question.name ? "" : "不")+"戴眼镜";
        case 6:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("他得过的最高冠军奖项是" + question.name + "吗？")
            pask.fadeIn(800);
            return "你所想的人得过的最高奖项是"+question.name;
        case 7:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("那..他是" + question.name + "选手吗？")
            pask.fadeIn(800);
            return "你所想的人是"+question.name+"选手";
        case 8:
            $("#text").remove()
            pask.appendTo($(".text"))
            $("#text").text("那...你所想的人" + (question.name ? "在役" : "已经退役了") + "吗？")
            pask.fadeIn(800);
            return "你所想的人"+(question.name ? "已经退役了" : "在役");
        default:
            break;
    }
}
