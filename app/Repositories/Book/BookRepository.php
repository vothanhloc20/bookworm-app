<?php

namespace App\Repositories\Book;

use App\Models\Author;
use App\Models\Category;
use App\Models\Review;

class BookRepository implements BookInterface
{
    // Get all categories
    public function getAllCategories() {
        return Category::select('category_name')->get();
    }

    // Get all authors
    public function getAllAuthors() {
        return Author::select('author_name')->get();
    }

    // Get all rating stars
    public function getAllRatingStars() {
        return Review::select('rating_star')
            ->groupBy('rating_star')
            ->orderBy('rating_star', 'asc')
            ->get();
    }
}

