<?php

namespace App\Http\Controllers;

use App\Models\guru_mgmp;
use App\Models\ptks;
use Illuminate\Http\Request;

class GuruMgmpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ptks = ptks::with('pembelajarans')->where('jenis_ptk_id_str', 'Guru Mapel')->get();

        return $ptks;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(guru_mgmp $guru_mgmp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(guru_mgmp $guru_mgmp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, guru_mgmp $guru_mgmp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(guru_mgmp $guru_mgmp)
    {
        //
    }
}
