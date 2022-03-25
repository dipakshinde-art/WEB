// write code here, dont change anything in HTML and css files
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", display);

function display() {
  event.preventDefault();

  var img_tex = document.querySelector("#image");
  //img_tex.setAttribute("src", "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png")

  var S_name = document.querySelector("#name").value;
  var S_batch = document.querySelector("#batch").value;
  var dsa_marks = document.querySelector("#dsa").value;
  var skill = document.querySelector("#cs").value;
  var code = document.querySelector("#coding").value;

  // console.log(img_tex,skill,S_name,S_batch,dsa_marks)

  var TR = document.createElement("tr");
  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png"
  );
  var img_tex = (document.querySelector("#image").value = img);

  var TD1 = document.createElement("td");
  TD1.innerText = img_tex;

  var TD2 = document.createElement("td");
  TD2.innerText = S_name;

  var TD3 = document.createElement("td");
  TD3.innerText = S_batch;

  var TD4 = document.createElement("td");
  TD4.innerText = dsa_marks;

  var TD5 = document.createElement("td");
  TD5.innerText = skill;

  var TD6 = document.createElement("td");
  TD6.innerText = code;

  //TR.append(TD1, TD2, TD3, TD4, TD5, TD6);
  // document.querySelector("tbody").append(TR);

  //%
  var TD7 = document.createElement("td");
  var sum = ((Number(dsa_marks) + Number(skill) + Number(code)) / 30) * 100;
  TD7.innerText = sum;

  //staus
  var TD8 = document.createElement("td");
  if (sum > 50) {
    TD8.innerText = "Regular";
    TD8.style.backgroundColor = "green";
  } else {
    TD8.innerText = "Async";
    TD8.style.backgroundColor = "red";
  }
  
  TR.append(img_tex, TD2, TD3, TD4, TD5, TD6, TD7, TD8);
  document.querySelector("tbody").append(TR);
  
  document.querySelector("#image").value=""
  document.querySelector("#name").value = "";
  document.querySelector("#batch").value = "";
  document.querySelector("#dsa").value = "";
  document.querySelector("#cs").value = "";
  document.querySelector("#coding").value = "";
}
