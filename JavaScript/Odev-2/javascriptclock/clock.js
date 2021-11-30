function askName(){ // function to ask the name of the user
    var name = prompt("Lütfen Adınızı Giriniz");
    document.getElementById("myName").innerText=name; 
}
function showTime() { // function to show the time in the clock 
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = date.getDay(); 
  
    if (session == 1) { 
      session = "Pazartesi";
    } else if (session == 2) {
      session = "Salı";
    } else if (session == 3) {
      session = "Çarşamba";
    } else if (session == 4) {
      session = "Perşembe";
    } else if (session == 5) {
      session = "Cuma";
    } else if (session == 6) {
      session = "Cumartesi";
    } else if (session == 7) {
      session = "Pazar";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + session; // time format
    document.getElementById("myClock").innerText = time; // show the time in the clock
    document.getElementById("myClock").textContent = time; // show the time in the clock
  
    setTimeout(showTime, 1000); // function to show the time in the clock
  }
  
  askName();  
  showTime(); 