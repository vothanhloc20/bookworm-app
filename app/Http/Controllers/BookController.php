<?php

namespace App\Http\Controllers;

use App\Repositories\Book\BookRepository;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function getAllBooks(Request $request)
    {
        return $this->bookRepository->getAllBooks($request);
    }

    public function getTopTenOnSaleBooks()
    {
        return $this->bookRepository->getTopTenOnSaleBooks();
    }

    public function getRecommendedBooks()
    {
        return $this->bookRepository->getRecommendedBooks();
    }

    public function getPopularBooks()
    {
        return $this->bookRepository->getPopularBooks();
    }

    public function getBookById($id)
    {
        return $this->bookRepository->getBookById($id);
    }
}
