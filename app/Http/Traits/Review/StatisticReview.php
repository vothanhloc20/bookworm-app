<?php

namespace App\Http\Traits\Review;

use App\Models\Review;
use App\Http\Traits\AverageRatingStar;

trait StatisticReview
{
    use AverageRatingStar;

    public function getTotalReviewRatingById($id)
    {
        return Review::query()
            ->where('review.book_id', $id)
            ->joinSub($this->getAverageRatingStar(), 'book_avg_rating', function ($join) use ($id) {
                $join->on('review.book_id', '=', 'book_avg_rating.id');
            })
            ->select('book_avg_rating.total_review', 'book_avg_rating.total_rating')
            ->groupBy('review.book_id', 'book_avg_rating.total_review', 'book_avg_rating.total_rating');
    }

    public function countRatingStar($id)
    {
        return Review::query()
            ->select('review.rating_star')
            ->selectRaw('count(review.id) as count')
            ->where('review.book_id', $id)
            ->orderBy('review.rating_star')
            ->groupBy('review.rating_star');
    }
}
