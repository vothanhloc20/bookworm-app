<?php

namespace App\Repositories\Book;

interface BookInterface
{
    public function getTopTenOnSaleBooks();

    public function getRecommendedBook();

    public function getAllCategories();

    public function getAllAuthors();

    public function getAllRatingStars();
}
