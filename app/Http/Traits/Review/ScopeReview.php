<?php

namespace App\Http\Traits\Review;

trait ScopeReview
{
    public function scopeFilterBase($query, $request)
    {
        return $query
            ->when($request->has('filter.rating_star'), function ($query) use ($request) {
                $rating_star = $request->query('filter')['rating_star'];

                $query
                    ->where('review.rating_star', $rating_star);
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
                    ->when($sortBy === 'date', function ($query) use ($sortValue) {
                        $query->orderBy('review.review_date', $sortValue);
                    });
            })
            ->when(!$request->has('sort'), function ($query) {
                $query->orderByDesc('review.review_date');
            });

        return $query;
    }
}
