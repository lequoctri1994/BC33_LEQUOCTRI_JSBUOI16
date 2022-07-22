function ex1() {
  var i = 0;
  var total = 0;
  do {
    i++;
    total += i;
  } while (total < 10000);
  document.getElementById("result1").innerHTML =
    "số nguyên dương nhỏ nhất là :" + i;
}

function ex2() {
  var numberX = document.getElementById("numberX").value * 1;
  var numberN = document.getElementById("numberN").value * 1;
  var S = 0;
  var n = 0;

  do {
    n++;
    S += Math.pow(numberX, n);
  } while (n < numberN);

  document.getElementById("result2").innerHTML = S;
}

function ex3() {
  var number = document.getElementById("number").value * 1;
  var n = 1;
  var factorial = 1;
  do {
    n++;
    factorial = n * factorial;
  } while (n < number);

  document.getElementById("result3").innerHTML = factorial;
}

function ex4() {
    var even = "Div chẳn";
    var odd = "Div lẻ";
    var contentDiv = "";
    for (var i = 1; i <= 10; i++) {
      contentDiv = i;
      if (i % 2 === 0 && i == 2) {
        contentDiv = even + " " + i;
        console.log(contentDiv);
        document.getElementById("even").innerHTML = contentDiv;
        document.getElementById("even").style.backgroundColor = "blue";
      } else if (i % 2 === 0 && i == 4) {
        contentDiv = even + " " + i;
        console.log(contentDiv);
        document.getElementById("even1").innerHTML = contentDiv;
        document.getElementById("even1").style.backgroundColor = "blue";
      } else if (i % 2 === 0 && i == 6) {
        contentDiv = even + " " + i;
        console.log(contentDiv);
        document.getElementById("even2").innerHTML = contentDiv;
        document.getElementById("even2").style.backgroundColor = "blue";
      } else if (i % 2 === 0 && i == 8) {
        contentDiv = even + " " + i;
        console.log(contentDiv);
        document.getElementById("even3").innerHTML = contentDiv;
        document.getElementById("even3").style.backgroundColor = "blue";
      } else if (i % 2 === 0 && i == 10) {
        contentDiv = even + " " + i;
        console.log(contentDiv);
        document.getElementById("even4").innerHTML = contentDiv;
        document.getElementById("even4").style.backgroundColor = "blue";
      } else if (i % 2 !== 0 && i == 1) {
        contentDiv = odd + " " + i;
        console.log(contentDiv);
        document.getElementById("odd").innerHTML = contentDiv;
        document.getElementById("odd").style.backgroundColor = "red";
      } else if (i % 2 !== 0 && i == 3) {
        contentDiv = odd + " " + i;
        console.log(contentDiv);
        document.getElementById("odd1").innerHTML = contentDiv;
        document.getElementById("odd1").style.backgroundColor = "red";
      } else if (i % 2 !== 0 && i == 5) {
        contentDiv = odd + " " + i;
        console.log(contentDiv);
        document.getElementById("odd2").innerHTML = contentDiv;
        document.getElementById("odd2").style.backgroundColor = "red";
      } else if (i % 2 !== 0 && i == 7) {
        contentDiv = odd + " " + i;
        console.log(contentDiv);
        document.getElementById("odd3").innerHTML = contentDiv;
        document.getElementById("odd3").style.backgroundColor = "red";
      } else {
        contentDiv = odd + " " + i;
        console.log(contentDiv);
        document.getElementById("odd4").innerHTML = contentDiv;
        document.getElementById("odd4").style.backgroundColor = "red";
      }
    }
  }