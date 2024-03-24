let tambah = document.querySelectorAll("tambah");
let kurang = document.querySelectorAll("kurang");
let jumlahPcs = document.querySelectorAll("#jumlahPcs");

let index = jumlahPcs.innerText;

tambah.addEventListener("click", function () {
  index++;
  jumlahPcs.innerText = index;
});

kurang.addEventListener("click", function () {
  if (index > 0) {
    index--;
    jumlahPcs.innerText = index;
  }
});
