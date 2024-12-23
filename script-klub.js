function klub1() {
  document.getElementById("objek1").src = "a.jpg";
}

function klub2() {
  document.getElementById("objek2").src = "a.jpg";
}

function klub3() {
  document.getElementById("objek3").src = "a.jpg";
}

function klub4() {
  document.getElementById("objek4").src = "a.jpg";
}

function klub5() {
  document.getElementById("objek5").src = "a.jpg";
}

function klub6() {
  document.getElementById("objek6").src = "b.jpg";
}

function klub7() {
  document.getElementById("objek7").src = "b.jpg";
}

function klub8() {
  document.getElementById("objek8").src = "b.jpg";
}

function klub9() {
  document.getElementById("objek9").src = "b.jpg";
}

function klub10() {
  document.getElementById("objek10").src = "b.jpg";
}

function klub11() {
  document.getElementById("objek11").src = "c.jpg";
}

function klub12() {
  document.getElementById("objek12").src = "c.jpg";
}

function klub13() {
  document.getElementById("objek13").src = "c.jpg";
}

function klub14() {
  document.getElementById("objek14").src = "c.jpg";
}

function klub15() {
  document.getElementById("objek15").src = "c.jpg";
}

function klub16() {
  document.getElementById("objek16").src = "d.jpg";
}

function klub17() {
  document.getElementById("objek17").src = "d.jpg";
}

function klub18() {
  document.getElementById("objek18").src = "d.jpg";
}

function klub19() {
  document.getElementById("objek19").src = "d.jpg";
}

function klub20() {
  document.getElementById("objek20").src = "d.jpg";
}
function klub21() {
  document.getElementById("objek21").src = "e.jpg";
}
function klub22() {
  document.getElementById("objek22").src = "e.jpg";
}
function klub23() {
  document.getElementById("objek23").src = "e.jpg";
}
function klub24() {
  document.getElementById("objek24").src = "e.jpg";
}
function klub25() {
  document.getElementById("objek25").src = "e.jpg";
}
function klub26() {
  document.getElementById("objek26").src = "f.jpg";
}
function klub27() {
  document.getElementById("objek27").src = "f.jpg";
}
function klub28() {
  document.getElementById("objek28").src = "f.jpg";
}
function klub29() {
  document.getElementById("objek29").src = "f.jpg";
}
function klub30() {
  document.getElementById("objek30").src = "f.jpg";
}

function acak() {
  let tombol = document.getElementById("tombol");
  let hasil1 = document.getElementById("hasil1");
  let hasil2 = document.getElementById("hasil2");
  hasil2.innerHTML = Math.floor(Math.random() * 30) + 1;
  {
    if (hasil2.innerHTML == 1) {
      hasil2.innerHTML = "Ajax";
      hasil1.src = "ajax.jpg";
    } else if (hasil2.innerHTML == 2) {
      hasil2.innerHTML = "Arsenal";
      hasil1.src = "arsenal.jpg";
    } else if (hasil2.innerHTML == 3) {
      hasil2.innerHTML = "AS Monaco";
      hasil1.src = "asmonaco.jpg";
    } else if (hasil2.innerHTML == 4) {
      hasil2.innerHTML = "Atalanta";
      hasil1.src = "atalanta.jpg";
    } else if (hasil2.innerHTML == 5) {
      hasil2.innerHTML = "A T M";
      hasil1.src = "atm.jpg";
    } else if (hasil2.innerHTML == 6) {
      hasil2.innerHTML = "Barca";
      hasil1.src = "barca.jpg";
    } else if (hasil2.innerHTML == 7) {
      hasil2.innerHTML = "Bayern";
      hasil1.src = "bayern.jpg";
    } else if (hasil2.innerHTML == 8) {
      hasil2.innerHTML = "Benfica";
      hasil1.src = "benfica.jpg";
    } else if (hasil2.innerHTML == 9) {
      hasil2.innerHTML = "Chelsea";
      hasil1.src = "chelsea.jpg";
    } else if (hasil2.innerHTML == 10) {
      hasil2.innerHTML = "City";
      hasil1.src = "city.jpg";
    } else if (hasil2.innerHTML == 11) {
      hasil2.innerHTML = "Dortmund";
      hasil1.src = "dortmund.jpg";
    } else if (hasil2.innerHTML == 12) {
      hasil2.innerHTML = "Eintracht Frankfurt";
      hasil1.src = "eintracht-frankfurt.jpg";
    } else if (hasil2.innerHTML == 13) {
      hasil2.innerHTML = "Everton";
      hasil1.src = "everton.jpg";
    } else if (hasil2.innerHTML == 14) {
      hasil2.innerHTML = "Inter";
      hasil1.src = "inter.jpg";
    } else if (hasil2.innerHTML == 15) {
      hasil2.innerHTML = "Juve";
      hasil1.src = "juve.jpg";
    } else if (hasil2.innerHTML == 16) {
      hasil2.innerHTML = "Lazio";
      hasil1.src = "lazio.jpg";
    } else if (hasil2.innerHTML == 17) {
      hasil2.innerHTML = "Leipzig";
      hasil1.src = "leipzig.jpg";
    } else if (hasil2.innerHTML == 18) {
      hasil2.innerHTML = "Leverkusen";
      hasil1.src = "leverkusen.jpg";
    } else if (hasil2.innerHTML == 19) {
      hasil2.innerHTML = "Liverpool";
      hasil1.src = "liverpool.jpg";
    } else if (hasil2.innerHTML == 20) {
      hasil2.innerHTML = "Madrid";
      hasil1.src = "madrid.jpg";
    } else if (hasil2.innerHTML == 21) {
      hasil2.innerHTML = "Marseille";
      hasil1.src = "marseille.jpg";
    } else if (hasil2.innerHTML == 22) {
      hasil2.innerHTML = "Milan";
      hasil1.src = "milan.jpg";
    } else if (hasil2.innerHTML == 23) {
      hasil2.innerHTML = "M U";
      hasil1.src = "mu.jpg";
    } else if (hasil2.innerHTML == 24) {
      hasil2.innerHTML = "Napoli";
      hasil1.src = "napoli.jpg";
    } else if (hasil2.innerHTML == 25) {
      hasil2.innerHTML = "Newcastle";
      hasil1.src = "newcastle.jpg";
    } else if (hasil2.innerHTML == 26) {
      hasil2.innerHTML = "Porto";
      hasil1.src = "porto.jpg";
    } else if (hasil2.innerHTML == 27) {
      hasil2.innerHTML = "P S G";
      hasil1.src = "psg.jpg";
    } else if (hasil2.innerHTML == 28) {
      hasil2.innerHTML = "Roma";
      hasil1.src = "roma.jpg";
    } else if (hasil2.innerHTML == 29) {
      hasil2.innerHTML = "Sevilla";
      hasil1.src = "sevilla.jpg";
    } else {
      hasil2.innerHTML = "Spurs";
      hasil1.src = "spurs.jpg";
    }
  }
  tombol.style.display = "none";
}
