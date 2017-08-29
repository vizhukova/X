
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('category_category').del(),

    // Inserts seed entries
    knex('category_category').insert({parent_id: 2, children_id: 16}),
    knex('category_category').insert({parent_id: 2, children_id: 17}),
    knex('category_category').insert({parent_id: 2, children_id: 18}),
    knex('category_category').insert({parent_id: 2, children_id: 19}),
    knex('category_category').insert({parent_id: 2, children_id: 20}),
    knex('category_category').insert({parent_id: 2, children_id: 21}),
    knex('category_category').insert({parent_id: 2, children_id: 22}),
    knex('category_category').insert({parent_id: 2, children_id: 23}),
    knex('category_category').insert({parent_id: 2, children_id: 24}),
    knex('category_category').insert({parent_id: 2, children_id: 25}),
    knex('category_category').insert({parent_id: 2, children_id: 26}),
    knex('category_category').insert({parent_id: 2, children_id: 27}),
    knex('category_category').insert({parent_id: 2, children_id: 28}),

    knex('category_category').insert({parent_id: 3, children_id: 29}),
    knex('category_category').insert({parent_id: 3, children_id: 30}),
    knex('category_category').insert({parent_id: 3, children_id: 31}),
    knex('category_category').insert({parent_id: 3, children_id: 32}),
    knex('category_category').insert({parent_id: 3, children_id: 33}),
    knex('category_category').insert({parent_id: 3, children_id: 34}),
    knex('category_category').insert({parent_id: 3, children_id: 35}),
    knex('category_category').insert({parent_id: 3, children_id: 36}),
    knex('category_category').insert({parent_id: 3, children_id: 37}),
    knex('category_category').insert({parent_id: 3, children_id: 38}),

    knex('category_category').insert({parent_id: 2, children_id: 39}),
    knex('category_category').insert({parent_id: 2, children_id: 40}),
    knex('category_category').insert({parent_id: 2, children_id: 41}),
    knex('category_category').insert({parent_id: 2, children_id: 42}),

    knex('category_category').insert({parent_id: 5, children_id: 43}),
    knex('category_category').insert({parent_id: 5, children_id: 44}),

    knex('category_category').insert({parent_id: 8, children_id: 45}),
    knex('category_category').insert({parent_id: 8, children_id: 46}),

    knex('category_category').insert({parent_id: 6, children_id: 47}),
    knex('category_category').insert({parent_id: 6, children_id: 48}),

    knex('category_category').insert({parent_id: 13, children_id: 49}),
    knex('category_category').insert({parent_id: 13, children_id: 50}),

    knex('category_category').insert({parent_id: 9, children_id: 51}),
    knex('category_category').insert({parent_id: 9, children_id: 52})
  );
};
