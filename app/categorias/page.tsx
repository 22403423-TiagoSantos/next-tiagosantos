'use client'

import useSWR from 'swr'
import Link from 'next/link'
import { Categoria } from '@/models/interface'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function CategoriasPage() {
  const { data, error, isLoading } = useSWR<Categoria[]>(
    'https://deisishop.pythonanywhere.com/categories/',
    fetcher
  )

  if (error) return <p>Erro ao carregar categorias</p>
  if (isLoading) return <p>Carregando...</p>
  if (!data || data.length === 0) return <p>Sem categorias</p>

  return (
    <section className="p-4 flex flex-wrap gap-4">
      {data.map((cat, index) => (
        <Link
          key={index}
          href={`/categorias/${cat.name}`}
          className="border rounded p-4 w-36 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
        >
          {cat.name}
        </Link>
      ))}
    </section>
  )
}
