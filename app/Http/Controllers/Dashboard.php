<?php

namespace App\Http\Controllers;

use App\Models\Afastamento;
use App\Models\Escala;
use App\Models\Funcionario;
use App\Models\FuncionarioEscala;
use App\Models\FuncionarioPosto;
use App\Models\Posto;
use Inertia\Inertia;

class Dashboard extends Controller
{
    public function dashboard()
    {
        $afatamento = Afastamento::join('funcionario', 'funcionario.idFuncionario', '=', 'afastamento.idFuncionario')->get();
        return Inertia::render('Dashboard', [
            'afatamento' => $afatamento,
        ]);
    }
    public function posto()
    {
        $posto = Posto::all();
        return Inertia::render('posto/Posto', [
            'posto' => $posto,
        ]);
    }
    public function escala()
    {
        $escala = Escala::join('posto', 'posto.idPosto', '=', 'escala.idPosto')->get();
        return Inertia::render('escala/Escala', [
            'escala' => $escala,
        ]);
    }
    public function funcionarioPosto()
    {
        $funcionarioPosto = FuncionarioPosto::join('posto', 'posto.idPosto', '=', 'funcionario_has_posto.idPosto')->join('funcionario', 'funcionario.idFuncionario', '=', 'funcionario_has_posto.idFuncionario')->get();
        return Inertia::render('alocacao/AlocacaoPosto', [
            'funcionarioPosto' => $funcionarioPosto,
        ]);
    }
    public function funcionarioEscala()
    {
        $funcionarioEscala = FuncionarioEscala::join('escala', 'escala.idEscala', '=', 'funcionario_has_escala.idEscala')->join('funcionario', 'funcionario.idFuncionario', '=', 'funcionario_has_escala.idFuncionario')->join('posto', 'posto.idPosto', '=', 'escala.idPosto')->get();
        return Inertia::render('alocacao/AlocacaoEscala', [
            'funcionarioEscala' => $funcionarioEscala,
        ]);
    }
    public function funcionario($id)
    {
        $funcionario = Funcionario::find($id);
        $funcionarioEscala = FuncionarioEscala::join('funcionario', 'funcionario.idFuncionario', '=', 'funcionario_has_escala.idFuncionario')->join('escala',  'escala.idEscala', '=', 'funcionario_has_escala.idEscala')->where('funcionario.idFuncionario', '=', $id)->get();
        $afatamento = Afastamento::join('funcionario', 'funcionario.idFuncionario', '=', 'afastamento.idFuncionario')->where('funcionario.idFuncionario', '=', $id)->get();
        return Inertia::render('funcionarios/Funcionarios', [
            'funcionarios' => $funcionario,
            'afatamento' => $afatamento,
            'funcionarioEscala' => $funcionarioEscala,
        ]);

    }
}
