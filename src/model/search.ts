const getAllDishes = `select * from dish`;

const getDishByName = (name: string) => {
    return `
select * from dish
where dish.name like "%${name}%"
limit 10
`;
};

const getDishByDesc = (desc: string) => {
    return `
select * from dish
where match(description) against("${desc}")
limit 10
`;
};

const getDishByCuisine = (cuisine: string) => {
    return `
select * from dish
where cuisine like "${cuisine}%"
limit 10
`;
};

const getDishByCategory = (category: string) => {
    return `
select distinct(dish.id) as uniqueIds, dish.* from categories
inner join category_dish
on category_dish.categories_id = (select categories.id where categories.name like "${category}%")
inner join dish
on category_dish.dish_id = dish.id
limit 10
`;
};

const getResByName = (name: string) => {
    return `
select * from restaurant
where name like "%${name}%"
limit 10;
`;
};

export {
    getDishByName,
    getDishByCategory,
    getDishByDesc,
    getDishByCuisine,
    getResByName,
    getAllDishes,
};
