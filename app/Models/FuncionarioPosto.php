<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FuncionarioPosto extends Model
{
    use HasFactory;
    protected $table = 'funcionario_has_posto';
    protected $primaryKey = 'idFuncionario_has_posto';

    protected $fillable = [
        'idFuncionario',
        'idPosto'
    ];
}
