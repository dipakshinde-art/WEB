document.querySelector("form").addEventListener("submit", dispalyList);

function dispalyList() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var qunt = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;

  //console.log(name, qunt, priority)
  //document.querySelector("th").innerText=name;

  //on submittiion table row increse and add value

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = name;

  var td2 = document.createElement("td");
  td2.innerText = qunt;

  var td3 = document.createElement("td");
  td3.innerText = priority;

  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
  document.querySelector("#name").value=""
  document.querySelector("#qty").value=""
  document.querySelector("#priority").value=""

}
