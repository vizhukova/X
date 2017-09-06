exports.seed = function (knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('brands').del(),

        // Inserts seed entries
        knex('brands').insert({
            name: 'Оболонь',
            description: 'Oдин из крупнейших производителей пива, слабоалкогольных и безалкогольных напитков на Украине.',
            image: '/public/images/brands/obolon.svg'
        }),
        knex('brands').insert({
            name: 'Acer',
            description: 'Тайваньская компания по производству компьютерной техники и электроники. Компания занимает 487 место в Fortune Global 500 (2011 год).',
            image: '/public/images/brands/acer.png'
        }),
        knex('brands').insert({
            name: 'Веселый молочник',
            description: 'Это бренд федерального масштаба, включающий в себя продукты традиционных категорий: молоко пастеризованное, молоко ультрапастеризованное, кефир, творог, сметана, снежок, ряженка. Его продукция выпускается на 15 заводах компании ОАО «Вимм-Билль-Данн» и продвигается по всей территории России и СНГ.',
            image: '/public/images/brands/happy_milkmen.jpg'
        }),
        knex('brands').insert({
            name: 'Kronenburg',
            description: 'Французская торговая марка пива, один из ведущих брендов международной пивоваренной компании Carlsberg Group. Kronenbourg 1664 — самое популярное пиво во Франции, на которое приходится около трети внутреннего потребления пива в стране.',
            image: '/public/images/brands/kronenburg.png'
        })
    );
};
