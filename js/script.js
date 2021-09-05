document.getElementById("button").addEventListener('click', goTo);

document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    goTo();
  }
});

function goTo() {
  let str = document.getElementById("input").value;
  let a = str.split(' ');
  a.forEach((el) => window.open(el));
}

//addEventListener('click', goTo)