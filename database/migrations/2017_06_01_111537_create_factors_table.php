<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factors', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id'); //برای کیه
            $table->integer('delivery_id'); //روز تحویل
            $table->dateTime('date_delivery'); //تاریخ تحویل
            $table->integer('pay_type'); // نوع پرداخت
            $table->double('total_price');
            $table->double('total_count');
            $table->double('total_discount');
            $table->double('total_tax');
            $table->tinyInteger('confirmed'); //تایید شده
            $table->dateTime('confirmed_date'); //تاریخ تایید
            $table->integer('confirmed_user');// کننده تایید
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factors');
    }
}
