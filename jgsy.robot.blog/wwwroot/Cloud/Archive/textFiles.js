//获取当前tab模块(模块： 文字档案)对应的 '#id' 如电影  href='#box_Movie'
function getwzdaTabSelecter() {
    var currTabEventObject = $($("#wzdaItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 文字档案tab事件函数
function textFilesPartial() {
    var currTabContentIdSelecter = getwzdaTabSelecter();
    if (currTabContentIdSelecter) {
        wzdaResetEmptyData(currTabContentIdSelecter);
        wzdatextFilesPartial(currTabContentIdSelecter)
    }
}


/****初始化文字档案模块函数***/
$(function () {
    wzdaChangeFieldCombine();
    $('#wzdaItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            wzdaTabEventIsRequsetData(selecter);
        }
    });
    wzdaImgResetScroll();
    $($('#textFiles_Images')).scroll(function () {
        if (getwzdaTabSelecter() == "#textFiles_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            if (scrollTop / (contentH - viewH) >= 0.95) {
                wzdaGetImgJsonData();
            }
        }
    });
});
//文字档案模块下的数据展示区tab事件--》指向请求数据源事件函数
function wzdaTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#fileMaker_ImagesAndFont") {
            var isHasData = $('#wzdaImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                wzdaTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#fileMaker_Images") {
            var isHasImg = $.trim($('#fileMaker_Images').html());
            if (isHasImg == "") {
                wzdaTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function wzdaResetEmptyData(selecter) {
    if (selecter != "#textFiles_ImagesAndFont") {
        $('#wzdaImagesAndFontInfo').bootstrapTable('removeAll');
        $('#textFiles_ImagesAndFontCount').text('')
    } else if (selecter != "#textFiles_Images") {
        $('#textFiles_ImagesCount').text('')
        $("#textFiles_Images").html('');
    }
}

function wzdaTabChangeForLoadData(selecter) {
    wzdatextFilesPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function wzdatextFilesPartial(selecter) {
    if (selecter == "#textFiles_ImagesAndFont") {
        wzda_ImagesAndFont();
    } else if (selecter == "#textFiles_Images") {
        wzda_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function wzda_ImagesAndFont() {
    var url = wzdaUrlBy$winActionType();
    wzdaShowLayer();
    $('#wzdaImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function wzda_Images() {
    $('#textFiles_Images').html('');
    $('#wzdaoffsetImg').val('1');
    wzdaGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function wzdaGetImgJsonData() {
    var total = $.trim($('#textFiles_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#textFiles_ImagesCount').text()));
    var count = $.trim($('#wzdaoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#wzdaoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && wzdaIsAllowRequest != -1)) {
        wzdaLoadingdyImageNoMore(total);
        $('#textFiles_Images').find('.wzdaLoadingdyImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = wzdaQueryParams(params, 'img');
    if (data.offsetImg == wzdaIsAllowRequest) return;
    wzdaIsAllowRequest = data.offsetImg;
    wzdaShowLayer();
    $.getJSON("/textFiles/GetImg", data, function (json) {
        wzdaHideLayer()
        if (json) {
            var c = json.total == 0 ? "" : json.total;
            $('#textFiles_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#wzdaoffsetImg').val()) + json.rows.length;
                $('#wzdaoffsetImg').val(offsetValue);
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
                $('#textFiles_Images').append(jsonHtml);
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var wzdaTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#wzdaImagesAndFontInfo').bootstrapTable({
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
            url: wzdaUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.gettextFilesCondition,
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
                title: '文字档案信息列表', halign: 'center',

                formatter: "wzdaformatterHtml"
            },
            { field: 'DYDAJBXXID ', title: 'DYDAJBXXID ', visible: false },
            { field: 'ZTM ', title: 'ZTM ', visible: false },
            { field: 'WZDAH ', title: 'WZDAH ', visible: false },
            { field: 'WJH ', title: 'WJH ', visible: false },
            { field: 'TM ', title: 'TM ', visible: false },
            { field: 'FTM ', title: 'FTM ', visible: false },
            { field: 'JTTM ', title: 'JTTM ', visible: false },
            { field: 'BLTM ', title: 'BLTM ', visible: false },
            { field: 'LYZMC ', title: 'LYZMC ', visible: false },
            { field: 'XS ', title: 'XS ', visible: false },
            { field: 'YZ ', title: 'YZ ', visible: false },
            { field: 'BBLX ', title: 'BBLX ', visible: false },
            { field: 'GG ', title: 'GG ', visible: false },
            { field: 'YS ', title: 'YS ', visible: false },
            { field: 'FBS ', title: 'FBS ', visible: false },
            { field: 'WLZT ', title: 'WLZT ', visible: false },
            { field: 'SCRQ ', title: 'SCRQ ', visible: false },
            { field: 'LYFS ', title: 'LYFS ', visible: false },
            { field: 'SFDZBbz ', title: 'SFDZBbz ', visible: false },
            { field: 'KDMT ', title: 'KDMT ', visible: false },
            { field: 'KDRQ ', title: 'KDRQ ', visible: false },
            { field: 'DZGS ', title: 'DZGS ', visible: false },
            { field: 'ZZ ', title: 'ZZ ', visible: false },
            { field: 'QSMS ', title: 'QSMS ', visible: false },
            { field: 'GJC ', title: 'GJC ', visible: false },
            { field: 'WJBZ ', title: 'WJBZ ', visible: false },
            { field: 'WJLJ ', title: 'WJLJ ', visible: false }],
            onLoadSuccess: function (data) {
                wzdaHideLayer()
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#textFiles_ImagesAndFontCount,#Statistics_box_TextFiles').text(count)
                }
            },
            onPageChange: function (number, size) {
                //wzdaShowLayer()
            }, onRefreshOptions: function (options) {
                //wzdaShowLayer()
            }


        });
    };
    oTableInit.gettextFilesCondition = function (params) {
        var p = wzdaQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function wzdaUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/textFiles/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function wzdaQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['wzdaqueryFields1'] = $.trim($('select[name=wzdaqueryFields1]').val());
        params['wzdaqueryFieldsCondions1'] = $.trim($('select[name=wzdaqueryFieldsCondions1]').val());
        params['wzdaqueryFieldsValues1'] = $.trim($('#wzdaqueryFieldsValues1').val());
        params['wzdaqueryFields2'] = $.trim($('select[name=wzdaqueryFields2]').val());
        params['wzdaqueryFieldsCondions2'] = $.trim($('select[name=wzdaqueryFieldsCondions2]').val());
        params['wzdaqueryFieldsValues2'] = $.trim($('#wzdaqueryFieldsValues2').val());
        params['wzdaqueryFields3'] = $.trim($('#wzdaqueryFields3').val());
        params['wzdaqueryFieldsCondions3'] = $.trim($('#wzdaqueryFieldsCondions3').val());
        params['wzdaqueryFieldsValues3'] = $.trim($('#wzdaqueryFieldsValues3').val());
        params['wzdasortField'] = $.trim($('select[name=wzdasortField]').val());
        params['wzdasortWay'] = $.trim($('select[name=wzdasortWay]').val());
        params['wzdaFieldCombine4'] = $.trim($('#wzdaFieldCombine4').val());
        params['wzdaFieldCombine2'] = $.trim($('#wzdaFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#wzdaoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//文字档案图文混编信息展示处理函数
function wzdaformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">'; 
    htmlJson += '  <div class="col-sm-1 col-md-1 col-xs-1 col-lg-1"></div>';
    htmlJson += '  <div class="col-sm-10 col-md-10 col-xs-10 col-lg-10">';
    htmlJson += '  <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="/textFiles/index?id=' + row.DYDAJBXXID + '" target="_blank">';
    htmlJson += $common.isNullReturnEmpty(row.ZTM);
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>文字档案号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.WZDAH) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>文件号：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.WJH);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>题名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.TM);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>副题名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.FTM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>交替题名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.JTTM);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>并列题名：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.BLTM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>来源者名称：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.LYZMC);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>形式：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.XS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>语种：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.YZ);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>版本类型：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.BBLX);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>规格：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.GG);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>页数：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.YS);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>复本数：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.FBS);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>物理状态：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.WLZT);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>收藏日期：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SCRQ);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>来源方式：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.LYFS);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>是否电子版：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SFDZBBZ) == "1" ? "否" : "是";
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>刊登媒体：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.KDMT);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>电子格式：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.DZGS);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>作者：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.ZZ);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>缺损描述：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.QSMS);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>关键词：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.GJC);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>文件备注：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.WJBZ);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    var checkdisabled = "";
    var checkScript = "javascript:void(0)";
    var WJLJ = $common.isNullReturnEmpty(row.WJLJ);
    if (WJLJ == "" || !WJLJ) {
        checkdisabled = "disabled";
    } else {
        checkScript = "/TextFiles/Download?filePath=" + WJLJ;
    } 
    htmlJson += ' <a class="btn btn-danger ' + checkdisabled + '" href="' + checkScript +
        '" target="iframedownloadError" style="width:120px;margin-top:15px"><i class="fa fa-cloud-download"></i> 下载</a>'; 
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>'; 
    htmlJson += '  </div>';
    htmlJson += '  <div class="col-sm-1 col-md-1 col-xs-1 col-lg-1"></div>';
    htmlJson += '  </div>'; 
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function wzdaLoadingdyImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 wzdaLoadingdyImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#textFiles_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function wzdaChangeFieldCombine() {
    $("#wzdaFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#wzdaFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#wzdaFieldCombine2").val("AND");
        }
    });
    $("#wzdaFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#wzdaFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#wzdaFieldCombine4").val("AND");
        }
    });
    var wzda = new wzdaTableInit();
    wzda.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function wzdaReloadAndResetCurrent(e) {
    wzdaResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function wzdaResetConditions() {

    $('select[name=wzdaqueryFields1]').val('');
    $('select[name=wzdaqueryFieldsCondions1]').val('');
    $('input[name=wzdaqueryFieldsValues1]').val('');

    $('select[name=wzdaqueryFields2]').val('');
    $('select[name=wzdaqueryFieldsCondions2]').val('');
    $('input[name=wzdaqueryFieldsValues2]').val('');

    $('select[name=wzdaqueryFields3]').val('');
    $('select[name=wzdaqueryFieldsCondions3]').val('');
    $('input[name=wzdaqueryFieldsValues3]').val('');

    $('select[name=wzdasortField]').val('ztm');
    $('select[name=wzdasortWay]').val('asc');
    $('#wzdaFieldCombine1,#wzdaFieldCombine3').val('且');
    $('#wzdaFieldCombine2,#wzdaFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function wzdaShowLayer() {
    reloadCurrentLayerShow($('#wzda_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function wzdaHideLayer() {
    reloadCurrentLayerHide($('#wzda_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function wzdaImgResetScroll() {
    $("#textFiles_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { wzdaImgResetScroll() });