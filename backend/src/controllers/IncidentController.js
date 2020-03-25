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
    }
}