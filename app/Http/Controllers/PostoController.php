<?php

namespace App\Http\Controllers;

use App\Models\Posto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostoController extends Controller
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
            'local' => 'required',
            'funcao' => 'required',
            'horarioPosto' => 'required',
        ]);
        try {
            Posto::create([
                'local' => $request->local,
                'funcao' => $request->funcao,
                'horarioPosto' => $request->horarioPosto,
            ]);
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            echo $e;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $posto = Posto::find($id);
        Inertia::share('posto', $posto);

        return Inertia::render('posto/EditPosto');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Posto $posto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'idPosto' => 'required',
            'local' => 'required',
            'funcao' => 'required',
            'horarioPosto' => 'required',
        ]);
        try {
            Posto::where('idPosto', $request->idPosto)->Update([
                'local' => $request->local,
                'funcao' => $request->funcao,
                'horarioPosto' => $request->horarioPosto,
            ]);
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            echo $e;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Posto::find($id)->delete();
        return redirect(route('dashboard'));
    }
}
