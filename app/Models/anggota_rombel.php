<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class anggota_rombel extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function peserta_didiks()
    {
        return $this->belongsTo(peserta_didik::class, 'peserta_didik_id', 'peserta_didik_id');
    }

    public function rombels()
    {
        return $this->belongsTo(rombongan_belajar::class, 'rb_id');
    }
}
