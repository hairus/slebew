<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $showing = $request->get('paginate');

        $user = User::with('roles')->paginate($showing ? $showing : 5);

        return $user;
    }

    public function store(Request $request)
    {

        //jika user dan role exist maka ini di jalan kan
        if($request->role && $request->user){
            $user = User::find($request->user);
            $user->roles()->attach([
                "role" => $request->role
            ]);

            return response()->json([201]);
        }


        $validate = $request->validate([
            "name" => "required",
            "email" => "required",
            "password" => "required|min:8"
        ]);

        $sim = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => bcrypt($request->password)
        ]);

        return $sim;
    }

    public function destroy($user)
    {

        $user = User::find($user);
        $user->delete();

        return "suksess";
    }

    public function destroy1($user, $role)
    {
        if ($role) {
            $user = User::find($user);
            $user->roles()->detach([
                "role_id" => $role
            ]);
        } else {
            $user = User::find($user);
            $user->delete();
        }

        return "suksess";
    }

    public function userSaya(Request $request)
    {
        $data = json_decode($request->user_id);
        $user = User::find($data->user_id);

        return response()->json($user, 200);
    }
}
