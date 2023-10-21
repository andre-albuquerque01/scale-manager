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
        Schema::create('Funcionario_has_escala', function (Blueprint $table) {
            $table->id('idFuncionario_has_escala');
            $table->unsignedBigInteger('idFuncionario'); 
            $table->foreign('idFuncionario')->references('idFuncionario')->on('Funcionario')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('idEscala'); 
            $table->foreign('idEscala')->references('idEscala')->on('Escala')->onDelete('cascade')->onUpdate('cascade');
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
