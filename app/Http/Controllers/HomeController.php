<?php

namespace App\Http\Controllers;

use App\Models\trx_komite;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function show()
    {
        return view('home');
    }

    public function cetak($id)
    {
        $siswa = trx_komite::find($id);
        $data = ['nama' => $siswa->nama, 'tglBayar' => $siswa->created_at, 'kelas' => $siswa->kelas];
        $pdf = Pdf::loadView('komite.invoice', $data);

        return $pdf->download('example.pdf');
        // return view('komite.invoice');
    }
}
