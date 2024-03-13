
function TinhToan(){
var a = parseInt(document.getElementById("a").value);
var b = parseInt(document.getElementById("b").value);
var result = ( - b) / a;
//làm tròn kết quả 
var formattedResult = result.toFixed(3);
document.getElementById("result").innerHTML = "Nghiệm x= " + formattedResult;
}