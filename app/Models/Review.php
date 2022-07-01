<?php

namespace App\Models;

use App\Http\Traits\Review\ScopeReview;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    use ScopeReview;

    public $timestamps = false;
    protected $table = 'review';
    protected $fillable = ['book_id', 'review_title', 'review_details', 'rating_star', 'review_date'];

    public function Book()
    {
        return $this->belongsTo(Book::class);
    }
}
