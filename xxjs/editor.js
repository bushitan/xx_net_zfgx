
var base_url = "https://www.51zfgx.com/"

var COMMENT_LIST = base_url + "Comment/RandomList"
var COMMENT_ADD = base_url + "Comment/Add"
var CITY_SINGLE_CITY = base_url + "City/SingleCity"
var CITY_LIST = base_url + "City/List"
var ACCOUNT_MY_SCORE = base_url + "Account/MyScore"
var ACCOUNT_MY_FRIENDES = base_url + "Account/MyFriendList"


// // ��ȡ�������
// $.ajax({ 
//     url:COMMENT_LIST, 
//     data:{
//         "addrID":"7701",
//         "openID":null,
//     },
//     success: function(res){
//     }
// });

// // ��ȡ�Լ�������
// $.ajax({ 
//     url:COMMENT_LIST, 
//     data:{
//         "openID":null,
//     },
//     success: function(res){
//     }
// });



// // �ϴ�����
// $.ajax({ 
//     url:COMMENT_ADD, 
//     data:{
//         "addrID":"7701",
//         "openID":1,
//         "Content":"��һ������",
//         "Type":1,
//     },
//     success: function(res){
//     }
// });


// // ���е��޼ӻ���
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

// // 3.2 ʶ����гɹ��ӻ���
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
// // 3.3 ʶ������ɹ��ӻ���
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


// // 3.4 ��ѯ�������еĻ���
// $.ajax({ 
//     url:CITY_SINGLE_CITY, 
//     data:{
//         "addrID":"7701",
//     },
//     success: function(res){
//     }
// });

// // 3.5 ��ѯ�����б�Ļ���
// $.ajax({ 
//     url:CITY_LIST, 
//     success: function(res){
//     }
// });

// // 4.1 ��ѯ�Լ��Ļ���
// $.ajax({ 
//     url:ACCOUNT_MY_SCORE, 
//     data:{
//         "openID":null,
//     },
//     success: function(res){
//     }
// });


// // 4.2����ѯ�Լ�������ĺ���
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
        // �����б�
        areaList:[
            {name: "����", PostalCode: 7701, Score:520, top: 300, left: 340,},
            {name: "����", PostalCode: 7702, Score:520, top: 100, left: 440,},
            {name: "����", PostalCode: 7703, Score:520, top: 50, left: 540,},
            {name: "�ӳ�", PostalCode: 7704, Score:520, top: 130, left: 300,},
            {name: "��ɫ", PostalCode: 7705, Score:520, top: 210, left: 180,},
            {name: "����", PostalCode: 7706, Score:520, top: 440, left: 440,},
            {name: "����", PostalCode: 7707, Score:520, top: 340, left: 230,},
            {name: "���", PostalCode: 7708, Score:520, top: 270, left: 500,},
            {name: "����", PostalCode: 7709, Score:520, top: 160, left: 640,},
            {name: "����", PostalCode: 7710, Score:520, top: 220, left: 440,},
            {name: "����", PostalCode: 7711, Score:520, top: 370, left: 410,},
            {name: "����", PostalCode: 7712, Score:520, top: 270, left: 600,},
            {name: "����", PostalCode: 7713, Score:520, top: 370, left: 510,},
            {name: "���Ǹ�", PostalCode: 7714, Score:520, top: 420, left: 300,},
        ],
        postalCode:7701,
        
    },

    onLoad:function(){
  

    },

    addCommentL:function(){
        var content = $("#content").val()
        if(content.length == 0){
            alert("������ף����")
            return
        }
        // �ϴ�����
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
                alert("ף�����ʹ����")
                history.go(-1)
            }
        });
    },
}


