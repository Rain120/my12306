//$('#openUserMangage').href("userManage.html");
function show(){
		var userManage = window.open();
		userManage.document.open();
		userManage.document.write(document.getElementById("openUserMangage").innerHTML);
		userManage.document.close();
}