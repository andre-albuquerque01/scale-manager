<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Funcionario', function (Blueprint $table) {
            $table->id('idFuncionario');
            $table->string('nomeCompleto', 150);
            $table->string('cpf', 14)->unique();
            $table->string('endereco', 100);
            $table->string('email', 100);
            $table->string('telefone', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
