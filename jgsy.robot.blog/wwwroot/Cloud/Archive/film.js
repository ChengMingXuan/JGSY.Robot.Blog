//获取当前tab模块(模块： 胶片)对应的 '#id' 如胶片  href='#box_Movie'
function getjpTabSelecter() {
    var currTabEventObject = $($("#jpItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 胶片tab事件函数
function filmPartial() {
    var currTabContentIdSelecter = getjpTabSelecter();
    if (currTabContentIdSelecter) {
        jpResetEmptyData(currTabContentIdSelecter);
        jpfilmPartial(currTabContentIdSelecter)
    }
}


/****初始化胶片模块函数***/
$(function () {
    jpChangeFieldCombine();
    $('#jpItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            jpTabEventIsRequsetData(selecter);
        }
    });
    jpImgResetScroll();
    $($('#film_Images')).scroll(function () {
        if (getjpTabSelecter() == "#film_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            if (scrollTop / (contentH - viewH) >= 0.95) {
                jpGetImgJsonData();
            }
        }
    });
});
//胶片模块下的数据展示区tab事件--》指向请求数据源事件函数
function jpTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#fileMaker_ImagesAndFont") {
            var isHasData = $('#jpImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                jpTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#fileMaker_Images") {
            var isHasImg = $.trim($('#fileMaker_Images').html());
            if (isHasImg == "") {
                jpTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function jpResetEmptyData(selecter) {
    if (selecter != "#film_ImagesAndFont") {
        $('#jpImagesAndFontInfo').bootstrapTable('removeAll');
        $('#film_ImagesAndFontCount').text('')
    } else if (selecter != "#film_Images") {
        $('#film_ImagesCount').text('')
        $("#film_Images").html('');
    }
}

function jpTabChangeForLoadData(selecter) {
    jpfilmPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function jpfilmPartial(selecter) {
    if (selecter == "#film_ImagesAndFont") {
        jp_ImagesAndFont();
    } else if (selecter == "#film_Images") {
        jp_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function jp_ImagesAndFont() {
    var url = jpUrlBy$winActionType();
    jpShowLayer();
    $('#jpImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function jp_Images() {
    $('#film_Images').html('');
    $('#jpoffsetImg').val('1');
    jpGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function jpGetImgJsonData() {
    var total = $.trim($('#film_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#film_ImagesCount').text()));
    var count = $.trim($('#jpoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#jpoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && jpIsAllowRequest != -1)) {
        jpLoadingjpImageNoMore(total);
        $('#film_Images').find('.jpLoadingjpImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = jpQueryParams(params, 'img');
    if (data.offsetImg == jpIsAllowRequest) return;
    jpIsAllowRequest = data.offsetImg;
    jpShowLayer();
    $.getJSON("/film/GetImg", data, function (json) {
        jpHideLayer()
        if (json) {
            var c = json.total == 0 ? "" : json.total;
            $('#film_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#jpoffsetImg').val()) + json.rows.length;
                $('#jpoffsetImg').val(offsetValue);
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
                $('#film_Images').append(jsonHtml);
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var jpTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#jpImagesAndFontInfo').bootstrapTable({
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
            url: jpUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getfilmCondition,
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
                field: 'KBZMLH',
                title: '胶片基本信息列表', halign: 'center',

                formatter: "jpformatterHtml"
            },
                { field: 'PM', title: 'PM', visible: false },
            { field: 'KBH', title: 'KBH', visible: false },
            { field: 'KBYB', title: 'KBYB', visible: false },
            { field: 'KBZM', title: 'KBZM', visible: false },
            { field: 'KBJSDJ', title: 'KBJSDJ', visible: false },
            { field: 'KBPJ', title: 'KBPJ', visible: false },
            { field: 'KBKWH', title: 'KBKWH', visible: false },
            { field: 'KBSB', title: 'KBSB', visible: false },
            { field: 'KBMX', title: 'KBMX', visible: false },
            { field: 'KBGG', title: 'KBGG', visible: false },
            { field: 'KBZCD', title: 'KBZCD', visible: false },
            { field: 'KBSEB', title: 'KBSEB', visible: false },
            { field: 'KBCKJ', title: 'KBCKJ', visible: false },
            { field: 'KBJDSJ', title: 'KBJDSJ', visible: false },
            { field: 'KBJDY', title: 'KBJDY', visible: false },
            { field: 'KBYW', title: 'KBYW', visible: false },
            { field: 'KBM', title: 'KBM', visible: false },
            { field: 'KBBZ', title: 'KBBZ', visible: false },
            { field: 'KBTS', title: 'KBTS', visible: false },
            { field: 'KBJCSJ', title: 'KBJCSJ', visible: false },
            { field: 'KBJPY', title: 'KBJPY', visible: false },
            { field: 'KBBS', title: 'KBBS', visible: false },
            { field: 'KBYYBS', title: 'KBYYBS', visible: false },
            { field: 'KBBCXZ', title: 'KBBCXZ', visible: false },
            { field: 'KBRKSJ', title: 'KBRKSJ', visible: false },
            { field: 'KBRKPZ', title: 'KBRKPZ', visible: false },
            { field: 'KBYPLY', title: 'KBYPLY', visible: false },
            { field: 'KBBEIZ', title: 'KBBEIZ', visible: false },
            ],
            onLoadSuccess: function (data) {
                jpHideLayer()
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#film_ImagesAndFontCount,#Statistics_box_Film').text(count)
                }
            },
            onPageChange: function (number, size) {
                //jpShowLayer()
            }, onRefreshOptions: function (options) {
                //jpShowLayer()
            }


        });
    };
    oTableInit.getfilmCondition = function (params) {
        var p = jpQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function jpUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/film/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function jpQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['jpqueryFields1'] = $.trim($('select[name=jpqueryFields1]').val());
        params['jpqueryFieldsCondions1'] = $.trim($('select[name=jpqueryFieldsCondions1]').val());
        params['jpqueryFieldsValues1'] = $.trim($('#jpqueryFieldsValues1').val());
        params['jpqueryFields2'] = $.trim($('select[name=jpqueryFields2]').val());
        params['jpqueryFieldsCondions2'] = $.trim($('select[name=jpqueryFieldsCondions2]').val());
        params['jpqueryFieldsValues2'] = $.trim($('#jpqueryFieldsValues2').val());
        params['jpqueryFields3'] = $.trim($('#jpqueryFields3').val());
        params['jpqueryFieldsCondions3'] = $.trim($('#jpqueryFieldsCondions3').val());
        params['jpqueryFieldsValues3'] = $.trim($('#jpqueryFieldsValues3').val());
        params['jpsortField'] = $.trim($('select[name=jpsortField]').val());
        params['jpsortWay'] = $.trim($('select[name=jpsortWay]').val());
        params['jpFieldCombine4'] = $.trim($('#jpFieldCombine4').val());
        params['jpFieldCombine2'] = $.trim($('#jpFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#jpoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//胶片图文混编信息展示处理函数
function jpformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
    htmlJson += '   <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '   <div class="col-sm-3 col-md-3 col-xs-3 col-lg-3 text-center">';

    var img = $common.getImgHttpPath(row.PIC, "/Cloud/img/noPicture.jpg")
    htmlJson += '     <div    height="160" width="120"></div>';
    //htmlJson += '     <img src="' + img + '" border="0" class="img-responsive" height="160" width="120" />';

    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';
    htmlJson += '      <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 div12" >';
    var idHref = $common.isNullReturnEmpty(row.KBZMLH) == "" ? "javascript:void(0)" : ('/film/index?zmlh='+row.KBZMLH);
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="' + idHref+ '" target="_blank">';
    htmlJson += $common.isNullReturnEmpty(row.PM);
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>总目录号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.KBZMLH) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>拷贝号：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.KBH);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>语别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.KBYB);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>字幕：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.KBZM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>技术等级：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.KBJSDJ);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>片基：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.KBPJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>库位号：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.KBKWH);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>声别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBSB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>幕型：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBMX);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>规格：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBGG);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>总长度：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += ($common.isNullReturnEmpty(row.KBZCD) == "") ? "": ($common.isNullReturnEmpty(row.KBZCD) +' 英尺');
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>色别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBSEB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>齿孔距：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += ($common.isNullReturnEmpty(row.KBCKJ) == "") ? "" : ($common.isNullReturnEmpty(row.KBCKJ) + ' mm');
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>鉴定时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBJDSJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>鉴定员：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBJDY);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>油污：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBYW);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>霉：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>变质：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBBZ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>褪色：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBTS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>检查时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBJCSJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>检片员：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBJPY);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>本数：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBBS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>保存性质：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBBCXZ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>入库时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBRKSJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>入库凭证：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.KBRKPZ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>影片来源：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += '';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>备注信息：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson +='*';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> '; 
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function jpLoadingjpImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 jpLoadingjpImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#film_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function jpChangeFieldCombine() {
    $("#jpFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#jpFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#jpFieldCombine2").val("AND");
        }
    });
    $("#jpFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#jpFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#jpFieldCombine4").val("AND");
        }
    });
    var jp = new jpTableInit();
    jp.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function jpReloadAndResetCurrent(e) {
    jpResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function jpResetConditions() {

    $('select[name=jpqueryFields1]').val('');
    $('select[name=jpqueryFieldsCondions1]').val('');
    $('input[name=jpqueryFieldsValues1]').val('');

    $('select[name=jpqueryFields2]').val('');
    $('select[name=jpqueryFieldsCondions2]').val('');
    $('input[name=jpqueryFieldsValues2]').val('');

    $('select[name=jpqueryFields3]').val('');
    $('select[name=jpqueryFieldsCondions3]').val('');
    $('input[name=jpqueryFieldsValues3]').val('');

    $('select[name=jpsortField]').val('ztm');
    $('select[name=jpsortWay]').val('asc');
    $('#jpFieldCombine1,#jpFieldCombine3').val('且');
    $('#jpFieldCombine2,#jpFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function jpShowLayer() {
    reloadCurrentLayerShow($('#jp_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function jpHideLayer() {
    reloadCurrentLayerHide($('#jp_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function jpImgResetScroll() {
    $("#film_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { jpImgResetScroll() });