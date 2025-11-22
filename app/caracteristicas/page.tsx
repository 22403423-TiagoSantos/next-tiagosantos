'use client';

import Caracteristica from "@/components/Caracteristica/Caracteristica";

export default function CaracteristicasPage() {

    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ]


    return (
        <div className="flex flex-wrap gap-4 p-6">
            {caracteristicas.map((caracteristica, index) => (
                <Caracteristica key={index} caracteristica={caracteristica} />
            ))}
        </div>
    );
}