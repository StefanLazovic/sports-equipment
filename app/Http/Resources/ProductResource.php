<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
          'id'=> $this->id,
          'title'=> $this->title,
          'description'=>$this->description,
          'price' => $this->price,
          'category' => $this->category,
          // 'created_at' => (string) $this->created_at,
          // 'updated_at' => (string) $this->updated_at,
          // 'user' => $this->user,
          // 'favorite' => $this->favorite,
          // 'average_rating' => $this->ratings->avg('rating')
        ];
    }
}
