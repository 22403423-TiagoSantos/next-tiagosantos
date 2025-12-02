import { useEffect, useState } from "react";

export default function Contador() {


    const [count, setCount] = useState<number>(0);
    const [historico, setLista] = useState<number[]>([]);

    useEffect(() => {
        const salvoCount = localStorage.getItem("count");
        const salvoHistorico = localStorage.getItem("historico");

        if (salvoCount) {
            setCount(Number(salvoCount));
        }
        if (salvoHistorico) {
            setLista(JSON.parse(salvoHistorico));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem("count", `${count}`);
    }, [count]);

    useEffect(() => {
        localStorage.setItem("historico", JSON.stringify(historico));
    }, [historico]);

    useEffect(() => {
        document.title = `${count}`;
    }, [count]);

    const cor = count <= 3 ? "text-red-500"
        : count <= 7 ? "text-yellow-400"
            : "text-green-500";

    return <>
        <p> Contador: <span className={cor}>{count}</span></p>

        <button className="bg-blue-200 hover:bg-blue-300 active:bg-blue-400 rounded-xl p-1"
            onClick={() => {
                const novo = count < 10 ? count + 1 : count;
                setCount(novo)
                setLista([...historico, novo])
            }}
        >
            Incrementar
        </button>

        <button className="bg-purple-400 hover:bg-purple-500 active:bg-purple-600 rounded-xl p-1"
            onClick={() => {
                const novo = count > 0 ? count - 1 : count;
                setCount(novo)
                setLista([...historico, novo])
            }}
        >
            Decrementar
        </button>

        <button className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 rounded-xl p-1"

            onClick={() => {
                setCount(0);
                setLista([...historico, 0]);
            }}

        >
            Reset
        </button>

        <p>Lista de números:</p>
        <ul>

            {historico.map((numero, index) => (

                <li key={index}>{numero}</li>

            ))}

        </ul>
    </>


}