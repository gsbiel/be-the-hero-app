
exports.up = function(knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments();   // Uma chave primária numérica vai ser criada e autoincrementada
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('value').notNullable();

    // O campo ong_id é uma chave estrangeira que estabelece ums relação.
    // Todo incident deve pertencer a uma ong
    // Então o campo ong_id deve referenciar o campo id da tabela ongs.
    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
   return knex.schema.dropTable('incidents');
};
