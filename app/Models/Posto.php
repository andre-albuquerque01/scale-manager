<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posto extends Model
{
    use HasFactory;
    protected $table = 'Posto';
    protected $primaryKey = 'idPosto';
    protected $fillable = [
        'local',
        'funcao',
        'horarioPosto'
    ];
}
