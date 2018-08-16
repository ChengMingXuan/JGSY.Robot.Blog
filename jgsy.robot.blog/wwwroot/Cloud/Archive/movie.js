//获取当前tab模块(模块：电影 )对应的 '#id' 如  href='#box_Movie'
function getdyTabSelecter() {
    var currTabEventObject = $($("#dyItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
 //main.js 触发 电影tab事件函数
function moviePartial() {
    var currTabContentIdSelecter = getdyTabSelecter();
    if (currTabContentIdSelecter) {
        dyResetEmptyData(currTabContentIdSelecter);
        dymoviePartial(currTabContentIdSelecter)
    }
}
 

/****初始化电影模块函数***/
$(function () {
    dyChangeFieldCombine();
    $('#dyItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            dyTabEventIsRequsetData(selecter);
        }
    });
    dyImgResetScroll();
    $($('#movie_Images')).scroll(function () {
        if (getdyTabSelecter() == "#movie_Images") { 
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            //console.warn(scrollTop / (contentH - viewH))
            if (scrollTop / (contentH - viewH) >= 0.95) {
                dyGetImgJsonData();
            }
        }
    });
});
//电影模块下的数据展示区tab事件--》指向请求数据源事件函数
function dyTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#movie_ImagesAndFont") {
            var isHasData = $('#dyImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                dyTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#movie_Images") {
            var isHasImg = $.trim($('#movie_Images').html());
            if (isHasImg == "") {
                dyTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function dyResetEmptyData(selecter) {
    if (selecter != "#movie_ImagesAndFont") {
        $('#dyImagesAndFontInfo').bootstrapTable('removeAll');
        $('#movie_ImagesAndFontCount').text('')
    } else if (selecter != "#movie_Images") {
        $('#movie_ImagesCount').text('')
        $("#movie_Images").html('');
    }
}

function dyTabChangeForLoadData(selecter) {
    dymoviePartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function dymoviePartial(selecter) { 
    if (selecter == "#movie_ImagesAndFont") {
        dy_ImagesAndFont();
    } else if (selecter == "#movie_Images") {
        dy_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function dy_ImagesAndFont() {
    var url = dyUrlBy$winActionType();
    dyShowLayer();
    $('#dyImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function dy_Images() {
    $('#movie_Images').html('');
    $('#dyoffsetImg').val('1');
    dyGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function dyGetImgJsonData() {
    var total = $.trim($('#movie_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#movie_ImagesCount').text()));
    var count = $.trim($('#dyoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#dyoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && dyIsAllowRequest != -1)) {
        dyLoadingdyImageNoMore(total);
        $('#movie_Images').find('.dyLoadingdyImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = dyQueryParams(params, 'img');
    if (data.offsetImg == dyIsAllowRequest) return;
    dyIsAllowRequest = data.offsetImg;
    dyShowLayer();
    $.getJSON("/Movie/GetImg", data, function (json) {
        dyHideLayer()
        if (json) {
            var c = json.total == 0 ? "0" : json.total;
            $('#movie_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#dyoffsetImg').val()) + json.rows.length;
                $('#dyoffsetImg').val(offsetValue);
                var jsonHtml = '';
                $.each(json.rows, function (i, n) {
                    var url = n.HBURL;
                    var urlDownload = $.trim(n.DownloadUrl);
                    url = $common.getImgHttpPath(url, "/Cloud/img/noPicture.jpg")
                    var onclick = "";
                    if (urlDownload == "") {
                        onclick = 'onclick="$common.ImgLost()"'
                        urlDownload = "javascript:;";
                    } else {
                        urlDownload = "/Movie/Download?filePath=" + urlDownload;
                    }
                    jsonHtml += '<div class="col-md-3 ">';
                    jsonHtml += '<div class="filter-content dyimg-holder fixed-dyimg-holder">';
                    jsonHtml += '<img class="img-responsive"   src="' + url + '"  alt=""/>';
                    jsonHtml += '<div class="hover-content">';
                    jsonHtml += '<h4 style="visibility:hidden;">Image</h4>';
                    jsonHtml += '<a class="btn btn-success hover-link" target="iframedownloadError" ' + onclick + ' href="' + urlDownload + '">';
                    jsonHtml += '<i class="fa fa-cloud-download"></i> 下载';
                    jsonHtml += '</a>';

                    jsonHtml += '<a class="btn btn-warning hover-link colorbox-button" href="' + url + '" title="">';
                    jsonHtml += '<i class="fa fa-search-plus"></i> 预览';
                    jsonHtml += '</a>';
                    jsonHtml += '</div>';
                    jsonHtml += '</div>';
                    jsonHtml += '</div>';


                });
                $('#movie_Images').append(jsonHtml);
                $common.handleHoverAndColorbox();
            } else {
                dyLoadingdyImageNoMore(c);
                $('#movie_Images').find('.dyLoadingdyImageNoMore:gt(0)').remove()
                return;
            }

        }
    });
} 

//图文混编展示数据源Bootstrap表格插件
var dyTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#dyImagesAndFontInfo').bootstrapTable({
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
            url: dyUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getMovieCondition,
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
                title: '电影基本信息列表', halign: 'center',

                formatter: "dyformatterHtml"
            },
            {
                field: 'JBXXID',
                title: 'JBXXID', visible: false
            },
            {
                field: 'ZTM',
                title: '总提名', visible: false
            },
            {
                field: 'ZMLH',
                title: '总目录号', visible: false
            },
            {
                field: 'PZ',
                title: 'PZ', visible: false
            },
            {
                field: 'GB',
                title: 'GB', visible: false
            },
            {
                field: 'BLTM',
                title: 'BLTM', visible: false
            },
            {
                field: 'JTTM',
                title: 'JTTM', visible: false
            },
            {
                field: 'CPND',
                title: 'CPND', visible: false

            }, {
                field: 'HPG',
                title: 'HPG', visible: false
            }, {
                field: 'CPZMC',
                title: 'CPZMC', visible: false
            }, {
                field: 'DY',
                title: 'DY', visible: false
            }, {
                field: 'ZY',
                title: 'ZY', visible: false

            }, {
                field: 'HBURL',
                title: 'HBURL',//align: 'center',
                visible: false
            }
            ],
            onLoadSuccess: function (data) {
                dyHideLayer();
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#movie_ImagesAndFontCount,#Statistics_box_Movie').text(count)
                }
            },
            onPageChange: function (number, size) {
                //dyShowLayer()
            }, onRefreshOptions: function (options) {
                //dyShowLayer()
            }


        });
    };
    oTableInit.getMovieCondition = function (params) {
        var p = dyQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function dyUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/Movie/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function dyQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['dyqueryFields1'] = $.trim($('select[name=dyqueryFields1]').val());
        params['dyqueryFieldsCondions1'] = $.trim($('select[name=dyqueryFieldsCondions1]').val());
        params['dyqueryFieldsValues1'] = $.trim($('#dyqueryFieldsValues1').val());
        params['dyqueryFields2'] = $.trim($('select[name=dyqueryFields2]').val());
        params['dyqueryFieldsCondions2'] = $.trim($('select[name=dyqueryFieldsCondions2]').val());
        params['dyqueryFieldsValues2'] = $.trim($('#dyqueryFieldsValues2').val());
        params['dyqueryFields3'] = $.trim($('#dyqueryFields3').val());
        params['dyqueryFieldsCondions3'] = $.trim($('#dyqueryFieldsCondions3').val());
        params['dyqueryFieldsValues3'] = $.trim($('#dyqueryFieldsValues3').val());
        params['dysortField'] = $.trim($('select[name=dysortField]').val());
        params['dysortWay'] = $.trim($('select[name=dysortWay]').val());
        params['dyFieldCombine4'] = $.trim($('#dyFieldCombine4').val());
        params['dyFieldCombine2'] = $.trim($('#dyFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#dyoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//电影图文混编信息展示处理函数
function dyformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
    htmlJson += '   <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '   <div class="col-sm-3 col-md-3 col-xs-3 col-lg-3 text-center">';
    row.HBURL = $common.getImgHttpPath(row.HBURL,"/Cloud/img/noPicture.jpg")
    htmlJson += '     <img src="' + row.HBURL + '" border="0" class="img-responsive" height="160" width="120" />';

    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="/movie/index?id=' + row.ID + '" target="_blank">';
    htmlJson += row.ZTM;
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>总目录号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + row.ZMLH + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>片种：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.PZ;
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>国别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.GB;
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>并列题名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.BLTM;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>交替题名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.JTTM;
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>出品年代：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.CPND;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>和拍国：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.HPG;
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';

    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>出品者名称：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.CPZMC;
    htmlJson += '  </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" > <STRONG>导演：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    row.DY = $.trim(row.DY)
    if (row.DY != "" && row.DY) {
        if (row.DY.substr(row.DY.length - 1) == "|")
            row.DY = row.DY.substr(0,row.DY.length - 1);
    }
    htmlJson += row.DY;
    htmlJson += '  </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>主演:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    row.ZY = $.trim(row.ZY)
    if (row.ZY != "" && row.ZY) {
        if (row.ZY.substr(row.ZY.length - 1) == "|")
            row.ZY = row.ZY.substr(0, row.ZY.length - 1);
    }
    htmlJson += row.ZY;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function dyLoadingdyImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 dyLoadingdyImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#movie_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function dyChangeFieldCombine() {
    $("#dyFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#dyFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#dyFieldCombine2").val("AND");
        }
    });
    $("#dyFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#dyFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#dyFieldCombine4").val("AND");
        }
    });
    var dy = new dyTableInit();
    dy.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function dyReloadAndResetCurrent(e) {
    dyResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function dyResetConditions() {

    $('select[name=dyqueryFields1]').val('');
    $('select[name=dyqueryFieldsCondions1]').val('');
    $('input[name=dyqueryFieldsValues1]').val('');

    $('select[name=dyqueryFields2]').val('');
    $('select[name=dyqueryFieldsCondions2]').val('');
    $('input[name=dyqueryFieldsValues2]').val('');
   
    $('select[name=dyqueryFields3]').val('');
    $('select[name=dyqueryFieldsCondions3]').val('');
    $('input[name=dyqueryFieldsValues3]').val('');

    $('select[name=dysortField]').val('ztm');
    $('select[name=dysortWay]').val('asc');
    $('#dyFieldCombine1,#dyFieldCombine3').val('且');
    $('#dyFieldCombine2,#dyFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function dyShowLayer() {
     reloadCurrentLayerShow($('#dy_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function dyHideLayer() {
     reloadCurrentLayerHide($('#dy_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function dyImgResetScroll() {
    $("#movie_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { dyImgResetScroll() });