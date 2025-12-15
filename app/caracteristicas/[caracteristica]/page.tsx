"use client";
import { useParams } from 'next/navigation'
import Link from "next/link";


export default function CaracteristicaPage() {
    const { caracteristica } = useParams<{ caracteristica: string }>()

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-blue-600 text-white p-8 rounded-xl">
                {caracteristica}
            </div>

            <Link
                href="/caracteristicas"
            >
                Voltar
            </Link>
        </div>
    );
}
