<?php

namespace App\Http\Controllers;

use App\Repositories\Category\CategoryRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public $CategoryRepository;

    public function __construct(CategoryRepository $CategoryRepository){
        $this->CategoryRepository = $CategoryRepository;
    }

    public function getAllCategories()
    {
        return $this->CategoryRepository->getAllCategories();
    }
}
