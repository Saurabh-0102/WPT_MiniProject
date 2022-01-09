async function weather() {
    let city = document.querySelector("#city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c303cf6a4b5523f432fbec616070ab15`;
    let repon = await fetch(url);
    let res = await repon.json();
    let parent = document.querySelector("#we");
    let child = parent.innerHTML;
    let newchild = res.main.temp;
    parent.innerHTML = `${city} ` + newchild + "°c";
    document.querySelector("#city").value = "";
  }