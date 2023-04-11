let index = 0;
let picIntercal;
const $slide =$('#Slide');
const $slideImgInner =$slide.find('.img-inner')
const $paginationItems = $slide.find('.pagination-item')
const duration = 1000;

function setInterval(){
    // if( index < 4){
    //     index += 1;
    // } else{
    //     index = 0;
    // }
    index =index < 4 ?index += 1 : 0;
    $slideImgInner.css('left', `${-index * 100}%`)
    $paginationItems
    .eq(index.addClass('js-pagintion-item'))
    .siblings().removeClass('js-pagination-item')
}
//init
picIntercal =setInterval(setSlide , duration);
$paginationItems.eq(index).addClass('js-pagination-item')


//event

$slide.hover(function(){
    clearInterval(picInterval);
},function(){
picIntercal = setInterval(setSlide , duration)
})
$paginationItems.click(function(){
    index =$(this).index();
    $slideImgInner.css('left',-index * 100 +'%');
    $paginationItems
    .eq(index).addClass(;)
})