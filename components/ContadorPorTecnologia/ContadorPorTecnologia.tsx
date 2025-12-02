'use client'
import { useEffect, useState } from "react"

interface PreferidaProps {
   tecnologia: string;
}

export default function ContadorPorTecnologia({ tecnologia }: PreferidaProps) {
    const [likes, setLikes] = useState(0)
    const [mounted, setMounted] = useState(false) 

   
    useEffect(() => {
        const storedLikes = localStorage.getItem(tecnologia) || '0'
        setLikes(parseInt(storedLikes))
        setMounted(true)
    }, [tecnologia])

   
    useEffect(() => {
        if (!mounted) return
        localStorage.setItem(tecnologia, `${likes}`)
        document.title = `${tecnologia} ${likes} ❤️`
    }, [likes, tecnologia, mounted])

    return (
        <button
            className="cursor-pointer"
            onClick={() => setLikes(likes + 1)}
        >
            ❤️ {likes}
        </button>
    )
}
