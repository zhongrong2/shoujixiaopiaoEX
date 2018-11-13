$(function () {
    $(".button").click(function () {
        var Fromdata = $("#form").serialize();
        $.ajax({
            url:'',
            type:'post',
            data:'Fromdata',
            success:function (data) {
                $.myToast("登录成功");
                setTimeout(function () {
                    window.location.href="receipt.html";
                }, 1000);
            },
            error:function () {
                $.myToast("登录失败");
            }
        })
    })
})