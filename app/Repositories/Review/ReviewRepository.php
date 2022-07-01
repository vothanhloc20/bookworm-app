<?php

namespace App\Repositories\Review;

use App\Http\Requests\ReviewRequest;
use App\Http\Traits\ApiResponse;
use App\Http\Traits\Review\StatisticReview;
use App\Models\Review;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ReviewRepository implements ReviewInterface
{
    use ApiResponse;
    use StatisticReview;

    public function getAllRatingStars()
    {
        $data = Review::query()
            ->select('rating_star')
            ->groupBy('rating_star')
            ->orderBy('rating_star')
            ->get();

        return $this->index($data, 'success', 'Get Data Successfully');
    }

    public function getReviewsByBookId($id, Request $request)
    {
        $per_page = $request->query('per_page') ? $request->query('per_page') : config('app.per_page');

        $data = Review::query()
            ->FilterBase($request)
            ->SortBase($request)
            ->where('book_id', $id)
            ->paginate($per_page);

        $totalReviewRatingById = $this->getTotalReviewRatingById($id)->get()->first();
        $countRatingStar = $this->countRatingStar($id)->get();

        $addDataPaginate = collect([
            'general_total' => $totalReviewRatingById,
            'count_rating_star' => $countRatingStar,
        ]);

        return $addDataPaginate->merge($data);
    }

    public function createNewReview(ReviewRequest $request)
    {
        $body = [
            'book_id' => $request->book_id,
            'review_title' => $request->review_title,
            'review_details' => $request->review_details,
            'rating_star' => $request->rating_star,
            'review_date' => Carbon::now()->toDateString(),
        ];

        $newProduct = Review::create($body);

        return $this->index($newProduct,'success', 'Create Review Successfully');
    }
}
