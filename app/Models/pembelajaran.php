<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pembelajaran extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function gurus()
    {
        return $this->hasOne(ptks::class, 'ptk_id', 'ptk_id');
    }

    public function rombels()
    {
        return $this->belongsTo(rombongan_belajar::class, 'rb_id');
    }
}
