<?php 
  


?>


<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>StudiKasus PHP Dasar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
</head>
  <body>
    <section id="formPemesanan" class="p-5" >
        <div class="container rounded p-3" style="background-color: #353535;">
            <div class="row" >
                <h3 class="text-white ps-4 pt-4">Form Pemesanan</h3>
                <hr style="color:white;">
                <div class="col-3" >
                    <div class="card" style="width: 18rem;">
                    <img src="img/food1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nasi Goreng</h5>
                        <h5 class="card-title">Rp.15.000</h5>
                        <div class="jumlahPesan d-flex justify-content-between mt-3 align-items-center ms-5 me-5">
                            <button  class="btn btn-primary ms-3" name="kurang" value="kurang" id="kurang">-</button>
                            <p class="ps-2 pe-2" id="jumlahPcs" name="jumlahNasi" >0</p>
                            <button  class="btn btn-primary me-3" name="tambah" value="tambah" id="tambah">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-3" >
                    <div class="card" style="width: 18rem;">
                    <img src="img/food1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nasi Goreng</h5>
                        <h5 class="card-title">Rp.15.000</h5>
                        <div class="jumlahPesan d-flex justify-content-between mt-3 align-items-center ms-5 me-5">
                            <button  class="btn btn-primary ms-3" name="kurang" value="kurang" id="kurang">-</button>
                            <p class="ps-2 pe-2" id="jumlahPcs" name="jumlahNasi" >0</p>
                            <button  class="btn btn-primary me-3" name="tambah" value="tambah" id="tambah">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-3" >
                    <div class="card" style="width: 18rem;">
                    <img src="img/food1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nasi Goreng</h5>
                        <h5 class="card-title">Rp.15.000</h5>
                        <div class="jumlahPesan d-flex justify-content-between mt-3 align-items-center ms-5 me-5">
                            <button  class="btn btn-primary ms-3" name="kurang" value="kurang" id="kurang">-</button>
                            <p class="ps-2 pe-2" id="jumlahPcs" name="jumlahNasi" >0</p>
                            <button  class="btn btn-primary me-3" name="tambah" value="tambah" id="tambah">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-3" >
                    <div class="card" style="width: 18rem;">
                    <img src="img/food1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nasi Goreng</h5>
                        <h5 class="card-title">Rp.15.000</h5>
                        <div class="jumlahPesan d-flex justify-content-between mt-3 align-items-center ms-5 me-5">
                            <button  class="btn btn-primary ms-3" name="kurang" value="kurang" id="kurang">-</button>
                            <p class="ps-2 pe-2" id="jumlahPcs" name="jumlahNasi" >0</p>
                            <button  class="btn btn-primary me-3" name="tambah" value="tambah" id="tambah">+</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  
    <script src="main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>