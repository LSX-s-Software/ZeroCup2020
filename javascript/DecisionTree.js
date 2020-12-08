// function Dictionary() {
//     this.dataStore = [];
//     this.add = add;     // 添加元素
//     this.inc = inc;
//     this.find = find;    // 查找元素
//     this.remove = remove;  // 删除元素
//     this.count = count;   // 字典中元素个数
//     this.showAll = showAll; // 显示字典元素
//     this.clear = clear;   // 清空字典
//     function add(key, value) {
//         this.dataStore[key] = value;
//     }
//     function inc(key) {
//         if (!this.dataStore[key]) add(key, 1);
//         else this.dataStore[key]++;
//     }
//     function find(key) {
//         return this.dataStore[key];
//     }
//     function remove(key) {
//         if (this.dataStore[key]) delete this.dataStore[key];
//         else return 'Not Found';
//     }
//     function showAll() {
//         for (var key in this.dataStore) {
//             console.log(key + ': ' + this.dataStore[key]);
//         }
//     }
//     function count() {
//         var n = 0;
//         for (var key in this.dataStore) {
//             ++n;
//         }
//         return n;
//     }
//     function clear() {
//         for (var key in this.dataStore) {
//             delete this.dataStore[key];
//         }
//     }
// }

// dic = {name:"未知",nation: "未知",game: "未知",championship: "未知",team:"未知",famousFor:"未知",award:"未知",character:"未知",working:};
var models = [
    ["N0tail", "丹麦", "Dota2", "外赛区", "OG", "他的亚巴顿", "18，19年Dota2国际邀请赛冠军", "辅助", true],
    ["Zunba", "韩国", "守望先锋", "外赛区", "首尔王朝队", "他的查丽娅", "16,17年世界杯冠军","坦克",false],
    ["JJonak", "韩国", "守望先锋", "外赛区", "纽约九霄天擎队", "他的禅雅塔", "世界最强禅雅塔","辅助", true],
    ["miro", "韩国", "守望先锋", "外赛区", "首尔王朝队", "他的温斯顿", "2016年第一届守望先锋世界杯冠军", "坦克", true],
    ["sky", "中国", "魔兽争霸", "中国", "WE", "当过奥运火炬手", "中国电竞第一人", "无", false],
    ["moon", "韩国", "魔兽争霸", "外赛区", "WeMade FOX", "年龄超过30岁还仍然夺冠", "2018年黄金联赛冬季总决赛《魔兽争霸3》冠军", "无", true],
    ["kuroky", "德国", "DOTA2", "外赛区", "Team Nigma", "他的拉比克", "2017年Dota2国际邀请赛冠军", "辅助", true],
    ["faker", "韩国", "英雄联盟", "LCK", "SKT", "被称为大魔王", "三冠王", "中单", true],
    ["the shy", "韩国", "英雄联盟", "LPL", "IG", "天神下凡一锤四","2018年世界总决赛冠军",  "上单", true],
    ["Rookie", "韩国", "英雄联盟", "LPL", "IG", "他的球女","2018年世界总决赛冠军", "中单",  true],
    ["Doinb", "韩国", "英雄联盟", "LPL", "FPX", "他的潘森和克烈", "2019年世界总决赛冠军", "中单", true],
    ["doublelift", "美国", "英雄联盟", "LCS", "TSM", "他年年十六强", "LCS霸主", "下路", false],
    ["karsa", "中国", "英雄联盟", "LPL", "TES", "外号“雷达哥”", "2018年MSI冠军", "打野", true],
    ["tian", "中国", "英雄联盟", "LPL", "FPX", "他的琪亚娜", "2019年世界总决赛冠军", "打野", true],
    ["ning", "中国", "英雄联盟", "LPL", "IG", "拿过总决赛mvp", "2018年世界总决赛冠军", "打野", true],
    ["xiaohu", "中国", "英雄联盟", "LPL", "RNG", "打过2200的伤害", "2018年MSI冠军", "中单", true],
    ["ming", "中国", "英雄联盟", "LPL", "RNG", "他是队伍的团宠", "2018年MSI冠军", "下路", true],
    ["Weixiao", "中国", "英雄联盟", "LPL", "WE", "多年后重回原先的俱乐部执教", "IPL5冠军", "下路", false],
    ["Uzi", "中国", "英雄联盟", "LPL", "RNG", "他的薇恩", "2018年MSI冠军", "下路", false],
    ["Clearlove", "中国", "英雄联盟", "LPL", "WE", "他的伊芙琳","2015年MSI冠军",  "打野", false],
    ["mlxg", "中国", "英雄联盟", "LPL", "RNG", "他的梦魇和奥拉夫", "2018年MSI冠军", "打野", false],
    ["letme", "中国", "英雄联盟", "LPL", "RNG", "他的奥恩", "2018年MSI冠军", "未知", false]
];
function work() {
    if (models.length == 1) {
        alert("我猜他是" + models[0][0]);
        return;
    }
    if (models.length == 0) {
        alert("你猜的人不在名人堂里");
        return;
    }
    var count = [[{ name: "", count: 0 }]]//[new Dictionary(),new Dictionary(),new Dictionary(),new Dictionary(),new Dictionary(),new Dictionary(),new Dictionary(),new Dictionary(),new Dictionary() };
    var j = 0;
    for (j = 0; j < 9; j++) {
        for (i = 0; i < models.length; i++) {
            if (!count[j]) {
                count.push([{ name: models[i][j], count: 1 }]);
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
    // count.forEach(ele => {
    //     ele.forEach(e => {
    //         console.log(e);
    //     })
    //     console.log("");
    // })
    var max = { name: "", count: "" }
    var countBest = [max];
    for (i = 1; i < count.length; i++) {
        countBest[i] = getBest(count[i]);
    }
    console.log("取最接近半数的：");
    console.log(countBest);
    // countMax.forEach(ele => {
    //     console.log(ele);
    // })
    var question = getBest(countBest);
    var res;
    switch (question.index) {
        case 1:
            res = confirm("你所想的人是" + question.name + "人吗？")
            break;
        case 2:
            res = confirm("你所想的人是" + question.name + "的职业选手吗？")
            break;
        case 3:
            res = confirm("你所想的人参加" + question.name + "联赛吗？")
            break;
        case 4:
            res = confirm("你所想的人属于或曾属于" + question.name + "战队吗？")
            break;
        case 5:
            res = confirm("你所想的人因为" + question.name + "而出名吗？")
            break;
        case 6:
            res = confirm("你所想的人曾获" + question.name + "吗？")
            break;
        case 7:
            res = confirm("你所想的人是" + question.name + "选手吗？")
            break;
        case 8:
            res = confirm("你所想的人" + question.name ? "在役" : "已经退役了" + "吗？")
            break;
        default:
            break;
    }
    var newModels = [];
    for (i = 0; i < models.length; i++) {
        if (res) {
            if (models[i][question.index] == question.name) {
                newModels.push(models[i]);
            }
        } else {
            if (models[i][question.index] != question.name) {
                newModels.push(models[i]);
            }
        }
    }
    models = newModels;
    console.log("筛选后的列表");
    newModels.forEach(ele => {
        console.log(ele);
    })
    work();
}
work();

function found(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == name) return i;
    }
    return -1;
}

function getMax(arr) {
    var maxObj = { name: "", count: 0, index: 0 };
    for (var j = 0; j < arr.length; j++) {
        if (arr[j].count > maxObj.count) {
            maxObj = arr[j];
            maxObj.index = j;
        }
    }
    return maxObj;
}

function getBest(arr) {
    var bestObj = { name: "", count: 0, index: 0 };
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
    return bestObj;
}