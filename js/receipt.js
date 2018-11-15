// 点击清空输入会员
$("#mem-icon").click(function () {
    $("#memTxt").val("");
})


// 取消电子会员光标
$("#memTxt").focus(function(){
    document.activeElement.blur();
});
// 取消手机光标
$("#Tele").focus(function(){
    document.activeElement.blur();
});
// 点击清空手机号
$("#tel-icon").click(function () {
    $("#Tele").val("");
})




// 点击出现手机号键盘
$("#Tele").click(function (e) {
    $('.layer-content').animate({
        bottom: '20px'
    }, 200)
    e.stopPropagation();
    $('.layer-content1').animate({
        bottom: '-200px'
    }, 200)
    $(".layer-content1").css("display","none");
    $(".layer-content2").css("display","none");
    $(".layer-content").css("display","block");
})
// 点击取消手机号键盘
$('#content').click(function(){
    $('.layer-content').animate({
        bottom: '-200px'
    }, 200)
    $(".layer-content").css("display","none");
})

// 点击输入手机号
$('.form_edit .num').click(function(){
    var telephone = $("#Tele").val();
    var tel= telephone + $(this).text();

    if(telephone.length==0 && ($(this).text()=='0')||$(this).text()=='.'){
        return
    }
    if(telephone.length>=11){
        return
    }
    else{
        $("#Tele").val(tel);
    }
})
// 删除取消手机号输入值
$('#removeTele').click(function(){
    var oDivHtml = $("#Tele").val();
    $("#Tele").val(oDivHtml.substring(0,oDivHtml.length-1));
})



// 点击出现金额键盘
$("#monTxt").click(function (e) {
    $('.layer-content1').animate({
        bottom: '20px'
    }, 200)
    e.stopPropagation();
    $(".layer-content").css("display","none");
    $(".layer-content2").css("display","none");
    $(".layer-content1").css("display","block");
})
// 点击取消金额键盘
$('#content').click(function(){
    $('.layer-content1').animate({
        bottom: '-200px'
    }, 200)
    $(".layer-content1").css("display","none");
})

// 键盘输入金额值
$('.form_edit1 .num').click(function(){
    var monTxt = $("#monTxt");
    var currentText = monTxt.text();
    //console.log(oDiv);

    if($(this).hasClass('num2')) {
        monTxt.text($(this).text());
        return;
    }

    if(currentText.length == 0 && ($(this).text() == '00' || $(this).text() == '0' || $(this).text() == '.')) {
        $.myToast("金额过小");
        return;
    }
    if(currentText.length == 1 && currentText == '0' && $(this).text() != '.') {
        if($(this).text() != '00') {
            monTxt.text($(this).text());
        }
        return;
    }

    var temp= currentText + $(this).text();
    if(temp.length>5){
        $.myToast("金额过大");
    }
    else{
        monTxt.text(temp);
    }
})

// 删除取消金额输入值
$('#remove').click(function(){
    var oDiv = document.getElementById("monTxt");
    var oDivHtml = oDiv.innerHTML;
    oDiv.innerHTML = oDivHtml.substring(0,oDivHtml.length-1);
})



// 点击出现编号
$("#numTxt").click(function (e) {
    $('.layer-content2').animate({
        bottom: '20px'
    }, 200)
    e.stopPropagation();
    $(".layer-content").css("display","none");
    $(".layer-content1").css("display","none");
    $(".layer-content2").css("display","block");
})
// 点击取消编号
$('#content').click(function(){
    $('.layer-content2').animate({
        bottom: '-200px'
    }, 200)
    $(".layer-content2").css("display","none");
})

// 点击输入编号
$('.form_edit2 .num').click(function(){
    var numTxt = $("#numTxt");

    numTxt.text($(this).text());
})


// 粘贴文本
//接收android传递的数据，并显示在html上
function AndroidToWeb(scan){
    $("#memTxt"). val(scan);
}




// 跳转小票页面
{
    var note = $(".payClass-item");
    console.log(note);
    note.on("click",function (e) {

            var memTxt=$("#memTxt").val();
            var tel=$("#Tele").val();
            var monTxt=$("#monTxt").text();
            var numTxt=$("#numTxt").text();
            var payClass=$(this).find("h4").eq(0).text();


            // 判断不为空
            if(memTxt==""&&tel==""){
                $.myToast("请输入手机号或电子会员卡号");
                return;
            }
            else{
                if(tel!=""&&tel.length!=11){
                    $.myToast("请输入正确手机号");
                    return;
                }
                else{
                    if(monTxt==""){
                        $.myToast("请选择金额");
                        return;
                    }
                    else{
                        if(numTxt==""){
                            $.myToast("请选择油枪");
                            return;
                        }
                    }
                }
            }

            var datas=[memTxt,tel,monTxt,numTxt,payClass];
            console.log(datas);
            $.ajax({
                url:"qqq",
                method:"post",
                data:"datas",
                dataType:"json",
                success:function () {
                    window.location.href="noteRece.html";
                }
            });
            window.location.href="noteRece.html";
    })
}
