//获取当前tab模块(模块： 图书期刊)对应的 '#id' 如电影  href='#box_Movie'
function gettsqkTabSelecter() {
    var currTabEventObject = $($("#tsqkItemAclickForTab").find('li[class="active"] a'));
    var currTabContentIdSelecter = currTabEventObject.attr("href");
    if (typeof currTabContentIdSelecter == "string" && $.trim(currTabContentIdSelecter) != "") {
        return $.trim(currTabContentIdSelecter);
    } else {
        return "";
    }
}
//main.js 触发 图书期刊tab事件函数
function libraryJournalPartial() {
    var currTabContentIdSelecter = gettsqkTabSelecter();
    if (currTabContentIdSelecter) {
        tsqkResetEmptyData(currTabContentIdSelecter);
        tsqklibraryJournalPartial(currTabContentIdSelecter)
    }
}


/****初始化图书期刊模块函数***/
$(function () {
    tsqkChangeFieldCombine();
    $('#tsqkItemAclickForTab').find("li a").click(function () {
        var self = this;
        var selecter = $(self).attr("href");
        if ($.trim(selecter) != "" && selecter.indexOf("#") != -1) {
            tsqkTabEventIsRequsetData(selecter);
        }
    });
    tsqkImgResetScroll();
    $($('#libraryJournal_Images')).scroll(function () {
        if (gettsqkTabSelecter() == "#libraryJournal_Images") {
            var $this = $(this),
                viewH = $(this).height(),
                contentH = $(this).get(0).scrollHeight,
                scrollTop = $(this).scrollTop();
            if (scrollTop / (contentH - viewH) >= 0.95) {
                tsqkGetImgJsonData();
            }
        }
    });

});
//图书期刊模块下的数据展示区tab事件--》指向请求数据源事件函数
function tsqkTabEventIsRequsetData(selecter) {
    if ($.trim($winActionType) != "") {
        if (selecter == "#fileMaker_ImagesAndFont") {
            var isHasData = $('#tsqkImagesAndFontInfo').bootstrapTable('getData');
            if (isHasData.length == 0) {
                tsqkTabChangeForLoadData(selecter)
            }
        } else if (selecter == "#fileMaker_Images") {
            var isHasImg = $.trim($('#fileMaker_Images').html());
            if (isHasImg == "") {
                tsqkTabChangeForLoadData(selecter)
            }
        }
    }
}
//重置 数据展示模块数据
function tsqkResetEmptyData(selecter) {
    if (selecter != "#libraryJournal_ImagesAndFont") {
        $('#tsqkImagesAndFontInfo').bootstrapTable('removeAll');
        $('#libraryJournal_ImagesAndFontCount').text('')
    } else if (selecter != "#libraryJournal_Images") {
        $('#libraryJournal_ImagesCount').text('')
        $("#libraryJournal_Images").html('');
    }
}

