'use client'

import { useState, useEffect } from 'react'
import { Produto } from '@/models/interface'

interface InputProdutosProps {
  produtos: Produto[]
}

export default function InputProdutos({ produtos }: InputProdutosProps) {

  //
  // A. Gestão de Estados
  const [pesquisa, setPesquisa] = useState("")
  const [ordenacao, setOrdenacao] = useState("nome-asc")
  const [dataProdutos, setDataProdutos] = useState<Produto[]>(produtos)

  useEffect(() => {
    const texto = pesquisa.toLowerCase()

   let resultados = produtos.filter(p =>
      p.title.toLowerCase().includes(texto)
    )

    resultados = resultados.sort((a, b) => {
      switch (ordenacao) {
        case "nome-asc":
          return a.title.localeCompare(b.title)
        case "nome-desc":
          return b.title.localeCompare(a.title)
        case "preco-asc":
          return a.price - b.price
        case "preco-desc":
          return b.price - a.price
        default:
          return 0
      }
    })

    setDataProdutos(resultados)
  }, [pesquisa,ordenacao,produtos])


  
  // B. Renderização de componentes
  return (
    <section className="bg-blue-300 p-4 mt-6 rounded-xl">
      <h2 className="font-bold text-xl mb-2">Pesquisar Produtos</h2>

      <input
        type="text"
        placeholder="Pesquise por nome..."
        className="bg-white p-2 rounded border w-full mb-4"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      <select
        value={ordenacao}
        onChange={(e) => setOrdenacao(e.target.value)}
        className="bg-white p-2 rounded border w-full mb-4"
      >
        <option value="nome-asc">Nome (A → Z)</option>
        <option value="nome-desc">Nome (Z → A)</option>
        <option value="preco-asc">Preço (menor → maior)</option>
        <option value="preco-desc">Preço (maior → menor)</option>
      </select>

      <h3 className="font-semibold mb-2">Resultados:</h3>

      {dataProdutos.length === 0 && <p>❌ Nenhum produto encontrado</p>}

      <ul>
        {dataProdutos.map((p) => (
          <li key={p.id}>🔍 {p.title} — {p.price} €</li>
        ))}
      </ul>
    </section>
  )
}
