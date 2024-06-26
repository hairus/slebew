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
        Schema::create('anggota_rombels', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rb_id');
            $table->string('anggota_rombel_id')->nullable();
            $table->string('peserta_didik_id')->nullable();
            $table->string('jenis_pendaftaran_id')->nullable();
            $table->string('jenis_pendaftaran_id_str')->nullable();

//            $table->foreign('rb_id')->references('id')->on('rombongan_belajars')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anggota_rombels');
    }
};
