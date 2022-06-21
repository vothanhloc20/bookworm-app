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

    // Get top ten on sale books
    public function getTopTenOnSaleBooks(): JsonResponse
    {
        $data = Book::query()
            ->join('discount', 'discount.book_id', '=', 'book.id')
            ->join('author', 'author.id', '=', 'book.author_id')
            ->select('book.id',
                'book.book_title',
                'book.book_price',
                'book.book_cover_photo',
                'author.author_name',
                'discount.discount_price')
            ->selectRaw('book.book_price - discount.discount_price AS sub_price')
            ->whereDate('discount.discount_start_date', '<=', $this->currentDate)
            ->whereDate('discount.discount_end_date', '>=', $this->currentDate)
            ->orWhereNull('discount.discount_end_date')
            ->orderBy('sub_price', 'desc')
            ->limit(10)
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $data,
            'message' => 'Get Data Successfully'
        ]);
    }

    // Get recommended book
    public function getRecommendedBook(): JsonResponse
    {
        $data = Book::query()
            ->join('author', 'author.id', '=', 'book.author_id')
            ->join('review', 'review.book_id', '=', 'book.id')
            ->select('book.id',
                'book.book_title',
                'book.book_price',
                'book.book_cover_photo',
                'author.author_name')
            ->selectRaw("(CASE WHEN EXISTS (
                        SELECT book_id
                        FROM discount
                        WHERE book.id = book_id
                    ) THEN (
                        SELECT discount_price
                        FROM discount
                        WHERE book_id = book.id
                        AND discount_start_date <= '2022-06-21'
                        AND (discount_end_date >= '2022-06-21' OR discount_end_date is NULL)
                    ) ELSE
                        book.book_price
                    END )
                as final_price")
            ->withAvg('review', 'rating_star')
            ->distinct()
            ->orderBy('review_avg_rating_star', 'desc')
            ->orderBy('final_price', 'asc')
            ->limit(10)
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