function tsqkTabChangeForLoadData(selecter) {
    tsqklibraryJournalPartial(selecter);
}
//定位触发当前展示数据模块tab 事件
function tsqklibraryJournalPartial(selecter) {
    if (selecter == "#libraryJournal_ImagesAndFont") {
        tsqk_ImagesAndFont();
    } else if (selecter == "#libraryJournal_Images") {
        tsqk_Images()
    }
}
//（请求）搜索或高级查询事件函数以及遮盖层
function tsqk_ImagesAndFont() {
    var url = tsqkUrlBy$winActionType();
    tsqkShowLayer();
    $('#tsqkImagesAndFontInfo').bootstrapTable('refresh', { 'url': url });
}
//（请求）tab切换事件触发  及默认辅助逻辑处理条件值
function tsqk_Images() {
    $('#libraryJournal_Images').html('');
    $('#tsqkoffsetImg').val('1');
    tsqkGetImgJsonData();
}
//滚动加载图片 是否触发请求数据源函数
function tsqkGetImgJsonData() {
    var total = $.trim($('#libraryJournal_ImagesCount').text()) == "" ? 0 : parseInt($.trim($('#libraryJournal_ImagesCount').text()));
    var count = $.trim($('#tsqkoffsetImg').val()) == "" ? 1 : parseInt($.trim($('#tsqkoffsetImg').val()));

    if ((count > total && total > 0 && count > 1) || (total < 16 && tsqkIsAllowRequest != -1)) {
        tsqkLoadingtsqkImageNoMore(total);
        $('#libraryJournal_Images').find('.tsqkLoadingtsqkImageNoMore:gt(0)').remove()
        return;
    }
    var params = {};
    var data = tsqkQueryParams(params, 'img');
    if (data.offsetImg == tsqkIsAllowRequest) return;
    tsqkIsAllowRequest = data.offsetImg;
    tsqkShowLayer();
    $.getJSON("/libraryJournal/GetImg", data, function (json) {
        tsqkHideLayer()
        if (json) {
            var c = json.total == 0 ? "" : json.total;
            $('#libraryJournal_ImagesCount').text(c);

            if (json.rows.length > 0) {
                var offsetValue = parseInt($('#tsqkoffsetImg').val()) + json.rows.length;
                $('#tsqkoffsetImg').val(offsetValue);
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
                $('#libraryJournal_Images').append(jsonHtml);
            }

        }
    });
}
//图文混编展示数据源Bootstrap表格插件
var tsqkTableInit = function () {
    var oTableInit = new Object();
    oTableInit.Init = function () {
        $('#tsqkImagesAndFontInfo').bootstrapTable({
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
            url: tsqkUrlBy$winActionType(),
            queryParamsType: 'limit',
            queryParams: oTableInit.getlibraryJournalCondition,
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
                field: 'MGQKID',
                title: '图书期刊基本信息列表', halign: 'center',

                formatter: "tsqkformatterHtml"
            },
            { field: 'JBZTM  ', title: 'JBZTM  ', visible: false },
            { field: 'JBCBND  ', title: 'JBCBND  ', visible: false },
            { field: 'JBCPGS  ', title: 'JBCPGS  ', visible: false },
            { field: 'JBTKND  ', title: 'JBTKND  ', visible: false },
            { field: 'JBDQ ', title: 'JBDQ ', visible: false },
            { field: 'PIC  ', title: 'PIC  ', visible: false },
            { field: 'JournalDto  ', title: 'JournalDto  ', visible: false },
            ],
            onLoadSuccess: function (data) {
                tsqkHideLayer();
                $common.collapseOrExpandBox(); 
                $('#tsqkImagesAndFontInfo').find("div.col-sm-2 > a")
                    .mouseover(function () {
                        var self = $(this);
                        self.removeClass('no-border-style-njq').addClass('border-style-njq');
                    })
                    .mouseout(function () {
                        var self = $(this);
                        self.removeClass('border-style-njq').addClass('no-border-style-njq');
                    });
                if (data) {
                    var count = data.total == 0 ? "0" : data.total
                    $('#libraryJournal_ImagesAndFontCount,#Statistics_box_LibraryJournal').text(count)
                }
            },
            onPageChange: function (number, size) {
                //tsqkShowLayer()
            }, onRefreshOptions: function (options) {
                //tsqkShowLayer()
            }


        });
    };
    oTableInit.getlibraryJournalCondition = function (params) {
        var p = tsqkQueryParams(params, 'all');
        return p;
    }
    return oTableInit;
};
//打开门户界面 不触发查事件 逻辑处理函数
function tsqkUrlBy$winActionType() {
    var url = "";
    if ($winActionType != "") url = "/libraryJournal/GetImgAndFont";
    return url;
}
//获取搜索或高级查询查询条件--》以便展示图文混编信息或图片
function tsqkQueryParams(params, imgOrAll) {
    if ($winActionType == "full") {
        params['text'] = $.trim($('#WAkw').val());
    } else if ($winActionType == "query") {
        params['tsqkqueryFields1'] = $.trim($('select[name=tsqkqueryFields1]').val());
        params['tsqkqueryFieldsCondions1'] = $.trim($('select[name=tsqkqueryFieldsCondions1]').val());
        params['tsqkqueryFieldsValues1'] = $.trim($('#tsqkqueryFieldsValues1').val());
        params['tsqkqueryFields2'] = $.trim($('select[name=tsqkqueryFields2]').val());
        params['tsqkqueryFieldsCondions2'] = $.trim($('select[name=tsqkqueryFieldsCondions2]').val());
        params['tsqkqueryFieldsValues2'] = $.trim($('#tsqkqueryFieldsValues2').val());
        params['tsqkqueryFields3'] = $.trim($('#tsqkqueryFields3').val());
        params['tsqkqueryFieldsCondions3'] = $.trim($('#tsqkqueryFieldsCondions3').val());
        params['tsqkqueryFieldsValues3'] = $.trim($('#tsqkqueryFieldsValues3').val());
        params['tsqksortField'] = $.trim($('select[name=tsqksortField]').val());
        params['tsqksortWay'] = $.trim($('select[name=tsqksortWay]').val());
        params['tsqkFieldCombine4'] = $.trim($('#tsqkFieldCombine4').val());
        params['tsqkFieldCombine2'] = $.trim($('#tsqkFieldCombine2').val());
    }
    params['type'] = $.trim($winActionType);
    if (imgOrAll == 'all') {
        params['offset'] = params.offset;
        params['limit'] = params.limit;
    } else if (imgOrAll == 'img') {
        params['offsetImg'] = $.trim($('#tsqkoffsetImg').val());
        params['limitImg'] = 16;
    }
    return params
}
//图书期刊图文混编信息展示处理函数
function tsqkformatterHtml(value, row) {
    var htmlJson = '';
    htmlJson += ' <div class="row">';
    htmlJson += '   <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">';
    htmlJson += '   <div class="col-sm-3 col-md-3 col-xs-3 col-lg-3 text-center">';

    var img = $common.getImgHttpPath(row.PIC, "/Cloud/img/noPicture.jpg")
    htmlJson += '     <img src="' + img + '" border="0" class="img-responsive" height="160" width="120" />';

    htmlJson += '   </div>';
    htmlJson += '  <div class="col-sm-9 col-md-9 col-xs-9 col-lg-9">';

    htmlJson += '  <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12" style="padding-left:1px;padding-right:1px">';
    htmlJson += '      <div class="form-group">';
    htmlJson += '          <label class="col-sm-3 control-label" style="padding-left:1px;padding-right:1px"><STRONG>题名：</STRONG></label>';
    htmlJson += '          <div class="col-sm-9 dyztm_text" style="padding-left:1px;padding-right:1px;">';
    htmlJson += '  <A style="text-decoration:none;">' + $common.isNullReturnEmpty(row.JBZTM) + '</A>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12" style="padding-left:1px;padding-right:1px;margin-top: 10px;">';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" style="padding-left:1px;padding-right:1px"><STRONG>出品公司：</STRONG></label>';
    htmlJson += ' <div class="col-sm-9 dyztm_text" style="padding-left:1px;padding-right:1px">';
    htmlJson += $common.isNullReturnEmpty(row.JBCPGS);
    htmlJson += '   </div>';
    htmlJson += '    </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12" style="padding-left:1px;padding-right:1px;margin-top: 10px;">';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" style="padding-left:1px;padding-right:1px"><STRONG>创办年代：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" style="padding-left:1px;padding-right:1px">';
    htmlJson += $common.isNullReturnEmpty(row.JBCBND);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12" style="padding-left:1px;padding-right:1px;margin-top: 10px;">';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" style="padding-left:1px;padding-right:1px"><STRONG>停刊年代：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" style="padding-left:1px;padding-right:1px">';
    htmlJson += $common.isNullReturnEmpty(row.JBTKND);
    htmlJson += '   </div>';
    htmlJson += '  </div>';
    htmlJson += '  </div>';
    htmlJson += '    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12" style="padding-left:1px;padding-right:1px;margin-top: 10px;">';
    htmlJson += '        <div class="form-group">';
    htmlJson += '            <label class="col-sm-3 control-label" style="padding-left:1px;padding-right:1px"><STRONG>出版地区：</STRONG></label>';
    htmlJson += '            <div class="col-sm-9 dyztm_text" style="padding-left:1px;padding-right:1px">';
    htmlJson += $common.isNullReturnEmpty(row.JBDQ);
    htmlJson += '   </div>';
    htmlJson += '   </div>';
    htmlJson += '   </div>';

    htmlJson += '  </div>';
    htmlJson += '  </div>';

    htmlJson += '    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12" style="margin-top:30px">';
    htmlJson += '<div class="box border " style="margin-left:15px;margin-right:15px">';
    htmlJson += '    <div class="box-title collapseAndExpandbox-title">';
    htmlJson += '        <h4><i class="fa fa-list"></i>查看期刊</h4>';
    htmlJson += '        <div class="tools">';
    htmlJson += '            <a href="javascript:;" class="reload hide" onclick="collapseAndExpand(this)"><i class="fa fa-refresh"></i> </a>';
    htmlJson += '            <a href="javascript:;" class="expand"><i class="fa fa-chevron-down"></i></a>';
    htmlJson += '</div>';
    htmlJson += '</div>';
    htmlJson += '    <div class="box-body" style="display:none">';
    htmlJson += '        <div class="row">';
    if (row.JournalDto && row.JournalDto.length) {
        row.JournalDto.forEach(function (i) {
            var urlJournal = "/LibraryJournal/index?Mgqkid=" + i.MGQKID + "&Nian=" + i.JT_NIAN + "&Juan=" + i.JT_JUAN + "&Qi=" + i.JT_QI;
            if ("年卷期" != i.pinjie && i.pinjie != null) {
                htmlJson += '  <div class="col-sm-2 col-md-2 col-xs-2 col-lg-2 center " style="height:25px;margin:5px;"><a class="no-border-style-njq" target="_blank" href="' +
                    urlJournal + '" >' + i.pinjie + '</a></div>';
            }
        });
    }
    htmlJson += '</div>';
    htmlJson += '</div>';
    htmlJson += '</div>';
    htmlJson += '</div>';
    htmlJson += ' </div>';
    return htmlJson;
}
//所有图片滚动加载完成 提示信息
function tsqkLoadingtsqkImageNoMore(t) {
    var str = "没有更多了！", jsonHtml = '';
    if (t == 0) str = "暂无图片信息！"; 
    jsonHtml += '<div class="col-md-12 tsqkLoadingtsqkImageNoMore">';
    jsonHtml += '<div class="filter-content dyimg-holder center">';
    jsonHtml += '<p style="height:20px;width:100%;font-size:1.6em;color:red">' + str +'</p>';
    jsonHtml += '</div>';
    jsonHtml += '</div>';
    $('#libraryJournal_Images').append(jsonHtml);
}
//高级查询 条件关系处理  以便拼接Sql条件
function tsqkChangeFieldCombine() {
    $("#tsqkFieldCombine1").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#tsqkFieldCombine2").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#tsqkFieldCombine2").val("AND");
        }
    });
    $("#tsqkFieldCombine3").click(function () {
        var str = $(this).val();
        if (str == "且") {
            $(this).val("或");
            $("#tsqkFieldCombine4").val("OR");
        } else if (str == "或") {
            $(this).val("且");
            $("#tsqkFieldCombine4").val("AND");
        }
    });
    var tsqk = new tsqkTableInit();
    tsqk.Init();
}
//高级查询面板工具栏的刷新按钮事件函数
function tsqkReloadAndResetCurrent(e) {
    tsqkResetConditions();
    reloadCurrent(e);
}
//重置 高级查询条件
function tsqkResetConditions() {

    $('select[name=tsqkqueryFields1]').val('');
    $('select[name=tsqkqueryFieldsCondions1]').val('');
    $('input[name=tsqkqueryFieldsValues1]').val('');

    $('select[name=tsqkqueryFields2]').val('');
    $('select[name=tsqkqueryFieldsCondions2]').val('');
    $('input[name=tsqkqueryFieldsValues2]').val('');

    $('select[name=tsqkqueryFields3]').val('');
    $('select[name=tsqkqueryFieldsCondions3]').val('');
    $('input[name=tsqkqueryFieldsValues3]').val('');

    $('select[name=tsqksortField]').val('JB_ZTM');
    $('select[name=tsqksortWay]').val('asc');
    $('#tsqkFieldCombine1,#tsqkFieldCombine3').val('且');
    $('#tsqkFieldCombine2,#tsqkFieldCombine4').val('AND');
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function tsqkShowLayer() {
    reloadCurrentLayerShow($('#tsqk_panel_load_data'))
}
//遮盖层  相对于展示数据源.tool 刷新工具事件
function tsqkHideLayer() {
    reloadCurrentLayerHide($('#tsqk_panel_load_data'));
}
//图片展示区域添加滚动条 -》滚动加载图片
function tsqkImgResetScroll() {
    $("#libraryJournal_Images").niceScroll({
        cursorborder: "",
        cursorcolor: "#ccc",
        boxzoom: false,
        autohidemode: true
    });
}
//浏览器窗口大小变化触发 重置 滚动条
$(window).resize(function () { tsqkImgResetScroll() });