export async function GET(req, { params }){
    const {id} = await params;
    return Response.json({
        id,
        enunciado: 'Qual a sua cor favorita?',
        respostas: [
            'Branca',
            'Vermelha',
            'Amarela',
            'Verde'
        ]
    })
    // if(req.method === "GET"){
    // } else {
    //     res.status(405).send();
    // }
}