<?php

namespace App\Http\Controllers;

use App\Model\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function __construct() {
        $this->middleware('jwt.auth', ['only' => 'store', 'update', 'destroy']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Product::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Product::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->maincategoried_id = $request->maincategoried_id;
        $product->subcategoried_id = $request->subcategoried_id;
        $product->name = $request->name;
        $product->price= $request->price;
        $product->discount = $request->discount;
        $product->image = $request->image;
        $product->count = $request->count;
        $product->code = $request->code;
        $product->tax = $request->tax;
        $product->number_in_box = $request->number_in_box;
        $product->unit = $request->unit;
        $product->active = $request->active;
        $product->country = $request->country;
        $product->description = $request->maincategoried_id;
        if($product->save())
            return response()->json(['msg' => 'محصول با موفقیت ذخیره شد']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        if($product->delete())
            return response()->json(['msg' => 'محصول مورد نظر حذف شد']);
    }
}
