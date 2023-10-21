<?php

namespace App\Http\Controllers;

use App\Mail\RecuperarSenha as MailRecuperarSenha;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class RecuperarSenha extends Controller
{
    public function SendEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|exists:users,email',
        ],[
            'email'=> 'E-mail não cadastrado'
        ]);

        // Gere uma nova senha para o usuário
        $newPassword = Str::random(8);

        // Atualize a senha do usuário no banco de dados
        $user = User::where('email', $request->email)->first();
        $user->password = Hash::make($newPassword);
        $user->save();

        // Envie um e-mail com a nova senha para o usuário
        Mail::to($user->email)->send(new MailRecuperarSenha([
            'toEmail' => $user->email,
            'subject' => 'Redefinir senha',
            'message' => 'Sua senha foi redefinida, agora é ' . $newPassword . ', solicitamos que altere essa senha. Para alterar é só ir em `Perfil`'
        ]));

        // return redirect(route('login'));
    }
}
