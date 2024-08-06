<?php

namespace App\Http\Controllers;

use App\Models\menu;
use App\Models\SubItem;
use Illuminate\Http\Request;

class MenuController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    $showing = $request->get('paginate', 100);

    // $user = User::with('roles')->paginate($showing ? $showing : 5);

    // return $user;

    $menu = menu::with('subMenus')->paginate($showing ? $showing : 100);

    return response()->json($menu, 200);
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
    $menu = menu::find($request->parent);
    if ($menu) {
      $menu->subMenus()->create([
        "link" => $request->link,
        "label" => $request->label
      ]);

      return $menu;
    } else {
      // create menu
      $sim = menu::create([
        "label" => $request->label,
        "icon" => $request->icon,
        "isTitle" => $request->isTitle,
        "role" => $request->role
      ]);

      return $sim;
    }
  }

  /**
   * Display the specified resource.
   */
  public function show(menu $menu)
  {
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(menu $menu)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, menu $menu)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    $remSub = SubItem::find($id);
    if ($remSub) {
      $remSub->delete();
      return "sukses";
    }
  }
}