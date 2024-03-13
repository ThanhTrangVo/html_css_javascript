function tinhtoan(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var select = document.getElementById("select").selectedIndex;
    var result = parseFloat(a)/(parseFloat(b)*parseFloat(b));
    var formattedResult = parseFloat(result).toFixed(2);
    ////
    var rank;
    if (formattedResult >= 40){
        rank = "Béo phì cấp độ III";
    }
    else if (formattedResult >= 35){
        rank = "Béo phì cấp độ II";
    }
    else if (formattedResult >= 30){
        rank = "Béo phì cấp độ I";
    }
    else if (formattedResult >= 25){
        rank = "Thừa cân";
    }
    else if (formattedResult >= 18.5){
        rank = "Bình thường";
    }
    else{
        rank = "Dưới chuẩn";
    }
    ///
    
    var advice;
    switch(select){
        case 0:
            advice = "Khám định kỳ";
            break;
        case 1:
            advice = "Tập thể dục thường xuyên";
            break;
        case 2:
            advice = "Hạn chế ăn mỡ động vật";
            break;    
    }
    
    
    
    
    
    
    
    document.getElementById("one").innerHTML = formattedResult ;
    document.getElementById("two").innerHTML =  rank;
    document.getElementById("three").innerHTML =  advice;


}