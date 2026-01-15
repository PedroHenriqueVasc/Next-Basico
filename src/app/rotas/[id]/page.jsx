'use client';

import { useParams } from 'next/navigation' // Utilizar para rotas dinâmicas


export default function buscar(){
    const params = useParams();
    console.log(params);
    
    const id = params.id // Funciona como o useRouter
    return (
        <div>
           <span>Rotas / {id} / Buscar</span>
        </div>
    )
}