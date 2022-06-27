<?php

namespace App\Http\Controllers;

use App\Repositories\Book\BookRepository;

class BookController extends Controller
{
    public $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function getAllBooks()
    {
        return $this->bookRepository->getAllBooks();
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

    public function getAllCategories()
    {
        return $this->bookRepository->getAllCategories();
    }

    public function getAllAuthors()
    {
        return $this->bookRepository->getAllAuthors();
    }

    public function getAllRatingStars()
    {
        return $this->bookRepository->getAllRatingStars();
    }
}
