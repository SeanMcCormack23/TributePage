const timeArea = document.getElementById("timeArea");

function getDateAndTime(){
  timeArea.innerHTML = "";
  let res = new Date();
  // console.log(res);
  timeArea.append(res);
}
