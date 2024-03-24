<?php

?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Web Pemesanan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
</head>
  <body>

  <section id="pemesanan">
    <div class="container rounded shadow justify-content-center">
        <div class="nav-menu text-center">
            <button style="border-radius:5px 0px 0px 5px;" onclick="btnMakananActive()" id="menuMakanan">Makanan</button>
            <button style="border-radius:0px 5px 5px 0px;" onclick="btnMinumanActive()" id="menuMinuman">Minuman</button>
        </div>
        <div class="row mt-4 justify-content-center">
            <div class="col-2">
                <a href="#" class="actionBtn" onclick="nasiGoreng()">
                <h5 class="judulMenu">Nasi Goreng <br>Rp.15.000</h5> 
                <img src="img/food1.jpg" class="imgMenu">
            </a>
            </div>
            <div class="col-2">
                <a href="#" class="actionBtn" onclick="miePasta()">
                <h5 class="judulMenu">Mie Pasta <br>Rp.25.000</h5> 
                <img src="img/food2.jpg" class="imgMenu">
            </a>
            </div>
            <div class="col-2">
                <a href="#" class="actionBtn" onclick="beefAyam()">
                <h5 class="judulMenu">Beef Ayam <br>Rp.35.000</h5> 
                <img src="img/food3.jpg" class="imgMenu">
            </a>
            </div>
            <div class="col-2">
                <a href="#" class="actionBtn" onclick="saladFresh()">
                <h5 class="judulMenu">Salad Fresh <br>Rp.10.000</h5> 
                <img src="img/food1.jpg" class="imgMenu">
            </a>
            </div>
            <div class="col-2">
                <a href="#" class="actionBtn" onclick="miePastaSumedang()">
                <h5 class="judulMenu">Mie Pasta Sumedang <br>Rp.15.000</h5> 
                <img src="img/food2.jpg" class="imgMenu">
            </a>
            </div>
        </div>

        <div class="row mt-3 justify-content-center" id="list-pesan">
            <div class="col-6 pt-4" id="list-makanan">
                
            </div>
            <div class="col-6 pt-4" id="list-minuman">
                
            </div>
            <button type="submit" class="btn btn-primary" id="checkout">Checkout</button>
        </div>
    </div>
  </section>


    <script src="main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>