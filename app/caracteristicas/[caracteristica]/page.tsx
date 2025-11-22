import Link from "next/link";

interface CaracteristicaPageProps {
    params: { caracteristica: string };
}

export default function CaracteristicaPage({ params }: CaracteristicaPageProps) {
    const { caracteristica } = params;

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-blue-600 text-white p-8 rounded-xl">
                {caracteristica}
            </div>

            <Link
                href="/caracteristicas"
                className="bg-gray-700 text-white rounded-xl"
            >
                Voltar
            </Link>
        </div>
    );
}
