//call json data in to obj form
var todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);

var AddToCart; //array of cart
if (localStorage.getItem("Addtocart") == null) {
  AddToCart = [];
} else {
  AddToCart = JSON.parse(localStorage.getItem("Addtocart"));
}

//trverse in object
todoItems.map(function (element) {
  var tr = document.createElement("tr"); //cretae table element

  var td1 = document.createElement("td"); //row and append each value
  td1.innerText = element.itemName;

  var td2 = document.createElement("td");
  td2.innerText = element.itemQty;

  var td3 = document.createElement("td");
  td3.innerText = element.itemPrior;

  var td4 = document.createElement("td");
  var button = document.createElement("button");
  button.innerText = "Mark As completed ";
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.borderRadius = "10px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.padding = "10px 10px";
  //console.log(td4)
  td4.append(button);

  tr.append(td1, td2, td3, td4);
  document.querySelector("tbody").append(tr);

  //buttons to pass data to completed
  td4.addEventListener("click", function () {
      addToCart(element); //annynomous function
    });

});

//innvoke
function addToCart(element, index) {
 // console.log(element);
  AddToCart.push(element);
  localStorage.setItem("Addtocart", JSON.stringify(AddToCart));

  
  // console.log(todoItems.findIndex(element));
  //todoItems.splice(element.valueOf(index))

}
