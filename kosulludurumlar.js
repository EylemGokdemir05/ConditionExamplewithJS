if(true && true){
    console.log('dogru');
}else{
    console.log('yanlis');
}

console.log(true && true ? 'Dogru' : 'Yanlis'); //true-true ise doğru, değilse yanlış

if(havaYagmurluMu && evdeSemsiyeVarMi){
    semsiyeyiAl
    arabaVarMi ? arabaylaIseGit : yuruyerekIseGit
}else if(havaYagmurluMu && !evdeSemsiyeVarMi){
    iseGitme
}else{
    arabaVarMi ? arabaylaIseGit : yuruyerekIseGit
}

var havaDurumu='yagmurlu';
var evdeSemsiyeVar=true;
var arabaVar=true;

if(havaDurumu=='yagmurlu'){
    if(evdeSemsiyeVar){
        console.log('Şemsiyeyi al');
        if(arabaVar){
            console.log('Arabayla işe git');
        }
        else{
            console.log('Yürüyerek işe git');
        }
    }
    else{
        console.log('İşe gitme');
    }
}
else{
    if(arabaVar){
        console.log('Arabayla işe git');
    }
    else{
        console.log('Yürüyerek işe git');
    }
}