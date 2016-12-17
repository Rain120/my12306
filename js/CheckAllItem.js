//复选框onclick事件：点击全选，再次点击全不选
function CheckItem() {
	//添加外部判断：奇数点击时value为1，全不选，否则全选，如此可以在反选与全选间衍生出极端选择的方案
	var checkbox = document.getElementById("allChecked");
	//value初始化为1，此处的三目执行后value一定不为1，而页面初始化时checkbox都为未选中状态，所以value为1时全不选
	checkbox.value == "checkAllItem" ? checkbox.value = "checkItem" : checkbox.value = "checkAllItem";
	var checkboxs = document.getElementsByName("checkItem");
	for(var i = 0; i < checkboxs.length; i++) {
		//************
		if(checkbox.value == "checkAllItem") {
			checkboxs[i].checked = true; //全选
		} else {
			checkboxs[i].checked = false; //全不选
		}
		//checkboxs[i].checked?checkboxs[i].checked=false:checkboxs[i].checked=true;//反选
	}
}
//function CheckOrCancel(){
//	var selectState = false;
//	var allCheckBoxs = document.getElementsByName("checkItem");
//	var desc = document.getElementById("allChecked");
//	for(var i = 0;i < allCheckBoxs.length;i++){
//		if (allCheckBoxs[i].checked){
//			selectState = true;
//			break;
//		}
//	}
//	if(desc){
//		CheckAllItem(allCheckBoxs);
//	}else{
//		CancelAllItem(allCheckBoxs);
//	}
//}
//function CheckAllItem(allCheckBoxs){
//	var selectState = true;
////  var input = document.getElementsByTagName("input");
//  for (var i = 0;i < allCheckBoxs.length;i++ ){
//      if(allCheckBoxs[i].type == "checkbox"){
//          allCheckBoxs[i].checked = selectState;
//      }
//  }
//}
//function CancelAllItem(allCheckBoxs){
//	var selectState = false;
////  var input = document.getElementsByTagName("input");
//  for (var i = 0;i < allCheckBoxs.length;i++ )
//  {
//      if(allCheckBoxs[i].type == "checkbox")
//          allCheckBoxs[i].checked = selectState;
//  }
//}
//function _allUnchecked(allCheckBoxs) {
//	for(var i = 0; i < allCheckBoxs.length; i++) {
//		allCheckBoxs[i].checked = false;
//	}
//}
//function AllCheck(thisform)
//{
//  for (var i = 0; i < thisform.elements.length; i++)
//  {
//    // 提取控件  
//    var checkbox = thisform.elements[i];
//    checkbox.checked = !selectState;
//  }
//  selectState = !selectState;
//}
//
//// 反选
//function ChangeCheck(thisform)
//{
//  // 遍历 form  
//  for (var i = 0; i < thisform.elements.length; i++)
//  {
//    // 提取控件  
//    var checkbox = thisform.elements[i];
//    // 检查是否是指定的控件  
//    if (checkbox.name === "groupCheckbox" && checkbox.type === "checkbox" && checkbox.checked === false)
//    {
//      // 正选  
//      checkbox.checked = true;
//    }
//    else if (checkbox.name === "groupCheckbox" && checkbox.type === "checkbox" && checkbox.checked === true)
//    {
//      // 反选  
//      checkbox.checked = false;
//    }
//  }
//}