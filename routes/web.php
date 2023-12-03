<?php

use App\Http\Controllers\AfastamentoController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\EscalaController;
use App\Http\Controllers\FuncEscalaController;
use App\Http\Controllers\FuncPostoController;
use App\Http\Controllers\PostoController;
use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\RecuperarSenha;
use App\Http\Controllers\RelController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/entrar', [LoginController::class, 'act'])->name('login');
Route::redirect('/', '/entrar');
Route::post('LogIn', [LoginController::class, 'auth'])->name('LogIn');
// Recuperar senha
Route::inertia('/recuperarSenha', 'Auth/RecuperarSenha')->name('recuperarSenha');
Route::post('recuperaEmail', [RecuperarSenha::class, 'SendEmail'])->name('recuperaEmail');

Route::middleware(['auth'])->group(function () {
    // Route::get('/dashboard', [RelController::class, 'index'])->name('dashboard');
    // Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    Route::get('/', [Dashboard::class, 'dashboard'])->name('dashboard');
    Route::get('/dashboard', [Dashboard::class, 'dashboard'])->name('dashboard');
    Route::get('/posto', [Dashboard::class, 'posto'])->name('posto');    
    Route::get('/escala', [Dashboard::class, 'escala'])->name('escala');
    Route::get('/funcionarioPosto', [Dashboard::class, 'funcionarioPosto'])->name('funcionarioPosto');
    Route::get('/funcionarioEscala', [Dashboard::class, 'funcionarioEscala'])->name('funcionarioEscala');
    Route::get('/funcionario/{id}', [Dashboard::class, 'funcionario'])->name('funcionario');

    Route::inertia('/cadastroPosto', 'posto/CadastroPosto')->name('cadastroPosto');
    Route::post('postoCadastro', [PostoController::class, 'store'])->name('postoCadastro');
    Route::get('/editPosto/{id}', [PostoController::class, 'show'])->name('editPosto');
    Route::post('updatePosto', [PostoController::class, 'update'])->name('updatePosto');
    Route::get('/deletePosto/{id}', [PostoController::class, 'destroy'])->name('deletePosto');

    // Escala
    Route::get('/cadastroEscala', [EscalaController::class, 'index'])->name('cadastroEscala');
    Route::post('/EscalaCadastro', [EscalaController::class, 'store'])->name('EscalaCadastro');
    Route::get('/editEscala/{id}', [EscalaController::class, 'show'])->name('editEscala');
    Route::post('updateEscala', [EscalaController::class, 'update'])->name('updateEscala');
    Route::get('/deleteEscala/{id}', [EscalaController::class, 'destroy'])->name('deleteEscala');

    // Alocação Escala
    Route::get('/CadastroFuncEscala', [FuncEscalaController::class, 'show'])->name('CadastroFuncEscala');
    Route::post('/CadFuncEscala', [FuncEscalaController::class, 'store'])->name('CadFuncEscala');
    Route::get('/EditFuncEscala/{id}', [FuncEscalaController::class, 'edit'])->name('EditFuncEscala');
    Route::post('/UpFuncEscala', [FuncEscalaController::class, 'update'])->name('UpFuncEscala');
    Route::get('/deleteFuncEscala/{id}', [FuncEscalaController::class, 'destroy'])->name('UpFuncEscala');

    // Alocação Posto
    Route::get('/CadastroFuncPosto', [FuncPostoController::class, 'show'])->name('CadastroFuncPosto');
    Route::post('/CadFuncPosto', [FuncPostoController::class, 'store'])->name('CadFuncPosto');
    Route::get('/EditFuncPosto/{id}', [FuncPostoController::class, 'edit'])->name('EditFuncPosto');
    Route::post('/UpFuncPosto', [FuncPostoController::class, 'update'])->name('UpFuncPosto');
    Route::get('/deleteFuncPosto/{id}', [FuncPostoController::class, 'destroy'])->name('deleteFuncPosto');
    
    // Afastamento
    Route::get('/CadastroAfastamento', [AfastamentoController::class, 'show'])->name('CadastroAfastamento');
    Route::post('/CadAfastamento', [AfastamentoController::class, 'store'])->name('CadAfastamento');
    Route::get('/EditAfastamento/{id}', [AfastamentoController::class, 'edit'])->name('EditAfastamento');
    Route::post('/UpAfastamento', [AfastamentoController::class, 'update'])->name('UpAfastamento');
    Route::get('/deleteAfastamento/{id}', [AfastamentoController::class, 'destroy'])->name('deleteAfastamento');

    Route::get('EditRegistro', [RegisteredUserController::class, 'show'])
        ->name('EditRegistro');
    Route::post('upRegistro', [RegisteredUserController::class, 'update'])
        ->name('upRegistro');
    Route::get('/excluirUser', [RegisteredUserController::class, 'destroy'])->name('excluirUser');

    Route::get('logout',  [LoginController::class, 'destroy'])->name('logout');
});



require __DIR__ . '/auth.php';
