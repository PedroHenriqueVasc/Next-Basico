// Obtendo os parâmetros das rotas pelo lado do cliente
'use client';

import Link from 'next/link'

import { useSearchParams } from "next/navigation";

export default function params1(){
    const searchParams = useSearchParams(); // Utilizamos useSearchParams() para obter parâmetros no lado do servidor

    const nome = searchParams.get('nome');
    const idade = searchParams.get('idade');


    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1>Rotas Index (client side)</h1>
            <span>Nome: {nome}</span>
            <span>Idade: {idade}</span>
            <Link href={'/rotas'}>
                <button>Voltar</button>
            </Link>
        </div>
    )
}