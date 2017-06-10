<?php

namespace App\Http\Controllers;

use App\Model\Person;
use Illuminate\Http\Request;

class PersonsController extends Controller
{
    public function __construct() {
        $this->middleware('jwt.auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Person::all();
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
        Person::create([
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'zone_id' => $request->zone_id,
            'type' => $request->type,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone_number' => $request->phone_number,
            'address' => $request->address,
            'mobile' => $request->mobile,
            'status' => ACTIVE,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'username' => $request->username,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Person::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Person::finOrFail($id);
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
        $person = Person::findOrFail($id);
        $person->state_id = $request->state_id;
        $person->city_id = $request->city_id;
        $person->zone_id = $request->zone_id;
        $person->type > $request->type;
        $person->first_name = $request->first_name;
        $person->last_name = $request->last_name;
        $person->phone_number = $request->phone_number;
        $person->address = $request->address;
        $person->mobile = $request->mobile;
        $person->status = ACTIVE;
        $person->email = $request->email;
        $person->password = bcrypt($request->password);
        $person->username = $request->username;
        if($request->save())
            return response()->json(['msg' => 'تغییرات شما با موفقیت ذخیره شده']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $person = Person::findOrFail($id);
        $person->delete();
    }
}
