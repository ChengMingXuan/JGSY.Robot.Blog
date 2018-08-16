var $common = {};
$common.m = {};
$common.isNullReturnEmpty= function(val) {
    if (val==null || val=='null') return "";
    return val;
}
$common.getImgHttpPath = function(url, img) {
    if (url) {
        while (url.indexOf('//') != -1) url = url.replace('//', '/');
        return ("http://192.168.1.203:2533/" + url).replace('V:/', '').replace('v:/', '');
       //return "http://192.168.1.18:9090/" + url;
    } 
    return img; 
}
$common.handleHoverAndColorbox = function () {
    $common.handleHover();
    $common.handleColorbox();
}
$common.handleHover = function () {
    $('.filter-content').hover(function () {
        var hoverContent = $(this).children('.hover-content');
        hoverContent.removeClass('fadeOut').addClass('animated fadeIn').show();
    }, function () {
        var hoverContent = $(this).children('.hover-content');
        hoverContent.removeClass('fadeIn').addClass('fadeOut');
    });
}
$common.handleColorbox = function () {
    $('.colorbox-button').colorbox({ rel: 'colorbox-button', maxWidth: '95%', maxHeight: '95%' });
}
$common.collapseOrExpandBox = function () {
    $(".collapseAndExpandbox-title").unbind('click');
    $(".collapseAndExpandbox-title")
        .mouseover(function () { $(this).addClass('collapseAndExpandPointer') })
        .mouseout(function () { $(this).removeClass('collapseAndExpandPointer') })
        .on("click", function () {
            var self = $(this);
            if (self.find('a[class*="collapse"]').hasClass('collapse')) {
                collapseAndExpand($(self.find('a[class*="collapse"]')));
            } else if (self.find('a[class*="expand"]').hasClass('expand')) {
                collapseAndExpand($(self.find('a[class*="expand"]')));
            }
        });
}
$common.ImgLost = function() {
    $.showMsgModal('错误', '亲，资源不存在了！', 'error');
}
function collapseAndExpand(e, selecter) {
    var el = $(e).parents(".box:eq(0)").children(".box-body");
    if ($(e).hasClass("collapse")) {
        $(e).removeClass("collapse").addClass("expand");
        var i = $(e).children(".fa-chevron-up");
        i.removeClass("fa-chevron-up").addClass("fa-chevron-down");
        el.slideUp(200);
    } else {
        $(e).removeClass("expand").addClass("collapse");
        var i = $(e).children(".fa-chevron-down");
        i.removeClass("fa-chevron-down").addClass("fa-chevron-up");
        el.slideDown(200);
    }
}

function reloadCurrentLayerShow(e) {
    var el = $(e).parents(".box:eq(0)");
    $(el).block({
        message: '<img src="/Cloud/img/loaders/12.gif" align="absmiddle">',
        css: {
            border: 'none',
            padding: '2px',
            backgroundColor: 'none'
        },
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.09,
            cursor: 'wait'
        }
    });
}

function reloadCurrentLayerHide(e) {
    var el = $(e).parents(".box:eq(0)");
    $(el).unblock({
        onUnblock: function () {
            $(el).removeAttr("style");
        }
    });
}
function reloadCurrent(e) {

    var el = $(e).parents(".box:eq(0)");
    $(el).block({
        message: '<img src="/Cloud/img/loaders/12.gif" align="absmiddle">',
        css: {
            border: 'none',
            padding: '2px',
            backgroundColor: 'none'
        },
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.09,
            cursor: 'wait'
        }
    });
    window.setTimeout(function () {
        $(el).unblock({
            onUnblock: function () {
                $(el).removeAttr("style");
            }
        });
    }, 1000);

}

; (function ($) {
    //text:标题
    //text:提示内容
    //type: 默认Info（蓝）0：info（详情，蓝）,1：success（成功，绿）,2：warning（警告，黄）,3：danger（错误，红）
    //second:显示时间 小于0为手动关闭 单位为秒支持小数点
    //回调函数 callBack   距离浏览器顶端距离top
    $.showMsgModal = function (title, text, type, second, callBack, top) {
         
        var modalSelecter = "#modalMsg";
        var bodySelecter = "#msgBodyInfo";
        var textSelecter = "#msgBodyInfo .msgText";
         
        if (type == 'Info') {
            bodySelecter = "#msgBodyInfo";
            textSelecter = "#msgBodyInfo .msgText";
        }
        else if (type == 'success') {
            bodySelecter = "#msgBodySuccess";
            textSelecter = "#msgBodySuccess .msgText";
        }
        else if (type == 'warning') {
            bodySelecter = "#msgBodyWarning";
            textSelecter = "#msgBodyWarning .msgText";
        }
        else if (type == 'error') {
            bodySelecter = "#msgBodyDanger";
            textSelecter = "#msgBodyDanger .msgText";
        }
        $(bodySelecter).removeClass("hide").siblings().addClass("hide");
        $(textSelecter).html(text);
        $("#msgTitle").text(title);
        $(modalSelecter).modal("show");

        var mTop = 150;
        if (parent && parent.document.body.offsetHeight) {
            mTop = document.body.scrollTop + parent.document.body.offsetHeight / 4;
        } else {
            mTop = document.body.scrollTop + document.body.offsetHeight / 4;
        }

        if (top > 0) {
            mTop = top
        }
        //移至距屏幕顶部1/4处
        $(modalSelecter + " .modal-dialog").css({ "margin-top": (mTop) + "px" });
        //$(modalSelecter).css({ "margin-top": ((document.documentElement.clientHeight ) / 4) + "px" })
        $(modalSelecter).find("#Form-btnOK").removeClass("hide").removeClass('pull-left');
        $(modalSelecter).find("#Form-btnCancel").removeClass("hide").removeClass('pull-right');
        if (typeof (callBack) == "function") {
            $(modalSelecter).find("#Form-btnOK").addClass('pull-left');
            $(modalSelecter).find("#Form-btnCancel").addClass('pull-right');
            $(modalSelecter + " .msgFooter").removeClass("hide");
            $(modalSelecter).find("#Form-btnOK").unbind("click");

            $(modalSelecter).find("#Form-btnOK").bind("click", function () {
                $(modalSelecter).modal("hide"); callBack();
            });
            $(modalSelecter).find("#Form-btnCancel").bind("click", function () {
                $(modalSelecter).modal("hide");
            });
        } else if (typeof (second) == "number" && second > 0) {
            if (second >= 5) {
                $(modalSelecter + " .msgFooter").removeClass("hide");
                $(modalSelecter).find("#Form-btnCancel").addClass("hide");
                $(modalSelecter).find("#Form-btnOK").unbind("click");
                $(modalSelecter).find("#Form-btnOK").bind("click",
                    function () {
                        $(modalSelecter).modal("hide");
                    });
            } else {
                setTimeout(function () {
                    $(modalSelecter).modal("hide");
                }, second * 1000);
            }
        } else {
            $(modalSelecter + " .msgFooter").removeClass("hide");
            $(modalSelecter).find("#Form-btnOK").addClass("hide");
            $(modalSelecter).find("#Form-btnCancel").unbind("click");
            $(modalSelecter).find("#Form-btnCancel").bind("click",
                function () {
                    $(modalSelecter).modal("hide");
                });
        }
    } 
}
)(jQuery);