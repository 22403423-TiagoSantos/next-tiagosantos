interface TecnologiaDetailsProps {
    title: string;
    image: string;
    description: string;
    rating: number;
}

export default function TecnologiaDetailsCard({
    title,
    image,
    description,
    rating
}: TecnologiaDetailsProps) {

    return (
        <div className="bg-pink-700 text-white p-6 rounded-xl">
            <img
                src={`/images/${image}`}
                alt={title}
                className="w-24 h-24"
            />

            <h1>{title}</h1>

            <p>{description}</p>

            <p>Rating: ⭐ {rating}/5</p>
        </div>
    );
}
