
exports.up = function(knex) { // Dentro dessa função montamos a estrutura da tabela.
    return knex.schema.createTable('ongs', (table) => {
        table.string('id').primary();           //Campo do tipo string que é chave primária
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();     //Campo do tipo de string de tamanho máximo 2 caracteres
    });
};

exports.down = function(knex) { // Se der algum problema e for preciso deletar a tabela, esse método é chamado.
    return knex.schema.dropTable('ongs');
};
