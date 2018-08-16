//获取当前tab模块(模块： 影人)对应的 '#id' 如电影  href='#box_Movie'
function getyrTabSelecter() {
    var currTabEventObject = $($("#yrItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 影人tab事件函数
function filmMakerPartial() {
    var currTabContentIdSelecter = getyrTabSelecter();
    if (currTabContentIdSelecter) {
        yrResetEmptyData(currTabContentIdSelecter);
        yrfilmMakerPartial(currTabContentIdSelecter)
    }
}


/****初始化影人模块函数***/
$(function () {
    yrChangeFieldCombine();
    $('#yrItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            yrTabEventIsRequsetData(selecter);
        }
    });
    yrImgResetScroll();
    $($('#filmMaker_Images')).scroll(function () {
        if (getyrTabSelecter() == "#filmMaker_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            if (scrollTop / (contentH - viewH) >= 0.95) {
                yrGetImgJsonData();
            }
        }
    });
});
//影人模块下的数据展示区tab事件--》指向请求数据源事件函数
function yrTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#fileMaker_ImagesAndFont") {
            var isHasData = $('#yrImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                yrTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#fileMaker_Images") {
            var isHasImg = $.trim($('#fileMaker_Images').html());
            if (isHasImg == "") {
                yrTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function yrResetEmptyData(selecter) {
    if (selecter != "#filmMaker_ImagesAndFont") {
        $('#yrImagesAndFontInfo').bootstrapTable('removeAll');
        $('#filmMaker_ImagesAndFontCount').text('')
    } else if (selecter != "#filmMaker_Images") {
        $('#filmMaker_ImagesCount').text('')
        $("#filmMaker_Images").html('');
    }
}

function yrTabChangeForLoadData(selecter) {
    yrfilmMakerPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function yrfilmMakerPartial(selecter) {
    if (selecter == "#filmMaker_ImagesAndFont") {
        yr_ImagesAndFont();
    } else if (selecter == "#filmMaker_Images") {
        yr_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function yr_ImagesAndFont() {
    var url = yrUrlBy$winActionType();
    yrShowLayer();
    $('#yrImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function yr_Images() {
    $('#filmMaker_Images').html('');
    $('#yroffsetImg').val('1');
    yrGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function yrGetImgJsonData() {
    var total = $.trim($('#filmMaker_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#filmMaker_ImagesCount').text()));
    var count = $.trim($('#yroffsetImg').val()) == "" ? 1 : parseInt($.trim($('#yroffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && yrIsAllowRequest != -1)) {
        yrLoadingyrImageNoMore(total);
        $('#filmMaker_Images').find('.yrLoadingyrImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = yrQueryParams(params, 'img');
    if (data.offsetImg == yrIsAllowRequest) return;
    yrIsAllowRequest = data.offsetImg;
    yrShowLayer();
    $.getJSON("/filmMaker/GetImg", data, function (json) {
        yrHideLayer()
        if (json) {
            var c = json.total == 0 ? "" : json.total;
            $('#filmMaker_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#yroffsetImg').val()) + json.rows.length;
                $('#yroffsetImg').val(offsetValue);
                var jsonHtml = '';
                $.each(json.rows, function (i, n) {
                    var url = n.PIC;
                    url = $common.getImgHttpPath(url, "/Cloud/img/noPicture.jpg")
                    jsonHtml += '<div class="col-md-3 ">';
                    jsonHtml += '<div class="filter-content dyimg-holder fixed-dyimg-holder">';
                    jsonHtml += '<img class="img-responsive"   src="' + url + '"  alt=""/>';
                    jsonHtml += '<div class="hover-content">';
                    jsonHtml += '<h4>下载</h4>';
                    jsonHtml += '<a class="btn btn-success hover-link">';
                    jsonHtml += '<i class="fa fa-cloud-download"></i>';
                    jsonHtml += '</a>';
                    jsonHtml += '<a class="btn btn-warning hover-link colorbox-button" href="' + url + '" title="">';
                    jsonHtml += '<i class="fa fa-search-plus"></i>';
                    jsonHtml += '</a>';
                    jsonHtml += '</div>';
                    jsonHtml += '</div>';
                    jsonHtml += '</div>';


                });
                $('#filmMaker_Images').append(jsonHtml);
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var yrTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#yrImagesAndFontInfo').bootstrapTable({
            method: 'Get',
            toolbar: '',
            striped: true,
            cache: false,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            pagination: true,
            sortable: false,
            sortOrder: "asc",
            pageNumber: 1,
            pageSize: 10,
            pageList: [10, 20, 30],
            url: yrUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getfilmMakerCondition,
            sidePagination: "server",
            search: false,
            strictSearch: true,
            singleSelect: true,
            showColumns: false,
            showRefresh: false,
            minimumCountColumns: 1,
            clickToSelect: true,
            searchOnEnterKey: true,
            columns: [{

                checkbox: true
            },
            {
                field: 'ID',
                title: '影人基本信息列表', halign: 'center',

                formatter: "yrformatterHtml"
            },
            { field: 'DYRDAH', title: 'DYRDAH', visible: false },
            { field: 'GJ', title: 'GJ', visible: false },
            { field: 'JG', title: 'JG', visible: false },
            { field: 'CYM', title: 'CYM', visible: false },
            { field: 'YIM', title: 'YIM', visible: false },
            { field: 'LB', title: 'LB', visible: false },
            { field: 'XB', title: 'XB', visible: false },
            { field: 'MZ', title: 'MZ', visible: false },
            { field: 'XM', title: 'XM', visible: false },
            { field: 'CSNY', title: 'CSNY', visible: false },
            { field: 'CSD', title: 'CSD', visible: false },
            { field: 'CSSJ', title: 'CSSJ', visible: false },
            { field: 'PIC', title: 'PIC', visible: false },
            ],
            onLoadSuccess: function (data) {
                yrHideLayer()
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#filmMaker_ImagesAndFontCount,#Statistics_box_FilmMaker').text(count)
                }
            },
            onPageChange: function (number, size) {
                //yrShowLayer()
            }, onRefreshOptions: function (options) {
                //yrShowLayer()
            }


        });
    };
    oTableInit.getfilmMakerCondition = function (params) {
        var p = yrQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function yrUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/filmMaker/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function yrQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['yrqueryFields1'] = $.trim($('select[name=yrqueryFields1]').val());
        params['yrqueryFieldsCondions1'] = $.trim($('select[name=yrqueryFieldsCondions1]').val());
        params['yrqueryFieldsValues1'] = $.trim($('#yrqueryFieldsValues1').val());
        params['yrqueryFields2'] = $.trim($('select[name=yrqueryFields2]').val());
        params['yrqueryFieldsCondions2'] = $.trim($('select[name=yrqueryFieldsCondions2]').val());
        params['yrqueryFieldsValues2'] = $.trim($('#yrqueryFieldsValues2').val());
        params['yrqueryFields3'] = $.trim($('#yrqueryFields3').val());
        params['yrqueryFieldsCondions3'] = $.trim($('#yrqueryFieldsCondions3').val());
        params['yrqueryFieldsValues3'] = $.trim($('#yrqueryFieldsValues3').val());
        params['yrsortField'] = $.trim($('select[name=yrsortField]').val());
        params['yrsortWay'] = $.trim($('select[name=yrsortWay]').val());
        params['yrFieldCombine4'] = $.trim($('#yrFieldCombine4').val());
        params['yrFieldCombine2'] = $.trim($('#yrFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#yroffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//影人图文混编信息展示处理函数
function yrformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
    htmlJson += '   <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '   <div class="col-sm-3 col-md-3 col-xs-3 col-lg-3 text-center">';

    var img = $common.getImgHttpPath(row.PIC, "/Cloud/img/noPicture.jpg")
    htmlJson += '     <img src="' + img + '" border="0" class="img-responsive" height="160" width="120" />';

    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="/filmMaker/index?id=' + row.ID + '" target="_blank">';
    htmlJson += $common.isNullReturnEmpty(row.XM);
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>档案号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.DYRDAH) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>姓名：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.XM);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>曾用名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.CYM);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>艺名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.YIM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>出生地区：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.CSD);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>出生时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.CSSJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>类别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.LB);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>国别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.GJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function yrLoadingyrImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 yrLoadingyrImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#filmMaker_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function yrChangeFieldCombine() {
    $("#yrFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#yrFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#yrFieldCombine2").val("AND");
        }
    });
    $("#yrFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#yrFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#yrFieldCombine4").val("AND");
        }
    });
    var yr = new yrTableInit();
    yr.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function yrReloadAndResetCurrent(e) {
    yrResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function yrResetConditions() {

    $('select[name=yrqueryFields1]').val('');
    $('select[name=yrqueryFieldsCondions1]').val('');
    $('input[name=yrqueryFieldsValues1]').val('');

    $('select[name=yrqueryFields2]').val('');
    $('select[name=yrqueryFieldsCondions2]').val('');
    $('input[name=yrqueryFieldsValues2]').val('');

    $('select[name=yrqueryFields3]').val('');
    $('select[name=yrqueryFieldsCondions3]').val('');
    $('input[name=yrqueryFieldsValues3]').val('');

    $('select[name=yrsortField]').val('ztm');
    $('select[name=yrsortWay]').val('asc');
    $('#yrFieldCombine1,#yrFieldCombine3').val('且');
    $('#yrFieldCombine2,#yrFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function yrShowLayer() {
    reloadCurrentLayerShow($('#yr_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function yrHideLayer() {
    reloadCurrentLayerHide($('#yr_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function yrImgResetScroll() {
    $("#filmMaker_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { yrImgResetScroll() });