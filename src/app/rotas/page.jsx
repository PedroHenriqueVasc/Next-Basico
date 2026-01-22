'use client'

import Link from 'next/link'

import {useRouter} from 'next/navigation'

export default function rotas(){
    const router = useRouter()

    function navegacaoSimples(url){
        router.push(url);
    }

    function navegacaoComParametro(){
        router.push(`
        /rotas/params1?${new URLSearchParams({
            nome: 'Eduardo',
            idade: 21
        })}
            `)
    }

    return (
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href={'rotas/params1?nome=Pedro&idade=28'}>
                    <li>Params 1</li>
                </Link>
                <Link href={'rotas/234'}>
                    <li>Página dinâmica</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={() => router.push('rotas/params1?nome=Pedro&idade=28')}>
                    Pedro
                </button>
                <button onClick={navegacaoComParametro}>
                    Parametros
                </button>
                <button onClick={() => navegacaoSimples('rotas/params1?nome=Daniel&idade=24')}>
                    Daniel
                </button>
            </div>
        </div>
    )
}