//bài 1
let el_button=document.getElementById("play");
el_button.onclick=function(){
    let el_luong=100000;
    let el_day=+document.getElementById("work_Day").value;
    let el_calc= el_luong * el_day;
    document.getElementById("result-wrapper").style.display="block";
    document.getElementById("result").innerHTML="$" + el_calc;
}



//Bài 2
let ul_button=document.getElementById("click");
ul_button.onclick=function(){
    let ul_number1=+document.getElementById("number_1").value;
    let ul_number2=+document.getElementById("number_2").value;
    let ul_number3=+document.getElementById("number_3").value;
    let ul_number4=+document.getElementById("number_4").value;
    let ul_number5=+document.getElementById("number_5").value;
    let ul_tbc= (ul_number1 + ul_number2 + ul_number3 + ul_number4 + ul_number5)/5;

    document.getElementById("w-result").style.display="block";
    document.getElementById("ketqua").innerHTML="kết quả là: "+ ul_tbc;
}




//bài 3
let el_btn=document.getElementById("played");
el_btn.onclick=function(){
    let el_USD=23500;
    let el_Number=+document.getElementById("USD").value;
    let el_change= el_USD*el_Number;
    document.getElementById("result-w").style.display="block";
    document.getElementById("result_1").innerHTML="$" + el_change;
}


//bài 4
let ul_btn=document.getElementById("click-in");
ul_btn.onclick=function(){
    let ul_width=+document.getElementById("width").value;
    let ul_height=+document.getElementById("height").value;
    let ul_dientich= ul_width*ul_height;
    let ul_chuvi= (ul_width+ul_height)/2; 
    document.getElementById("wr-result").style.display="block";
    document.getElementById("sChunhat").innerHTML="diện tích hình chữ nhật =" + ul_dientich;
    document.getElementById("chuvi").innerHTML="Chu vi hình chữ nhật =" + ul_chuvi;
}


//bài 5
let wl_button=document.getElementById("play-in");
wl_button.onclick=function(){
    let wl_Number=+document.getElementById("Number").value;
    let wl_lastNumber= wl_Number%10;
    let wl_firstNumber=(Math.floor)(wl_Number/10)%10;
    let tong= wl_lastNumber + wl_firstNumber;
    document.getElementById("result-wra").style.display="block";
    document.getElementById("result-in").innerHTML="tổng 2 chữ số =" +tong;
}