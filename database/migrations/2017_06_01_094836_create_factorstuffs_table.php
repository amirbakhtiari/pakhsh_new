<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactorstuffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factorstuffs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('factor_id');
            $table->integer('product_id');
            $table->double('count');
            $table->double('price');
            $table->double('discount');
            $table->string('unit');
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
        Schema::dropIfExists('factorstuffs');
    }
}
