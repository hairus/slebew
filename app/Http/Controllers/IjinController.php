<?php

namespace App\Http\Controllers;

use App\Models\ijin;
use App\Models\User;
use Illuminate\Http\Request;

class IjinController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    $user = User::find($request->user_id);
    // izin debug halaman /guru/izin meski data created (201)
    // dd($user); tidak muncul karena ptk_id nilainya null
    // jadi harus memiliki ptk_id

    $ijins = ijin::with('user', 'kelas')->where('ptk_id', $user->ptk_id)->whereMonth('sampai', date('m'))->get();

    return $ijins;
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
  public function show(ijin $ijin)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(ijin $ijin)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, ijin $ijin)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    $ijin = ijin::find($id)->delete();

    return response()->json([], 200);
  }

  public function simI(Request $request)
  {

    // return $request->form['dari'];
    $validate = $this->validate($request, [
      "kelas_id" => "required",
      "mapel_id" => "required",
      "dari" => "required",
      "sampai" => "required",
      "ket" => "required",
      "desk" => "required",
    ]);

    // return $validate;

    $sim = ijin::create([
      "ptk_id" => '41417c32-37b3-434e-a839-87433d318589',
      "kelas_id" => $request->kelas_id,
      "mapel_id" => $request->mapel_id,
      "dari" => $request->dari,
      "sampai" => $request->sampai,
      "ket" => $request->ket,
      "desk" => $request->desk,
    ]);

    return $sim;
  }
}