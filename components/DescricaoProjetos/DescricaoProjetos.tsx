import Projeto from "../Projeto/Projeto";

export default function DescricaoProjetos() {
    const projetos = [
        {
            nome: "loja",
            url: "https://22403423-tiagosantos.github.io/lab7/index.html"
        },
        {
            nome: "JS",
            url: "https://22403423-tiagosantos.github.io/lab6/index.html"
        },

    ];

    return (
        <> 
        <h1>Os meus projetos</h1> 
        <p>Estes são os meus projetos</p>


            {projetos.map((projeto, index) => (
                <Projeto
                    key={index}
                    nome={projeto.nome}
                    url={projeto.url}
                />
            ))}
        </>

    );
}
