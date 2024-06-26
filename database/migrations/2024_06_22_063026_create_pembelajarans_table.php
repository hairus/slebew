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
    {
        Schema::create('pembelajarans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rb_id');
            $table->string('pembelajaran_id')->nullable();
            $table->string('mata_pelajaran_id')->nullable();
            $table->string('mata_pelajaran_id_str')->nullable();
            $table->string('ptk_terdaftar_id')->nullable();
            $table->string('ptk_id')->nullable();
            $table->string('nama_mata_pelajaran')->nullable();
            $table->string('induk_pembelajaran_id')->nullable();
            $table->string('jam_mengajar_per_minggu')->nullable();
            $table->string('status_di_kurikulum')->nullable();
            $table->string('status_di_kurikulum_str')->nullable();

//            $table->foreign('rb_id')->references('id')->on('rombongan_belajar')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pembelajarans');
    }
};
