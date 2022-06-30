<?php

namespace App\Repositories\Book;

use App\Http\Resources\BookResource;
use App\Http\Traits\ApiResponse;
use App\Http\Traits\Book\ScopeBook;
use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookRepository implements BookInterface
{
    use ApiResponse;

    public function getAllBooks(Request $request): JsonResponse
    {
        $per_page = $request->query('per_page') ? $request->query('per_page') : 5;

        $data = BookResource::collection(Book::query()
            ->FilterBase($request)
            ->SortBase($request)
            ->paginate($per_page));

        return $this->index($data, 'success', 'Get Data Successfully');
    }

    public function getTopTenOnSaleBooks(): JsonResponse
    {
        $data = BookResource::collection(Book::query()
            ->OnSaleBooks()
            ->limit(10)
            ->get());

        return $this->index($data, 'success', 'Get Data Successfully');
    }

    public function getRecommendedBooks(): JsonResponse
    {
        $data = BookResource::collection(Book::BaseBooks()
            ->withAvg('review', 'rating_star')
            ->distinct()
            ->orderBy('review_avg_rating_star', 'desc')
            ->orderBy('final_price', 'asc')
            ->limit(8)
            ->get());

        return $this->index($data, 'success', 'Get Data Successfully');
    }

    public function getPopularBooks(): JsonResponse
    {
        $data = BookResource::collection(Book::PopularBooks()
            ->limit(8)
            ->get());

        return $this->index($data, 'success', 'Get Data Successfully');
    }

    public function getBookById($id)
    {
        $data = Book::query()
            ->BaseBooks()
            ->where('book.id', '=', $id)
            ->groupBy('book.id',
                'book.book_title',
                'author.author_name',
                'book.book_price',
                'book.book_cover_photo',
                'book.book_summary',
                'check_discount.discount_price',
                'check_discount.final_price')
            ->get();

        return $this->index($data, 'success', 'Get Data Successfully');
    }
}

