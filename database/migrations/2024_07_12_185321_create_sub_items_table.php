<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    { if (!Schema::hasTable('sub_items')) {
        Schema::create('sub_items', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('link');
            $table->unsignedBigInteger('parentId');
            $table->foreign('parentId')->references('id')->on('menus')->onDelete('cascade');
            $table->timestamps();
        });
      }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_items');
    }
};
