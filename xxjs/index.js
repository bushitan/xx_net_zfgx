
var base_url = "https://www.51zfgx.com/"

var COMMENT_LIST = base_url + "Comment/RandomList"
var COMMENT_ADD = base_url + "Comment/Add"
var CITY_SINGLE_CITY = base_url + "City/SingleCity"
var CITY_LIST = base_url + "City/List"
var ACCOUNT_MY_SCORE = base_url + "Account/MyScore"
var ACCOUNT_MY_FRIENDES = base_url + "Account/MyFriendList"


// // 获取随机评论
// $.ajax({ 
//     url:COMMENT_LIST, 
//     data:{
//         "addrID":"7701",
//         "openID":null,
//     },
//     success: function(res){
//     }
// });

// // 获取自己的评论
// $.ajax({ 
//     url:COMMENT_LIST, 
//     data:{
//         "openID":null,
//     },
//     success: function(res){
//     }
// });



// // 上传评论
// $.ajax({ 
//     url:COMMENT_ADD, 
//     data:{
//         "addrID":"7701",
//         "openID":1,
//         "Content":"第一次评论",
//         "Type":1,
//     },
//     success: function(res){
//     }
// });


// // 城市点赞加积分
// $.ajax({ 
//     url:COMMENT_ADD, 
//     data:{
//         "addrID":"7701",
//         "openID":1,
//         "Type":4,
//     },
//     success: function(res){
//     }
// });

// // 3.2 识别城市成功加积分
// $.ajax({ 
//     url:COMMENT_ADD, 
//     data:{
//         "addrID":"7701",
//         "openID":1,
//         "Type":5,
//     },
//     success: function(res){
//     }
// });
// // 3.3 识别吉祥物成功加积分
// $.ajax({ 
//     url:COMMENT_ADD, 
//     data:{
//         "addrID":"7701",
//         "openID":1,
//         "Type":6,
//     },
//     success: function(res){
//     }
// });


// // 3.4 查询单个城市的积分
// $.ajax({ 
//     url:CITY_SINGLE_CITY, 
//     data:{
//         "addrID":"7701",
//     },
//     success: function(res){
//     }
// });

// // 3.5 查询城市列表的积分
// $.ajax({ 
//     url:CITY_LIST, 
//     success: function(res){
//     }
// });

// // 4.1 查询自己的积分
// $.ajax({ 
//     url:ACCOUNT_MY_SCORE, 
//     data:{
//         "openID":null,
//     },
//     success: function(res){
//     }
// });


// // 4.2，查询自己已邀请的好友
// $.ajax({ 
//     url:ACCOUNT_MY_FRIENDES, 
//     data:{
//         "openID":null,
//     },
//     success: function(res){
//     }
// });





