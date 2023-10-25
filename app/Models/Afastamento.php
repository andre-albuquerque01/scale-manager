<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Afastamento extends Model
{
    use HasFactory;

    protected $table = 'Afastamento';
    protected $primaryKey = 'idAfastamento';
    protected $fillable = [
        'periodo',
        'motivo',
        'idFuncionario',
    ];
}
