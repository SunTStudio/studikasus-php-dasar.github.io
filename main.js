let menuMakanan = document.getElementById("menuMakanan");
let menuMinuman = document.getElementById("menuMinuman");
let actionBtn = document.getElementsByClassName("actionBtn");
let judulMenu = document.getElementsByClassName("judulMenu");
let imgMenu = document.getElementsByClassName("imgMenu");

function btnMakananActive() {
  menuMakanan.style.backgroundColor = "white";
  menuMakanan.style.color = "#353535";
  menuMinuman.style.backgroundColor = "rgb(57, 0, 71)";
  menuMinuman.style.color = "white";

  let funcMakanan = [
    "nasiGoreng()",
    "miePasta()",
    "beefAyam()",
    "saladFresh()",
    "miePastaSumedang()",
  ];

  let sourceImgMenu = [
    "img/food1.jpg",
    "img/food2.jpg",
    "img/food3.jpg",
    "img/food1.jpg",
    "img/food2.jpg",
  ];

  let judulMenuMakanan = [
    "Nasi Goreng <br>Rp.15.000",
    "Mie Pasta <br>Rp.25.000",
    "Beef Ayam <br>Rp.35.000",
    "Salad Fresh <br>Rp.10.000",
    "Mie Pasta Sumedang <br>Rp.15.000",
  ];

  for (let index = 0; index < actionBtn.length; index++) {
    actionBtn[index].setAttribute("onclick", funcMakanan[index]);
    imgMenu[index].setAttribute("src", sourceImgMenu[index]);
    judulMenu[index].innerHTML = judulMenuMakanan[index];
  }
}

function btnMinumanActive() {
  menuMinuman.style.backgroundColor = "white";
  menuMinuman.style.color = "#353535";
  menuMakanan.style.backgroundColor = "rgb(57, 0, 71)";
  menuMakanan.style.color = "white";

  let funcMinuman = [
    "esTeh()",
    "esJeruk()",
    "moccacino()",
    "esCoklat()",
    "esVanila()",
  ];

  let sourceImgMenu = [
    "img/drink1.jpg",
    "img/drink2.jpg",
    "img/drink3.jpg",
    "img/drink4.jpg",
    "img/drink5.jpg",
  ];

  let judulMenuMinuman = [
    "Es Teh <br> Rp.4000",
    "Es Jeruk <br> Rp.5000",
    "Es Moccacino <br> Rp.14000",
    "Es Coklat <br> Rp.7000",
    "Es Vanila <br> Rp.7000",
  ];

  for (let index = 0; index < actionBtn.length; index++) {
    actionBtn[index].setAttribute("onclick", funcMinuman[index]);
    imgMenu[index].setAttribute("src", sourceImgMenu[index]);
    judulMenu[index].innerHTML = judulMenuMinuman[index];
  }
}

// Pop Up Makanan

const listMakanan = document.getElementById("list-makanan");
const listMinuman = document.getElementById("list-minuman");

function nasiGoreng() {
  const validasi = document.getElementById("menu01");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/food1.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Nasi Goreng";
    pItem.setAttribute("id", "menu01");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(0)");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(0)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
  }
}

function miePasta() {
  const validasi = document.getElementById("menu02");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/food2.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Mie Pasta";
    pItem.setAttribute("id", "menu02");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(1)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(1)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
  }
}

function beefAyam() {
  const validasi = document.getElementById("menu03");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/food3.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Beef Ayam";
    pItem.setAttribute("id", "menu03");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(2)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(2)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
  }
}

function saladFresh() {
  const validasi = document.getElementById("menu04");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/food1.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Salad Fresh";
    pItem.setAttribute("id", "menu04");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(3)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(3)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
  }
}

function miePastaSumedang() {
  const validasi = document.getElementById("menu05");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/food2.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Mie Pasta Sumedang";
    pItem.setAttribute("id", "menu05");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(4)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(4)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
  }
}

// Menu Minuman

function esTeh() {
  const validasi = document.getElementById("menu01M");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/drink1.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Es Teh";
    pItem.setAttribute("id", "menu01M");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(0)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(0)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
  }
}

function esJeruk() {
  const validasi = document.getElementById("menu02M");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/drink2.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Es Jeruk";
    pItem.setAttribute("id", "menu02M");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(1)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(1)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
  }
}

function moccacino() {
  const validasi = document.getElementById("menu03M");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/drink3.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Moccacino";
    pItem.setAttribute("id", "menu03M");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(2)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(2)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
  }
}

function esCoklat() {
  const validasi = document.getElementById("menu04M");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/drink4.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Es Cokelat";
    pItem.setAttribute("id", "menu04M");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(3)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(3)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
  }
}

function esVanila() {
  const validasi = document.getElementById("menu05M");

  if (!validasi) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item", "justify-content-between");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/drink5.jpg");

    listItem.append(imgItem);

    const pItem = document.createElement("p");
    pItem.classList.add("ms-2", "mt-1", "fw-medium");
    pItem.innerText = "Es Vanila";
    pItem.setAttribute("id", "menu05M");

    listItem.append(pItem);

    const increseList = document.createElement("div");
    increseList.classList.add("increse-list");

    listItem.append(increseList);

    const buttonInscrease = document.createElement("button");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", "btnTambah(4)");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const buttonDecrease = document.createElement("button");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", "btnKurang(4)");
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
  }
}

function btnTambah(nomor) {
  let tambah = document.querySelector("#tambah");
  let kurang = document.querySelector("#kurang");
  let jumlahPcs = document.querySelectorAll("#jumlahPcs");
  let items = jumlahPcs[nomor].innerText;

  items++;
  jumlahPcs[nomor].innerText = items;
}

function btnKurang(number) {
  let tambah = document.querySelector("#tambah");
  let kurang = document.querySelector("#kurang");
  let jumlahPcs = document.querySelectorAll("#jumlahPcs");
  let items = jumlahPcs[number].innerText;

  if (items > 0) {
    items--;
    jumlahPcs[number].innerText = items;
  }
}
