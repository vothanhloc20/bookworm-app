<?php

namespace App\Repositories\Author;

use App\Http\Traits\ApiResponse;
use App\Models\Author;

class AuthorRepository implements AuthorInterface
{
    use ApiResponse;

    public function getAllAuthors()
    {
        $data = Author::query()
            ->select('author_name')
            ->orderBy('author_name')
            ->get();

        return $this->index($data, 'success', 'Get Data Successfully');
    }
}
