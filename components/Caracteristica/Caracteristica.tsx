import Link from "next/link";

interface CaracteristicaProps {
    caracteristica: string;
}

export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
    return (
        <Link href={`/caracteristicas/${caracteristica}`}>
            <div className="bg-blue-600 text-white p-4 m-3 rounded-xl w-48 text-center">
                {caracteristica}
            </div>
        </Link>
    );
}