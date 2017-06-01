<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('maincategories_id');
            $table->integer('subcategories_id');
            $table->string('name')->index();
            $table->double('price');
            $table->double('discount');
            $table->string('image');
            $table->double('count');
            $table->string('code');
            $table->double('tax');
            $table->double('number_in_box');
            $table->tinyInteger('unit');
            $table->tinyInteger('active');
            $table->string('country');
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
        Schema::dropIfExists('products');
    }
}
