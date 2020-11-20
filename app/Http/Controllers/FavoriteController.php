<?php

namespace App\Http\Controllers;

use App\Http\Resources\FavoriteResource;
use App\Models\Favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{

    public function __construct()
    {
      $this->middleware('auth:api', ['except' => ['index']]);
    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FavoriteResource::collection(Favorite::paginate(5));
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
          'user_id' => 'required',
          'product_id' => 'required',
          'favorite' => 'required'
        ]);
        
        $favorite = new Favorite;
        $favorite->user_id = auth()->user()->id; // laravel passport doesn't work
        $favorite->product_id = $request->product_id;
        $favorite->favorite = $request->favorite;
        $favorite->save();
        return new FavoriteResource($favorite);
    }



    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show($id)
    // {
    //     //
    // }



    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(Request $request, $id)
    // {
    //     //
    // }



    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy($id)
    // {
    //     //
    // }

}
