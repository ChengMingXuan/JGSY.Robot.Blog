//获取当前tab模块(模块： 机构)对应的 '#id' 如电影  href='#box_Movie'
function getjgTabSelecter() {
    var currTabEventObject = $($("#jgItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 机构tab事件函数
function institutionsPartial() {
    var currTabContentIdSelecter = getjgTabSelecter();
    if (currTabContentIdSelecter) {
        jgResetEmptyData(currTabContentIdSelecter);
        jginstitutionsPartial(currTabContentIdSelecter)
    }
}


/****初始化机构模块函数***/
$(function () {
    jgChangeFieldCombine();
    $('#jgItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            jgTabEventIsRequsetData(selecter);
        }
    });
    jgImgResetScroll();
    $($('#institutions_Images')).scroll(function () {
        if (getjgTabSelecter() == "#institutions_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            if (scrollTop / (contentH - viewH) >= 0.95) {
                jgGetImgJsonData();
            }
        }
    });
});
//机构模块下的数据展示区tab事件--》指向请求数据源事件函数
function jgTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#fileMaker_ImagesAndFont") {
            var isHasData = $('#jgImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                jgTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#fileMaker_Images") {
            var isHasImg = $.trim($('#fileMaker_Images').html());
            if (isHasImg == "") {
                jgTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function jgResetEmptyData(selecter) {
    if (selecter != "#institutions_ImagesAndFont") {
        $('#jgImagesAndFontInfo').bootstrapTable('removeAll');
        $('#institutions_ImagesAndFontCount').text('')
    } else if (selecter != "#institutions_Images") {
        $('#institutions_ImagesCount').text('')
        $("#institutions_Images").html('');
    }
}

function jgTabChangeForLoadData(selecter) {
    jginstitutionsPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function jginstitutionsPartial(selecter) {
    if (selecter == "#institutions_ImagesAndFont") {
        jg_ImagesAndFont();
    } else if (selecter == "#institutions_Images") {
        jg_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function jg_ImagesAndFont() {
    var url = jgUrlBy$winActionType();
    jgShowLayer();
    $('#jgImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function jg_Images() {
    $('#institutions_Images').html('');
    $('#jgoffsetImg').val('1');
    jgGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function jgGetImgJsonData() {
    var total = $.trim($('#institutions_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#institutions_ImagesCount').text()));
    var count = $.trim($('#jgoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#jgoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && jgIsAllowRequest != -1)) {
        jgLoadingjgImageNoMore(total);
        $('#institutions_Images').find('.jgLoadingjgImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = jgQueryParams(params, 'img');
    if (data.offsetImg == jgIsAllowRequest) return;
    jgIsAllowRequest = data.offsetImg;
    jgShowLayer();
    $.getJSON("/institutions/GetImg", data, function (json) {
        jgHideLayer()
        if (json) {
            var c = json.total == 0 ? "" : json.total;
            $('#institutions_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#jgoffsetImg').val()) + json.rows.length;
                $('#jgoffsetImg').val(offsetValue);
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
                $('#institutions_Images').append(jsonHtml);
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var jgTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#jgImagesAndFontInfo').bootstrapTable({
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
            url: jgUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getinstitutionsCondition,
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
                title: '机构基本信息列表', halign: 'center',

                formatter: "jgformatterHtml"
            },
                { field: 'DYJGDAH', title: 'DYJGDAH', visible: false },
                { field: 'JGMC', title: 'JGMC', visible: false },
                { field: 'JGCYMC', title: 'JGCYMC', visible: false },
                { field: 'LB', title: 'LB', visible: false },
                { field: 'GBND', title: 'GBND', visible: false },
                { field: 'GB', title: 'GB', visible: false },
                { field: 'JJSX', title: 'JJSX', visible: false },
                { field: 'XZSX', title: 'XZSX', visible: false },
                { field: 'SJSX', title: 'SJSX', visible: false },
                { field: 'CBND ', title: 'CBND ', visible: false },
            ],
            onLoadSuccess: function (data) {
                jgHideLayer()
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#institutions_ImagesAndFontCount,#Statistics_box_Institutions').text(count)
                }
            },
            onPageChange: function (number, size) {
                //jgShowLayer()
            }, onRefreshOptions: function (options) {
                //jgShowLayer()
            }


        });
    };
    oTableInit.getinstitutionsCondition = function (params) {
        var p = jgQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function jgUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/institutions/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function jgQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['jgqueryFields1'] = $.trim($('select[name=jgqueryFields1]').val());
        params['jgqueryFieldsCondions1'] = $.trim($('select[name=jgqueryFieldsCondions1]').val());
        params['jgqueryFieldsValues1'] = $.trim($('#jgqueryFieldsValues1').val());
        params['jgqueryFields2'] = $.trim($('select[name=jgqueryFields2]').val());
        params['jgqueryFieldsCondions2'] = $.trim($('select[name=jgqueryFieldsCondions2]').val());
        params['jgqueryFieldsValues2'] = $.trim($('#jgqueryFieldsValues2').val());
        params['jgqueryFields3'] = $.trim($('#jgqueryFields3').val());
        params['jgqueryFieldsCondions3'] = $.trim($('#jgqueryFieldsCondions3').val());
        params['jgqueryFieldsValues3'] = $.trim($('#jgqueryFieldsValues3').val());
        params['jgsortField'] = $.trim($('select[name=jgsortField]').val());
        params['jgsortWay'] = $.trim($('select[name=jgsortWay]').val());
        params['jgFieldCombine4'] = $.trim($('#jgFieldCombine4').val());
        params['jgFieldCombine2'] = $.trim($('#jgFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#jgoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//机构图文混编信息展示处理函数
function jgformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
    htmlJson += '   <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '   <div class="col-sm-3 col-md-3 col-xs-3 col-lg-3 text-center">';

    var img = $common.getImgHttpPath(null, "/Cloud/img/noPicture.jpg")
    htmlJson += '     <img src="' + img + '" border="0" class="img-responsive" height="160" width="120" />';

    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="/institutions/index?DYJGDAH=' + row.DYJGDAH + '" target="_blank">';
    htmlJson += $common.isNullReturnEmpty(row.JGMC);
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>档案号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.DYJGDAH) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>机构名称：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.JGMC);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>曾用名称：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.JGCYMC);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>机构类型：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.LB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>关闭年代：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.GBND);
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
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>经济属性：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.JJSX);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>行政属性：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.XZSX);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>时间属性：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SJSX);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>创办年代：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.CBND); 
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function jgLoadingjgImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 jgLoadingjgImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#institutions_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function jgChangeFieldCombine() {
    $("#jgFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#jgFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#jgFieldCombine2").val("AND");
        }
    });
    $("#jgFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#jgFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#jgFieldCombine4").val("AND");
        }
    });
    var jg = new jgTableInit();
    jg.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function jgReloadAndResetCurrent(e) {
    jgResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function jgResetConditions() {

    $('select[name=jgqueryFields1]').val('');
    $('select[name=jgqueryFieldsCondions1]').val('');
    $('input[name=jgqueryFieldsValues1]').val('');

    $('select[name=jgqueryFields2]').val('');
    $('select[name=jgqueryFieldsCondions2]').val('');
    $('input[name=jgqueryFieldsValues2]').val('');

    $('select[name=jgqueryFields3]').val('');
    $('select[name=jgqueryFieldsCondions3]').val('');
    $('input[name=jgqueryFieldsValues3]').val('');

    $('select[name=jgsortField]').val('ztm');
    $('select[name=jgsortWay]').val('asc');
    $('#jgFieldCombine1,#jgFieldCombine3').val('且');
    $('#jgFieldCombine2,#jgFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function jgShowLayer() {
    reloadCurrentLayerShow($('#jg_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function jgHideLayer() {
    reloadCurrentLayerHide($('#jg_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function jgImgResetScroll() {
    $("#institutions_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { jgImgResetScroll() });