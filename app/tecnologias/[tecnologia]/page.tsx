import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaDetailsCard from "@/components/TecnologiaDetailsCard/TecnologiaDetailsCard";
import Link from "next/link";

interface TecnologiaPageProps {
    params: { id: string };
}

export default function TecnologiaPage({ params }: TecnologiaPageProps) {
    const index = parseInt(params.id);

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
