
document.querySelector("form").addEventListener("submit", display);


function display() {

    event.preventDefault();
  var Catname = document.querySelector("#category").value;
  var prodname = document.querySelector("#name").value;
  var price = document.querySelector("#price").value;

  //console.log(Catname + " " + prodname + " " + price)

//create tr
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = Catname ;

  var td2 = document.createElement("td");
  td2.innerText = prodname;

  var td3 = document.createElement("td");
  td3.innerText = price;

  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr); //attche to table body
  document.querySelector("#category").value=""; //make value "" after 1 submit
  document.querySelector("#name").value=""
  document.querySelector("#price").value=""
}
