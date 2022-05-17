<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return inertia('Home', [
        'name' => 'Toby',
        'frameworks' => ['1','2']
    ]);
});
Route::get('/users', function () {
    sleep(0.1);
    return inertia('Users', [
        'time' => now()->toTimeString()
    ]);
});
Route::get('/settings', function () {
    return inertia('Settings', [    ]);
});

Route::post('/logout', function () {
   dd('logging the users out');
});
