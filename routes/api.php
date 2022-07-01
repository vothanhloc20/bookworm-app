<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReviewController;
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

Route::prefix('books')->group(function () {
    Route::get('/getAllBooks', [BookController::class, 'getAllBooks']);
    Route::get('/getTopTenOnSaleBooks', [BookController::class, 'getTopTenOnSaleBooks']);
    Route::get('/getRecommendedBooks', [BookController::class, 'getRecommendedBooks']);
    Route::get('/getPopularBooks', [BookController::class, 'getPopularBooks']);
    Route::get('/{id}', [BookController::class, 'getBookById']);
});

Route::prefix('categories')->group(function () {
    Route::get('/getAllCategories', [CategoryController::class, 'getAllCategories']);
});

Route::prefix('authors')->group(function () {
    Route::get('/getAllAuthors', [AuthorController::class, 'getAllAuthors']);
});

Route::prefix('reviews')->group(function () {
    Route::post('/create', [ReviewController::class, 'createNewReview']);
    Route::get('/getAllRatingStars', [ReviewController::class, 'getAllRatingStars']);
    Route::get('/getReviewsByBookId/{id}', [ReviewController::class, 'getReviewsByBookId']);
});

