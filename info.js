let name=sessionStorage.getItem("name");
let points=sessionStorage.getItem("points");
let times=sessionStorage.getItem("time");

document.querySelector(".Name").innerHTML=name;
document.querySelector(".points").innerHTML=points;
document.querySelector(".Time").innerHTML=times;
