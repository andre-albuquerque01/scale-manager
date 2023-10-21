<?php

namespace App\Http\Controllers;

use App\Models\Escala;
use App\Models\Funcionario;
use App\Models\FuncionarioEscala;
use App\Models\Posto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $turmas = Turma::all();
    //     $alunos = Aluno::all();

    //     $relacionamento = Rel::join('alunos', 'alunos.id_aluno', '=', 'rels.alunos_id')
    //         ->join('turmas', 'turmas.id_turma', '=', 'rels.turmas_id')
    //         ->get();

    //     return Inertia::render('Dashboard', [
    //         'relacionamento' => $relacionamento,
    //         'turmas' => $turmas,
    //         'alunos' => $alunos,
    //     ]);
    // }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    //     //
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    public function storeRelFuncEsc(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'idFuncionario' => 'required',
            'idEscala' => 'required',
        ]);
        try {
            FuncionarioEscala::create([
                'idFuncionario' => $request->idFuncionario,
                'idEscala' => $request->idEscala,
            ]);
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return response()->json(['errors' => 'Não foi inserido']);
        }
    }
    public function storeRelFuncPost(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'idFuncionario' => 'required',
            'idEscala' => 'required',
        ]);
        try {
            FuncionarioEscala::create([
                'idFuncionario' => $request->idFuncionario,
                'idEscala' => $request->idEscala,
            ]);
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return response()->json(['errors' => 'Não foi inserido']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function showRelFuncPosto()
    {
        $funcionarios = Funcionario::all();
        $postos = Posto::all();

        return Inertia::render('alocacao/CadastroFuncEscala', [
            'funcionarios' => $funcionarios,
            'postos' => $postos,
        ]);
    }
    public function showRelFuncEsc()
    {
        $funcionarios = Funcionario::all();
        $escala = Escala::all();

        return Inertia::render('alocacao/CadastroFuncEscala', [
            'funcionarios' => $funcionarios,
            'escalas' => $escala,
        ]);
    }

    public function editRelFuncEsc($id)
    {
        $funcionarioEscala = FuncionarioEscala::find($id);
        $funcionarios = Funcionario::all();
        $escala = Escala::all();

        return Inertia::render('alocacao/EditFuncEscala', [
            'funcionarioEscala' => $funcionarioEscala,
            'funcionarios' => $funcionarios,
            'escalas' => $escala,
        ]);
    }

    public function updateFuncEscala(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'idFuncionario' => 'required',
            'idEscala' => 'required',
        ]);
        try {

            FuncionarioEscala::where('idFuncionario_has_escala', $request->idFuncionario_has_escala)->update([
                'idFuncionario' => $request->idFuncionario,
                'idEscala' => $request->idEscala,
            ]);
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return response()->json(['errors' => 'Não foi inserido']);
        }
    }
    /**
     * Show the form for editing the specified resource.
     */
    // public function edit($id)
    // {
    //     $relacionamento = Rel::find($id);
    //     $turmas = Turma::all();
    //     $alunos = Aluno::all();

    //     return Inertia::render('sala/EditSala', [
    //         'turmas' => $turmas,
    //         'alunos' => $alunos,
    //         'relacionamento' => $relacionamento,
    //     ]);
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request)
    // {
    //     // dd($request->all());
    //     $request->validate([
    //         'alunos_id' => 'required',
    //         'turmas_id' => 'required',
    //     ]);
    //     try {
    //         $turma = Turma::find($request->turmas_id);

    //         if ($turma->qtdAlunos <= Rel::where('turmas_id', $request->turmas_id)->count()) {
    //             // return response()->json(['errors' => 'A turma atingiu o limite máximo de alunos permitidos.']);
    //         } else {
    //             Rel::where('id_rels', $request->id_rels)->update([
    //                 'alunos_id' => $request->alunos_id,
    //                 'turmas_id' => $request->turmas_id,
    //             ]);
    //             return redirect(route('dashboard'));
    //         }
    //     } catch (\Exception $e) {
    //         return redirect(route('dashboard'));
    //         return response()->json(['errors' => 'Não foi inserido']);
    //         // return redirect(route('CadastroTurma'));
    //     }
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy($id)
    // {
    //     Rel::find($id)->delete();
    //     return redirect(route('dashboard'));
    // }
}
