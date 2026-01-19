import Link from 'next/link'

export default function rotas(){
    return (
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href={'rotas/params1?nome=Bruna&idade=27'}>
                    <li>Params 1</li>
                </Link>
                <Link href={'rotas/234'}>
                    <li>Página dinâmica</li>
                </Link>
            </ul>
        </div>
    )
}