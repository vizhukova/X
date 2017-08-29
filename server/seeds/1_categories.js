
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    knex('categories').insert({name: 'ОБУСТРОЙСТВО ДОМА'}),
    knex('categories').insert({name: 'РУЧНЫЕ ИНСТРУМЕНТЫ'}),
    knex('categories').insert({name: 'МЕХАНИЧЕСКИЕ ИНСТРУМЕНТЫ'}),
    knex('categories').insert({name: 'ЛАМПЫ И ОСВЕЩЕНИЕ'}),
    knex('categories').insert({name: 'АКСЕССУАРЫ К ЭЛЕКТРОПРИБОРАМ'}),
    knex('categories').insert({name: 'СВЕТОДИОДНОЕ ОСВИЩЕНИЕ'}),
    knex('categories').insert({name: 'ЛАМПОЧКИ'}),
    knex('categories').insert({name: 'ПЕРЕНОСНОЕ ОСВЕЩЕНИЕ'}),
    knex('categories').insert({name: 'ВНУТРЕННЕЕ ОСВЕЩЕНИЕ'}),
    knex('categories').insert({name: 'НОЧНЫЕ СВЕТИЛЬНИКИ'}),
    knex('categories').insert({name: 'КОММЕРЧЕСКОЕ ОСВЕЩЕНИЕ'}),
    knex('categories').insert({name: 'ЛАМПЫ И АБАЖУРЫ'}),
    knex('categories').insert({name: 'НАРУЖНОЕ ОСВЕЩЕНИЕ'}),
    knex('categories').insert({name: 'ЭЛЕКТРООБОРУДОВАНИЕ'}),
    knex('categories').insert({name: 'СТРОИТЕЛЬНЫЕ ИНСТРУМЕНТЫ'}),

    knex('categories').insert({name: 'Ножи'}),
    knex('categories').insert({name: 'Щипцы'}),
    knex('categories').insert({name: 'Отвертки'}),
    knex('categories').insert({name: 'Гаечные ключи'}),
    knex('categories').insert({name: 'Пробки и штампы'}),
    knex('categories').insert({name: 'Замки и инструменты'}),
    knex('categories').insert({name: 'Кисточки'}),
    knex('categories').insert({name: 'Ножницы'}),
    knex('categories').insert({name: 'Топоры'}),
    knex('categories').insert({name: 'Напильники'}),
    knex('categories').insert({name: 'Рыхлители'}),
    knex('categories').insert({name: 'Пилы'}),
    knex('categories').insert({name: 'Молотки'}),

    knex('categories').insert({name: 'Бурильные долото'}),
    knex('categories').insert({name: 'Электрические сверла'}),
    knex('categories').insert({name: 'Пистолеты-распылители'}),
    knex('categories').insert({name: 'Режущие диски'}),
    knex('categories').insert({name: 'Шуруповерты'}),
    knex('categories').insert({name: 'Пневматические инструменты'}),
    knex('categories').insert({name: 'Пистолеты для склеивания'}),
    knex('categories').insert({name: 'Термовоздуходувы'}),
    knex('categories').insert({name: 'Шлифовальные станки'}),
    knex('categories').insert({name: 'Электропилы'}),

    knex('categories').insert({name: 'Наборы ручных инструментов'}),
    knex('categories').insert({name: 'Наборы приводных инструментов'}),
    knex('categories').insert({name: 'Наборы инструментов для покраски'}),
    knex('categories').insert({name: 'Прочие наборы инструментов'}),

    knex('categories').insert({name: 'Коннекторы'}),
    knex('categories').insert({name: 'Переключатели'}),

    knex('categories').insert({name: 'Светодиодные фонарики'}),
    knex('categories').insert({name: 'Светодиодные кабели'}),

    knex('categories').insert({name: 'Светодиодные лампы и трубки'}),
    knex('categories').insert({name: 'Неоновые лампы и лампочки'}),

    knex('categories').insert({name: 'Фонари и фонарики'}),
    knex('categories').insert({name: 'Налобные фонарики'}),

    knex('categories').insert({name: 'Подвесные светильники'}),
    knex('categories').insert({name: 'Потолочные светильники'})
  );
};
