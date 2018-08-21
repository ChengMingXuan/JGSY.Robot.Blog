
//菜单栏切换
function tabPartial(defaultUrl) {
    if ($.trim(defaultUrl) != "" && defaultUrl.indexOf('/') != -1) {
        var list = $('#RobotLeftNode').find('li');
        if (list.length > 0) {
            $.each(list, function (i, n) {
                if ($(n).attr('disabled') != "disabled") {
                    $(n).on('click', function () {
                        $(this).addClass('active').siblings().removeClass('active');
                        var action = $(this).attr('action')
                        var url = defaultUrl.replace('action', action);
                        $("#RobotRightNode").load(url);
                    });
                } else {
                    $(n).css({ "cursor":"not-allowed"});
                }

            });
        }
    }
}
