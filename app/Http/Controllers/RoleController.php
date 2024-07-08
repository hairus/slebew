<?php

namespace App\Http\Controllers;

use App\Models\role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'role' => 'required',
        ]);

        $role = role::find($request->role_id);
        if($role){
            $role->users()->sync([
                "user_id" => $request->user_id
            ]);
        }else{
            $role = role::create([
                "role" => $request->role
            ]);
        }

        return $role;
    }

    public function index(Request $request)
    {
        $showing = $request->get('paginate');
        // dd($showing);

        $role = role::paginate($showing ? $showing : 5);

        return $role;
    }

    public function destroy($id)
    {
        $role = role::find($id);
        $role->delete();

        return response()->json([] ,200);
    }

    public function show(Request $request)
    {
        $showing = $request->get('paginate');

        return $showing;
    }
}
