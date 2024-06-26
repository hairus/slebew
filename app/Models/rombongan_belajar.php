<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class rombongan_belajar extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function anggotas()
    {
        return $this->hasMany(anggotaRombel::class, 'rb_id', 'id');
    }

    public function pembelajarans()
    {
        return $this->hasMany(pembelajaran::class, 'rb_id');
    }
}
