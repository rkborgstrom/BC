exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('all_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('all_data').insert([{
        full_name: 'Ryan Borgstrom',
        mountain: 'Breckenridge',
        message: 'Leaving at 7am and can fit 2 others',
        passengers: 2,
        time_leaving: 'around 7am-7:30am',
        date: '11/09/2018',
        time: '5:20',
        phone_number: '815-341-6665',
        insta: '_r_y_a_n_b_',
        today: '11/14/2018'
      },
      {
        full_name: 'Rick Steves',
        mountain: 'Keystone',
        message: 'Leaving at 9am tomorrow and can fit 1 other',
        passengers: 1,
        time_leaving: 'around 9am',
        date: '11/09/2018',
        time: '6:45',
        phone_number: '815-784-3443',
        insta: 'ricksteveseurope',
        today:'11/16/2018'
      }
    ]);
    });
};
