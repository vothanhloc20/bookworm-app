<?php

namespace App\Models;

use App\Http\Traits\CheckDiscount;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Book extends Model
{
    use HasFactory;
    use CheckDiscount;

    public $timestamps = false;
    protected $table = 'book';

    public function Category()
    {
        return $this->belongsTo(Category::class);
    }

    public function Author()
    {
        return $this->belongsTo(Author::class);
    }

    public function Discount()
    {
        return $this->hasOne(Discount::class);
    }

    public function Review()
    {
        return $this->hasMany(Review::class);
    }

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
            });
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
                            ->BaseBooks()
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

    public function scopeBaseBooks($query)
    {
        return $query
            ->JoinWithBooks()
            ->join('review', 'book.id', '=', 'review.book_id');
    }

    public function scopePopularBooks($query)
    {
        $query->BaseBooks()
            ->withCount('review')
            ->distinct()
            ->orderByDesc('review_count')
            ->orderBy('check_discount.final_price', 'asc');
    }
}
