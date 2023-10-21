<?php

namespace App\Http\Controllers;

use App\Models\Escala;
use App\Models\Funcionario;
use App\Models\FuncionarioEscala;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FuncEscalaController extends Controller
{
    public function store(Request $request)
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
    public function show()
    {
        $funcionarios = Funcionario::all();
        $escala = Escala::all();

        return Inertia::render('alocacao/CadastroFuncEscala', [
            'funcionarios' => $funcionarios,
            'escalas' => $escala,
        ]);
    }

    public function edit($id)
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

    public function update(Request $request)
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
    
    public function destroy($id)
    {
        FuncionarioEscala::find($id)->delete();
        return redirect(route('dashboard'));
    }
}
