<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;

class UserController extends Controller
{
    public function __construct() {
        $this->middleware('jwt.auth');
    }

    public function profile() {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->json($user);
    }
}
