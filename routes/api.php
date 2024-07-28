<?php

use App\Http\Controllers\APIController;
use App\Http\Controllers\IjinController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PtkController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TrxKomiteController;
use App\Http\Controllers\UserController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', [APIController::class, 'login']);
Route::post('/register', [APIController::class, 'register']);
Route::post('/forget-password', [APIController::class, 'forget_pass']);
Route::post('/reset-password', [APIController::class, 'reset_pass']);



//dapodik

//Role
Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum']], function () {
    /** dapodik */
    Route::post('komite', [\App\Http\Controllers\komiteController::class, 'komite']);
    Route::get('getPrice', [\App\Http\Controllers\komiteController::class, 'getPrice']);
    Route::delete('delPrice/{id}', [\App\Http\Controllers\komiteController::class, 'delPrice']);
    Route::put('update', [\App\Http\Controllers\komiteController::class, 'update']);
    Route::get('dapo/getData', [\App\Http\Controllers\dapodikController::class, 'getdata']);
    Route::post('dapo/sim', [\App\Http\Controllers\dapodikController::class, 'sim']);
    Route::get('dapo/getDataToken', [\App\Http\Controllers\dapodikController::class, 'getDataToken']);
    Route::delete('dapo/delToken/{id}', [\App\Http\Controllers\dapodikController::class, 'delToken']);
    Route::get('dapo/getDatas', [\App\Http\Controllers\dapodikController::class, 'getDatas']);
    Route::post('dapo/getSiswa', [\App\Http\Controllers\dapodikController::class, 'getSiswa']);
    Route::get('dapo/getSiswa/{id}', [\App\Http\Controllers\dapodikController::class, 'getSiswaId']);
    Route::post('dapo/getSiswaTrx', [\App\Http\Controllers\dapodikController::class, 'getSiswaTrx']);

    /** role */
    Route::resource('role', RoleController::class);
    Route::resource('user', UserController::class);
    Route::post('userSaya', [UserController::class, 'userSaya']);
    Route::resource('komites', TrxKomiteController::class);
    Route::post('komites/income', [TrxKomiteController::class, 'income']);
    Route::get('komites/cetak/{id}', [TrxKomiteController::class, 'cetak']);
    Route::delete('user/{user}/{role}', [UserController::class, 'destroy1']);
    // menu
    Route::resource('menus', MenuController::class);
});



/** guru */
Route::group(['prefix' => 'guru'], function () {
    Route::get('ijin', [PtkController::class, 'index']);
    Route::get('getMapels', [PtkController::class, 'getMapels']);
    Route::get('getGuruKelas', [PtkController::class, 'getGuruKelas']);
    Route::post('simI', [IjinController::class, 'simI']);
    Route::post('me', [IjinController::class, 'index']);
    Route::delete('del/{id}', [IjinController::class, 'destroy']);
});
