document.getElementById("button").addEventListener('click', goTo);

function goTo() {
  let str = document.getElementById("input").value;
  let a = str.split(' ');
  a.forEach((el) => window.open(el));
}

//addEventListener('click', goTo)