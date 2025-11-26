"use client"

import tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import Link from "next/link";

export default function TecnologiasPage() {


    return (
        <div className="flex flex-wrap gap-4 p-4">
            {tecnologias.map((tecnologias, index) => (
                <Link href={`/tecnologias/${index}`} key={index}>
                    <TecnologiaCard
                        title={tecnologias.title}
                        image={tecnologias.image}
                    />
                </Link>
            ))}
        </div>
    );
}
