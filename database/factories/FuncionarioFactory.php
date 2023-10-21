<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Funcionario>
 */
class FuncionarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nomeCompleto' => fake()->name(),
            'cpf' => fake()->text,
            'endereco' => fake()->address(),
            'email' => fake()->unique()->safeEmail(),
            'telefone' => fake()->phoneNumber(),
        ];
    }
    
}
