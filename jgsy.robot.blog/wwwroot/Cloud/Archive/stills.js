//获取当前tab模块(模块：剧照 )对应的 '#id' 如  href='#box_Still'
function getjzTabSelecter() {
    var currTabEventObject = $($("#jzItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 剧照tab事件函数
function stillsPartial() {
    var currTabContentIdSelecter = getjzTabSelecter();
    if (currTabContentIdSelecter) {
        jzResetEmptyData(currTabContentIdSelecter);
        jzstillsPartial(currTabContentIdSelecter)
    }
}


/****初始化剧照模块函数***/
$(function () {
    jzChangeFieldCombine();
    $('#jzItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            jzTabEventIsRequsetData(selecter);
        }
    });
    jzImgResetScroll();
    $($('#stills_Images')).scroll(function () {
        if (getjzTabSelecter() == "#stills_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            //console.warn(scrollTop / (contentH - viewH))
            if (scrollTop / (contentH - viewH) >= 0.95) {
                jzGetImgJsonData();
            }
        }
    });
});
//剧照模块下的数据展示区tab事件--》指向请求数据源事件函数
function jzTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#stills_ImagesAndFont") {
            var isHasData = $('#jzImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                jzTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#stills_Images") {
            var isHasImg = $.trim($('#stills_Images').html());
            if (isHasImg == "") {
                jzTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function jzResetEmptyData(selecter) {
    if (selecter != "#stills_ImagesAndFont") {
        $('#jzImagesAndFontInfo').bootstrapTable('removeAll');
        $('#stills_ImagesAndFontCount').text('')
    } else if (selecter != "#stills_Images") {
        $('#stills_ImagesCount').text('')
        $("#stills_Images").html('');
    }
}

function jzTabChangeForLoadData(selecter) {
    jzstillsPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function jzstillsPartial(selecter) {
    if (selecter == "#stills_ImagesAndFont") {
        jz_ImagesAndFont();
    } else if (selecter == "#stills_Images") {
        jz_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function jz_ImagesAndFont() {
    var url = jzUrlBy$winActionType();
    jzShowLayer();
    $('#jzImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function jz_Images() {
    $('#stills_Images').html('');
    $('#jzoffsetImg').val('1');
    jzGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function jzGetImgJsonData() {
    var total = $.trim($('#stills_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#stills_ImagesCount').text()));
    var count = $.trim($('#jzoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#jzoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && jzIsAllowRequest != -1)) {
        jzLoadingjzImageNoMore(total);
        $('#stills_Images').find('.jzLoadingjzImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = jzQueryParams(params, 'img');
    if (data.offsetImg == jzIsAllowRequest) return;
    jzIsAllowRequest = data.offsetImg;
    jzShowLayer();
    $.getJSON("/Still/GetImg", data, function (json) {
        jzHideLayer()
        if (json) {
            var c = json.total == 0 ? "0" : json.total;
            $('#stills_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#jzoffsetImg').val()) + json.rows.length;
                $('#jzoffsetImg').val(offsetValue);
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
                        urlDownload = "/Still/Download?filePath=" + urlDownload;
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
                $('#stills_Images').append(jsonHtml);
                $common.handleHoverAndColorbox();
            } else {
                jzLoadingjzImageNoMore(c);
                $('#stills_Images').find('.jzLoadingjzImageNoMore:gt(0)').remove()
                return;
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var jzTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#jzImagesAndFontInfo').bootstrapTable({
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
            url: jzUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getStillCondition,
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
                title: '剧照信息列表', halign: 'center',

                formatter: "jzformatterHtml"
            },

            { field: 'ZTM', title: 'ZTM', visible: false },
            { field: 'ZPDAH', title: 'ZPDAH', visible: false },
            { field: 'ZPH', title: 'ZPH', visible: false },
            { field: 'DPH', title: 'DPH', visible: false },
            { field: 'XS', title: 'XS', visible: false },
            { field: 'SB', title: 'SB', visible: false },
            { field: 'DPZT', title: 'DPZT', visible: false },
            { field: 'PSZ', title: 'PSZ', visible: false },
            { field: 'WLZT', title: 'WLZT', visible: false },
            { field: 'SX', title: 'SX', visible: false },
            { field: 'GG1', title: 'GG1', visible: false },
            { field: 'GG2', title: 'GG2', visible: false },
            { field: 'GG3', title: 'GG3', visible: false },
            { field: 'GG4', title: 'GG4', visible: false },
            { field: 'GG5', title: 'GG5', visible: false },
            { field: 'FBS1', title: 'FBS1', visible: false },
            { field: 'FBS2', title: 'FBS2', visible: false },
            { field: 'FBS3', title: 'FBS3', visible: false },
            { field: 'FBS4', title: 'FBS4', visible: false },
            { field: 'FBS5', title: 'FBS5', visible: false },
            { field: 'DPFBS', title: 'DPFBS', visible: false },
            { field: 'SCRQ', title: 'SCRQ', visible: false },
            { field: 'LYFS', title: 'LYFS', visible: false },
            { field: 'LYZMC', title: 'LYZMC', visible: false },
            { field: 'SFDZBBZ', title: 'SFDZBBZ', visible: false },
            { field: 'ZMLH', title: 'ZMLH', visible: false },
            { field: 'QSMS', title: 'QSMS', visible: false },
            { field: 'ZPSM', title: 'ZPSM', visible: false },
            { field: 'WJBZ', title: 'WJBZ', visible: false },
            { field: 'ZTWJLJ', title: 'ZTWJLJ', visible: false },
            { field: 'WJLJ', title: 'WJLJ', visible: false },
            { field: 'SYH', title: 'SYH', visible: false },
            { field: 'WJCID', title: 'WJCID', visible: false },
            { field: 'DAJBXXID', title: 'DAJBXXID', visible: false }
            ],
            onLoadSuccess: function (data) {
                jzHideLayer(); 
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#stills_ImagesAndFontCount,#Statistics_box_Still').text(count)
                }
            },
            onPageChange: function (number, size) {
                //jzShowLayer()
            }, onRefreshOptions: function (options) {
                //jzShowLayer()
            }


        });
    };
    oTableInit.getStillCondition = function (params) {
        var p = jzQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function jzUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/Still/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function jzQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['jzqueryFields1'] = $.trim($('select[name=jzqueryFields1]').val());
        params['jzqueryFieldsCondions1'] = $.trim($('select[name=jzqueryFieldsCondions1]').val());
        params['jzqueryFieldsValues1'] = $.trim($('#jzqueryFieldsValues1').val());
        params['jzqueryFields2'] = $.trim($('select[name=jzqueryFields2]').val());
        params['jzqueryFieldsCondions2'] = $.trim($('select[name=jzqueryFieldsCondions2]').val());
        params['jzqueryFieldsValues2'] = $.trim($('#jzqueryFieldsValues2').val());
        params['jzqueryFields3'] = $.trim($('#jzqueryFields3').val());
        params['jzqueryFieldsCondions3'] = $.trim($('#jzqueryFieldsCondions3').val());
        params['jzqueryFieldsValues3'] = $.trim($('#jzqueryFieldsValues3').val());
        params['jzsortField'] = $.trim($('select[name=jzsortField]').val());
        params['jzsortWay'] = $.trim($('select[name=jzsortWay]').val());
        params['jzFieldCombine4'] = $.trim($('#jzFieldCombine4').val());
        params['jzFieldCombine2'] = $.trim($('#jzFieldCombine2').val());
        var a = $($('.stills').find("form>div.form-group:last").find('input:checked')).val();
        if (a == 'all') a = "";
        params['format'] = $.trim(a);
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#jzoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}

//剧照图文混编信息展示处理函数
function jzformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
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
        checkScript = "/Still/Download?filePath=" + WJLJ;
    }

    htmlJson += ' <a class="btn btn-danger ' + checkdisabled + '" href="' + checkScript + '" target="iframedownloadError" style="width:120px;margin-top:15px"><i class="fa fa-cloud-download"></i> 下载</a>';
    htmlJson += '</div> ';
    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="/still/index?id=' + row.WJCID + '&dydajbxxid=' + row.DAJBXXID + '" target="_blank">';
    htmlJson += $common.isNullReturnEmpty(row.ZTM);
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>照片档案号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" style="padding-left:1px;padding-right:1px;">';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.ZPDAH) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>照片号：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.ZPH);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>底片片号：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.DPH);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>形式：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.XS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>色别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SB);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>底片载体：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.DPZT);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>拍摄者：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.PSZ);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';

    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>物理状态：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.WLZT);
    htmlJson += '  </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" > <STRONG>属性：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SX);
    htmlJson += '  </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格1:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.GG1);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格2:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.GG2);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格3:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.GG3);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格4:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.GG4);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>规格5:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.GG5);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数1:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    if (row.GG1 == null || row.GG1 == "0") {
        row.GG1 = "";
    }
    htmlJson += row.GG1;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数2:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    if (row.GG2 == null || row.GG2 == "0") {
        row.GG2 = "";
    }
    htmlJson += row.GG2;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数3:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    if (row.GG3 == null || row.GG3 == "0") {
        row.GG3 = "";
    }
    htmlJson += row.GG3;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数4:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    if (row.GG4 == null || row.GG4 == "0") {
        row.GG4 = "";
    }
    htmlJson += row.GG4;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>复本数5:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    if (row.GG5 == null || row.GG5 == "0") {
        row.GG5 = "";
    }
    htmlJson += row.GG5;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>底片复本数:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += ((row.DPFBS == null || row.DPFBS == "0") ? "" : row.DPFBS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>收藏日期:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCRQ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>来源方式:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.LYFS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>来源者名称:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.LYZMC);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>是否电子版:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SFDZBBZ) == "0" ? "否" : "是";
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>总目录号:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.ZMLH);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>缺损描述:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.QSMS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>剧照说明:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.ZPSM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" >  <STRONG>文件备注:</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.WJBZ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';

    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function jzLoadingjzImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 jzLoadingjzImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#stills_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function jzChangeFieldCombine() {
    $("#jzFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#jzFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#jzFieldCombine2").val("AND");
        }
    });
    $("#jzFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#jzFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#jzFieldCombine4").val("AND");
        }
    });
    var jz = new jzTableInit();
    jz.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function jzReloadAndResetCurrent(e) {
    jzResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function jzResetConditions() {

    $('select[name=jzqueryFields1]').val('');
    $('select[name=jzqueryFieldsCondions1]').val('');
    $('input[name=jzqueryFieldsValues1]').val('');

    $('select[name=jzqueryFields2]').val('');
    $('select[name=jzqueryFieldsCondions2]').val('');
    $('input[name=jzqueryFieldsValues2]').val('');

    $('select[name=jzqueryFields3]').val('');
    $('select[name=jzqueryFieldsCondions3]').val('');
    $('input[name=jzqueryFieldsValues3]').val('');

    $('#stillRadio').attr('checked','checked');

    $('select[name=jzsortField]').val('ztm');
    $('select[name=jzsortWay]').val('asc');
    $('#jzFieldCombine1,#jzFieldCombine3').val('且');
    $('#jzFieldCombine2,#jzFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function jzShowLayer() {
    reloadCurrentLayerShow($('#jz_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function jzHideLayer() {
    reloadCurrentLayerHide($('#jz_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function jzImgResetScroll() {
    $("#stills_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { jzImgResetScroll() });