$('#Btn1').click(function(){
    $('#Pic').slideUp(1000)
})
// 上捲slideUp 當地二個指令要輸入 需大寫
$('#Btn2').click(function(){
    $('#Pic').slideDown(1000)
})
// toggle是捲動
$('#Btn3').click(function(){
    $('#Pic').slideToggle()
})