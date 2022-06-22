<?php

use App\Http\Controllers\BookController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/books/getTopTenOnSaleBooks', [BookController::class, 'getTopTenOnSaleBooks']);
Route::get('/books/getRecommendedBooks', [BookController::class, 'getRecommendedBooks']);
Route::get('/books/getPopularBooks', [BookController::class, 'getPopularBooks']);
Route::get('/books/getAllCategories', [BookController::class, 'getAllCategories']);
Route::get('/books/getAllAuthors', [BookController::class, 'getAllAuthors']);
Route::get('/books/getAllRatingStars', [BookController::class, 'getAllRatingStars']);

