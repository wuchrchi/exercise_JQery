// let fileNum = 1;

//初始化 注入影像
// $('#Pic').attr('src','./images/ui03.jpg')
//                    ./images/ui0      1       .jpg
// $('#Pic').attr('src','./images/ui0' + fileNum +'.jpg') 

// $('#Pic').attr('src',`./images/ui0${fileNum}.jpg`)


// $('#Pic').hover(function(){
    // fileNum++;
    
    // fileNum = fileNum + 1;
    // $('#Pic').attr('src',`./images/ui0${fileNum}.jpg`)

    // if(fileNum < 4){
        // fileNum += 1;
    // } else {
        // fileNum = 1;
    // }

    // console.log(fileNum);
    // alert(fileNum);
// })


let fileNum = 1;
document.getElementById('Pic').setAttribute('src', `./images/ui0${fileNum}.jpg`);

document.getElementById('Pic').addEventListener('click', fuction(){
    if(fileNum < 4)
})