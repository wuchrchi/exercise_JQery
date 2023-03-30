let fileNum = 1;
const $pic= $('#Pic');
function todo(){
    if (fileNum <5 ){
        fileNum += 1;
    } else {
        fileNum = 1;
    }

    $('#Pic').attr('src',`./images/photo${fileNum}.jpg`)
}

setInterval(todo,2000)