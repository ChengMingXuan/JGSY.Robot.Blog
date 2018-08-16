//获取当前tab模块(模块：海报 )对应的 '#id' 如  href='#box_Posters'
function gethbTabSelecter() {
    var currTabEventObject = $($("#hbItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 海报tab事件函数
function postersPartial() {
    var currTabContentIdSelecter = gethbTabSelecter();
    if (currTabContentIdSelecter) {
        hbResetEmptyData(currTabContentIdSelecter);
        hbpostersPartial(currTabContentIdSelecter)
    }
}


/****初始化海报模块函数***/
$(function () {
    hbChangeFieldCombine();
    $('#hbItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            hbTabEventIsRequsetData(selecter);
        }
    });
    hbImgResetScroll();
    $($('#posters_Images')).scroll(function () {
        if (gethbTabSelecter() == "#posters_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            //console.warn(scrollTop / (contentH - viewH))
            if (scrollTop / (contentH - viewH) >= 0.95) {
                hbGetImgJsonData();
            }
        }
    });
});
//海报模块下的数据展示区tab事件--》指向请求数据源事件函数
function hbTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#posters_ImagesAndFont") {
            var isHasData = $('#hbImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                hbTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#posters_Images") {
            var isHasImg = $.trim($('#posters_Images').html());
            if (isHasImg == "") {
                hbTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function hbResetEmptyData(selecter) {
    if (selecter != "#posters_ImagesAndFont") {
        $('#hbImagesAndFontInfo').bootstrapTable('removeAll');
        $('#posters_ImagesAndFontCount').text('')
    } else if (selecter != "#posters_Images") {
        $('#posters_ImagesCount').text('')
        $("#posters_Images").html('');
    }
}

function hbTabChangeForLoadData(selecter) {
    hbpostersPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function hbpostersPartial(selecter) {
    if (selecter == "#posters_ImagesAndFont") {
        hb_ImagesAndFont();
    } else if (selecter == "#posters_Images") {
        hb_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function hb_ImagesAndFont() {
    var url = hbUrlBy$winActionType();
    hbShowLayer();
    $('#hbImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function hb_Images() {
    $('#posters_Images').html('');
    $('#hboffsetImg').val('1');
    hbGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function hbGetImgJsonData() {
    var total = $.trim($('#posters_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#posters_ImagesCount').text()));
    var count = $.trim($('#hboffsetImg').val()) == "" ? 1 : parseInt($.trim($('#hboffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && hbIsAllowRequest != -1)) {
        hbLoadinghbImageNoMore(total);
        $('#posters_Images').find('.hbLoadinghbImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = hbQueryParams(params, 'img');
    if (data.offsetImg == hbIsAllowRequest) return;
    hbIsAllowRequest = data.offsetImg;
    hbShowLayer();
    $.getJSON("/Posters/GetImg", data, function (json) {
        hbHideLayer()
        if (json) {
            var c = json.total == 0 ? "0" : json.total;
            $('#posters_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#hboffsetImg').val()) + json.rows.length;
                $('#hboffsetImg').val(offsetValue);
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
                        urlDownload = "/Posters/Download?filePath=" + urlDownload;
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
                $('#posters_Images').append(jsonHtml);
                $common.handleHoverAndColorbox();
            } else {
                hbLoadinghbImageNoMore(c);
                $('#posters_Images').find('.hbLoadinghbImageNoMore:gt(0)').remove()
                return;
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var hbTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#hbImagesAndFontInfo').bootstrapTable({
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
            url: hbUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getPostersCondition,
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
                title: '海报基本信息列表', halign: 'center',

                formatter: "hbformatterHtml"
            } 
                , { field: 'ZTM', title: 'ZTM', visible: false }
                , { field: 'HBDAH', title: 'HBDAH', visible: false }
                , { field: 'HBH', title: 'HBH', visible: false }
                , { field: 'TM', title: 'TM', visible: false }
                , { field: 'ZMLH', title: 'ZMLH', visible: false }
                , { field: 'SCRQ', title: 'SCRQ', visible: false }
                , { field: 'XS', title: 'XS', visible: false }
                , { field: 'LYFS', title: 'LYFS', visible: false }
                , { field: 'LYZMC', title: 'LYZMC', visible: false }
                , { field: 'XT1', title: 'XT1', visible: false }
                , { field: 'XT2', title: 'XT2', visible: false }
                , { field: 'XT3', title: 'XT3', visible: false }
                , { field: 'GG1', title: 'GG1', visible: false }
                , { field: 'GG2', title: 'GG2', visible: false }
                , { field: 'GG3', title: 'GG3', visible: false }
                , { field: 'FBS1', title: 'FBS1', visible: false }
                , { field: 'FBS2', title: 'FBS2', visible: false }
                , { field: 'FBS3', title: 'FBS3', visible: false }
                , { field: 'WLZT1', title: 'WLZT1', visible: false }
                , { field: 'WLZT2', title: 'WLZT2', visible: false }
                , { field: 'WLZT3', title: 'WLZT3', visible: false }
                , { field: 'QSMS1', title: 'QSMS1', visible: false }
                , { field: 'QSMS2', title: 'QSMS2', visible: false }
                , { field: 'QSMS3', title: 'QSMS3', visible: false }
                , { field: 'ZZ', title: 'ZZ', visible: false }
                , { field: 'DPH', title: 'DPH', visible: false }
                , { field: 'DZBH', title: 'DZBH', visible: false }
                , { field: 'YZ', title: 'YZ', visible: false }
                , { field: 'SFDZBBZ1', title: 'SFDZBBZ1', visible: false }
                , { field: 'WJBZ', title: 'WJBZ', visible: false }
                , { field: 'ZTWJLJ', title: 'ZTWJLJ', visible: false }
                , { field: 'WJLJ', title: 'WJLJ', visible: false } 
                , { field: 'DYDAJBXXID', title: 'DYDAJBXXID', visible: false }

            ],
            onLoadSuccess: function (data) {
                hbHideLayer(); 
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#posters_ImagesAndFontCount,#Statistics_box_Posters').text(count)
                }
            },
            onPageChange: function (number, size) {
                //hbShowLayer()
            }, onRefreshOptions: function (options) {
                //hbShowLayer()
            }


        });
    };
    oTableInit.getPostersCondition = function (params) {
        var p = hbQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function hbUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/Posters/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function hbQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['hbqueryFields1'] = $.trim($('select[name=hbqueryFields1]').val());
        params['hbqueryFieldsCondions1'] = $.trim($('select[name=hbqueryFieldsCondions1]').val());
        params['hbqueryFieldsValues1'] = $.trim($('#hbqueryFieldsValues1').val());
        params['hbqueryFields2'] = $.trim($('select[name=hbqueryFields2]').val());
        params['hbqueryFieldsCondions2'] = $.trim($('select[name=hbqueryFieldsCondions2]').val());
        params['hbqueryFieldsValues2'] = $.trim($('#hbqueryFieldsValues2').val());
        params['hbqueryFields3'] = $.trim($('#hbqueryFields3').val());
        params['hbqueryFieldsCondions3'] = $.trim($('#hbqueryFieldsCondions3').val());
        params['hbqueryFieldsValues3'] = $.trim($('#hbqueryFieldsValues3').val());
        params['hbsortField'] = $.trim($('select[name=hbsortField]').val());
        params['hbsortWay'] = $.trim($('select[name=hbsortWay]').val());
        params['hbFieldCombine4'] = $.trim($('#hbFieldCombine4').val());
        params['hbFieldCombine2'] = $.trim($('#hbFieldCombine2').val());
        var a = $($('.posters').find("form>div.form-group:last").find('input:checked')).val();
        if (a == 'all') a = "";
        params['format'] = $.trim(a);
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#hboffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//海报图文混编信息展示处理函数
function hbformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
    htmlJson += '   <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '   <div class="col-sm-3 col-md-3 col-xs-3 col-lg-3 text-center">'; 
    htmlJson += '<div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 dyimg-holder">';
    var ZTWJLJ = $common.isNullReturnEmpty(row.ZTWJLJ);
    ZTWJLJ = $common.getImgHttpPath(ZTWJLJ, "/Cloud/img/noPicture.jpg")
    htmlJson += ' <img src="' + ZTWJLJ + '" border="0" class="img-responsive" height="160" width="120" />';
    htmlJson += ' </div>  ';
    htmlJson += '<div class="col-sm-12 col-md-12 col-xs-12 col-lg-12  text-left" > ';
    var checkdisabled = "";
    var checkScript = "javascript:void(0)";
    var WJLJ = $common.isNullReturnEmpty(row.WJLJ);
    if (WJLJ == "" || !WJLJ) {
        checkdisabled = "disabled";
    } else {
        checkScript = "/posters/Download?filePath=" + WJLJ;
    }
    htmlJson += ' <a class="btn btn-danger ' + checkdisabled + '" href="' + checkScript + '" target="iframedownloadError" style="width:120px;margin-top:15px"><i class="fa fa-cloud-download"></i> 下载</a>';
    htmlJson += '</div> '; 


    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="/posters/index?id=' + row.DYDAJBXXID + '" target="_blank">';
    htmlJson += row.ZTM;
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>海报档案号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + row.HBDAH + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>海报号：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.HBH;
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>题名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.TM;
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>总目录号：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.ZMLH;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>收藏日期：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.SCRQ;
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>形式：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.XS;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>来源方式：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += row.LYFS;
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';

    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>来源者名称：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.LYZMC;
    htmlJson += '  </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div> '; 
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>形态1:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > '; 
    htmlJson += row.XT1;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>形态2:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.XT2;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>形态3:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.XT3;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> '; 
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格1:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.GG1;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格2:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.GG2;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格3:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.GG3;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数1:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.FBS1;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数2:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.FBS2;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数3:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.FBS3;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>物理状态1:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.WLZT1;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>物理状态2:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.WLZT2;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>物理状态3:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.WLZT3;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>缺损描述1:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.QSMS1;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>缺损描述2:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.QSMS2;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>缺损描述3:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.QSMS3;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>文字种类:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    //htmlJson += row.ZL; 暂无数据源
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>作者:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.ZZ;  
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>底片号:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.DPH;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>电子版号:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.DZBH;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>语种:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.YZ;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>是否电子版:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.SFDZBBZ1 == "0" ? "非电子版" : "电子版";
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>文件备注:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += row.WJBZ;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function hbLoadinghbImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 hbLoadinghbImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#posters_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function hbChangeFieldCombine() {
    $("#hbFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#hbFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#hbFieldCombine2").val("AND");
        }
    });
    $("#hbFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#hbFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#hbFieldCombine4").val("AND");
        }
    });
    var hb = new hbTableInit();
    hb.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function hbReloadAndResetCurrent(e) {
    hbResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function hbResetConditions() {

    $('select[name=hbqueryFields1]').val('');
    $('select[name=hbqueryFieldsCondions1]').val('');
    $('input[name=hbqueryFieldsValues1]').val('');

    $('select[name=hbqueryFields2]').val('');
    $('select[name=hbqueryFieldsCondions2]').val('');
    $('input[name=hbqueryFieldsValues2]').val('');

    $('select[name=hbqueryFields3]').val('');
    $('select[name=hbqueryFieldsCondions3]').val('');
    $('input[name=hbqueryFieldsValues3]').val('');
    $('#postersRadio').attr('checked', 'checked');
    $('select[name=hbsortField]').val('ztm');
    $('select[name=hbsortWay]').val('asc');
    $('#hbFieldCombine1,#hbFieldCombine3').val('且');
    $('#hbFieldCombine2,#hbFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function hbShowLayer() {
    reloadCurrentLayerShow($('#hb_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function hbHideLayer() {
    reloadCurrentLayerHide($('#hb_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function hbImgResetScroll() {
    $("#posters_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { hbImgResetScroll() });