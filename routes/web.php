<?php

define('ADMIN', 1);
define('CUSTOMER', 2);

define('CASH', 3);
define('CHEQUE', 4);
define('PART_PAY', 5);

define('BOX', 6);
define('UN_BOX', 7);

define('IMAGE_PATH', 'uploads');

define('ACTIVE', 1);

Route::get('/', 'PageController@index');
Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::get('/profile', 'UserController@profile');

Route::resource('/factor', 'FactorController');
Route::resource('/person', 'PersonsController');