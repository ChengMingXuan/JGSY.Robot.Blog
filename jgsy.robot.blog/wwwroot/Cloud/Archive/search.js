$(function () {
    $("#WAkw")
        .focus(function () { focusEvent(); })
        .blur(function () {
            setTimeout(function () {
                $("#btnCurrentUserHistory").addClass('hide');
                $('#WAkw').removeClass('sub-postion-input');
            }, 200);
        })
        .keyup(function (event) {
            if (!$('#btnCurrentUserHistory').hasClass('hide')) {
                if (!event) event = window.event;
                switch (event.keyCode) {
                    case 38:
                        keyUpDown(0)
                        break;
                    case 40:
                        keyUpDown(1)
                        break;
                    default:
                }
            }
        })
        .keydown(function (event) {
            if (!event) event = window.event;
            setTimeout(function () {
                var key = $.trim($('#WAkw').val());
                if (key == "") {
                    focusEvent();
                    return;
                }
                if (event.keyCode == 38 || event.keyCode == 40 || ((event.keyCode || event.which) == 13)) {
                    return;
                }
                $('#btnCurrentUserHistory').addClass('hide');
                romoteData(key);
            }, 200);
        });

});
function romoteData(key) {

    $.ajax({
        type: "GET",
        url: "/api/Home/Get",
        data: { key: key },
        dataType: "json",
        success: function (jsonResult) {
            if (jsonResult) {
                var html = "";
                for (var i = 0; i < jsonResult.length; i++) {
                    html += '<li>' + jsonResult[i] + '</li>';
                }
                $("#btnCurrentUserHistory").find('ul:eq(0)').html('').append(html);
                $('#btnCurrentUserHistory').find('ul li').click(function () {
                    var val = $.trim($(this).text());
                    $('#WAkw').val(val);
                    $('#btnCurrentUserHistory').addClass('hide');
                });
                $('#btnCurrentUserHistory').find('ul li').mouseover(function () {
                    var self = $(this);
                    self.addClass('selected').siblings().removeClass('selected');
                });
                setWidth(true);
            }
        }

    });
}
function focusEvent() {
    var arrs = $.cookie("btnCurrentUserHistory");
    if (arrs) {
        setWidth(true);
        $('#WAkw').addClass('sub-postion-input');
        var items = arrs.split('△');
        var html = "";
        for (var i = 0; i < items.length; i++) {
            html += '<li>' + items[i] + '</li>';
        }
        $("#btnCurrentUserHistory").find('ul:eq(0)').html('').append(html);
        $('#btnCurrentUserHistory').find('ul li').click(function () {
            var val = $.trim($(this).text());
            $('#WAkw').val(val);
            $('#btnCurrentUserHistory').addClass('hide');
        });
        $('#btnCurrentUserHistory').find('ul li').mouseover(function () {
            var self = $(this);
            self.addClass('selected').siblings().removeClass('selected');
        });
    }
}
function userAgentValidBrowser() {
    return true;
    //try {
    //    var u_agent = navigator.userAgent;
    //    var browser_name = true;
    //    if (u_agent.indexOf('Edge') > -1) {
    //        browser_name = true;//browser_name = 'Edge';
    //    } else  if (u_agent.indexOf('Trident') > -1 && u_agent.indexOf('rv:11') > -1) {
    //        browser_name = true;//browser_name = 'IE11';
    //    } else if (u_agent.indexOf('MSIE') > -1 && u_agent.indexOf('Trident') > -1) {
    //        browser_name = true;//browser_name = 'IE(8-10)';
    //    } else if (u_agent.indexOf('MSIE') > -1) {
    //        browser_name = true; //browser_name = 'IE(6-7)';
    //    } else if (u_agent.indexOf('Firefox') > -1) {
    //        browser_name = true; //browser_name = 'Firefox';
    //    } else if (u_agent.indexOf('Chrome') > -1) {
    //        browser_name = false;//browser_name = 'Chrome';
    //    } else if (u_agent.indexOf('Opera') > -1) {
    //        browser_name = true;//browser_name = 'Opera';
    //    } else {
    //        browser_name = true;
    //    }
    //} catch (e) {
    //    console.error(e)
    //}
    //return browser_name;
}
function setWidth(flag) {
    if (userAgentValidBrowser()) {
        var w = $('#WAkw').width() + 26;
        $('#btnCurrentUserHistory').find('ul:eq(0)').css({ "width": w + "px" });
    }
    if (flag) { $('#btnCurrentUserHistory').removeClass('hide'); }
}
function keyUpDown(num) {
    var liList = $('#btnCurrentUserHistory').find('ul li');
    var flg = $('#btnCurrentUserHistory').find('ul li.selected');
    var len = liList.length;
    if (num == 0) {
        //用户按了上方向键
        if (flg.length == 0) {
            $('#btnCurrentUserHistory').find('ul li:eq(0)').addClass('selected').siblings().removeClass('selected');
        } else if (len == 1) {
            $('#btnCurrentUserHistory').find('ul li:eq(0)').addClass('selected');
        } else {
            for (var i = 0; i < liList.length; i++) {
                if ($(liList[i]).hasClass('selected')) {
                    if (i == 0) {
                        $('#btnCurrentUserHistory').find('ul li:last').addClass('selected').siblings().removeClass('selected'); break;
                    } else {
                        $(liList[i]).removeClass('selected').prev().addClass('selected'); break;
                    }
                }
            }
        }
    } else if (num == 1) {
        //用户按了下方向键
        if (flg.length == 0) {
            $('#btnCurrentUserHistory').find('ul li:eq(0)').addClass('selected').siblings().removeClass('selected');
        } else if (len == 1) {
            $('#btnCurrentUserHistory').find('ul li:eq(0)').addClass('selected');
        }  else {
            for (var i = 0; i < liList.length; i++) {
                if ($(liList[i]).hasClass('selected')) {
                    if (i == (len - 1)) {
                        $('#btnCurrentUserHistory').find('ul li:eq(0)').addClass('selected').siblings().removeClass('selected'); break;
                    } else {
                        $(liList[i]).removeClass('selected').next().addClass('selected'); break;
                    }
                }
            }
        }
    }
}
function addFullEventTitle(title) {
    var t = $.trim(title);
    if (t == "") return;
    var data = $.cookie("btnCurrentUserHistory");
    if (data) {
        var items = data.split('△');
        if ($.isArray(items)) {
            var lastData = t;
            for (var i = 0; i < items.length; i++) {
                if (i > 9) { break; }
                if (items[i] == t) { continue; }
                lastData += '△' + items[i];
            }
            $.cookie("btnCurrentUserHistory", lastData);
        }
    } else {
        $.cookie("btnCurrentUserHistory", title, { path: '/', expires: 30 * 60 * 60 * 1000 });
    }
}
window.onresize = function () {
    if (!$('#btnCurrentUserHistory').find('ul:eq(0)').hasClass('hide')) { setWidth(true); }
}
window.onload = function () {
    $common.collapseOrExpandBox();
}