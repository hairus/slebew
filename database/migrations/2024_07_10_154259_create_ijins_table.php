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
      if (!Schema::hasTable('ijins')) {
        Schema::create('ijins', function (Blueprint $table) {
            $table->id();
            $table->string('ptk_id')->index();
            $table->string('kelas_id')->index();
            $table->string('mapel_id')->index();
            $table->date('dari');
            $table->date('sampai');
            $table->string('ket');
            $table->text('desk');
            $table->timestamps();
        });
      }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ijins');
    }
};
