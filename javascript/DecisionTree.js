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
    ["N0tail", "未知", "守望先锋", "未知", "未知", "未知", "未知", "未知", "未知"],
    ["Zunba", "韩国", "守望先锋", "未知", "未知", "未知", "未知", "未知", "他的查丽娅"],
    ["JJonak", "韩国", "守望先锋", "未知", "未知", "未知", "未知", "未知", "他的禅雅塔"],
    ["miro", "韩国", "守望先锋", "未知", "未知", "未知", "未知", "未知", "未知"],
    ["sky", "未知", "魔兽争霸", "未知", "未知", "当过奥运火炬手", "未知", "未知", "未知"],
    ["moon", "未知", "魔兽争霸", "未知", "未知", "未知", "未知", "未知", "未知"],
    ["kuroky", "未知", "DOTA2", "未知", "未知", "2017年Dota2国际邀请赛冠军", "未知", "未知", "未知"],
    ["faker", "韩国", "英雄联盟", "未知", "未知", "未知", "未知", "未知", "未知"],
    ["the shy", "韩国", "英雄联盟", "LPL", "未知", "未知", "未知", "未知", "未知"],
    ["Rookie", "韩国", "英雄联盟", "LPL", "未知", "2018年世界总决赛冠军", "中单", "未知", "未知"],
    ["Doinb", "韩国", "英雄联盟", "LPL", "未知", "未知", "中单", "未知", "未知"],
    ["doublelift", "未知", "英雄联盟", "未知", "未知", "未知", "未知", "未知", "未知"],
    ["karsa", "中国", "英雄联盟", "未知", "未知", "未知", "未知", "打野", true],
    ["tian", "中国", "英雄联盟", "未知", "未知", "他的琪亚娜", "世界总决赛冠军", "打野", true],
    ["ning", "中国", "英雄联盟", "未知", "未知", "未知", "世界总决赛冠军", "打野", true],
    ["xiaohu", "中国", "英雄联盟", "未知", "RNG", "未知", "未知", "中单", true],
    ["ming", "中国", "英雄联盟", "未知", "RNG", "未知", "未知", "未知", true],
    ["Weixiao", "中国", "英雄联盟", "未知", "WE", "未知", "未知", "下路", true],
    ["Uzi", "中国", "英雄联盟", "未知", "未知", "未知", "未知", "下路", false],
    ["Clearlove", "中国", "英雄联盟", "未知", "WE", "未知", "未知", "未知", false],
    ["mlxg", "中国", "英雄联盟", "未知", "未知", "未知", "未知", "打野", false],
    ["letme", "中国", "英雄联盟", "未知", "未知", "未知", "未知", "未知", false]
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
    for (i = 1; i < models.length; i++) {
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