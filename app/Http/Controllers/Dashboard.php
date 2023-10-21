<?php

namespace App\Http\Controllers;

use App\Models\Posto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Dashboard extends Controller
{
    public function index(){
        $posto = Posto::all();
        return Inertia::render('Dashboard', [
            'posto' => $posto,
        ]);
    }
}
