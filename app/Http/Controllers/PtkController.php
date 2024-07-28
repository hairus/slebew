<?php

namespace App\Http\Controllers;

use App\Models\pembelajaran;
use App\Models\ptks;
use Illuminate\Http\Request;

class PtkController extends Controller
{
    public function index()
    {
        $ptk = ptks::with(['pembelajarans' => function ($q) {
            $q->with('rombels');
        }])->where('ptk_id', '41417c32-37b3-434e-a839-87433d318589')->first();

        return response()->json($ptk, 200);
    }

    public function getMapels()
    {
        $mapel = pembelajaran::select('mata_pelajaran_id_str', 'mata_pelajaran_id')
        ->where('ptk_id', '41417c32-37b3-434e-a839-87433d318589')
        ->distinct('mata_pelajaran_id_str')
        ->get();

        return $mapel;
    }

    public function getGuruKelas()
    {
        $gk = pembelajaran::select('rb_id')->with('rombels', function($q){
            $q->select('id', 'nama');
        })->where('ptk_id', '41417c32-37b3-434e-a839-87433d318589')->get();

        return $gk;
    }
}
