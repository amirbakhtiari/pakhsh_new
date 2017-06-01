<?php

define('ADMIN', 1);
define('CUSTOMER', 2);

define('CASH', 3);
define('CHEQUE', 4);
define('PART_PAY', 5);

define('BOX', 6);
define('UN_BOX', 7);

define('IMAGE_PATH', 'uploads');

Route::get('/', 'PageController@index');
Route::post('/login', 'UserController@login');
Route::post('/register', 'UserController@register');

Route::resource('/factor', 'FactorController');