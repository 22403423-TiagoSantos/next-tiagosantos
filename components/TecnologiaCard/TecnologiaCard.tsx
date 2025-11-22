import Link from "next/link";

interface TecnologiaProps {
    title: string;
    image: string;
    index: number;
}

export default function TecnologiaCard({ title, image, index }: TecnologiaProps) {

    return (
        <Link href={`/tecnologias/${index}`}>
            <div className="w-44 h-44 bg-pink-700 text-white rounded-xl p-4 m-3 flex flex-col items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="w-16 h-16"
                />
                <h2 className="text-center">{title}</h2>
            </div>
        </Link>
    );
}
