//获取当前tab模块(模块： 素材)对应的 '#id' 如素材  href='#box_Movie'
function getscTabSelecter() {
    var currTabEventObject = $($("#scItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 素材tab事件函数
function sourceMaterialPartial() {
    var currTabContentIdSelecter = getscTabSelecter();
    if (currTabContentIdSelecter) {
        scResetEmptyData(currTabContentIdSelecter);
        scsourceMaterialPartial(currTabContentIdSelecter)
    }
}


/****初始化素材模块函数***/
$(function () {
    scChangeFieldCombine();
    $('#scItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            scTabEventIsRequsetData(selecter);
        }
    });
    scImgResetScroll();
    $($('#sourceMaterial_Images')).scroll(function () {
        if (getscTabSelecter() == "#sourceMaterial_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            if (scrollTop / (contentH - viewH) >= 0.95) {
                scGetImgJsonData();
            }
        }
    });
});
//素材模块下的数据展示区tab事件--》指向请求数据源事件函数
function scTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#fileMaker_ImagesAndFont") {
            var isHasData = $('#scImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                scTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#fileMaker_Images") {
            var isHasImg = $.trim($('#fileMaker_Images').html());
            if (isHasImg == "") {
                scTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function scResetEmptyData(selecter) {
    if (selecter != "#sourceMaterial_ImagesAndFont") {
        $('#scImagesAndFontInfo').bootstrapTable('removeAll');
        $('#sourceMaterial_ImagesAndFontCount').text('')
    } else if (selecter != "#sourceMaterial_Images") {
        $('#sourceMaterial_ImagesCount').text('')
        $("#sourceMaterial_Images").html('');
    }
}

function scTabChangeForLoadData(selecter) {
    scsourceMaterialPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function scsourceMaterialPartial(selecter) {
    if (selecter == "#sourceMaterial_ImagesAndFont") {
        sc_ImagesAndFont();
    } else if (selecter == "#sourceMaterial_Images") {
        sc_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function sc_ImagesAndFont() {
    var url = scUrlBy$winActionType();
    scShowLayer();
    $('#scImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function sc_Images() {
    $('#sourceMaterial_Images').html('');
    $('#scoffsetImg').val('1');
    scGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function scGetImgJsonData() {
    var total = $.trim($('#sourceMaterial_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#sourceMaterial_ImagesCount').text()));
    var count = $.trim($('#scoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#scoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && scIsAllowRequest != -1)) {
        scLoadingscImageNoMore(total);
        $('#sourceMaterial_Images').find('.scLoadingscImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = scQueryParams(params, 'img');
    if (data.offsetImg == scIsAllowRequest) return;
    scIsAllowRequest = data.offsetImg;
    scShowLayer();
    $.getJSON("/SourceMaterial/GetImg", data, function (json) {
        scHideLayer()
        if (json) {
            var c = json.total == 0 ? "" : json.total;
            $('#sourceMaterial_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#scoffsetImg').val()) + json.rows.length;
                $('#scoffsetImg').val(offsetValue);
                var jsonHtml = '';
                $.each(json.rows, function (i, n) {
                    var url = n.PIC;
                    url = $common.getImgHttpPath(url, "/Cloud/img/noPicture.scg")
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
                $('#sourceMaterial_Images').append(jsonHtml);
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var scTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#scImagesAndFontInfo').bootstrapTable({
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
            url: scUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getsourceMaterialCondition,
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
                title: '素材基本信息列表', halign: 'center',

                formatter: "scformatterHtml"
            },
                { field: 'ZMLH ', title: 'ZMLH ', visible: false },
                { field: 'PM ', title: 'PM ', visible: false },
                { field: 'SCZZH ', title: 'SCZZH ', visible: false },
                { field: 'SCZMLH ', title: 'SCZMLH ', visible: false },
                { field: 'SCYZC ', title: 'SCYZC ', visible: false },
                { field: 'SCYZND ', title: 'SCYZND ', visible: false },
                { field: 'SCKWH ', title: 'SCKWH ', visible: false },
                { field: 'SCYB ', title: 'SCYB ', visible: false },
                { field: 'SCSB ', title: 'SCSB ', visible: false },
                { field: 'SCSEB ', title: 'SCSEB ', visible: false },
                { field: 'SCZM ', title: 'SCZM ', visible: false },
                { field: 'SCPJ ', title: 'SCPJ ', visible: false },
                { field: 'SCMX ', title: 'SCMX ', visible: false },
                { field: 'SCGG ', title: 'SCGG ', visible: false },
                { field: 'SCHYD ', title: 'SCHYD ', visible: false },
                { field: 'SCGHSD ', title: 'SCGHSD ', visible: false },
                { field: 'SCHFZ ', title: 'SCHFZ ', visible: false },
                { field: 'SCHFD ', title: 'SCHFD ', visible: false },
                { field: 'SCSHFD ', title: 'SCSHFD ', visible: false },
                { field: 'SCZMYD ', title: 'SCZMYD ', visible: false },
                { field: 'SCXDP ', title: 'SCXDP ', visible: false },
                { field: 'SCJQD ', title: 'SCJQD ', visible: false },
                { field: 'SCGHD ', title: 'SCGHD ', visible: false },
                { field: 'SCQTXM ', title: 'SCQTXM ', visible: false },
                { field: 'SCBS ', title: 'SCBS ', visible: false },
                { field: 'SCYW ', title: 'SCYW ', visible: false },
                { field: 'SCM ', title: 'SCM ', visible: false },
                { field: 'SCBZ ', title: 'SCBZ ', visible: false },
                { field: 'SCTS ', title: 'SCTS ', visible: false },
                { field: 'SCJXSS ', title: 'SCJXSS ', visible: false },
                { field: 'SCJCSJ ', title: 'SCJCSJ ', visible: false },
                { field: 'SCJPY ', title: 'SCJPY ', visible: false },
                { field: 'SCBCXZ ', title: 'SCBCXZ ', visible: false },
                { field: 'SCJDYJ ', title: 'SCJDYJ ', visible: false },
                { field: 'SCJDSJ ', title: 'SCJDSJ ', visible: false },
                { field: 'SCJDY ', title: 'SCJDY ', visible: false },
                { field: 'SCYPLY ', title: 'SCYPLY ', visible: false },
                { field: 'SCRKSJ ', title: 'SCRKSJ ', visible: false },
                { field: 'SCRKPZ ', title: 'SCRKPZ ', visible: false },
                { field: 'SCBEZ ', title: 'SCBEZ ', visible: false },
                { field: 'SCCSBZ ', title: 'SCCSBZ ', visible: false },
                { field: 'SCSFZK ', title: 'SCSFZK ', visible: false },
                { field: 'SCZL ', title: 'SCZL ', visible: false },
                { field: 'UpdateDate ', title: 'UpdateDate ', visible: false },
                { field: 'IsSync ', title: 'IsSync ', visible: false }  ],
            onLoadSuccess: function (data) {
                scHideLayer()
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#sourceMaterial_ImagesAndFontCount').text(count)
                    $('#Statistics_box_sourceMaterial').text(count)
                    
                    //oddBG('scImagesAndFontInfo') 
                }
            },
            onPageChange: function (number, size) {
                //scShowLayer()
            }, onRefreshOptions: function (options) {
                //scShowLayer()
            }


        });
    };
    oTableInit.getsourceMaterialCondition = function (params) {
        var p = scQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function scUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/SourceMaterial/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function scQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['scqueryFields1'] = $.trim($('select[name=scqueryFields1]').val());
        params['scqueryFieldsCondions1'] = $.trim($('select[name=scqueryFieldsCondions1]').val());
        params['scqueryFieldsValues1'] = $.trim($('#scqueryFieldsValues1').val());
        params['scqueryFields2'] = $.trim($('select[name=scqueryFields2]').val());
        params['scqueryFieldsCondions2'] = $.trim($('select[name=scqueryFieldsCondions2]').val());
        params['scqueryFieldsValues2'] = $.trim($('#scqueryFieldsValues2').val());
        params['scqueryFields3'] = $.trim($('#scqueryFields3').val());
        params['scqueryFieldsCondions3'] = $.trim($('#scqueryFieldsCondions3').val());
        params['scqueryFieldsValues3'] = $.trim($('#scqueryFieldsValues3').val());
        params['scsortField'] = $.trim($('select[name=scsortField]').val());
        params['scsortWay'] = $.trim($('select[name=scsortWay]').val());
        params['scFieldCombine4'] = $.trim($('#scFieldCombine4').val());
        params['scFieldCombine2'] = $.trim($('#scFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#scoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//素材图文混编信息展示处理函数
function scformatterHtml(value, row) {
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
    var idHref = $common.isNullReturnEmpty(row.ZMLH) == "" ? "javascript:void(0)" : ('/SourceMaterial/index?zmlh='+row.ZMLH);
    htmlJson += '          <A style="text-decoration:none;" class="dyztm" href="' + idHref+ '" target="_blank">';
    htmlJson += $common.isNullReturnEmpty(row.PM);
    htmlJson += '  </A>';
    htmlJson += '  </div> ';
    htmlJson += '  <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" ><STRONG>总目录号：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" >';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.ZMLH) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>库位号：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SCKWH);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>声别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SCSB);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>语别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SCYB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>字幕：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SCZM);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>色别：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SCSEB);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>片基：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" >';
    htmlJson += $common.isNullReturnEmpty(row.SCPJ);
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>幕型：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCMX);
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
    htmlJson += ($common.isNullReturnEmpty(row.SCGG) == "") ? "" : ($common.isNullReturnEmpty(row.SCGG) + ' mm');
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>画原底：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCHYD) ;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>混合声底：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCGHSD);//光混声底==混合声底
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>画翻正：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCHFZ) ;
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>画翻底：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCHFD);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>声画翻底：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCSHFD);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>字幕原底：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCZMYD);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>小底片：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCXDP);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>技巧带：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCJQD);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>光号带：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCGHD);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>其它项目：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCQTXM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>本数：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCBS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>油污：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCYW);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>霉：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCM);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>变质：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCBZ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>褪色：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCTS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>机械损伤：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCJXSS);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>影片来源：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCYPLY);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>鉴定时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCJDSJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>鉴定员：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCJDY);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>鉴定意见：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCJDYJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>入库时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCRKSJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>检查时间：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCJCSJ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>检查员：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCJPY);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> ';
     

    htmlJson += '    <div class="col-sm-6 col-md-6 col-xs-6 col-lg-6" >';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" ><STRONG>备注：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" > ';
    htmlJson += $common.isNullReturnEmpty(row.SCBEZ);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div> '; 
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function scLoadingscImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 scLoadingscImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#sourceMaterial_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function scChangeFieldCombine() {
    $("#scFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#scFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#scFieldCombine2").val("AND");
        }
    });
    $("#scFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#scFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#scFieldCombine4").val("AND");
        }
    });
    var sc = new scTableInit();
    sc.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function scReloadAndResetCurrent(e) {
    scResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function scResetConditions() {

    $('select[name=scqueryFields1]').val('');
    $('select[name=scqueryFieldsCondions1]').val('');
    $('input[name=scqueryFieldsValues1]').val('');

    $('select[name=scqueryFields2]').val('');
    $('select[name=scqueryFieldsCondions2]').val('');
    $('input[name=scqueryFieldsValues2]').val('');

    $('select[name=scqueryFields3]').val('');
    $('select[name=scqueryFieldsCondions3]').val('');
    $('input[name=scqueryFieldsValues3]').val('');

    $('select[name=scsortField]').val('ztm');
    $('select[name=scsortWay]').val('asc');
    $('#scFieldCombine1,#scFieldCombine3').val('且');
    $('#scFieldCombine2,#scFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function scShowLayer() {
    reloadCurrentLayerShow($('#sc_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function scHideLayer() {
    reloadCurrentLayerHide($('#sc_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function scImgResetScroll() {
    $("#sourceMaterial_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
 

//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { scImgResetScroll() });