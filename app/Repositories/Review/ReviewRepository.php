<?php

namespace App\Repositories\Review;

use App\Http\Traits\ApiResponse;
use App\Models\Review;

class ReviewRepository implements ReviewInterface
{
    use ApiResponse;

    public function getAllRatingStars()
    {
        $data = Review::query()
            ->select('rating_star')
            ->groupBy('rating_star')
            ->orderBy('rating_star')
            ->get();

        return $this->index($data, 'success', 'Get Data Successfully');
    }
}
