<?php

namespace App\Http\Traits\Book;

use App\Http\Traits\AverageRatingStar;
use App\Http\Traits\CheckDiscount;

trait ScopeBook
{
    use CheckDiscount;
    use AverageRatingStar;

    public function scopeFilterBase($query, $request)
    {
        return $query
            ->when($request->has('filter.category'), function ($query) use ($request) {
                $list = explode(',', $request->query('filter')['category']);
                $query->whereIn('category_name', $list);
            })
            ->when($request->has('filter.author'), function ($query) use ($request) {
                $list = explode(',', $request->query('filter')['author']);
                $query->whereIn('author_name', $list);
            })
            ->when($request->has('filter.rating_star'), function ($query) use ($request) {
                $rating_star = $request->query('filter')['rating_star'];
                $min = 0;
                if ($rating_star > 1) {
                    $min = $rating_star - 1 + 0.1;
                }
                $query
                    ->joinSub($this->getAverageRatingStar(), 'book_avg_rating', function ($join) {
                        $join->on('book.id', '=', 'book_avg_rating.id');
                    })
                    ->whereBetween('book_avg_rating.average_rating_star', [$min, $rating_star]);
                ;            });
    }

    public function scopeSortBase($query, $request)
    {
        $query
            ->when($request->has('sort'), function ($query) use ($request) {
                $sortBy = '';
                $sortValue = '';

                foreach ($request->get('sort') as $key => $value) {
                    $sortBy = $key;
                    $sortValue = $value;
                }

                $query
                    ->when($sortBy === 'popularity', function ($query) {
                        $query
                            ->PopularBooks();
                    })
                    ->when($sortBy === 'price', function ($query) use ($sortValue) {
                        $query
                            ->JoinWithBooks()
                            ->orderBy('check_discount.final_price', $sortValue);
                    });
            })
            ->when(!$request->has('sort'), function ($query) {
                $query->onSaleBooks();
            });

        return $query;
    }

    public function scopeJoinWithBooks($query)
    {
        $checkDiscount = $this->checkDiscount();

        return $query->join('author', 'book.author_id', '=', 'author.id')
            ->join('category', 'book.category_id', '=', 'category.id')
            ->select('book.id',
                'book.book_title',
                'author.author_name',
                'book.book_price',
                'book.book_cover_photo',
                'book.book_summary',
                'check_discount.discount_price',
                'check_discount.final_price')
            ->joinSub($checkDiscount, 'check_discount', function ($join) {
                $join->on('book.id', '=', 'check_discount.id');
            });
    }

    public function scopeOnSaleBooks($query)
    {
        return $query
            ->JoinWithBooks()
            ->where('check_discount.discount_price', '!=', null)
            ->whereRaw('check_discount.discount_price = check_discount.final_price')
            ->selectRaw('book.book_price - check_discount.discount_price AS sub_price')
            ->orderBy('sub_price', 'desc')
            ->orderBy('check_discount.final_price', 'asc');
    }

    public function scopeRecommendedBooks($query)
    {
        return $query
            ->JoinWithBooks()
            ->join('review', 'book.id', '=', 'review.book_id');
    }

    public function scopePopularBooks($query)
    {
        return $query->RecommendedBooks()
            ->withCount('review')
            ->distinct()
            ->orderByDesc('review_count')
            ->orderBy('check_discount.final_price', 'asc');
    }
}
