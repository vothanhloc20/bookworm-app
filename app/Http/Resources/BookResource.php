<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'book_title' => $this->book_title,
            'author_name' => $this->author_name,
            'book_cover_photo' => $this->book_cover_photo,
            'discount_price' => $this->discount_price,
            'final_price' => $this->final_price
        ];
    }
}
