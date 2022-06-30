<?php

namespace App\Http\Controllers;

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
}
