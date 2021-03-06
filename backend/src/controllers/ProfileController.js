const connection = require('../database/connection');

module.exports = {
    // Retorna os incidents de uma determinada ONG
    async list(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select("*");
        return response.json(incidents);
    }
}    