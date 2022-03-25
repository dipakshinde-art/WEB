document.querySelector("#form").addEventListener("submit", myFunction);

//refresh then array becone empty cause outside need to get prev value
//var todoList = JSON.parse(localStorage.getItem("todoData")); 
var todoList;
if(localStorage.getItem("todoData")==null){
  todoList=[]
}else{
   todoList = JSON.parse(localStorage.getItem("todoData")); 
}

function myFunction() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var prior = document.querySelector("#priority").value;

  var todoObj = {
    itemName: name,
    itemQty: quantity,
    itemPrior: prior,
  };
  
  //console.log(todoObj);
  todoList.push(todoObj);
  console.log(todoList);
 
  localStorage.setItem("todoData", JSON.stringify(todoList));
  name = document.querySelector("#name").value=""
  document.querySelector("#qty").value=""
  //bug:
  //refresh then array become empty cause outside so gives last  present val
  // null bug - no data its show null val put if else
}
