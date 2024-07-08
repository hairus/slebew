<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class peserta_didik extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function komite()
    {
        return $this->hasOne(trx_komite::class, 'nisn', 'nisn');
    }
}
