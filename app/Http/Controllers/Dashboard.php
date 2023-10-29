<?php

namespace App\Http\Controllers;

use App\Models\Afastamento;
use App\Models\Escala;
use App\Models\FuncionarioEscala;
use App\Models\FuncionarioPosto;
use App\Models\Posto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Dashboard extends Controller
{
    public function index(){
        $posto = Posto::all();
        $afatamento = Afastamento::join('funcionario', 'funcionario.idFuncionario', '=', 'afastamento.idFuncionario')->get();
        $escala = Escala::join('posto', 'posto.idPosto', '=', 'escala.idPosto')->get();
        $funcionarioPosto = FuncionarioPosto::join('posto', 'posto.idPosto', '=', 'funcionario_has_posto.idPosto')->join('funcionario', 'funcionario.idFuncionario', '=', 'funcionario_has_posto.idFuncionario')->get();
        $funcionarioEscala = FuncionarioEscala::join('escala', 'escala.idEscala', '=', 'funcionario_has_escala.idEscala')->join('funcionario', 'funcionario.idFuncionario', '=', 'funcionario_has_escala.idFuncionario')->join('posto', 'posto.idPosto', '=', 'escala.idPosto')->get();
        return Inertia::render('Dashboard', [
            'posto' => $posto,
            'afatamento' => $afatamento,
            'escala' => $escala,
            'funcionarioPosto' => $funcionarioPosto,
            'funcionarioEscala' => $funcionarioEscala,
        ]);
    }
}
