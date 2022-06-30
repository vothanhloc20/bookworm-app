<?php

namespace App\Repositories\Category;

use App\Http\Traits\ApiResponse;
use App\Models\Category;

class CategoryRepository implements CategoryInterface
{
    use ApiResponse;

    public function getAllCategories()
    {
        $data = Category::query()
            ->select('category_name')
            ->orderBy('category_name')
            ->get();

        return $this->index($data, 'success', 'Get Data Successfully');
    }
}
