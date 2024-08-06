<?php

namespace App\Http\Controllers;

use App\Models\cp;
use Illuminate\Http\Request;

class CpController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return response()->json(['data'=>cp::all()], 200);
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
    $request->validate([
      'mapel' => 'required',
      'semester' => 'required',
      'tingkat' => 'required',
    ]);
    $cp = $request->only(['mapel', 'semester', 'tingkat']);
    $cp = cp::create([
      'mapel' => $cp['mapel'],
      'semester' => $cp['semester'],
      'tingkat' => $cp['tingkat'],
    ]);
    return response()->json(["data" => $cp], 200);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $cp = cp::find($id);
    if (!$cp) {
      return response()->json(["error" => "CP not found"], 404);
    }
    return response()->json(["data" => $cp], 200);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {

  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $cp = cp::find($id);
    if (!$cp) {
      return response()->json(["error" => "CP not found"], 404);
    }
    $request->validate([
      'mapel' => 'required',
      'semester' => 'required',
      'tingkat' => 'required',
    ]);
    $cp->update([
      'mapel' => $request->input('mapel'),
     'semester' => $request->input('semester'),
      'tingkat' => $request->input('tingkat'),
    ]);
    return response()->json(["data" => $cp], 200);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $cp = cp::find($id);
    if (!$cp) {
      return response()->json(["error" => "CP not found"], 404);
    }
    $cp->delete();
    return response()->json([], 200);
  }
}