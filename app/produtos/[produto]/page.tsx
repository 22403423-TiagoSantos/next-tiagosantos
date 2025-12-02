'use client'

import useSWR from 'swr'
import { Produto } from '@/models/interface'

interface ProdutoProps {
  params: { id: string }
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function ProdutoPage({ params }: ProdutoProps) {
  const { id } = params
  const { data, error } = useSWR<Produto>(
    `https://deisishop.pythonanywhere.com/products/${id}/`,
    fetcher
  )

  if (error) return <p>Erro ao carregar produto</p>
  if (!data) return <p>Carregando...</p>


  function removerProduto() {
    alert(`Produto "${data!.title}" removido (simulado)`)
  }

  return (
    <section className="p-4 border rounded flex flex-col items-center gap-4">
      <img src={data.image} alt={data.title} className="w-48 h-48 object-cover"/>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Categoria: {data.category}</p>
      <p>Preço: {data.price} $</p>
      <p>Rating: ⭐ {data.rating.rate} ({data.rating.count} avaliações)</p>
      <button onClick={removerProduto} className="bg-red-500 text-white px-4 py-2 rounded">
        Remover Produto
      </button>
    </section>
  )
}
