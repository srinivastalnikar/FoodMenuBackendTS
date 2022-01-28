"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDishes = exports.getResByName = exports.getDishByCuisine = exports.getDishByDesc = exports.getDishByCategory = exports.getDishByName = void 0;
const getAllDishes = `select * from dish`;
exports.getAllDishes = getAllDishes;
const getDishByName = (name) => {
    return `
select * from dish
where dish.name like "%${name}%"
limit 10
`;
};
exports.getDishByName = getDishByName;
const getDishByDesc = (desc) => {
    return `
select * from dish
where match(description) against("${desc}")
limit 10
`;
};
exports.getDishByDesc = getDishByDesc;
const getDishByCuisine = (cuisine) => {
    return `
select * from dish
where cuisine like "${cuisine}%"
limit 10
`;
};
exports.getDishByCuisine = getDishByCuisine;
const getDishByCategory = (category) => {
    return `
select distinct(dish.id) as uniqueIds, dish.* from categories
inner join category_dish
on category_dish.categories_id = (select categories.id where categories.name like "${category}%")
inner join dish
on category_dish.dish_id = dish.id
limit 10
`;
};
exports.getDishByCategory = getDishByCategory;
const getResByName = (name) => {
    return `
select * from restaurant
where name like "%${name}%"
limit 10;
`;
};
exports.getResByName = getResByName;
