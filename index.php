<?php
    error_reporting(0);

    $nasiGoreng = $_GET['jumlahNasiGoreng'];
    $miePasta = $_GET['jumlahMiePasta'];
    $beefAyam = $_GET['jumlahBeefAyam'];
    $saladFresh = $_GET['jumlahSaladFresh'];
    $miePastaSumedang = $_GET['jumlahMiePastaSumedang'];

    $esTeh = $_GET['jumlahEsTeh'];
    $esJeruk = $_GET['jumlahEsJeruk'];
    $moccacino = $_GET['jumlahMoccacino'];
    $esCoklat = $_GET['jumlahEsCoklat'];
    $esVanila = $_GET['jumlahEsVanila'];

    $dataPesananImg = array();
    $dataPesananNama = array();
    $dataPesanan = array();
    $dataPesananHarga = array();

    $dataPesananImgMinuman = array();
    $dataPesananNamaMinuman = array();
    $dataPesananMinuman = array();
    $dataPesananHargaMinuman = array();

    if($nasiGoreng){
        $dataPesananImg ['nasiGoreng'] ="img/food1.jpg";
        $dataPesananNama ['nasiGoreng'] = "Nasi Goreng"; 
        $dataPesanan ['nasiGoreng'] = $nasiGoreng; 
        $dataPesananHarga ['nasiGoreng'] = $nasiGoreng * 15000;
    }
    
    if($miePasta){
        $dataPesananImg ['miePasta'] ="img/food2.jpg";
        $dataPesananNama ['miePasta'] = "Mie Pasta"; 
        $dataPesananHarga ['miePasta'] = $miePasta * 25000;
        $dataPesanan ['miePasta'] = $miePasta; 
    }

    if($beefAyam){
        $dataPesananImg ['beefAyam'] ="img/food3.jpg";
        $dataPesananNama ['beefAyam'] = "Beef Ayam"; 
        $dataPesananHarga ['beefAyam'] = $beefAyam * 35000;
        $dataPesanan ['beefAyam'] = $beefAyam; 
    }

    if($saladFresh){
        $dataPesananImg ['saladFresh'] ="img/food2.jpg";
        $dataPesananNama ['saladFresh'] = "Salad Fresh"; 
        $dataPesananHarga ['saladFresh'] = $saladFresh * 10000;
        $dataPesanan ['saladFresh'] = $saladFresh; 
    }

    if($miePastaSumedang){
        $dataPesananImg ['miePastaSumedang'] ="img/food1.jpg";
        $dataPesananNama ['miePastaSumedang'] = "Mie Pasta Sumedang"; 
        $dataPesananHarga ['miePastaSumedang'] = $miePastaSumedang * 15000;
        $dataPesanan ['miePastaSumedang'] = $miePastaSumedang; 
    }

    
    if($esTeh){
        $dataPesananImgMinuman ['esTeh'] ="img/drink1.jpg";
        $dataPesananNamaMinuman ['esTeh'] = "Es Teh"; 
        $dataPesananMinuman ['esTeh'] = $esTeh; 
        $dataPesananHargaMinuman ['esTeh'] = $esTeh * 4000;
    }
    
    if($esJeruk){
        $dataPesananImgMinuman ['esJeruk'] ="img/drink2.jpg";
        $dataPesananNamaMinuman ['esJeruk'] = "Es Jeruk"; 
        $dataPesananHargaMinuman ['esJeruk'] = $esJeruk * 5000;
        $dataPesananMinuman ['esJeruk'] = $esJeruk; 
    }

    if($moccacino){
        $dataPesananImgMinuman ['moccacino'] ="img/drink3.jpg";
        $dataPesananNamaMinuman ['moccacino'] = "Moccacino"; 
        $dataPesananHargaMinuman ['moccacino'] = $moccacino * 14000;
        $dataPesananMinuman ['moccacino'] = $moccacino; 
    }

    if($esCoklat){
        $dataPesananImgMinuman ['esCoklat'] ="img/drink4.jpg";
        $dataPesananNamaMinuman ['esCoklat'] = "Es Coklat"; 
        $dataPesananHargaMinuman ['esCoklat'] = $esCoklat * 7000;
        $dataPesananMinuman ['esCoklat'] = $esCoklat; 
    }

    if($esVanila){
        $dataPesananImgMinuman ['esVanila'] ="img/drink5.jpg";
        $dataPesananNamaMinuman ['esVanila'] = "Es Vanila"; 
        $dataPesananHargaMinuman ['esVanila'] = $esVanila * 7000;
        $dataPesananMinuman ['esVanila'] = $esVanila; 
    }

    
    
    // penghitungan Sub Total
    foreach($dataPesananHarga as $index => $row){
            $subTotalMakanan += $dataPesananHarga[$index];
    }

    foreach($dataPesananHargaMinuman as $index => $row){
            $subTotalMinuman += $dataPesananHargaMinuman[$index];
    }

    $subTotalAll = $subTotalMakanan + $subTotalMinuman;
    $feeAdmin = 1000;
    $totalAll = $subTotalAll - $feeAdmin;
       


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

        <form method="GET">
        <div class="row mt-3 justify-content-center" id="list-pesan">
            <div class="col-6 pt-4" id="list-makanan">
                
                
            </div>
            <div class="col-6 pt-4" id="list-minuman">
                
            </div>
            <button type="submit" class="btn btn-primary" id="checkout" onclick="checkoutBtn()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Simpan Pesanan</button>
            <div class="row justify-content-center mt-3">
                <div class="col-4 text-center">
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Checkout</button>
                    <a class="btn btn-danger" href="/">Isi Kembali</a>
                </div>
            </div>

        </div>
        </form>

    </div>
  </section>

  <!-- Modal Start -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Pembayaran</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <div class="container">
            <div class="row">
                <div class="col m-3 p-3 border rounded">
                    <p>Makanan</p>
                    <?php foreach($dataPesanan as $index => $row) : ?>
                        <div class="list-item justify-content-between">
                        <img src="<?= $dataPesananImg[$index]; ?>">
                        <p class="ms-2 mt-1 fw-medium" id="0"><?= $dataPesananNama[$index]; ?></p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli"><?= $row; ?></p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.<?= $dataPesananHarga[$index]; ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
                <div class="col m-3 p-3 border rounded">
                    <p>Minuman</p>
                    <?php foreach($dataPesananMinuman as $index => $row) : ?>
                        <div class="list-item justify-content-between">
                        <img src=" <?= $dataPesananImgMinuman[$index]; ?>  ">
                        <p class="ms-2 mt-1 fw-medium" id="0"><?= $dataPesananNamaMinuman[$index]; ?></p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli"><?= $row; ?></p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.<?= $dataPesananHargaMinuman[$index]; ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
                
            </div>
            <div class="row">
                <div class="col-6 ms-auto m-3 mb-0">
                    <div class="subTotal d-flex justify-content-between">
                    <p>Sub Total :</p>
                    <p>Rp.<?php echo $subTotalAll; ?></p>
                </div>
                <div class="adminFee d-flex justify-content-between">
                    <p>Admin Fee :</p>
                    <p>Rp.<?php echo $feeAdmin; ?></p>
                </div>
                <div class="Total d-flex justify-content-between">
                    <p>Total :</p>
                    <p><strong>Rp.<?php echo $totalAll; ?></strong> </p>
                </div>
                </div>
            </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <a  href="/" class="btn btn-primary">Bayar</a>
      </div>
    </div>
  </div>
</div>
<!-- Modal End -->

    <script src="main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>