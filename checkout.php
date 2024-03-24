<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Checkout</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
  <body>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<form  method="get">
    <label for="nilai">Masukkan Nilai:</label>
    <input type="text" id="nilai" name="nilai">
    <button type="submit">Kirim</button>
</form>

<!-- Modal -->
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
                    <div class="list-item justify-content-between">
                        <img src="img/food1.jpg">
                        <p class="ms-2 mt-1 fw-medium" id="menu01">Nasi Goreng</p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli">3</p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.60.000</p>
                    </div>
                    <div class="list-item justify-content-between">
                        <img src="img/food1.jpg">
                        <p class="ms-2 mt-1 fw-medium" id="menu01">Nasi Goreng</p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli">3</p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.60.000</p>
                    </div>
                    <div class="list-item justify-content-between">
                        <img src="img/food1.jpg">
                        <p class="ms-2 mt-1 fw-medium" id="menu01">Nasi Goreng</p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli">3</p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.60.000</p>
                    </div>
                </div>
                <div class="col m-3 p-3 border rounded">
                    <p>Minuman</p>
                    <div class="list-item justify-content-between">
                        <img src="img/food1.jpg">
                        <p class="ms-2 mt-1 fw-medium" id="menu01">Nasi Goreng</p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli">3</p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.60.000</p>
                    </div>
                    <div class="list-item justify-content-between">
                        <img src="img/food1.jpg">
                        <p class="ms-2 mt-1 fw-medium" id="menu01">Nasi Goreng</p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli">3</p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.60.000</p>
                    </div>
                    <div class="list-item justify-content-between">
                        <img src="img/food1.jpg">
                        <p class="ms-2 mt-1 fw-medium" id="menu01">Nasi Goreng</p>
                        <p class="ms-2 mt-1 fw-medium" id="jumlahBeli">3</p>
                        <p class="ms-2 mt-1 fw-medium" id="totalHargaPerMenu">Rp.60.000</p>
                    </div>
                </div>
                
            </div>
            <div class="row">
                <div class="col-6 ms-auto m-3 mb-0">
                    <div class="subTotal d-flex justify-content-between">
                    <p>Sub Total :</p>
                    <p>Rp.180.000</p>
                </div>
                <div class="adminFee d-flex justify-content-between">
                    <p>Admin Fee :</p>
                    <p>Rp.2000</p>
                </div>
                <div class="Total d-flex justify-content-between">
                    <p>Total :</p>
                    <p><strong>Rp.178.000</strong> </p>
                </div>
                </div>
            </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-primary">Bayar</button>
      </div>
    </div>
  </div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>