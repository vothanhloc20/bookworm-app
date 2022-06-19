<?php

namespace App\Repositories\Book;

interface BookInterface
{
    public function getAllCategories();

    public function getAllAuthors();

    public function getAllRatingStars();
}
