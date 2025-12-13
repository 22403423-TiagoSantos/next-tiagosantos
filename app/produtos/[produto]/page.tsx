'use client'

import useSWR from 'swr'
import { Produto } from '@/models/interface'
import ProdutoDetalhe from '@/components/ProdutoDetalhe/ProdutoDetalhe'

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

  return <ProdutoDetalhe produto={data} />
}
