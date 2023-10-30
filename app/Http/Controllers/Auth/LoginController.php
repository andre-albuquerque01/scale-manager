<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class LoginController extends Controller
{
    public function create()
    {
        // return Inertia::render('Auth/Login');
        return redirect(route('dashboard'));
    }
    public function act()
    {
        return Inertia::render('Auth/Login');
    }

    public function auth(Request $request)
    {
        $credenciais = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credenciais)) {
            $request->session()->regenerate();
            return redirect(route('dashboard'));
        }
        return back()->withErrors([
            'email' => 'As credenciais fornecidas não correspondem ao do nosso registro.',
        ])->onlyInput('email');
    }

    public function destroy()
    {
        auth()->logout();
        return redirect(route('login'));
    }
}
