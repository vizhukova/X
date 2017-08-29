
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('district').del(),

    // Inserts seed entries
    knex('district').insert({country_id: 1, name: 'Автономная Республика Крым'}),
    knex('district').insert({country_id: 1, name: 'Винницкая'}),
    knex('district').insert({country_id: 1, name: 'Черновицкая'}),
    knex('district').insert({country_id: 1, name: 'Волынская'}),
    knex('district').insert({country_id: 1, name: 'Днепропетровская'}),
    knex('district').insert({country_id: 1, name: 'Донецкая'}),
    knex('district').insert({country_id: 1, name: 'Житомирская'}),
    knex('district').insert({country_id: 1, name: 'Закарпатская'}),
    knex('district').insert({country_id: 1, name: 'Запорожская'}),
    knex('district').insert({country_id: 1, name: 'Ивано-Франковская'}),
    knex('district').insert({country_id: 1, name: 'Киевская'}),
    knex('district').insert({country_id: 1, name: 'Кировоградская'}),
    knex('district').insert({country_id: 1, name: 'Луганская'}),
    knex('district').insert({country_id: 1, name: 'Львовская'}),
    knex('district').insert({country_id: 1, name: 'Николаевская'}),
    knex('district').insert({country_id: 1, name: 'Одесская'}),
    knex('district').insert({country_id: 1, name: 'Полтавская'}),
    knex('district').insert({country_id: 1, name: 'Ровенская'}),
    knex('district').insert({country_id: 1, name: 'Сумская'}),
    knex('district').insert({country_id: 1, name: 'Тернопольская'}),
    knex('district').insert({country_id: 1, name: 'Харьковская'}),
    knex('district').insert({country_id: 1, name: 'Херсонская'}),
    knex('district').insert({country_id: 1, name: 'Хмельницкая'}),
    knex('district').insert({country_id: 1, name: 'Черкасская'}),
    knex('district').insert({country_id: 1, name: 'Черниговская'})
  );
};
