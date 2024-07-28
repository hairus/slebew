<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ptks extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function pembelajarans()
    {
        return $this->hasMany(pembelajaran::class, 'ptk_id', 'ptk_id');
    }
}
