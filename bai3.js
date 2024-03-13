function thongbao(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    
    
    confirm(
    "Họ và tên: " + name + "\n" +
    "E-mail: " + email + "\n"+
    "Tiêu đề: " + title + "\n"+
    "Nội dung góp ý:" +  "\n" + content);
}