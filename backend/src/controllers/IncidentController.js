const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        // O campo id é gerado automaticamente na tabela incidents
        // Para acessar ele (já que não foi eu que defini)
        // Basta acessar o retorno do método de inserção de dado na tabela.
        // Ele retorna o id do elemento que foi criado.
        const [id] = await connection("incidents").insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({id});
    },

    async list(request, response){
        const incidents = await connection('incidents').select("*");
        return response.json(incidents);
    },

    async delete(request, response){
        const {id} = request.params;
        // Precisamos do ong_id para garantir que apenas ong que criou determinado incident seja capaz de deletá-lo.
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')  // Acessa a tabela incidents
            .where('id', id)                            // Procura o elemento de 'id' = id
            .select('ong_id')                           // Seleciona o campo ong_id do elemento
            .first();                                   // O resultado vem em um array, estou pegando o primeiro elemento.

        if(incident.ong_id !== ong_id){
            // 401: Não autorizado
            return response.status(401).json({error: "operation not allowed."});    
        }else{
            await connection('incidents').where('id', id).delete();
            // 204: Requisição atendida. Resposta sem conteúdo.
            response.status(204).send()
        }
    }
}