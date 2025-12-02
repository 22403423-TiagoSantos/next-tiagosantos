'use client'

import useSWR from 'swr'
import { Produto } from '@/models/interface'

interface CategoriaPageProps {
  params: { categoria: string }
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const { categoria } = params
  const { data, error, isLoading } = useSWR<Produto[]>(
    `https://deisishop.pythonanywhere.com/products/`,
    fetcher
  )

  if (error) return <p>Erro ao carregar produtos</p>
  if (isLoading) return <p>Carregando...</p>
  if (!data || data.length === 0) return <p>Sem produtos nesta categoria</p>

  const produtosCategoria = data.filter(p => p.category === categoria)

  if (produtosCategoria.length === 0) return <p>Sem produtos nesta categoria</p>

  return (
    <section className="p-4 flex flex-wrap gap-4">
      {produtosCategoria.map(prod => (
        <div key={prod.id} className="border rounded p-2 w-44 flex flex-col items-center gap-2">
          <img src={prod.image} alt={prod.title} className="w-32 h-32 object-cover"/>
          <h3 className="text-center">{prod.title}</h3>
          <p> {prod.price} $</p>
        </div>
      ))}
    </section>
  )
}
