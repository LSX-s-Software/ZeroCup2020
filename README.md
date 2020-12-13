# ZeroCup2020
武汉大学2020年零杯零组**return 0;组**一等奖作品

> 本README撰写于初赛提交作品前，后续的更改没有全部更新到此README内。

## 一. 综述

我们的网站分为四个section:

1. 近年优秀的游戏介绍，包括单机游戏和网络游戏两个品类，我们在每个品类挑选了5款近年火爆的游戏，对它们做了简单的介绍，带你走进游戏的世界。
2. 电子竞技：通过2018年中国队夺冠的比赛录像引入话题，六个小板块带你了解电子竞技的发展与成熟的过程。
3. 电子竞技名人堂：展示电子竞技史上最著名的选手或其他知名人物，是他们把电子竞技带到了一个新的台阶
4. 电子竞技时间轴：回溯自电竞风潮开始之时迄今的风云往事，对其中的标志性大事件进行展示

## 二. 项目目录及说明

```shell
.
└── Zerocup2020 
    ├── css //css文件
    │   ├── index.css //主页面css文件
    │   ├── timeline.css //电竞大事记css文件
    │   └── waterfallflow.css //电竞名人堂css文件
    ├── index.html // 主页面html文件，项目入口
    ├── javascript
    │   ├── index.js //主页面JavaScript文件
    │   ├── jquery-3.5.1.min.js //Jquery库文件
    │   ├── swiper // 游戏介绍页js/css文件 & swiper.js库文件
    │   │   └── ...
    ├── README.md //项目介绍
    ├── source //资源文件夹
    │   ├── font //字体文件夹
    │   │   └── ...
    │   ├── icon //图标文件夹
    │   │   ├── ...
    │   └── img
    │       ├── game //游戏介绍页游戏图片文件夹
    │       │   ├── 1.jpg
    │       │   ├── ...
    │       ├── IG_Ning_2020_Split_2.png //电竞名人堂选手图片文件夹
    │   waterfallflow.html //电竞名人堂html文件
    └──	timeline.html //电竞大事记html文件
```

## 三.功能设计

​	在本项目中，我们采用完全前端展示的设计，首先绘制了UI图，在此基础上编写html，css和JavaScript的代码。除引用了``jQuery``库和``swiper.js``库协助开发外，主页面没有使用任何第三方辅助工具和其他库，在时间轴部分采用了jQuery时间轴插件。为提高合作效率，我们学习并使用了``git``和``github``帮助高效开发，使用``iframe``嵌套不同的页面。同时我们注意开发规范，对变量命名、css选择器、JavaScript标准等都严格要求，代码可读性高，同时我们还将部分效果组件化，以期之后重复使用。

​	在第一页面中，我们设计并实现了文字行行渐入的动画效果，在右侧设计了分页器，下方设计了滑动提示文字。有一个小彩蛋是滑动了解按钮长时间没点击时，会渐渐向上滑动直至滑出屏幕。

​	用户点击滑动提示文字或滑动滚轮进入第二页面后，我们设计了上栏banner渐入的动画，同时对文字添加了从两侧斜向飞入的动画。用户点击了解更多按钮后，中心的分割线会向一侧移动，同时在另一侧显示出斜切的轮播图。用户点击切换按钮时轮播图和游戏介绍文字将滑动切换。点击关闭时，轮播图淡出，分割线移动回原本的位置。

​	用户继续滑动滚轮，将进入电子竞技的介绍环节。我们选取了2018年IG战队夺冠时的团战比赛录像，这是中国赛区战队首次在英雄联盟全球总决赛中夺冠，彰显纪念意义。这里我们巧妙使用``position:sticky;``将背景视频粘贴到背景，造成一种“拉开幕布”的视觉假象。随着滚轮继续滑动，游戏视频不断缩小，最后在中心形成一个“正在播放电竞比赛视频”的电脑。在此处我们着重于放大参数，调试了较长时间，添加了``easeInOutCubic``的曲线，使得滑入滑出更加顺滑，解决了放大速度快慢不合情理的问题。当滑动达到边界时，屏幕不再缩放，六个分别介绍电子竞技&游戏产业链不同方面的六边形从边角飞入。当用户将鼠标移动到六边形上时，可以看到更多相关的详细信息。

​	最后，用户来到最终介绍板块。在这里我们主要介绍了“电竞名人堂”和“电竞大事记”两个板块。在“电竞名人堂”板块中，我们以瀑布流的形式介绍了近年来较为出名的电子竞技选手，用户将鼠标移动到特定选手时，会浮现出更多相关信息，主要包括其竞技项目和所获荣誉。我们期望以这种形式向把电竞带上新台阶、赋予电子游戏竞技意义的他们表达敬意。

​	在“电竞大事记”板块，我们以时间轴的形式记录了对电竞最有影响的一些年份，当用户滑动滚轮时，时间轴会前进，并显示出当年发生的对电子竞技有里程碑式意义的大事件。通过回顾历史，用户能沉浸在电竞的发展之中，也更能激起用户从0“入坑”电竞的兴趣。



## 四.引用的第三方库

jQuery: 用于一些DOM操作

swiper.js:用于辅助制作轮播图

一种基于jQuery的时间轴辅助制作插件

## 五.界面原型(UI)图与部分展示图片

UI原型图：

蓝湖截图
![蓝湖.png](https://i.loli.net/2020/12/04/4ZRj8Xdg3Fw7QAD.png)
![Snipaste_2020-12-04_16-31-12.png](https://i.loli.net/2020/12/04/MN5w7iIez8ZLQGF.png)

第一屏

![第一屏](https://alipic.lanhuapp.com/xdd4843d81-08a9-425a-af3f-9e445c53958b?x-oss-process=image/quality,q_lossless/format,webp)

第二屏
![第二屏](https://alipic.lanhuapp.com/xd1dbcd093-8ee1-4735-8153-32c93410a85f?x-oss-process=image/quality,q_lossless/format,webp)

第三屏

![第三屏](https://alipic.lanhuapp.com/xd9466595a-f880-4ce2-a9cb-abdca8c1d40b?x-oss-process=image/quality,q_lossless/format,webp)

第四屏
![第四屏](https://alipic.lanhuapp.com/xd24e66adb-b9f4-4a0b-9387-8c21472254c4?x-oss-process=image/quality,q_lossless/format,webp)

GitHub commit记录

![github commit截图.png](https://i.loli.net/2020/12/04/iEVD2yU1n8Y49Ms.png)

GitHub issue记录
![github issue截图.png](https://i.loli.net/2020/12/04/JgzXHICmtanYbG3.png)

网页实际效果

![实例1.png](https://i.loli.net/2020/12/04/lLmne79yqAJrQPX.png)

![瀑布流](https://i.loli.net/2020/12/04/pxg6ak7v5KyidVO.png)

------

> 由于比赛时间紧迫、技术水平有限等原因，本网页存在一些大大小小的bug，~~欢迎大家寻宝（bushi~~敬请见谅！
