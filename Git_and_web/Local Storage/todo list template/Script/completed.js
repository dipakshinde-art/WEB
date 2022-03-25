var cartData = JSON.parse(localStorage.getItem("Addtocart")); 
//after click button
console.log(cartData);

cartData.map(function(element)
{

    //body of table
var tr = document.createElement("tr"); //cretae table element

var td1 = document.createElement("td"); //row and append each value 
td1.innerText = element.itemName;

var td2 = document.createElement("td");
td2.innerText = element.itemQty;

var td3 = document.createElement("td");
td3.innerText = element.itemPrior;

tr.append(td1, td2, td3);
document.querySelector("tbody").append(tr);
})
