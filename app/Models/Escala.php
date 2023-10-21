<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Escala extends Model
{
    use HasFactory;
    protected $table = 'Escala';
    protected $primaryKey = 'idEscala';
    protected $fillable = [
        'horarioPosto',
        'data',
        'idPosto'
    ];
}
