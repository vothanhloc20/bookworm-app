<?php

namespace App\Http\Controllers;

use App\Repositories\Author\AuthorRepository;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public $authorRepository;

    public function __construct(AuthorRepository $authorRepository)
    {
        $this->authorRepository = $authorRepository;
    }

    public function getAllAuthors()
    {
        return $this->authorRepository->getAllAuthors();
    }
}
