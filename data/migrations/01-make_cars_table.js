exports.up = async function (knex) {
  await knex.schema.createTable('cars', table =>{
    
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('')
};
