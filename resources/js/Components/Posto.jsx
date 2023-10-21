import { usePage } from "@inertiajs/react";

export default function Posto() {
    const { posto } = usePage().props;
    return (
        <div>
            <table>
                <thead>
                    <tr className="text-center">
                        <th className="">Local</th>
                        <th>Função</th>
                        <th>Horario do posto</th>
                        <th>#</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {posto.map((posto, index) => (
                        <tr key={index}>
                            <td>{posto.local}</td>
                            <td>{posto.funcao}</td>
                            <td>{posto.horarioPosto}</td>
                            <td><a href={`editPosto/${posto.idPosto}`}>Editar</a></td>
                            <td><a href={`deletePosto/${posto.idPosto}`}>Excluir</a></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}