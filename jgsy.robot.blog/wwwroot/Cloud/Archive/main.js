/***
 * 查询类型 默认值 ""  ,value=full 全局搜索,value=query 高级查询
 * 全局搜索时 联动查询 所有
 * **/
var $winActionType = "";
//滚动加载图片 限制重复请求 默认值 -1
var dyIsAllowRequest = -1, yrIsAllowRequest = -1, hdIsAllowRequest = -1,
    jgIsAllowRequest = -1, jzIsAllowRequest = -1, hbIsAllowRequest = -1,
    jpIsAllowRequest = -1, tsqkIsAllowRequest = -1, wzdaIsAllowRequest = -1, scIsAllowRequest = -1;
function initEventParamsValues(clickBtnType) {
    $winActionType = clickBtnType;
    dyIsAllowRequest = -1, yrIsAllowRequest = -1, hdIsAllowRequest = -1,
        jgIsAllowRequest = -1, jzIsAllowRequest = -1, hbIsAllowRequest = -1,
        jpIsAllowRequest = -1, tsqkIsAllowRequest = -1, wzdaIsAllowRequest = -1, scIsAllowRequest = -1;
}

$(function () {
    fullRetrievalOrPrecise();
});
//初始化按钮事件【搜索、高级查询】 tab切换事件
function fullRetrievalOrPrecise() {
    $("#btn_FullTextRetrieval").on("click", getFullRetrievalQuery);
    $(".btn_preciseQuery").on("click", getPreciseQuery);
    $('#ItemAclickForTab').find("li a").click(tabChangeForLoadData(this));
}
//tab切换事件函数
function tabChangeForLoadData(e) {
    var selecter = $(e).attr("href");
    if (selecter) {
        if (selecter.indexOf("#") != -1) {
            switchChangePartialData(selecter);
        }
    }
}
//搜索事件函数及初始化查询类型
function getFullRetrievalQuery() {
    addFullEventTitle($('#WAkw').val())
    initEventParamsValues("full");
    fllRetrievalOrPreciseForLoadData();
}
//高级查询事件函数及初始化查询类型
function getPreciseQuery() {
    initEventParamsValues("query");
    fllRetrievalOrPreciseForLoadData();
}
//搜索或高级查询触发事件统一处理函数
function fllRetrievalOrPreciseForLoadData() {
    var currTabEventObject = $($("#ItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (currTabContentIdSelecter) {
        if (currTabContentIdSelecter != "" && currTabContentIdSelecter.indexOf('#') != -1) {
            if ($winActionType == "full") {
                fullBtnEventRequestAllModule();
            } else {
                //PreciseBtnEvent();
                switchChangePartialData(currTabContentIdSelecter);
            }


        }
    }
}
function PreciseBtnEvent(clearAll) {
    $("#Statistics_box_Movie").text('');
    $("#Statistics_box_FilmMaker").text('');
    $("#Statistics_box_Activity").text('');
    $("#Statistics_box_Institutions").text('');
    $("#Statistics_box_Still").text('');
    $("#Statistics_box_Posters").text('');
    $("#Statistics_box_Film").text('');
    $("#Statistics_box_LibraryJournal").text('');
    $("#Statistics_box_TextFiles").text('');
}
function fullBtnEventRequestAllModule(except) {
   
    $.getJSON("/Movie/GetStatistics", { text: $('#WAkw').val() }, function (json) {
        if (json) {
            $("#Statistics_box_Movie").text(json.Movie);
            $("#Statistics_box_FilmMaker").text(json.FilmMaker);
            $("#Statistics_box_Activity").text(json.Activity);
            $("#Statistics_box_Institutions").text(json.Institutions);
            $("#Statistics_box_Still").text(json.Stills);
            $("#Statistics_box_Posters").text(json.Posters);
            $("#Statistics_box_Film").text(json.Film);
            $("#Statistics_box_LibraryJournal").text(json.LibraryJournal);
            $("#Statistics_box_TextFiles").text(json.TextFiles);
            $("#Statistics_box_SourceMaterial").text(json.SourceMaterial);
        }
    });
    moviePartial();
    filmMakerPartial();
    activityPartial();
    institutionsPartial();
    stillsPartial();
    postersPartial();
    filmPartial();
    libraryJournalPartial();
    textFilesPartial();
    sourceMaterialPartial();
}
//搜索或高级查询触发事件---最终定位当前展示tab查询（搜索或高级查询）--》请求数据
//各个模块事件函数  由get(XXX)TabSelecter()值决定
function switchChangePartialData(selecterId) {
    switch (selecterId) {
        case "#box_Movie":
            moviePartial();
            break;
        case "#box_FilmMaker":
            filmMakerPartial();
            break;
        case "#box_Activity":
            activityPartial();
            break;
        case "#box_Institutions":
            institutionsPartial();
            break;
        case "#box_Still":
            stillsPartial();
            break;
        case "#box_Posters":
            postersPartial();
            break;
        case "#box_Film":
            filmPartial();
            break;
        case "#box_LibraryJournal":
            libraryJournalPartial();
            break;
        case "#box_TextFiles":
            textFilesPartial();
            break;
        case "#box_SourceMaterial":
            sourceMaterialPartial();
            break;
        default:
    }
}
//全局搜索回车事件
document.onkeydown = function (e) {
    if (!e) e = window.event;
    if ((e.keyCode || e.which) == 13) {
        if (!$('#btnCurrentUserHistory').hasClass('hide')) {
            var obj = $('#btnCurrentUserHistory');
            var text = obj.find('ul li.selected').text();
            if ($.trim(text)!="" ) $('#WAkw').val(text);
            obj.addClass('hide');
        } else { 
            if ($('#loginIn').css('display') == "block" && $('#loginIn').hasClass('in') == true) {
                $("#timeoutsubmitLogin").focus().trigger('click');
            } else {
                $("#btn_FullTextRetrieval").focus().trigger('click');
            }
        }
    }
}

function oddBG(id) {
    var parent10 = $('#' + id).find('.div12');
    for (var i = 0; i < parent10.length; i++) {
        var subAlleven = $($('#' + id).find('.div12')[i]).siblings();
        var Flg = 0, flg1 = 0;
        for (var j = 0; j < subAlleven.length; j++) {
            ++Flg;
            if (Flg == 1 || Flg == 2) continue;
            $(subAlleven[j]).addClass('div6');
            ++flg1;
            if (flg1 == 2) { Flg = 0; flg1 = 0 }

        }
    }
}