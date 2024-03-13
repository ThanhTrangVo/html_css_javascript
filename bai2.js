function thongbao(){
    var name = document.getElementById("name").value;
    var cardid = document.getElementById("card-id").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var clienttype = document.querySelector("#client-type").value;
    var billid = document.getElementById("bill-id").value;
    var cmt = document.getElementById("cmt").value;
    
    
    

    confirm(
    "Họ và tên: " + name +  "\n"
    + "Mã thẻ:" + cardid  +  "\n"
    + "Số điện thoại: " + phone +  "\n"
    + "Email: " +email +  "\n"
    + "Loại KH:" + clienttype +  "\n"
    + "Mã HĐ:" + billid + "\n"
    + "Nội dung góp ý" +  "\n"
    + cmt

        
    )
}