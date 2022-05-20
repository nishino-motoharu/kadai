//初期状態
var result = "";
window.onload = function(){
    result = document.getElementById('display');
};
//=判断
var is_calc = false;
//カウント変数
var n = 0;
//Cボタンクリック時
function C(){
    result.value = "0";
    is_calc = false;
};
//CEクリック時
function CE(){
    result.value = result.value.slice(0,-1);
    is_calc = false;
};
//オリジナル機能（計算回数）
function CO(){
    result.value = n;
};
//数字クリック時
function num(val){
    if(is_calc) result.value = "0";
    is_calc = false;

    if(result.value =="0" && val =="0"){
        result.value = "0";
    }else if(result.value == "0"){
        result.value = val;
    }else{
        result.value += val;
    }
};
//演算子クリック時
function ope(val){
    n = n + 1;
    if(is_calc) is_calc = false;
    if(ope_last()){
        result.value =result.value.slice(0,-1) + val;
    }else{
        result.value += val;
    }
};
//=クリック時
function equal(){
    if(ope_last()) result.value = result.value.slice(0,-1);

    var temp = new Function("return " + result.value.replaceAll("x","*").replaceAll("÷","/"))();
    
    if(temp == Infinity || Number.isNaN(temp)){
        result.value = "Error";
    }else{
        result.value = temp;
        is_calc = true;
    }
};

//クリックされた値が演算子か判断
function ope_last(){
    return["+","-","x","÷"].includes(result.value.toString().slice(-1));
};