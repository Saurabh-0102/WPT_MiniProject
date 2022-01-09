function tweet() {
  let date = new Date();
  let res = date.getTime();
  let fin = new Date(res);
  let input = document.querySelector("#input").value;

  parent = document.querySelector("#parent");
  child = parent.innerHTML;
  console.log(child);

  newchild = `<div class="col-3"></div>
    <div class="col-6 alert alert-info">
        <div>${input}</div>
        <div class="col d-flex gap-3 mt-1 w-100">
            <div>
                <span style ="cursor : pointer" onclick="inc(this)">&#128077</span>
                <span>0</span>
            </div>
            <div>
                <span style ="cursor : pointer" onclick="dec(this)">&#128078</span>
                <span>0</span>
            </div>
        </div>
        <div class="col d-flex">
                    <div class="col">${fin}</div>
                </div>
        
    </div>
    <div class="col-3"></div>`;

  parent.innerHTML = newchild + child;

  document.querySelector("#input").value = "";
}

function inc(par) {
  parent = par.parentElement.children[1];
  prev = parent.innerHTML;

  newval = parseInt(prev) + 1;

  parent.innerHTML = newval;
  console.log(parent);
}
function dec(par) {
  parent = par.parentElement.children[1];
  prev = parent.innerHTML;

  newval = parseInt(prev) + 1;

  parent.innerHTML = newval;
  console.log(parent);
}

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
