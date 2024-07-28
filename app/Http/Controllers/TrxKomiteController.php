<?php

namespace App\Http\Controllers;

use App\Models\trx_komite;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TrxKomiteController extends Controller
{
    public function index()
    {
        $komites = trx_komite::with('peserta_didiks')->where([
            "tgl" => date('d'),
            "bulan" => date('m'),
            "tahun" => date('Y')
        ])->get();

        $sumBulan = trx_komite::where('bulan', date('m'))->sum('nominal');
        $sumTahun = trx_komite::where('tahun', date('Y'))->sum('nominal');


        return response()->json([
            "komites" => $komites,
            "sumBulan" => $sumBulan,
            "sumTahun" => $sumTahun
        ]);
    }

    public function store(Request $request)
    {
        $jum = count($request->siswa_id);

        $tgl = explode('-', $request->tgl);
        $tanggal = $tgl[2];
        $bulan = $tgl[1];
        $tahun = $tgl[0];

        for ($x = 0; $x < $jum; $x++) {
            $sim = trx_komite::create([
                "nisn" => $request->siswa_id[$x]['nisn'],
                "nama" => $request->siswa_id[$x]['nama'],
                "ta_id" => 1,
                "kelas_id" => $request->kelas_id,
                "kelas" => $request->siswa_id[$x]['nama_rombel'],
                "nominal" => $request->nominal,
                "nomor" => 'KW-' . strtoupper(Str::random(8)),
                "tgl" => $tanggal,
                "bulan" => $bulan,
                "tahun" => $tahun,
            ]);
        }

        return $sim;
    }

    public function update(Request $request)
    {
        $tgl = explode('-', $request->tanggal);
        $bulan = explode('-', $request->bulan);
        $tahun = explode('-', $request->tahun);
        if ($request->tanggal) {

            $trx = trx_komite::with('peserta_didiks')->where([
                'tgl' => $tgl[2],
                "bulan" => $tgl[1],
                "tahun" => $tgl[0]
            ])->orderBy('kelas', 'ASC')->orderBy('nama', 'ASC')->get();

            return $trx;
        } else if ($request->bulan) {
            $trx = trx_komite::with('peserta_didiks')->where([
                "bulan" => $bulan[0],
                "tahun" => $bulan[1]
            ])->get();

            return $trx;
        } else if ($request->tahun) {

            $trx = trx_komite::with('peserta_didiks')->where([
                "tahun" => $tahun[0]
            ])->get();

            return $trx;
        } else {
            return "no data";
        }
    }

    public function income(Request $request)
    {

        if ($request->tanggal) {
            $tanggal = explode('-', $request->tanggal);
            $sumHarian = trx_komite::where([
                "tgl" => $tanggal[2],
                "bulan" => $tanggal[1],
                "tahun" => $tanggal[0]
            ])->sum('nominal');

            return response()->json([
                "harian" => $sumHarian
            ]);
        } else if ($request->bulan) {
            $bulan = explode('-', $request->bulan);
            $sumBulan = trx_komite::where([
                "bulan" => $bulan[0],
                "tahun" => $bulan[1]
            ])->sum('nominal');

            return response()->json([
                "bulanan" => $sumBulan
            ]);
        } else if ($request->tahun) {
            $tahun = explode('-', $request->tahun);
            $sumTahun = trx_komite::where([
                "tahun" => $tahun[0]
            ])->sum('nominal');

            return response()->json([
                "tahunan" => $sumTahun
            ]);
        } else {
            return response()->json([], 402);
        }
    }

    public function cetak($id)
    {
        $siswa = trx_komite::find($id);

        $data = ['nama' => $siswa->nama, 'tglBayar' => $siswa->created_at, 'kelas' => $siswa->kelas, 'nominal' => $siswa->nominal, 'nomor' => $siswa->nomor];

        $pdf = Pdf::loadView('komite.invoice', $data);

        return $pdf->download('example.pdf');
    }
}
