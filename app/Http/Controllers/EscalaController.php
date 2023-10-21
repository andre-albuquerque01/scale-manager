<?php

namespace App\Http\Controllers;

use App\Models\Escala;
use App\Models\Posto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EscalaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posto = Posto::all();
        return Inertia::render('escala/CadastroEscala', [
            'posto' => $posto,
        ]);
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
            'horarioPosto' => 'required',
            'data' => 'required|date',
            'idPosto' => 'required',
        ]);
        try {
            Escala::create([
                'horarioPosto' => $request->horarioPosto,
                'data' => $request->data,
                'idPosto' => $request->idPosto,
            ]);
            // return Inertia::render('escala/CadastroEscala', [
            //     'success' => 'Cadastro feito com sucesso'
            // ]);
            return redirect()->route('dashboard')->with('success', 'Cadastro feito com sucesso');
        } catch (\Exception $e) {
            // return Inertia::render('escala/CadastroEscala', [
            //     'error' => 'Cadastro não realizado'
            // ]);
            return redirect(route('dashboard'));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $posto = Posto::all();
        $escala = Escala::find($id);
        return Inertia::render('escala/EditEscala', [
            'escala' => $escala,
            'posto' => $posto,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Escala $escala)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // dd($request->all()   );
        $request->validate([
            'horarioPosto' => 'required',
            'data' => 'required|date',
            'idPosto' => 'required',
            'idEscala' => 'required',
        ]);
        try {
            Escala::where('idEscala', $request->idEscala)->update([
                'horarioPosto' => $request->horarioPosto,
                'data' => $request->data,
                'idPosto' => $request->idPosto,
            ]);
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return redirect(route('dashboard'));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Escala::find($id)->delete();
        return redirect(route('dashboard'));
    }
}
