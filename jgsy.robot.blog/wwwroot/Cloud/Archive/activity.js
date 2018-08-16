//获取当前tab模块(模块： 活动)对应的 '#id' 如电影  href='#box_Movie'
function gethdTabSelecter() {
    var currTabEventObject = $($("#hdItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 活动tab事件函数
function activityPartial() {
    var currTabContentIdSelecter = gethdTabSelecter();
    if (currTabContentIdSelecter) {
        hdResetEmptyData(currTabContentIdSelecter);
        hdactivityPartial(currTabContentIdSelecter)
    }
}


/****初始化活动模块函数***/
$(function () {
    hdChangeFieldCombine();
    $('#hdItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            hdTabEventIsRequsetData(selecter);
        }
    });
    hdImgResetScroll();
    $($('#activity_Images')).scroll(function () {
        if (gethdTabSelecter() == "#activity_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            if (scrollTop / (contentH - viewH) >= 0.95) {
                hdGetImgJsonData();
            }
        }
    });
});
//活动模块下的数据展示区tab事件--》指向请求数据源事件函数
function hdTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#fileMaker_ImagesAndFont") {
            var isHasData = $('#hdImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                hdTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#fileMaker_Images") {
            var isHasImg = $.trim($('#fileMaker_Images').html());
            if (isHasImg == "") {
                hdTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function hdResetEmptyData(selecter) {
    if (selecter != "#activity_ImagesAndFont") {
        $('#hdImagesAndFontInfo').bootstrapTable('removeAll');
        $('#activity_ImagesAndFontCount').text('')
    } else if (selecter != "#activity_Images") {
        $('#activity_ImagesCount').text('')
        $("#activity_Images").html('');
    }
}

function hdTabChangeForLoadData(selecter) {
    hdactivityPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function hdactivityPartial(selecter) {
    if (selecter == "#activity_ImagesAndFont") {
        hd_ImagesAndFont();
    } else if (selecter == "#activity_Images") {
        hd_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function hd_ImagesAndFont() {
    var url = hdUrlBy$winActionType();
    hdShowLayer();
    $('#hdImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function hd_Images() {
    $('#activity_Images').html('');
    $('#hdoffsetImg').val('1');
    hdGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function hdGetImgJsonData() {
    var total = $.trim($('#activity_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#activity_ImagesCount').text()));
    var count = $.trim($('#hdoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#hdoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && hdIsAllowRequest != -1)) {
         
        hdLoadinghdImageNoMore(total);
        $('#activity_Images').find('.hdLoadinghdImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = hdQueryParams(params, 'img');
    if (data.offsetImg == hdIsAllowRequest) return;
    hdIsAllowRequest = data.offsetImg;
    hdShowLayer();
    $.getJSON("/activity/GetImg", data, function (json) {
        hdHideLayer()
        if (json) {
            var c = json.total == 0 ? "" : json.total;
            $('#activity_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#hdoffsetImg').val()) + json.rows.length;
                $('#hdoffsetImg').val(offsetValue);
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
                $('#activity_Images').append(jsonHtml);
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var hdTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#hdImagesAndFontInfo').bootstrapTable({
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
            url: hdUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getactivityCondition,
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
                title: '活动基本信息列表', halign: 'center',

                formatter: "hdformatterHtml"
            },  
                {field:'MC',title:'MC',visible:false},
                {field:'DYHDDAH',title:'DYHDDAH',visible:false},
                {field:'JBSJ',title:'JBSJ',visible:false},
                {field:'LB',title:'LB',visible:false},
                {field:'LSHDLX',title:'LSHDLX',visible:false},
                {field:'GB',title:'GB',visible:false},
                {field:'JC',title:'JC',visible:false},
                { field: 'ND', title: 'ND', visible: false },
                { field: 'Pic', title: 'Pic', visible: false },
                {field:'JB',title:'JB',visible:false}
            ],                             
            onLoadSuccess: function (data) {
                hdHideLayer()
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#activity_ImagesAndFontCount,#Statistics_box_Activity').text(count)
                }
            },
            onPageChange: function (number, size) {
                //hdShowLayer()
            }, onRefreshOptions: function (options) {
                //hdShowLayer()
            }


        });
    };
    oTableInit.getactivityCondition = function (params) {
        var p = hdQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function hdUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/activity/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function hdQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['hdqueryFields1'] = $.trim($('select[name=hdqueryFields1]').val());
        params['hdqueryFieldsCondions1'] = $.trim($('select[name=hdqueryFieldsCondions1]').val());
        params['hdqueryFieldsValues1'] = $.trim($('#hdqueryFieldsValues1').val());
        params['hdqueryFields2'] = $.trim($('select[name=hdqueryFields2]').val());
        params['hdqueryFieldsCondions2'] = $.trim($('select[name=hdqueryFieldsCondions2]').val());
        params['hdqueryFieldsValues2'] = $.trim($('#hdqueryFieldsValues2').val());
        params['hdqueryFields3'] = $.trim($('#hdqueryFields3').val());
        params['hdqueryFieldsCondions3'] = $.trim($('#hdqueryFieldsCondions3').val());
        params['hdqueryFieldsValues3'] = $.trim($('#hdqueryFieldsValues3').val());
        params['hdsortField'] = $.trim($('select[name=hdsortField]').val());
        params['hdsortWay'] = $.trim($('select[name=hdsortWay]').val());
        params['hdFieldCombine4'] = $.trim($('#hdFieldCombine4').val());
        params['hdFieldCombine2'] = $.trim($('#hdFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#hdoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//活动图文混编信息展示处理函数
function hdformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
    htmlJson += '   <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '   <div class="col-sm-3 col-md-3 col-xs-3 col-lg-3 text-center">'; 
    var img = $common.getImgHttpPath(row.Pic, "/Cloud/img/noPicture.jpg")
    htmlJson += '     <img src="' + img + '" border="0" class="img-responsive" height="160" width="120" />';
    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="/activity/index?DYHDDAH=' + row.DYHDDAH + '" target="_blank">';
    htmlJson += $common.isNullReturnEmpty(row.MC);
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>活动名称：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.MC) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>档案号：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.DYHDDAH);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>举办时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.JBSJ);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>活动类型：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.LB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>隶属类型：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.LSHDLX);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>国家和地区：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.GB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>界次：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.JC);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>年度：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.ND);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>级别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.JB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function hdLoadinghdImageNoMore(t) {
    var str = "没有更多了！",jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 hdLoadinghdImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">'+str+'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#activity_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function hdChangeFieldCombine() {
    $("#hdFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#hdFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#hdFieldCombine2").val("AND");
        }
    });
    $("#hdFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#hdFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#hdFieldCombine4").val("AND");
        }
    });
    var hd = new hdTableInit();
    hd.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function hdReloadAndResetCurrent(e) {
    hdResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function hdResetConditions() {

    $('select[name=hdqueryFields1]').val('');
    $('select[name=hdqueryFieldsCondions1]').val('');
    $('input[name=hdqueryFieldsValues1]').val('');

    $('select[name=hdqueryFields2]').val('');
    $('select[name=hdqueryFieldsCondions2]').val('');
    $('input[name=hdqueryFieldsValues2]').val('');

    $('select[name=hdqueryFields3]').val('');
    $('select[name=hdqueryFieldsCondions3]').val('');
    $('input[name=hdqueryFieldsValues3]').val('');

    $('select[name=hdsortField]').val('ztm');
    $('select[name=hdsortWay]').val('asc');
    $('#hdFieldCombine1,#hdFieldCombine3').val('且');
    $('#hdFieldCombine2,#hdFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function hdShowLayer() {
    reloadCurrentLayerShow($('#hd_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function hdHideLayer() {
    reloadCurrentLayerHide($('#hd_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function hdImgResetScroll() {
    $("#activity_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { hdImgResetScroll() });