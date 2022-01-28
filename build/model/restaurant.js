"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdNameMap = exports.removeResFromFav = exports.addResToFav = exports.getResDetails = exports.getAllDishes = exports.getDishByCuisine = exports.getDishByDesc = exports.getDishByCategory = exports.getDishByName = void 0;
const getAllDishes = (resId) => {
    const query = `
select dish.* from dish
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
`;
    return query;
};
exports.getAllDishes = getAllDishes;
const getDishByName = (resId, name) => {
    const query = `
    select dish.* from dish
    inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
    where dish.name like "%${name}%"
    limit 10
    `;
    return query;
};
exports.getDishByName = getDishByName;
const getDishByDesc = (resId, desc) => {
    const query = `
select dish.* from dish
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
where match(dish.description) against("${desc}")
limit 10
`;
    return query;
};
exports.getDishByDesc = getDishByDesc;
const getDishByCuisine = (resId, cuisine) => {
    const query = `
select dish.* from dish
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
where cuisine like "${cuisine}%"
limit 10
`;
    return query;
};
exports.getDishByCuisine = getDishByCuisine;
const getDishByCategory = (resId, category) => {
    const query = `
select distinct(dish.id) as uniqueIds, dish.* from categories
inner join category_dish
on category_dish.categories_id = (select id where categories.name like "${category}%")
inner join dish
on category_dish.dish_id = dish.id
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
limit 10
`;
    return query;
};
exports.getDishByCategory = getDishByCategory;
const addResToFav = (userId, resId) => {
    return `
        insert into fav (restaurant_id, user_id) values (${resId}, ${userId});
        `;
};
exports.addResToFav = addResToFav;
const removeResFromFav = (userId, resId) => {
    return `
        delete from fav
        where restaurant_id = ${resId} and user_id = ${userId}
        `;
};
exports.removeResFromFav = removeResFromFav;
const getResDetails = (resId) => {
    const query = `
    select restaurant.* from restaurant
    where id = ${resId}
    `;
    return query;
};
exports.getResDetails = getResDetails;
const getIdNameMap = (resId) => {
    return `
        select name from restaurant
        where id = ${resId}
        `;
};
exports.getIdNameMap = getIdNameMap;
