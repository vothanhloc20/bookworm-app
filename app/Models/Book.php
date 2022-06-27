<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

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

    public function scopeOnSaleBook($query)
    {
        $checkDiscount = $this->checkDiscount();

        return $query
            ->join('author', 'book.author_id', '=', 'author.id')
            ->select('book.id', 'book.book_title', 'author.author_name', 'book.book_price', 'book.book_cover_photo', 'check_discount.discount_price', 'check_discount.final_price')
            ->joinSub($checkDiscount, 'check_discount', function ($join) {
                $join->on('book.id', '=', 'check_discount.id');
            })
            ->where('check_discount.discount_price', '!=', null)
            ->whereRaw('check_discount.discount_price = check_discount.final_price')
            ->selectRaw('book.book_price - check_discount.discount_price AS sub_price')
            ->orderBy('sub_price', 'desc')
            ->orderBy('check_discount.final_price', 'asc');
    }

    public function scopeBaseBook($query)
    {
        $checkDiscount = $this->checkDiscount();

        return $query
            ->join('review', 'book.id', '=', 'review.book_id')
            ->join('author', 'book.author_id', '=', 'author.id')
            ->select('book.id', 'book.book_title', 'author.author_name', 'book.book_price', 'book.book_cover_photo', 'check_discount.discount_price', 'check_discount.final_price')
            ->joinSub($checkDiscount, 'check_discount', function ($join) {
                $join->on('book.id', '=', 'check_discount.id');
            });
    }

    public function checkDiscount()
    {
        $currentDate = date('Y-m-d');

        return Book::query()
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->select('book.id', 'discount.discount_price')
            ->selectRaw("
                CASE
                    WHEN discount.discount_price IS NULL
                    THEN book.book_price

                    WHEN discount.discount_price IS NOT NULL
                    AND discount.discount_end_date < ?
                    OR discount.discount_start_date > ?
                    THEN book.book_price

                    WHEN discount.discount_price IS NOT NULL
                    AND discount.discount_start_date <= ?
                    THEN discount.discount_price

                    END
                AS final_price", [$currentDate, $currentDate, $currentDate]);
    }
}
