<?php

namespace App\Repositories\Book;

use Illuminate\Http\Request;

interface BookInterface
{
    public function getAllBooks(Request $request);

    public function getTopTenOnSaleBooks();

    public function getRecommendedBooks();

    public function getPopularBooks();

    public function getBookById($id);
}
