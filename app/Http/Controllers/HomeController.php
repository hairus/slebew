<?php

namespace App\Http\Controllers;

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

    public function cetak()
    {
        $data = ['gg'];
        $pdf = Pdf::loadView('komite.invoice', $data);

        // return $pdf->download('invoice.pdf');
        return view('komite.invoice');
    }
}
