<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ijin extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'ptk_id', 'ptk_id');
    }

    public function kelas()
    {
        return $this->belongsTo(rombongan_belajar::class,'kelas_id');
    }
}
