exports.up = function (knex, Promise) {
    return knex.schema.createTable('all_data', (table) => {
        table.increments('id').primary();
        table.string('full_name');
        table.string('mountain');
        table.string('message');
        table.integer('passengers');
        table.string('time_leaving');
        table.date('date');
        table.time('time')
        table.string('phone_number');
        table.string('insta');
        table.date('today');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('all_data');
};
