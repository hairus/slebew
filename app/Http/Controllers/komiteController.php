<?php

namespace App\Http\Controllers;

use App\Models\komite;
use Illuminate\Http\Request;

class komiteController extends Controller
{
    public function komite(Request $request)
    {
        $save = komite::create([
           "price" => $request->price
        ]);

        return $save;
    }

    public function getPrice()
    {
        $prices = komite::all();

        return $prices;
    }

    public function update(Request $request)
    {
        $price = komite::find($request->id);
        $price->update([
            "price" => $request->price
        ]);

        return $price;
    }

    public function delPrice($id)
    {
        $del = komite::find($id);
        $del->delete();

        return "success delete";
    }
}
