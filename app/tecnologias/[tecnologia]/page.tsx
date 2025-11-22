import tecnologias from "@/data/tecnologias.json";
import TecnologiaDetailsCard from "@/components/TecnologiaDetailsCard/TecnologiaDetailsCard";
import Link from "next/link";

interface TecnologiaPageProps {
    params: { tecnologia: string };
}

export default function TecnologiaPage({ params }: TecnologiaPageProps) {
    const index = parseInt(params.tecnologia);

    if (isNaN(index) || index < 0 || index >= tecnologias.length) {
        return <p>Tecnologia não encontrada</p>;
    }
    

    const tecnologia = tecnologias[index];

    return (
        <div className="p-6">
            <TecnologiaDetailsCard
                title={tecnologia.title}
                image={tecnologia.image}
                description={tecnologia.description}
                rating={tecnologia.rating}
            />

            <Link
                href="/tecnologias"
                className="bg-gray-700 rounded-xl"
            >
                Voltar
            </Link>
        </div>
    );
}
