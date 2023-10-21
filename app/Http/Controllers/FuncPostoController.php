<?php

namespace App\Http\Controllers;

use App\Models\Funcionario;
use App\Models\FuncionarioPosto;
use App\Models\Posto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FuncPostoController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'idFuncionario' => 'required',
            'idPosto' => 'required',
        ]);
        try {
            FuncionarioPosto::create([
                'idFuncionario' => $request->idFuncionario,
                'idPosto' => $request->idPosto,
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
        $postos = Posto::all();

        return Inertia::render('alocacao/CadastroFuncPosto', [
            'funcionarios' => $funcionarios,
            'postos' => $postos,
        ]);
    }

    public function edit($id)
    {
        $FuncionarioPosto = FuncionarioPosto::find($id);
        $funcionarios = Funcionario::all();
        $postos = Posto::all();

        return Inertia::render('alocacao/EditFuncPosto', [
            'funcionarioPosto' => $FuncionarioPosto,
            'funcionarios' => $funcionarios,
            'postos' => $postos,
        ]);
    }

    public function update(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'idFuncionario' => 'required',
            'idPosto' => 'required',
            'idFuncionario_has_posto' => 'required',
        ]);
        try {
            FuncionarioPosto::where('idFuncionario_has_posto', $request->idFuncionario_has_posto)->update([
                'idFuncionario' => $request->idFuncionario,
                'idPosto' => $request->idPosto,
            ]);
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return response()->json(['errors' => 'Não foi inserido']);
        }
    }
    
    public function destroy($id)
    {
        FuncionarioPosto::find($id)->delete();
        return redirect(route('dashboard'));
    }
}
