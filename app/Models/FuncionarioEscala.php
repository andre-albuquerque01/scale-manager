<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FuncionarioEscala extends Model
{
    use HasFactory;
    protected $table = 'funcionario_has_escala';
    protected $primaryKey = 'idFuncionario_has_escala';

    protected $fillable = [
        'idFuncionario',
        'idEscala'
    ];
}
