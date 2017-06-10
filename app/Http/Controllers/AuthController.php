<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
class AuthController extends Controller
{
    public function register(Request $request) {}

    public function login(Request $request) {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required',
            // 'captcha' => 'required'
        ], [
            'username.required' => 'وارد کردن نام کاربری الزامی است.',
            'password.required' => 'وارد کردن رمز الزامی است.',
            // 'captcha.required' => 'وارد کردن عبارت امنیتی الزامی است.'
        ]);
        $credentials = [
            'username' => $request->username,
            'password' => $request->password,
            'type' => ADMIN
        ];
        try {
            if(!$token = JWTAuth::attempt($credentials))
                return response()->json(['msg' => 'نام کاربری یا رمز اشتباه است.'], 404);
        } catch(JWTException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        return response()->json(['token' => $token]);
    }
}
