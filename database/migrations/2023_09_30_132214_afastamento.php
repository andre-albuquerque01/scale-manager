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
        Schema::create('Afastamento', function (Blueprint $table) {
            $table->id('idAfastamento');
            $table->string('periodo', 45);
            $table->string('motivo', 45);
            $table->unsignedBigInteger('idFuncionario'); 
            $table->foreign('idFuncionario')->references('idFuncionario')->on('Funcionario')->onDelete('cascade')->onUpdate('cascade');
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
