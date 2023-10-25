<?php

namespace App\Http\Controllers;

use App\Models\Afastamento;
use App\Models\Funcionario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AfastamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'periodo' => 'required',
            'motivo' => 'required',
            'idFuncionario' => 'required',
        ]);
        try {
            Afastamento::create([
                'periodo' => $request->periodo,
                'motivo' => $request->motivo,
                'idFuncionario' => $request->idFuncionario,
            ]);

            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Afastamento $afastamento)
    {
        $funcionario = Funcionario::all();

        return Inertia::render('afastamento/CadastroAfastamento', [
            'funcionarios' => $funcionario
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $afastamento = Afastamento::find($id);
        $funcionario = Funcionario::all();

        return Inertia::render('afastamento/EditAfastamento', [
            'afastamentos' => $afastamento,
            'funcionarios' => $funcionario
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Afastamento $afastamento)
    {
        $request->validate([
            'periodo' => 'required',
            'motivo' => 'required',
            'idFuncionario' => 'required',
            'idAfastamento' => 'required',
        ]);
        try {
            Afastamento::where('idAfastamento', $request->idAfastamento)->update([
                'periodo' => $request->periodo,
                'motivo' => $request->motivo,
                'idFuncionario' => $request->idFuncionario,
            ]);

            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Afastamento::find($id)->delete();
        return redirect(route('dashboard'));
    }
}
