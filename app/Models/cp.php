<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cp extends Model
{
  use HasFactory;

  protected $guarded = [];
  // protected table name
  protected $table = 'cp';
}
