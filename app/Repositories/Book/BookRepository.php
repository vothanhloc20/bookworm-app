<?php

namespace App\Repositories\Book;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Review;
use Illuminate\Http\JsonResponse;

class BookRepository implements BookInterface
{

    public $currentDate;

    public function __construct(Book $bookModel)
    {
        $this->currentDate = date('Y-m-d');
    }

    // Get all books with pagination as long as filter and sort
    public function getAllBooks()
    {
        $data = Book::query();

        // Per page - Default 5
        $per_page = request()->per_page ? request()->per_page : 5;

        // Category - Default null
        $category = request()->category ? request()->category : null;

        // Author - Default null
        $author = request()->author ? request()->author : null;

        // Sort = Default on sale
        $sort = request()->sort ? request()->sort : 'on_sale';

        if ($category) {
            $data = $data->join('category', 'book.category_id', '=', 'category.id')
                ->where('category.category_name', '=', $category);
        }

        if ($author) {
            $data = $data->where('author_name', '=', $author);
        }

        switch ($sort) {
            case 'on_sale':
                $data = $data->OnSaleBook()
                    ->paginate($per_page);

                return response()->json([
                    'status' => 200,
                    'data' => $data,
                    'message' => 'Get Data Successfully'
                ]);

            default:
                return response()->json([
                    'status' => 500,
                    'message' => 'Server Error!!!'
                ]);
        }


    }

    // Get top ten on sale books
    public function getTopTenOnSaleBooks(): JsonResponse
    {
        $data = Book::OnSaleBook()
            ->limit(10)
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Get Data Successfully'
        ]);
    }

    // Get recommended book
    public function getRecommendedBooks(): JsonResponse
    {
        $data = Book::BaseBook()
            ->withAvg('review', 'rating_star')
            ->distinct()
            ->orderBy('review_avg_rating_star', 'desc')
            ->orderBy('final_price', 'asc')
            ->limit(8)
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Get Data Successfully'
        ]);
    }

    // Get popular book
    public function getPopularBooks(): JsonResponse
    {
        $data = Book::BaseBook()
            ->withCount('review')
            ->distinct()
            ->orderBy('review_count', 'desc')
            ->orderBy('final_price', 'asc')
            ->limit(8)
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Get Data Successfully'
        ]);
    }

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

