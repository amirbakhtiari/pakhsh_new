<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
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

        dd($request->all());
    }
}
