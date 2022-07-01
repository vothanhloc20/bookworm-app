<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Repositories\Review\ReviewRepository;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public $reviewRepository;

    public function __construct(ReviewRepository $reviewRepository)
    {
        $this->reviewRepository = $reviewRepository;
    }

    public function getAllRatingStars()
    {
        return $this->reviewRepository->getAllRatingStars();
    }

    public function getReviewsByBookId($id, Request $request)
    {
        return $this->reviewRepository->getReviewsByBookId($id, $request);
    }

    public function createNewReview(ReviewRequest $request)
    {
        return $this->reviewRepository->createNewReview($request);
    }
}
