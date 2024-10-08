<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class menu extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function subMenus()
    {
        return $this->hasMany(SubItem::class, 'parentId', 'id');
    }
}
