
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





var xxEditor = {
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
        
    },

    onLoad:function(){
  

    },

    addCommentL:function(){
        var content = $("#content").val()
        if(content.length == 0){
            alert("请输入祝福语")
            return
        }
        // 上传评论
        $.ajax({ 
            url:COMMENT_ADD, 
            data:{
                "addrID":postalCode,
                "openID":openid,
                "Content":content,
                "Type":1,
            },
            success: function(res){
                console.log(res)
                alert("祝语已送达广西")
                history.go(-1)
            }
        });
    },
}


