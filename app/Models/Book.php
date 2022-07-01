<?php

namespace App\Models;

use App\Http\Traits\Book\ScopeBook;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    use ScopeBook;

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
}
