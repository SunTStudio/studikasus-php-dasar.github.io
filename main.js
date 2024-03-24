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
let indexMakanan = 0;
let indexMinuman = 0;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.setAttribute("onclick", `btnTambah(${indexMakanan})`);
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahNasiGoreng = document.createElement("input");
    jumlahNasiGoreng.setAttribute("type", "hidden");
    jumlahNasiGoreng.setAttribute("name", "jumlahNasiGoreng");
    jumlahNasiGoreng.classList.add("jumlahItems");
    increseList.append(jumlahNasiGoreng);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurang(${indexMakanan})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
    indexMakanan++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", `btnTambah(${indexMakanan})`);
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahMiePasta = document.createElement("input");
    jumlahMiePasta.setAttribute("type", "hidden");
    jumlahMiePasta.setAttribute("name", "jumlahMiePasta");
    jumlahMiePasta.classList.add("jumlahItems");
    increseList.append(jumlahMiePasta);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurang(${indexMakanan})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
    indexMakanan++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", `btnTambah(${indexMakanan})`);
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahBeefAyam = document.createElement("input");
    jumlahBeefAyam.setAttribute("type", "hidden");
    jumlahBeefAyam.setAttribute("name", "jumlahBeefAyam");
    jumlahBeefAyam.classList.add("jumlahItems");
    increseList.append(jumlahBeefAyam);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurang(${indexMakanan})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
    indexMakanan++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", `btnTambah(${indexMakanan})`);
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahSaladFresh = document.createElement("input");
    jumlahSaladFresh.setAttribute("type", "hidden");
    jumlahSaladFresh.setAttribute("name", "jumlahSaladFresh");
    jumlahSaladFresh.classList.add("jumlahItems");
    increseList.append(jumlahSaladFresh);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurang(${indexMakanan})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
    indexMakanan++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute("onclick", `btnTambah(${indexMakanan})`);
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcs");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahMiePastaSumedang = document.createElement("input");
    jumlahMiePastaSumedang.setAttribute("type", "hidden");
    jumlahMiePastaSumedang.setAttribute("name", "jumlahMiePastaSumedang");
    jumlahMiePastaSumedang.classList.add("jumlahItems");
    increseList.append(jumlahMiePastaSumedang);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurang(${indexMakanan})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMakanan.append(listItem);
    indexMakanan++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute(
      "onclick",
      `btnTambahMinuman(${indexMinuman})`
    );
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcsMinuman");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahEsTeh = document.createElement("input");
    jumlahEsTeh.setAttribute("type", "hidden");
    jumlahEsTeh.setAttribute("name", "jumlahEsTeh");
    jumlahEsTeh.classList.add("jumlahItemsMinuman");
    increseList.append(jumlahEsTeh);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurangMinuman(${indexMinuman})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
    indexMinuman++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute(
      "onclick",
      `btnTambahMinuman(${indexMinuman})`
    );
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcsMinuman");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahEsJeruk = document.createElement("input");
    jumlahEsJeruk.setAttribute("type", "hidden");
    jumlahEsJeruk.setAttribute("name", "jumlahEsJeruk");
    jumlahEsJeruk.classList.add("jumlahItemsMinuman");
    increseList.append(jumlahEsJeruk);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurangMinuman(${indexMinuman})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
    indexMinuman++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute(
      "onclick",
      `btnTambahMinuman(${indexMinuman})`
    );
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcsMinuman");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahMoccacino = document.createElement("input");
    jumlahMoccacino.setAttribute("type", "hidden");
    jumlahMoccacino.setAttribute("name", "jumlahMoccacino");
    jumlahMoccacino.classList.add("jumlahItemsMinuman");
    increseList.append(jumlahMoccacino);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurangMinuman(${indexMinuman})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
    indexMinuman++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute(
      "onclick",
      `btnTambahMinuman(${indexMinuman})`
    );
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcsMinuman");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahEsCoklat = document.createElement("input");
    jumlahEsCoklat.setAttribute("type", "hidden");
    jumlahEsCoklat.setAttribute("name", "jumlahEsCoklat");
    jumlahEsCoklat.classList.add("jumlahItemsMinuman");
    increseList.append(jumlahEsCoklat);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurangMinuman(${indexMinuman})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
    indexMinuman++;
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

    const buttonInscrease = document.createElement("a");
    buttonInscrease.classList.add("btn", "btn-primary", "ms-3");
    buttonInscrease.setAttribute("name", "tambah");
    buttonInscrease.setAttribute(
      "onclick",
      `btnTambahMinuman(${indexMinuman})`
    );
    buttonInscrease.setAttribute("id", "tambah");
    buttonInscrease.innerText = "+";

    increseList.append(buttonInscrease);

    const pSumList = document.createElement("p");
    pSumList.classList.add("ps-2", "pe-2", "pt-1");
    pSumList.setAttribute("id", "jumlahPcsMinuman");
    pSumList.setAttribute("name", "jumlahNasi");
    pSumList.innerText = "0";

    increseList.append(pSumList);

    const jumlahEsVanila = document.createElement("input");
    jumlahEsVanila.setAttribute("type", "hidden");
    jumlahEsVanila.setAttribute("name", "jumlahEsVanila");
    jumlahEsVanila.classList.add("jumlahItemsMinuman");
    increseList.append(jumlahEsVanila);

    const buttonDecrease = document.createElement("a");
    buttonDecrease.classList.add("btn", "btn-primary", "me-3");
    buttonDecrease.setAttribute("name", "kurang");
    buttonDecrease.setAttribute("onclick", `btnKurangMinuman(${indexMinuman})`);
    buttonDecrease.setAttribute("id", "kurang");
    buttonDecrease.innerText = "-";

    increseList.append(buttonDecrease);

    listMinuman.append(listItem);
    indexMinuman++;
  }
}

