// Obtendo os parâmetros das rotas pelo lado do servidor

export default async function params2({searchParams}){
    const params = await searchParams;
    
    return (
        <div>
            <h1>Parâmetros (server side)</h1>
            <h2>Nome: {params.nome}</h2>
            <h2>Idade: {params.idade}</h2>
        </div>
    )
}