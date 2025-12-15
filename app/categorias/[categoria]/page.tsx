'use client'

import useSWR from 'swr'
import { Produto } from '@/models/interface'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function CategoriaPageClient() {
  const params = useParams()
  const categoria = params.categoria

  const { data, error } = useSWR<Produto[]>(
    'https://deisishop.pythonanywhere.com/products/',
    fetcher
  )

  if (error) return <p>Erro ao carregar produto</p>
  if (!data) return <p>Carregando...</p>

  const produtosCategoria = data.filter(p => p.category === categoria)

  if (produtosCategoria.length === 0) return <p>Sem produtos nesta categoria</p>

  return (
    <section className="p-4 flex flex-wrap gap-4">
      {produtosCategoria.map(prod => {
        const imageSrc = prod.image.startsWith('http') 
          ? prod.image 
          : `https://deisishop.pythonanywhere.com${prod.image}`

        return (
          <div key={prod.id} className="border rounded p-2 w-44 flex flex-col items-center gap-2">
            <Image 
              src={imageSrc} 
              alt={prod.title} 
              width={128} 
              height={128} 
              className="object-contain"
            />
            <h3 className="text-center">{prod.title}</h3>
            <p>{Number(prod.price).toFixed(2)} $</p>
          </div>
        )
      })}
    </section>
  )
}
