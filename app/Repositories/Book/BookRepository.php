<?php

namespace App\Repositories\Book;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Review;
use Illuminate\Http\JsonResponse;

class BookRepository implements BookInterface
{

    // Get all categories
    public function getAllCategories(): JsonResponse
    {
        $data = Category::query()
            ->select('category_name')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Get Data Successfully'
        ]);
    }

    // Get all authors
    public function getAllAuthors(): JsonResponse
    {
        $data = Author::query()
            ->select('author_name')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Get Data Successfully'
        ]);
    }

    // Get all rating stars
    public function getAllRatingStars(): JsonResponse
    {
        $data = Review::query()
            ->select('rating_star')
            ->groupBy('rating_star')
            ->orderBy('rating_star', 'asc')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Get Data Successfully'
        ]);
    }
}

