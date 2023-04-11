let index = 0;
let picInterval;
const $slide = $('#Slide')
const $slideImgInner = $slide.find('.img-inner');

// index:0-> 第一張, left:0
// index:1-> 第二張, left:-100%
// index:2-> 第三張, left:-200%
// index:3-> 第四張, left:-300%
// index:4-> 第五張, left:-400%


picInterval = setInterval(function () {
//    if(index < 4){
//     index +=1 ;
//    }else{
//     index = 0 ;
//    }
   
index += 1;
if (index >4){
    index = 0;
}

    // console .log(index)
    $slideImgInner.css('left' ,`${-index * 100}%`)
    
}, 1000);

picInterval =setInterval(setSlide, duration);

$slide.hover(function(){
    clearInterval(picInterval);
} , function(){
    picInterval = setInterval(setSlide, duration) 
        
})