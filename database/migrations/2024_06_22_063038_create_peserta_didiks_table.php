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
        Schema::create('peserta_didiks', function (Blueprint $table) {
            $table->id();
            $table->string('peserta_didik_id')->nullable();
            $table->string('nama')->nullable();
            $table->string('nisn')->nullable();
            $table->string('anggota_rombel_id')->nullable();
            $table->string('rombongan_belajar_id')->nullable();
            $table->string('nama_rombel')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peserta_didiks');
    }
};
