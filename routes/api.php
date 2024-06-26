<?php

use App\Http\Controllers\APIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [APIController::class, 'login']);
Route::post('/register', [APIController::class, 'register']);
Route::post('/forget-password', [APIController::class, 'forget_pass']);
Route::post('/reset-password', [APIController::class, 'reset_pass']);

Route::post('/admin/komite', [\App\Http\Controllers\komiteController::class, 'komite']);
Route::get('/admin/getPrice', [\App\Http\Controllers\komiteController::class, 'getPrice']);
Route::delete('/admin/delPrice/{id}', [\App\Http\Controllers\komiteController::class, 'delPrice']);
Route::put('/admin/update', [\App\Http\Controllers\komiteController::class, 'update']);

//dapodik
Route::get('/admin/dapo/getData', [\App\Http\Controllers\dapodikController::class, 'getdata']);
Route::post('/admin/dapo/sim', [\App\Http\Controllers\dapodikController::class, 'sim']);
Route::get('/admin/dapo/getDataToken', [\App\Http\Controllers\dapodikController::class, 'getDataToken']);
Route::delete('/admin/dapo/delToken/{id}', [\App\Http\Controllers\dapodikController::class, 'delToken']);