function btnTambah(nomor) {
  let tambah = document.querySelector("#tambah");
  let kurang = document.querySelector("#kurang");
  let jumlahItems = document.querySelectorAll(".jumlahItems");
  let jumlahPcs = document.querySelectorAll("#jumlahPcs");
  let items = jumlahPcs[nomor].innerText;

  items++;
  jumlahPcs[nomor].innerText = items;
  jumlahItems[nomor].setAttribute("value", `${items}`);
}

function btnKurang(number) {
  let tambah = document.querySelector("#tambah");
  let kurang = document.querySelector("#kurang");
  let jumlahItems = document.querySelectorAll(".jumlahItems");
  let jumlahPcs = document.querySelectorAll("#jumlahPcs");
  let items = jumlahPcs[number].innerText;

  if (items > 0) {
    items--;
    jumlahPcs[number].innerText = items;
    jumlahItems[nomor].setAttribute("value", `${items}`);
  }
}

function btnTambahMinuman(nomor) {
  let tambah = document.querySelector("#tambah");
  let kurang = document.querySelector("#kurang");
  let jumlahItemsMinuman = document.querySelectorAll(".jumlahItemsMinuman");
  let jumlahPcsMinuman = document.querySelectorAll("#jumlahPcsMinuman");
  let items = jumlahPcsMinuman[nomor].innerText;

  items++;
  jumlahPcsMinuman[nomor].innerText = items;
  jumlahItemsMinuman[nomor].setAttribute("value", `${items}`);
}

function btnKurangMinuman(number) {
  let tambah = document.querySelector("#tambah");
  let kurang = document.querySelector("#kurang");
  let jumlahItemsMinuman = document.querySelectorAll(".jumlahItemsMinuman");
  let jumlahPcsMinuman = document.querySelectorAll("#jumlahPcsMinuman");
  let items = jumlahPcsMinuman[number].innerText;

  if (items > 0) {
    items--;
    jumlahPcsMinuman[number].innerText = items;
    jumlahItemsMinuman[nomor].setAttribute("value", `${items}`);
  }
}

function checkoutBtn() {
  alert("Pesanan Sudah disimpan, Silahkan Klik Checkout!");
}
