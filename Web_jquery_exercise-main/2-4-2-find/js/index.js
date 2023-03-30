// $('#Navils > li').hover(function(){
//     $(this).find('ul').slideDown();
// }, function(){
//     $(this).find('ul').slideUP();
// });

const $naviItems =$('#NaviLs >li');

$naviItems.hover(function(){
    $(this).find('ul').slideDown()
}, function(){
        $(this).find('ul').slideUp();
})
