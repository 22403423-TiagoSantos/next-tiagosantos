import tecnologias from '@/app/data/tecnologias.json';

export default function Page(){


    
return (
    <div>
      <h2>Tecnologias Exploradas</h2>

      <div>
        
        {tecnologias.map((tech, index) => (
          <div key={index}>
            
            <img 
              src={tech.image} 
              alt={tech.title} 
              width={50} 
              height={50} 
            />
            
            <h3>{tech.title}</h3>
            
            <p>{tech.description}</p>
            
            <p>Avaliação: {tech.rating} ⭐</p>
          </div>
        ))}

      </div>
    </div>
  )

}