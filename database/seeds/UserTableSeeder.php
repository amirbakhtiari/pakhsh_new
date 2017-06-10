<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        DB::table('users')->insert([
            'first_name' => 'امیر',
            'last_name' => 'بختیاری',
            'phone_number' => '09351725760',
            'address' => 'karaj',
            'mobile' => '09351725760',
            'email' => 'amir.bakhtiari@ymail.com',
            'password' => bcrypt('1'),
            'username' => '09351725760',
            'type' => ADMIN
        ]);

        DB::table('users')->insert([
            'first_name' => 'حمید',
            'last_name' => 'زهرهوند',
            'phone_number' => '09352863711',
            'address' => 'karaj',
            'mobile' => '09352863711',
            'email' => 'hamid.zohre@ymail.com',
            'password' => bcrypt('1'),
            'username' => '09352863711',
            'type' => ADMIN
        ]);

    }
}
