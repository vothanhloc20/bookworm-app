<?php

namespace App\Repositories\Book;

interface BookInterface
{
    public function getAllBooks();

    public function getTopTenOnSaleBooks();

    public function getRecommendedBooks();

    public function getPopularBooks();

    public function getAllCategories();

    public function getAllAuthors();

    public function getAllRatingStars();
}
