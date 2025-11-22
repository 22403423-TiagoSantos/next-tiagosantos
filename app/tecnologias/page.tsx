import tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";

export default function TecnologiasPage() {
    

    return (
        <div className="flex flex-wrap gap-4 p-4">
            {tecnologias.map((tecnologias, index) => (
                <TecnologiaCard
                    key={index}
                    title={tecnologias.title}
                    image={tecnologias.image}
                    index={index}
                />
            ))}
        </div>
    );
}
