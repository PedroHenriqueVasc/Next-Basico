'use client';

import Link from 'next/link'

import { useParams } from 'next/navigation' // Utilizar para rotas dinâmicas


export default function buscar(){
    const params = useParams();
    console.log(params);
    
    const id = params.id // Funciona como o useRouter
    return (
        <div>
           <span>Rotas / {id} / Buscar</span>
           <Link href={'/rotas'}>
                <button>Voltar</button>
           </Link>
        </div>
    )
}