<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class trx_komite extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function peserta_didiks()
    {
        return $this->belongsTo(peserta_didik::class, 'nisn', 'nisn');
    }

    public function kelas()
    {
        return $this->belongsTo(rombongan_belajar::class, 'kelas_id', 'rombongan_belajar_id');
    }

    public function getCreatedAtAttribute($value){
        $date = Carbon::parse($value);
        return $date->format('Y-m-d H:i:s');
    }
}
