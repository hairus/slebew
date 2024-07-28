<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Kwitansi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            width: 80mm; /* Typical width for POS receipt printers */
        }
        .container {
            padding: 20px;
        }
        .header, .footer {
            text-align: center;
        }
        .header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .details {
            margin-bottom: 20px;
        }
        .details th, .details td {
            text-align: left;
            padding: 5px;
        }
        .total {
            font-size: 16px;
            font-weight: bold;
            text-align: right;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div>logo</div>
            <div>Nama Perusahaan</div>
            <div>Alamat Perusahaan</div>
            <div>Telepon: (123) 456-7890</div>
        </div>
        <div class="details">
            <table width="100%">
                <tr>
                    <th>Tanggal</th>
                    <td>: {{ $tglBayar }}</td>
                </tr>
                <tr>
                    <th>No. Kwitansi</th>
                    <td>: {{ $nomor }}</td>
                </tr>
                <tr>
                    <th>Kelas</th>
                    <td>: {{ $kelas }}</td>
                </tr>
                <tr>
                    <th>Nama Pelanggan</th>
                    <td>: {{ $nama }}</td>
                </tr>
                <tr>
                    <th>Nominal</th>
                    <td>: {{ $nominal }}</td>
                </tr>
            </table>
        </div>
        {{-- <div class="items">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Deskripsi</th>
                        <th>Qty</th>
                        <th>Harga</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item 1</td>
                        <td>2</td>
                        <td>Rp 50,000</td>
                        <td>Rp 100,000</td>
                    </tr>
                    <tr>
                        <td>Item 2</td>
                        <td>1</td>
                        <td>Rp 75,000</td>
                        <td>Rp 75,000</td>
                    </tr>
                </tbody>
            </table>
        </div> --}}
        <div class="total">
            Total: {{$nominal}}
        </div>
        <div class="footer">
            <div>Terima kasih telah berbelanja!</div>
            <div>Harap simpan kwitansi ini sebagai bukti pembayaran.</div>
        </div>
    </div>
</body>
</html>
