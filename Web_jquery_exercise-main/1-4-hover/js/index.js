// $('#Item1').mouseover(function(){
//     alert('滑入');
// });

// $('#Item1').mouseout(function(){
//     alert('滑');
// });

// $('#Item1').mouseover(function(){
//     $('#Child1').slideDown();
// });

// $('#Item1').mouseout(function(){
//     $('#Child1').slideUp();
// });
$('#Item1').hover(function(){
    $('#Child1').stop(true,false).slideDown();
}, function(){
    $('#Child1').stop(true,false).slideUp();
})


$('#Item2').hover(function(){
    $('#Child2').stop(true,false).slideDown();
}, function(){
    $('#Child2').slideUp();
})


$('#Item3').hover(function(){
    $('#Child3').stop(true,false).slideDown();
}, function(){
    $('#Child3').slideUp();
})
