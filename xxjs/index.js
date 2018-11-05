
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





var xxIndex = {
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

        //��ʼ������area
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
        
        //���area�¼�
        var that = this
        $(".fire").click(function(){
            var postal_code = $(this).attr('id')
            that.data.postalCode = postal_code
            that.clickArea(postal_code)
        })
        //���area��Ĳ���
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

    //��ʼ����̨���ܹ���7��Ԥ�辫��
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

    //���¾���
    addSprite(){
        var width = $('.sprite').width();
        var height = $('.sprite').height();
        var danmu = this.data.danmu
        var danmuIndex = this.data.danmuIndex;
        var zIndex = this.data.zIndex;
        
        //7������Ԥ��
        var sprite_id = 'sprite_' + danmuIndex % 7; 
        $('#' + sprite_id).css('top', function () { return Math.random() * (height - 95) });
        $('#' + sprite_id).css('left', function () { return Math.random() * (width - 30 - 70) });
        $('#' + sprite_id).css('z-index', zIndex);
        $('#' + sprite_id + ' .logo').attr('src', danmu[danmuIndex].HeadImgUrl);
        $('#' + sprite_id + ' .name').html(danmu[danmuIndex].NickName);
        $('#' + sprite_id + ' .content').html(danmu[danmuIndex].Content);
        $('#' + sprite_id).addClass('pop');
        //ÿ����1�����飬����+1
        this.data.danmuIndex++;
        this.data.zIndex++;
        //���������ˣ�������ѯ���������bug����һֱ��ס���һ�����鲻��
        if (this.data.danmuIndex == danmu.length)
            this.data.danmuIndex = 0;
    },


    // ����
    clickZan(){
        // alert("Ϊ�������޳ɹ�������ֵ+5");
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
                var str = "��л��Ϊ" +_current_area.name +
                "����"+res.result.Score+"�����ֵ��" +
                "��Ҳ���"+res.result.Score+"�����"
                alert(str)   

                //�����ܻ���
                that.data.areaList[_area_index].Score += 1
                //ˢ�µ�ͼ����
                $("#"+_postal_code + " span").html(that.data.areaList[_area_index].Score )
                //ˢ�µ������ķ���
                that.clickArea(_postal_code)
            }
        });

    },


}


