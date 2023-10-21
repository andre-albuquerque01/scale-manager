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
        Schema::create('Escala', function (Blueprint $table) {
            $table->id('idEscala');
            $table->string('horarioPosto', 45);
            $table->date('data');
            $table->unsignedBigInteger('idPosto'); 
            $table->foreign('idPosto')->references('idPosto')->on('Posto')->onDelete('cascade')->onUpdate('cascade');
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