var xxIndex = {
    data:{
        // 区域列表
        areaList:[
            {name: "南宁", PostalCode: 7701, Score:520, top: 300, left: 340,},
            {name: "柳州", PostalCode: 7702, Score:520, top: 100, left: 440,},
            {name: "桂林", PostalCode: 7703, Score:520, top: 50, left: 540,},
            {name: "河池", PostalCode: 7704, Score:520, top: 130, left: 300,},
            {name: "百色", PostalCode: 7705, Score:520, top: 210, left: 180,},
            {name: "北海", PostalCode: 7706, Score:520, top: 440, left: 440,},
            {name: "崇左", PostalCode: 7707, Score:520, top: 340, left: 230,},
            {name: "贵港", PostalCode: 7708, Score:520, top: 270, left: 500,},
            {name: "贺州", PostalCode: 7709, Score:520, top: 160, left: 640,},
            {name: "来宾", PostalCode: 7710, Score:520, top: 220, left: 440,},
            {name: "钦州", PostalCode: 7711, Score:520, top: 370, left: 410,},
            {name: "梧州", PostalCode: 7712, Score:520, top: 270, left: 600,},
            {name: "玉林", PostalCode: 7713, Score:520, top: 370, left: 510,},
            {name: "防城港", PostalCode: 7714, Score:520, top: 420, left: 300,},
        ],
        postalCode:7701,
        danmu:[],
        danmuIndex : 0,
        zIndex : 0,

        
    },

    onLoad:function(){
        var that = this
        var areaList = this.data.areaList
        var initPostalCode = this.data.postalCode
        $.ajax({ 
            url:CITY_LIST, 
            success: function(res){
                console.log(res)
                var _list = res.result
                for (var i=0;i<areaList.length;i++)
                    for(var j=0;j<_list.length;j++){
                        if(areaList[i].PostalCode == _list[j].PostalCode ){
                            areaList[i].Score = _list[j].Score
                        }
                    }
                that.initMap(initPostalCode)
            }
        });

        $.ajax({ 
            url:COMMENT_LIST, 
            data:{
                "addrID":initPostalCode,
                // "openID":null,
            },
            success: function(res){
                console.log(res)
                that.data.danmu = res.result
                that.initComment()
            }
        });

    },

    initMap:function(initPostalCode){
        var map_width = $('.map').width();
        var map_height = $('.map').height();
        console.log("map", map_width, map_height);

        //初始化所有area
        var _list = this.data.areaList
        for (var i = 0; i < _list.length; i++) {
            var temp = _list[i];
            var area = '<div class="fire area_' + temp.PostalCode + '" ' +
                'id="'+ temp.PostalCode + '"' +
                'style="left:' + temp.left / 2 + 'px;top:' + temp.top / 2 + 'px" >' +
                '<img  src="../../xximage/images/my_select.png"/>' +
                '<span>' + temp.Score + '</span>' +
                '<div>' + temp.name + '</div>' +
                '</div>';
            $('.area').append(area);
        }
        
        //点击area事件
        var that = this
        $(".fire").click(function(){
            var postal_code = $(this).attr('id')
            that.data.postalCode = postal_code
            that.clickArea(postal_code)
        })
        //点击area后的操作
        this.clickArea(initPostalCode)

    },
    clickArea(postal_code){
        var _list = this.data.areaList
        for (var i = 0; i < _list.length; i++) {
            var temp = _list[i];
            if (postal_code ==temp.PostalCode){
                $('.fire').removeClass('select');
                $('#' + postal_code).addClass('select');
                $('.wall_title').html(temp.name);
                $('.wall_zan').html(temp.Score);
            }
        }
    },

    initComment(){
        console.log(this)
        // var width = $('.sprite').width();
        // var height = $('.sprite').height();
        // var danmuIndex = 0;
        // var zIndex = 0;
        var that = this
        this.createStage()
        var interval = setInterval(
            function () {
                that.addSprite();
            }
        , 1500);
    },

    //初始化舞台，总共有7个预设精灵
    createStage(){
        for (var i = 0; i < 7; i++) {
            var node = "<div id='sprite_" + i + "' class='disappear' style=' opacity: 0; '>" +
                "<div class='user'>" +
                "<img class='logo' src='../../xximage/images/logo.jpg'/>" +
                "<label class='name'></label>" +
                "</div>" +
                "<div class='content'></div>" +
                "</div>";
            $('.sprite').append(node);
        }

        $('.disappear').on('animationend webkitAnimationEnd', function (e) {
            console.log(this.id)
            $(this).removeClass("pop");
        });
    },

    //更新精灵
    addSprite(){
        var width = $('.sprite').width();
        var height = $('.sprite').height();
        var danmu = this.data.danmu
        var danmuIndex = this.data.danmuIndex;
        var zIndex = this.data.zIndex;
        
        //7个精灵预设
        var sprite_id = 'sprite_' + danmuIndex % 7; 
        $('#' + sprite_id).css('top', function () { return Math.random() * (height - 95) });
        $('#' + sprite_id).css('left', function () { return Math.random() * (width - 30 - 70) });
        $('#' + sprite_id).css('z-index', zIndex);
        $('#' + sprite_id + ' .logo').attr('src', danmu[danmuIndex].HeadImgUrl);
        $('#' + sprite_id + ' .name').html(danmu[danmuIndex].NickName);
        $('#' + sprite_id + ' .content').html(danmu[danmuIndex].Content);
        $('#' + sprite_id).addClass('pop');
        //每增加1个精灵，坐标+1
        this.data.danmuIndex++;
        this.data.zIndex++;
        //精灵用完了，重新轮询，这里存在bug，会一直卡住最后一个精灵不动
        if (this.data.danmuIndex == danmu.length)
            this.data.danmuIndex = 0;
    },


    // 点赞
    clickZan(){
        // alert("为南宁点赞成功，活力值+5");
        var that = this
        var _current_area 
        var _postal_code = this.data.postalCode
        var _area_list = this.data.areaList
        var _area_index = 0
        for (var i=0;i<_area_list.length;i++)
            if(_postal_code == _area_list[i].PostalCode){
                _current_area = _area_list[i]
                _area_index = i
            }
        
        $.ajax({ 
            url:COMMENT_ADD, 
            data:{
                "addrID":this.data.postalCode,
                "openID":openid,
                "Type":4,
            },
            success: function(res){
                console.log(res)
                console.log(_current_area.name)
                var str = "感谢你为" +_current_area.name +
                "增加"+res.result.Score+"点活力值，" +
                "您也获得"+res.result.Score+"点积分"
                alert(str)   

                //增加总积分
                that.data.areaList[_area_index].Score += 1
                //刷新地图分数
                $("#"+_postal_code + " span").html(that.data.areaList[_area_index].Score )
                //刷新点击区域的分数
                that.clickArea(_postal_code)
            }
        });

    },


}


