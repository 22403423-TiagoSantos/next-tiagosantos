"use client"

import { useState } from 'react'

export default function InputPage() {

  
  const [texto, setTexto] = useState("")

 
  const [opcao, setOpcao] = useState("HTML")

 
  const [tarefas, setTarefas] = useState<string[]>([])
  const [novaTarefa, setNovaTarefa] = useState<string>("")
  const [editando, setEditando] = useState<number | null>(null)
  const [textoEdicao, setTextoEdicao] = useState("")

  function adicionarTarefa() {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa])
    setNovaTarefa("")
  }

  function apagarTarefa(index: number) {
    setTarefas(tarefas.filter((_, i) => i !== index))
  }

  function guardarEdicao(index: number) {
    const copia = [...tarefas]
    copia[index] = textoEdicao
    setTarefas(copia)
    setEditando(null)
    setTextoEdicao("")
  }

  return (
    <section className="flex flex-col gap-8 p-4">

    
      <div>
        <h2>Eco do Input</h2>

        <input
          type="text"
          placeholder="Escreva algo..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <p>Texto digitado: {texto}</p>
      </div>


      
      <div>
        <h2>Tecnologias</h2>

        <select
          value={opcao}
          onChange={(e) => setOpcao(e.target.value)}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
        </select>

        <p>Tecnologia escolhida: {opcao}</p>
      </div>


     
      <div>
        <h2>Lista de Tarefas</h2>

        <input
          type="text"
          placeholder="Nova tarefa..."
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />

        <button onClick={adicionarTarefa}>Adicionar</button>

        <p>Tarefas:</p>

        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {editando === index ? (
                <>
                  <input
                    value={textoEdicao}
                    onChange={(e) => setTextoEdicao(e.target.value)}
                  />
                  <button onClick={() => guardarEdicao(index)}>Guardar</button>
                </>
              ) : (
                <>
                  {tarefa}
                  <button onClick={() => {
                    setEditando(index);
                    setTextoEdicao(tarefa);
                  }}>
                    Editar
                  </button>
                </>
              )}

              <button onClick={() => apagarTarefa(index)}>Apagar</button>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}
